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
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">SEBI Incident Reporting</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover font-medium text-sm">
            <FileText className="w-4 h-4" />
            Create Report
          </button>
        </div>

        {/* Report Cards */}
        <div className="space-y-6">
          {reports.map((report) => (
            <div key={report.id} className="glass-panel">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-primary/[0.06] bg-surface-bg">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-base font-semibold text-txt-primary">{report.title}</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
                      {report.status}
                    </span>
                  </div>
                  <button className="text-txt-muted hover:text-txt-secondary">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-txt-secondary">
                  Incident: {report.incidentId}
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                <div className="grid grid-cols-2 gap-8 mb-5">
                  {/* Left Column */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-txt-secondary">Submitted:</span>
                      <span className="text-txt-primary">{report.submittedDate}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-txt-secondary">Due:</span>
                      <span className="text-txt-primary">{report.dueDate}</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-txt-secondary">Officer:</span>
                      <span className="text-txt-primary">{report.officer}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-txt-secondary">Compliance:</span>
                      <span className="text-txt-primary">{report.compliance}</span>
                    </div>
                  </div>
                </div>

                {/* Report Sections */}
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-txt-primary mb-3">Report Sections</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {report.reportSections.map((section, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-txt-primary">{section.name}</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
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
                      <span className="text-sm font-semibold text-txt-primary">Acknowledgement:</span>
                      <span className="text-sm text-txt-primary">{report.acknowledgement.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-txt-secondary">Date:</span>
                      <span className="text-sm text-txt-primary">{report.acknowledgement.date}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-txt-primary">Follow-up:</span>
                      <span className="text-sm text-txt-primary">{report.followUp.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-txt-secondary">Next Update:</span>
                      <span className="text-sm text-txt-primary">{report.followUp.nextUpdate}</span>
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <h3 className="text-sm font-semibold text-txt-primary mb-3">Attachments:</h3>
                  <div className="flex flex-wrap gap-2">
                    {report.attachments.map((attachment, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-txt-primary border border-primary/[0.08] text-xs hover:bg-surface-bg cursor-pointer">
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