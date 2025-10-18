import React from 'react';
import { MoreHorizontal, AlertTriangle, Mail } from 'lucide-react';

interface ThreatReport {
  id: string;
  title: string;
  status: 'Submitted' | 'Validated' | 'In Review';
  severity: 'High' | 'Medium' | 'Critical';
  incidentId: string;
  certInRef: string;
  threatDetails: {
    type: string;
    category: string;
  };
  attackVectors: string[];
  submission: {
    date: string;
    time: string;
    method: string;
  };
  collaboration: {
    ioc: string;
    sharing: string;
  };
  industries: string[];
  targets: string[];
  email: string;
  mitigationMeasures: string[];
  followUpActions: string[];
}

const CERTInThreatIntelligence = () => {
  const reports: ThreatReport[] = [
    {
      id: 'report-001',
      title: 'Cybersecurity Incident Report',
      status: 'Submitted',
      severity: 'High',
      incidentId: 'INC-2024-002',
      certInRef: 'CERT-IN-32-0707-2025/ENCR1735',
      threatDetails: {
        type: 'Advanced Persistent Threat',
        category: 'Malware Attack'
      },
      attackVectors: ['Email Phishing', 'Credential Harvesting'],
      submission: {
        date: '2024-12-01',
        time: '14:25',
        method: 'Online Form/Portal'
      },
      collaboration: {
        ioc: 'Shared: Yes',
        sharing: 'Real-Time: Yes'
      },
      industries: ['Financial Services Sector'],
      targets: ['192.168.100.50', 'Corrupted web control panel'],
      email: 'security-alert@org-ceecos.com',
      mitigationMeasures: [
        'Network isolation of affected systems',
        'Antivirus upgrade on systems',
        'Email filtering rule enforcement',
        'User awareness training'
      ],
      followUpActions: [
        'Provide detailed forensic report',
        'Update patch management protocol',
        'Hard-code in threat briefing session'
      ]
    },
    {
      id: 'report-002',
      title: 'Phishing Campaign Report',
      status: 'Validated',
      severity: 'Medium',
      incidentId: 'INC-2024-1175',
      certInRef: 'CERT-IN-32-0710-2024/PHISNG1738',
      threatDetails: {
        type: 'Social Engineering',
        category: 'Phishing'
      },
      attackVectors: ['Email Phishing', 'Credential Harvesting'],
      submission: {
        date: '2024-12-15',
        time: '09:30',
        method: 'Email/API'
      },
      collaboration: {
        ioc: 'Shared: Yes',
        sharing: 'Real-Time: Yes'
      },
      industries: ['Email tracking OSINT'],
      targets: ['https://fake-banking.site.net/login'],
      email: 'soc@allbank-reports.org',
      mitigationMeasures: [
        'Email domain blocking',
        'URL filtering update',
        'User education campaigns',
        'Enhanced email security rules'
      ],
      followUpActions: [
        'Monitor IOC campaign evolution'
      ]
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">CERT-In Integration & Threat Intelligence</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium text-sm">
            <AlertTriangle className="w-4 h-4" />
            Submit to CERT-In
          </button>
        </div>

        {/* Report Cards */}
        <div className="space-y-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg border border-gray-200">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-base font-semibold text-gray-900">{report.title}</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                      {report.status}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Incident: {report.incidentId} | CERT-IN: {report.certInRef}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Threat Details */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Threat Details</h3>
                      <div className="space-y-1 text-sm">
                        <div className="text-gray-700">Type: {report.threatDetails.type}</div>
                        <div className="text-gray-700">Category: {report.threatDetails.category}</div>
                      </div>
                    </div>

                    {/* Attack Vectors */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Attack Vectors</h3>
                      <div className="flex flex-wrap gap-2">
                        {report.attackVectors.map((vector, idx) => (
                          <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs bg-white text-gray-700 border border-gray-300">
                            {vector}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Industries of Compromise */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Industries of Compromise</h3>
                      <ul className="space-y-1">
                        {report.industries.map((industry, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                            <span>{industry}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Targets */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Targets</h3>
                      <ul className="space-y-1">
                        {report.targets.map((target, idx) => (
                          <li key={idx} className="text-sm text-gray-700">{target}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Email */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Email</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{report.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="space-y-4">
                    {/* Submission */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Submission</h3>
                      <div className="space-y-1 text-sm">
                        <div className="text-gray-700">Date: {report.submission.date}</div>
                        <div className="text-gray-700">Time: {report.submission.time}</div>
                        <div className="text-gray-700">Method: {report.submission.method}</div>
                      </div>
                    </div>

                    {/* Mitigation Measures */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Mitigation Measures</h3>
                      <ul className="space-y-1.5">
                        {report.mitigationMeasures.map((measure, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                            <span>{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Collaboration */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Collaboration</h3>
                      <div className="space-y-1 text-sm">
                        <div className="text-gray-700">IOC: {report.collaboration.ioc}</div>
                        <div className="text-gray-700">Sharing: {report.collaboration.sharing}</div>
                      </div>
                    </div>

                    {/* Follow-up Actions */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Follow-up Actions</h3>
                      <ul className="space-y-1.5">
                        {report.followUpActions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CERTInThreatIntelligence };