import React from 'react';
import { Upload, MoreHorizontal } from 'lucide-react';

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

  const getSeverityColor = (severity: 'critical' | 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'critical':
        return 'text-red-600';
      case 'high':
        return 'text-orange-500';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-blue-500';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Assessment Reports</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium text-sm">
            <Upload className="w-4 h-4" />
            Upload Report
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Report</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Assessment</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Findings</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Upload Date</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{report.fileName}</div>
                      <div className="text-xs text-gray-500">{report.fileSize} | {report.version}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-sm text-gray-900">{report.assessment}</div>
                      <div className="text-xs text-gray-500">{report.assessmentId}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-900">{report.type}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      report.status === 'Approved' 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3 text-xs">
                      {report.findingsCritical > 0 && (
                        <div className="flex flex-col items-center">
                          <span className={`font-semibold ${getSeverityColor('critical')}`}>
                            C: {report.findingsCritical}
                          </span>
                        </div>
                      )}
                      {report.findingsHigh > 0 && (
                        <div className="flex flex-col items-center">
                          <span className={`font-semibold ${getSeverityColor('high')}`}>
                            H: {report.findingsHigh}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-col items-center">
                        <span className={`font-semibold ${getSeverityColor('medium')}`}>
                          M: {report.findingsMedium}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className={`font-semibold ${getSeverityColor('low')}`}>
                          L: {report.findingsLow}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-900">{report.uploadDate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600">
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
  );
};

export {AssessmentReports};