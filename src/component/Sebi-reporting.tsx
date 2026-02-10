'use client';

import React from 'react';
import { MoreVertical, Plus } from 'lucide-react';

interface Section {
  name: string;
  status: 'Completed' | 'In Progress' | 'Pending';
}

interface Report {
  title: string;
  status: 'In Progress' | 'Submitted' | 'Pending';
  id: string;
  dueDate: string;
  assignee: string;
  priority: 'High' | 'Medium' | 'Critical';
  progress: number;
  totalSections: number;
  completedSections: number;
  sections: Section[];
}

const SEBIReportingTracker = () => {
  const reports: Report[] = [
    {
      title: 'Quarterly Compliance Report',
      status: 'In Progress',
      id: 'SEBI-2024-Q4-001',
      dueDate: '2024-12-31',
      assignee: 'Compliance Team',
      priority: 'High',
      progress: 75,
      totalSections: 5,
      completedSections: 3,
      sections: [
        { name: 'Control Assessment', status: 'Completed' },
        { name: 'Risk Analysis', status: 'Completed' },
        { name: 'Incident Summary', status: 'In Progress' },
        { name: 'Training Records', status: 'Pending' },
        { name: 'Vendor Assessment', status: 'Completed' },
      ],
    },
    {
      title: 'Security Incident Report',
      status: 'Submitted',
      id: 'SEBI-2024-INC-005',
      dueDate: '2024-11-25',
      assignee: 'CISO',
      priority: 'Critical',
      progress: 100,
      totalSections: 4,
      completedSections: 4,
      sections: [
        { name: 'Incident Details', status: 'Completed' },
        { name: 'Impact Assessment', status: 'Completed' },
        { name: 'Response Actions', status: 'Completed' },
        { name: 'Lessons Learned', status: 'Completed' },
      ],
    },
    {
      title: 'VA/PT Assessment Report',
      status: 'Pending',
      id: 'SEBI-2024-VAPT-003',
      dueDate: '2024-12-15',
      assignee: 'Security Team',
      priority: 'Medium',
      progress: 25,
      totalSections: 4,
      completedSections: 0,
      sections: [
        { name: 'Vulnerability Assessment', status: 'In Progress' },
        { name: 'Penetration Testing', status: 'Pending' },
        { name: 'Risk Scoring', status: 'Pending' },
        { name: 'Remediation Plan', status: 'Pending' },
      ],
    },
    {
      title: 'Internal Audit Report',
      status: 'In Progress',
      id: 'SEBI-2024-AUD-007',
      dueDate: '2024-12-20',
      assignee: 'Internal Audit',
      priority: 'Medium',
      progress: 60,
      totalSections: 4,
      completedSections: 2,
      sections: [
        { name: 'Audit Findings', status: 'Completed' },
        { name: 'Control Testing', status: 'Completed' },
        { name: 'Recommendations', status: 'In Progress' },
        { name: 'Management Response', status: 'Pending' },
      ],
    },
  ];

  const getStatusBadgeStyles = (status: string) => {
    if (status === 'In Progress') {
      return 'bg-primary-soft text-primary border border-blue-200';
    }
    if (status === 'Submitted') {
      return 'bg-primary text-white';
    }
    if (status === 'Pending') {
      return 'bg-white text-txt-primary border border-primary/[0.08]';
    }
    return 'bg-gray-100 text-txt-secondary';
  };

  const getPriorityBadgeStyles = (priority: string) => {
    if (priority === 'Critical') {
      return 'bg-critical text-white';
    }
    if (priority === 'High') {
      return 'bg-warning-soft text-amber-700 border border-orange-200';
    }
    if (priority === 'Medium') {
      return 'bg-surface-bg text-txt-primary border border-primary/[0.06]';
    }
    return 'bg-gray-100 text-txt-secondary';
  };

  const getSectionBadgeStyles = (status: string) => {
    if (status === 'Completed') {
      return 'bg-primary text-white';
    }
    return 'bg-white text-txt-primary';
  };

  return (
    <div className="min-h-screen bg-surface-bg p-3 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="section-header-title">SEBI Reporting Tracker</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium">
            <Plus className="w-5 h-5" />
            New Report
          </button>
        </div>

        <div className="space-y-6">
          {reports.map((report) => (
            <div key={report.id} className="stat-card border border-primary/[0.06]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-txt-primary">{report.title}</h2>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusBadgeStyles(report.status)}`}>
                    {report.status}
                  </span>
                </div>
                <button className="text-txt-muted hover:text-txt-secondary">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="text-sm text-txt-secondary mb-4">ID: {report.id}</div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-txt-primary">Due:</span>
                  <span className="text-sm text-txt-primary">{report.dueDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-txt-primary">Assignee:</span>
                  <span className="text-sm text-txt-primary">{report.assignee}</span>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${getPriorityBadgeStyles(report.priority)}`}>
                  {report.priority}
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-txt-primary">Progress: {report.progress}%</span>
                  <span className="text-sm text-txt-secondary">{report.completedSections}/{report.totalSections} sections completed</span>
                </div>
                <div className="w-full progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="progress-fill transition-all"
                    style={{ width: `${report.progress}%` }}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-txt-primary mb-3">Sections:</h3>
                <div className="flex flex-wrap gap-2">
                  {report.sections.map((section, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-medium px-4 py-2 rounded-full ${getSectionBadgeStyles(section.status)}`}
                    >
                      {section.name}: {section.status}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEBIReportingTracker;