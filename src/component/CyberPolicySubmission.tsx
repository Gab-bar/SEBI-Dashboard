import React, { useState } from 'react';
import { Upload, Calendar, CheckCircle, Clock, XCircle, MoreVertical } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface Submission {
  id: string;
  title: string;
  code: string;
  fileSize: string;
  pages: string;
  reportPeriod: string;
  submissionDate: string | null;
  submittedBy: string | null;
  sebiReference: string;
  status: 'Submitted' | 'Pending' | 'Draft';
  acknowledgment: 'Received' | 'Under Review' | 'N/A' | 'Approved';
}

const SEBISubmissionTracker: React.FC = () => {
  const submissions: Submission[] = [
    {
      id: '1',
      title: 'Annual Cybersecurity Report',
      code: 'SEBI-SUB-001',
      fileSize: '4.2 MB',
      pages: '85 pages',
      reportPeriod: 'FY 2023-24',
      submissionDate: '2024-10-15',
      submittedBy: 'Compliance Officer',
      sebiReference: 'SEBI/HO/MIRSD/CRD/2024/001',
      status: 'Submitted',
      acknowledgment: 'Received'
    },
    {
      id: '2',
      title: 'Quarterly Compliance Update',
      code: 'SEBI-SUB-002',
      fileSize: '1.8 MB',
      pages: '32 pages',
      reportPeriod: 'Q3 2024',
      submissionDate: '2024-11-01',
      submittedBy: 'CISO',
      sebiReference: 'SEBI/HO/MIRSD/CRD/2024/Q3/002',
      status: 'Submitted',
      acknowledgment: 'Under Review'
    },
    {
      id: '3',
      title: 'Incident Notification',
      code: 'SEBI-SUB-003',
      fileSize: '',
      pages: '',
      reportPeriod: 'November 2024',
      submissionDate: null,
      submittedBy: null,
      sebiReference: 'Pending',
      status: 'Pending',
      acknowledgment: 'N/A'
    }
  ];
  const getAcknowledgmentIcon = (acknowledgment: string) => {
    switch (acknowledgment) {
      case 'Received':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'Under Review':
        return <Clock className="w-4 h-4 text-primary" />;
      case 'Approved':
        return <CheckCircle className="w-4 h-4 text-success" />;
      case 'N/A':
        return <XCircle className="w-4 h-4 text-txt-muted" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl md:section-header-title">
            SEBI Annual Cyber Policy Submission
          </h1>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors">
            <Upload className="w-4 h-4" />
            New Submission
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-primary/[0.06]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Submission
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Report Period
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Submission Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  SEBI Reference
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Acknowledgment
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {submissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-surface-bg transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-txt-primary">
                        {submission.title}
                      </span>
                      <span className="text-xs text-txt-muted mt-0.5">
                        {submission.code}
                      </span>
                      {submission.fileSize && (
                        <span className="text-xs text-txt-muted mt-0.5">
                          {submission.fileSize} • {submission.pages}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-txt-primary">{submission.reportPeriod}</span>
                  </td>
                  <td className="px-4 py-4">
                    {submission.submissionDate ? (
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-txt-muted mt-0.5 flex-shrink-0" />
                        <div className="flex flex-col">
                          <span className="text-sm text-txt-primary">{submission.submissionDate}</span>
                          <span className="text-xs text-txt-muted">By: {submission.submittedBy}</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-txt-muted">Not submitted</span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm font-mono text-txt-primary">{submission.sebiReference}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusClass(submission.status)}`}>
                      {submission.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      {getAcknowledgmentIcon(submission.acknowledgment)}
                      <span className="text-sm text-txt-primary">{submission.acknowledgment}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <MoreVertical className="w-5 h-5 text-txt-muted" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="lg:hidden space-y-4">
          {submissions.map((submission) => (
            <div
              key={submission.id}
              className="bg-white border border-primary/[0.06] rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-txt-primary mb-1">
                    {submission.title}
                  </h3>
                  <p className="text-xs text-txt-muted">{submission.code}</p>
                  {submission.fileSize && (
                    <p className="text-xs text-txt-muted mt-1">
                      {submission.fileSize} • {submission.pages}
                    </p>
                  )}
                </div>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors ml-2">
                  <MoreVertical className="w-5 h-5 text-txt-muted" />
                </button>
              </div>

              {/* Status Badge */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getStatusClass(submission.status)}`}>
                  {submission.status}
                </span>
              </div>

              {/* Report Period */}
              <div className="mb-3">
                <span className="text-xs text-txt-muted">Report Period: </span>
                <span className="text-sm text-txt-primary">{submission.reportPeriod}</span>
              </div>

              {/* Submission Date */}
              <div className="mb-3">
                <span className="text-xs text-txt-muted block mb-1">Submission Date:</span>
                {submission.submissionDate ? (
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-txt-muted mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm text-txt-primary">{submission.submissionDate}</span>
                      <span className="text-xs text-txt-muted">By: {submission.submittedBy}</span>
                    </div>
                  </div>
                ) : (
                  <span className="text-sm text-txt-muted">Not submitted</span>
                )}
              </div>

              {/* SEBI Reference */}
              <div className="mb-3">
                <span className="text-xs text-txt-muted block mb-1">SEBI Reference:</span>
                <span className="text-sm font-mono text-txt-primary">{submission.sebiReference}</span>
              </div>

              {/* Acknowledgment */}
              <div className="pt-3 border-t border-primary/[0.06]">
                <span className="text-xs text-txt-muted block mb-1">Acknowledgment:</span>
                <div className="flex items-center gap-2">
                  {getAcknowledgmentIcon(submission.acknowledgment)}
                  <span className="text-sm text-txt-primary">{submission.acknowledgment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {submissions.length === 0 && (
          <div className="text-center py-12 bg-surface-bg rounded-lg">
            <p className="text-txt-muted mb-4">No submissions found.</p>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors">
              <Upload className="w-4 h-4" />
              Create First Submission
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { SEBISubmissionTracker };