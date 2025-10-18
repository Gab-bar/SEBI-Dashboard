import React, { useState } from 'react';
import { Eye, Download, Plus } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  description: string;
  type: string;
  frequency: string;
  lastGenerated: string;
  nextDue: string;
  formats: string[];
  sections: string[];
  recipients: string;
  status: 'Active' | 'Draft' | 'Archived';
}

const ReportsGenerator: React.FC = () => {
  const reports: Report[] = [
    {
      id: '1',
      title: 'SEBI Annual Cybersecurity Report',
      description: 'Annual cybersecurity compliance report for SEBI submission',
      type: 'Regulatory',
      frequency: 'Annual',
      lastGenerated: '2024-10-15',
      nextDue: '2024-10-15',
      formats: ['PDF', 'Excel'],
      sections: ['Executive Summary', 'Governance', 'Controls', '+2'],
      recipients: 'SEBI, Board, CISO',
      status: 'Active'
    },
    {
      id: '2',
      title: 'Quarterly Compliance Dashboard',
      description: 'Quarterly compliance status for executive management',
      type: 'Management',
      frequency: 'Quarterly',
      lastGenerated: '2024-10-31',
      nextDue: '2024-12-31',
      formats: ['PDF', 'PowerPoint'],
      sections: ['Compliance Status', 'Gap Analysis', 'Risk Assessment', '+1'],
      recipients: 'CEO, CTO, CISO, Board',
      status: 'Active'
    },
    {
      id: '3',
      title: 'Incident Response Summary',
      description: 'Monthly summary of security incidents and response actions',
      type: 'Operational',
      frequency: 'Monthly',
      lastGenerated: '2024-11-01',
      nextDue: '2024-12-01',
      formats: ['PDF', 'Excel'],
      sections: ['Incident Overview', 'Response Timeline', 'Lessons Learned', '+1'],
      recipients: 'CISO, SOC Team, Management',
      status: 'Active'
    },
    {
      id: '4',
      title: 'Control Effectiveness Assessment',
      description: 'Assessment of security control effectiveness and recommendations',
      type: 'Technical',
      frequency: 'Semi-Annual',
      lastGenerated: '2024-06-30',
      nextDue: '2024-12-31',
      formats: ['PDF', 'Excel'],
      sections: ['Control Matrix', 'Effectiveness Scores', 'Gap Analysis', '+1'],
      recipients: 'CISO, Security Team, Audit Committee',
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Reports Generator
          </h1>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-4 h-4" />
            Create Custom Report
          </button>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-base md:text-lg font-semibold text-gray-900 flex-1 pr-2">
                  {report.title}
                </h2>
                <span className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-gray-900 text-white flex-shrink-0">
                  {report.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {report.description}
              </p>

              {/* Report Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium text-gray-900">{report.type}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Frequency:</span>
                  <span className="font-medium text-gray-900">{report.frequency}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Generated:</span>
                  <span className="font-medium text-gray-900">{report.lastGenerated}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Next Due:</span>
                  <span className="font-medium text-gray-900">{report.nextDue}</span>
                </div>

                <div className="flex items-start justify-between text-sm">
                  <span className="text-gray-600">Formats:</span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {report.formats.map((format, index) => (
                      <span
                        key={index}
                        className="inline-flex px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="mb-4">
                <span className="text-sm text-gray-600 block mb-2">Sections:</span>
                <div className="flex flex-wrap gap-1.5">
                  {report.sections.map((section, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2.5 py-1 text-xs bg-gray-50 text-gray-700 rounded-md border border-gray-200"
                    >
                      {section}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recipients */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <span className="text-sm text-gray-600 block mb-1">Recipients:</span>
                <p className="text-sm text-gray-900">{report.recipients}</p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                  Generate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {reports.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-500 mb-4">No reports available.</p>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              <Plus className="w-4 h-4" />
              Create Your First Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export {ReportsGenerator};