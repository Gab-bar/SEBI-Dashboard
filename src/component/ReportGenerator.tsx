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
    <div className="min-h-screen bg-surface-bg p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl md:section-header-title">
            Reports Generator
          </h1>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Plus className="w-4 h-4" />
            Create Custom Report
          </button>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="glass-panel p-5 hover:shadow-lg transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-base md:text-lg font-semibold text-txt-primary flex-1 pr-2">
                  {report.title}
                </h2>
                <span className="inline-flex px-2.5 py-1 text-xs font-medium rounded-full bg-primary text-white flex-shrink-0">
                  {report.status}
                </span>
              </div>

              <p className="text-sm text-txt-secondary mb-4">
                {report.description}
              </p>

              {/* Report Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-txt-secondary">Type:</span>
                  <span className="font-medium text-txt-primary">{report.type}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-txt-secondary">Frequency:</span>
                  <span className="font-medium text-txt-primary">{report.frequency}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-txt-secondary">Last Generated:</span>
                  <span className="font-medium text-txt-primary">{report.lastGenerated}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-txt-secondary">Next Due:</span>
                  <span className="font-medium text-txt-primary">{report.nextDue}</span>
                </div>

                <div className="flex items-start justify-between text-sm">
                  <span className="text-txt-secondary">Formats:</span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {report.formats.map((format, index) => (
                      <span
                        key={index}
                        className="inline-flex px-2 py-0.5 text-xs bg-gray-100 text-txt-primary rounded"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="mb-4">
                <span className="text-sm text-txt-secondary block mb-2">Sections:</span>
                <div className="flex flex-wrap gap-1.5">
                  {report.sections.map((section, index) => (
                    <span
                      key={index}
                      className="inline-flex px-2.5 py-1 text-xs bg-surface-bg text-txt-primary rounded-md border border-primary/[0.06]"
                    >
                      {section}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recipients */}
              <div className="mb-4 pb-4 border-b border-primary/[0.06]">
                <span className="text-sm text-txt-secondary block mb-1">Recipients:</span>
                <p className="text-sm text-txt-primary">{report.recipients}</p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-txt-primary bg-white border border-primary/[0.08] rounded-lg hover:bg-surface-bg transition-colors">
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-txt-primary bg-white border border-primary/[0.08] rounded-lg hover:bg-surface-bg transition-colors">
                  <Download className="w-4 h-4" />
                  Generate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {reports.length === 0 && (
          <div className="glass-panel p-12 text-center">
            <p className="text-txt-muted mb-4">No reports available.</p>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors">
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