import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface RootCauseAnalysis {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress';
  incidentId: string;
  category: string;
  severity: string;
  rootCause: string;
  contributingFactors: string[];
  lessonsLearned: string[];
  impactSummary: {
    systems: number;
    status: string;
    business: string;
    reputation: string;
    financial: string;
    regulatory: string;
  };
  methodology: string[];
  analysisDate: string;
  reviewedBy: string;
  reviewDate: string;
}

const RootCauseAnalysisMitigation = () => {
  const analyses: RootCauseAnalysis[] = [
    {
      id: 'rca-001',
      title: 'Suspicious Login Activity from Unknown Location',
      status: 'Completed',
      incidentId: 'INC-2024-002',
      category: 'Authentication',
      severity: 'Weak password',
      rootCause: 'Weak password policy enforcement and lack of application-based access controls',
      contributingFactors: [
        'Employees using weak passwords despite policy',
        'No geolocation restrictions on user accounts',
        'Delayed detection due to alert tuning issues',
        'Insufficient user awareness training'
      ],
      lessonsLearned: [
        'Need for stronger password enforcement mechanisms',
        'Geographic IP blocking should be mandatory',
        'Improve alert tuning to reduce detection time',
        'Enhance security awareness training program'
      ],
      impactSummary: {
        systems: 1,
        status: 'None confirmed',
        business: 'Minimal',
        reputation: 'None',
        financial: '10',
        regulatory: 'None'
      },
      methodology: ['Why Analysis', 'Ishikawa Diagram'],
      analysisDate: '2024-11-25',
      reviewedBy: 'CISO - Priya Sharma',
      reviewDate: '2024-11-22'
    },
    {
      id: 'rca-002',
      title: 'Phishing Email Campaign Targeting Employees',
      status: 'Completed',
      incidentId: 'INC-2024-1175',
      category: 'Security Incident',
      severity: 'None',
      rootCause: 'Sophisticated social engineering attack leveraging publicly available employee information',
      contributingFactors: [
        'Employee information readily available on social media',
        'Limited phishing simulation training in past 6 months',
        'Email filtering rules not optimized for this attack pattern',
        'Lack of real-time user warning system'
      ],
      lessonsLearned: [
        'Increase frequency of phishing simulation exercises',
        'Implement real-time URL scanning for double-click',
        'Enhance employee training on social engineering',
        'Quarterly audit required protocols for phishing campaigns'
      ],
      impactSummary: {
        systems: 5,
        status: 'None',
        business: 'Low',
        reputation: 'None',
        financial: 'TBD (800)',
        regulatory: 'None'
      },
      methodology: ['Forensic Analysis', 'Threat Intelligence Correlation'],
      analysisDate: '2024-11-17',
      reviewedBy: 'Security Manager - Vikram Singh',
      reviewDate: '2024-11-19'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Root Cause Analysis & Mitigation</h1>

        {/* Analysis Cards */}
        <div className="space-y-6">
          {analyses.map((analysis) => (
            <div key={analysis.id} className="bg-white rounded-lg border border-gray-200">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-base font-semibold text-gray-900">{analysis.title}</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                      {analysis.status}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
                  <span>INC: {analysis.incidentId}</span>
                  <span>Category: {analysis.category}</span>
                  <span>Severity: {analysis.severity}</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Root Cause */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Root Cause</h3>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-sm text-gray-700">{analysis.rootCause}</p>
                      </div>
                    </div>

                    {/* Contributing Factors */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Contributing Factors</h3>
                      <ul className="space-y-1.5">
                        {analysis.contributingFactors.map((factor, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lessons Learned */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Lessons Learned</h3>
                      <ul className="space-y-1.5">
                        {analysis.lessonsLearned.map((lesson, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Summary */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Impact Summary</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Systems:</span>
                          <span className="font-medium text-gray-900">{analysis.impactSummary.systems}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Status:</span>
                          <span className="font-medium text-gray-900">{analysis.impactSummary.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Analysis Details */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="space-y-1 text-xs text-gray-600">
                        <div>Analysis Date: {analysis.analysisDate}</div>
                        <div>Reviewed By: {analysis.reviewedBy}</div>
                        <div>Review Date: {analysis.reviewDate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Methodology */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Methodology</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="flex flex-wrap gap-2">
                          {analysis.methodology.map((method, idx) => (
                            <span key={idx} className="text-sm text-blue-900">
                              {method}
                              {idx < analysis.methodology.length - 1 ? ' • ' : ''}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Additional Impact Metrics */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Business</div>
                          <div className="text-sm font-medium text-gray-900">{analysis.impactSummary.business}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Financial</div>
                          <div className="text-sm font-medium text-gray-900">{analysis.impactSummary.financial}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Reputation</div>
                          <div className="text-sm font-medium text-gray-900">{analysis.impactSummary.reputation}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-600 mb-1">Regulatory</div>
                          <div className="text-sm font-medium text-gray-900">{analysis.impactSummary.regulatory}</div>
                        </div>
                      </div>
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

export  {RootCauseAnalysisMitigation};