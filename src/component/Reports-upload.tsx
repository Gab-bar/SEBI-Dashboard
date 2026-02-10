import React from 'react';
import { Upload, MoreHorizontal } from 'lucide-react';
import { getSeverityClass } from '@/lib/colors';

interface Report {
  fileName: string;
  fileSize: string;
  version: string;
  assessment: string;
  assessmentId: string;
  type: string;
  status: 'Approved' | 'Under Review';
  findingsCritical: number;
  findingsHigh: number;
  findingsMedium: number;
  findingsLow: number;
  uploadDate: string;
}

const AssessmentReports = () => {
  const reports: Report[] = [
    {
      fileName: 'Cloud_Security_Assessment_Report_Dec2024.pdf',
      fileSize: '8.3 MB',
      version: 'v1.0',
      assessment: 'Cloud Security Assessment',
      assessmentId: 'VAPT-004',
      type: 'Final Report',
      status: 'Approved',
      findingsCritical: 0,
      findingsHigh: 3,
      findingsMedium: 8,
      findingsLow: 5,
      uploadDate: '2024-12-02'
    },
    {
      fileName: 'External_PT_Report_Dec2024_Draft.pdf',
      fileSize: '12.3 MB',
      version: 'v0.8',
      assessment: 'External Penetration Testing',
      assessmentId: 'VAPT-001',
      type: 'Draft Report',
      status: 'Under Review',
      findingsCritical: 2,
      findingsHigh: 5,
      findingsMedium: 8,
      findingsLow: 12,
      uploadDate: '2024-12-01'
    },
    {
      fileName: 'Internal_Network_Executive_Summary_Nov2024.pdf',
      fileSize: '2.1 MB',
      version: 'v1.0',
      assessment: 'Internal Network Assessment',
      assessmentId: 'VAPT-002',
      type: 'Executive Summary',
      status: 'Approved',
      findingsCritical: 0,
      findingsHigh: 3,
      findingsMedium: 7,
      findingsLow: 19,
      uploadDate: '2024-11-30'
    },
    {
      fileName: 'WebApp_Security_Technical_Report_Oct2024.pdf',
      fileSize: '15.7 MB',
      version: 'v1.2',
      assessment: 'Web Application Security Testing',
      assessmentId: 'VAPT-003',
      type: 'Technical Report',
      status: 'Approved',
      findingsCritical: 1,
      findingsHigh: 2,
      findingsMedium: 6,
      findingsLow: 15,
      uploadDate: '2024-10-28'
    }
  ];
  return (
    <div className="min-h-screen bg-surface-bg p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Assessment Reports</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover font-medium text-sm">
            <Upload className="w-4 h-4" />
            Upload Report
          </button>
        </div>

        {/* Table */}
        <div className="glass-panel border border-primary/[0.06] overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Report</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Assessment</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Type</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Status</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Findings</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Upload Date</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {reports.map((report, index) => (
                <tr key={index} className="hover:bg-surface-bg transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-txt-primary text-sm">{report.fileName}</div>
                      <div className="text-xs text-txt-muted">{report.fileSize} | {report.version}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-sm text-txt-primary">{report.assessment}</div>
                      <div className="text-xs text-txt-muted">{report.assessmentId}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-txt-primary">{report.type}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      report.status === 'Approved' 
                        ? 'bg-primary text-white' 
                        : 'bg-primary-soft text-primary'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3 text-xs">
                      {report.findingsCritical > 0 && (
                        <div className="flex flex-col items-center">
                          <span className={`font-semibold ${getSeverityClass('critical')}`}>
                            C: {report.findingsCritical}
                          </span>
                        </div>
                      )}
                      {report.findingsHigh > 0 && (
                        <div className="flex flex-col items-center">
                          <span className={`font-semibold ${getSeverityClass('high')}`}>
                            H: {report.findingsHigh}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col items-center">
                        <span className={`font-semibold ${getSeverityClass('medium')}`}>
                          M: {report.findingsMedium}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className={`font-semibold ${getSeverityClass('low')}`}>
                          L: {report.findingsLow}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-txt-primary">{report.uploadDate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-txt-muted hover:text-txt-secondary">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export {AssessmentReports};