import React from 'react';
import { MoreHorizontal, FileText } from 'lucide-react';

interface IncidentReport {
  id: string;
  title: string;
  status: 'Submitted' | 'In Review' | 'Completed';
  incidentId: string;
  submittedDate: string;
  dueDate: string;
  officer: string;
  compliance: string;
  reportSections: Array<{
    name: string;
    status: 'Completed' | 'In Progress';
  }>;
  acknowledgement: {
    status: string;
    date: string;
  };
  followUp: {
    status: string;
    nextUpdate: string;
  };
  attachments: string[];
}

const SEBIIncidentReporting = () => {
  const reports: IncidentReport[] = [
    {
      id: 'report-001',
      title: 'Material Incident Report',
      status: 'Submitted',
      incidentId: 'INC-2024-002 | VAPT-001 | SEBI/HO/MIRSD/CRD/2024/M5-001',
      submittedDate: '2024-11-22',
      dueDate: '2024-11-24',
      officer: 'Chief Information Security Officer',
      compliance: 'Within regulatory timeframe',
      reportSections: [
        { name: 'Incident Summary', status: 'Completed' },
        { name: 'Immediate Actions Taken', status: 'Completed' },
        { name: 'Preliminary Root Cause', status: 'Completed' }
      ],
      acknowledgement: {
        status: 'Received',
        date: '2024-11-22'
      },
      followUp: {
        status: 'Required',
        nextUpdate: '2024-11-28'
      },
      attachments: [
        'Incident_Summary_Report.pdf',
        'Forensic_Analysis_Preliminary.pdf',
        'Business_Impact_Assessment.pdf'
      ]
    },
    {
      id: 'report-002',
      title: 'System Outage Report',
      status: 'In Review',
      incidentId: 'INC-2024-003 | SEBI/HO/MIRSD/CRD/2024/M3-007',
      submittedDate: '2024-12-11',
      dueDate: '2024-12-12',
      officer: 'Chief Technology Officer',
      compliance: 'Falls complaint',
      reportSections: [
        { name: 'Outage Summary', status: 'Completed' },
        { name: 'Recovery Actions', status: 'Completed' },
        { name: 'Root Cause', status: 'Completed' }
      ],
      acknowledgement: {
        status: 'Received',
        date: '2024-12-11'
      },
      followUp: {
        status: 'Required',
        nextUpdate: '2024-12-18'
      },
      attachments: [
        'Outage_Failure_Report.pdf',
        'Recovery_Timeline.pdf',
        'Financial_Impact_Analysis.pdf',
        'Resolution_Manual.pdf'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">SEBI Incident Reporting</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium text-sm">
            <FileText className="w-4 h-4" />
            Create Report
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
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Incident: {report.incidentId}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-2 gap-8 mb-5">
                  {/* Left Column */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="text-gray-900">{report.submittedDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Due:</span>
                      <span className="text-gray-900">{report.dueDate}</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Officer:</span>
                      <span className="text-gray-900">{report.officer}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Compliance:</span>
                      <span className="text-gray-900">{report.compliance}</span>
                    </div>
                  </div>
                </div>

                {/* Report Sections */}
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Report Sections</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {report.reportSections.map((section, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{section.name}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                          {section.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acknowledgement and Follow-up */}
                <div className="grid grid-cols-2 gap-8 mb-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">Acknowledgement:</span>
                      <span className="text-sm text-gray-900">{report.acknowledgement.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="text-sm text-gray-900">{report.acknowledgement.date}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">Follow-up:</span>
                      <span className="text-sm text-gray-900">{report.followUp.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Next Update:</span>
                      <span className="text-sm text-gray-900">{report.followUp.nextUpdate}</span>
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Attachments:</h3>
                  <div className="flex flex-wrap gap-2">
                    {report.attachments.map((attachment, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-gray-700 border border-gray-300 text-xs hover:bg-gray-50 cursor-pointer">
                        <FileText className="w-3.5 h-3.5" />
                        {attachment}
                      </span>
                    ))}
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

export {SEBIIncidentReporting};