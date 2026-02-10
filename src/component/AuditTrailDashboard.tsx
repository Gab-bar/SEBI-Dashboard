import React, { useState } from 'react';
import { Calendar, MoreVertical } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface AuditRecord {
  id: string;
  auditTitle: string;
  auditCode: string;
  auditDescription: string;
  type: 'Internal' | 'External' | 'Regulatory';
  auditor: string;
  periodStart: string;
  periodEnd: string;
  totalFindings: number;
  critical: number;
  major: number;
  minor: number;
  rating: 'Satisfactory' | 'Good' | 'Excellent' | 'Needs Improvement' | 'Pending';
  status: 'Completed' | 'In Progress' | 'Scheduled' | 'Draft';
}

const AuditTrailDashboard: React.FC = () => {
  const audits: AuditRecord[] = [
    {
      id: '1',
      auditTitle: 'Quarterly Compliance Review Q3 2024',
      auditCode: 'AUD-001',
      auditDescription: 'SEBI Cybersecurity Controls',
      type: 'Internal',
      auditor: 'Internal Audit Team',
      periodStart: '2024-10-01',
      periodEnd: '2024-10-15',
      totalFindings: 12,
      critical: 2,
      major: 4,
      minor: 6,
      rating: 'Satisfactory',
      status: 'Completed'
    },
    {
      id: '2',
      auditTitle: 'Annual SEBI Compliance Audit',
      auditCode: 'AUD-002',
      auditDescription: 'Full SEBI Cybersecurity Framework',
      type: 'External',
      auditor: 'KPMG India',
      periodStart: '2024-09-01',
      periodEnd: '2024-09-30',
      totalFindings: 18,
      critical: 1,
      major: 6,
      minor: 11,
      rating: 'Good',
      status: 'Completed'
    },
    {
      id: '3',
      auditTitle: 'SEBI Inspection - Cybersecurity',
      auditCode: 'AUD-003',
      auditDescription: 'SEBI Circular Compliance',
      type: 'Regulatory',
      auditor: 'SEBI Inspection Team',
      periodStart: '2024-11-01',
      periodEnd: '2024-11-10',
      totalFindings: 0,
      critical: 0,
      major: 0,
      minor: 0,
      rating: 'Pending',
      status: 'In Progress'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internal':
        return 'bg-white text-txt-primary border border-primary/[0.08]';
      case 'External':
        return 'bg-white text-txt-primary border border-primary/[0.08]';
      case 'Regulatory':
        return 'bg-primary text-white';
      default:
        return 'bg-gray-200 text-txt-primary';
    }
  };

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent':
        return 'bg-green-600 text-white';
      case 'Good':
        return 'bg-green-600 text-white';
      case 'Satisfactory':
        return 'bg-green-600 text-white';
      case 'Needs Improvement':
        return 'bg-warning-soft0 text-white';
      case 'Pending':
        return 'bg-white text-txt-primary border border-primary/[0.08]';
      default:
        return 'bg-gray-200 text-txt-primary';
    }
  };
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:section-header-title">
            Audit Trail (Internal/External)
          </h1>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-primary/[0.06]">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Audit
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Auditor
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Period
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Findings
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Rating
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-txt-muted">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {audits.map((audit) => (
                <tr key={audit.id} className="hover:bg-surface-bg transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-txt-primary">
                        {audit.auditTitle}
                      </span>
                      <span className="text-xs text-txt-muted mt-0.5">
                        {audit.auditCode} • {audit.auditDescription}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(audit.type)}`}>
                      {audit.type}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-txt-primary">{audit.auditor}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-txt-muted mt-0.5 flex-shrink-0" />
                      <div className="flex flex-col text-xs">
                        <span className="text-txt-primary">{formatDate(audit.periodStart)}</span>
                        <span className="text-txt-muted">to {formatDate(audit.periodEnd)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-txt-primary">
                        Total: {audit.totalFindings}
                      </span>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-critical">Critical: {audit.critical}</span>
                        <span className="text-txt-primary">Major: {audit.major}</span>
                        <span className="text-txt-muted">Minor: {audit.minor}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getRatingColor(audit.rating)}`}>
                      {audit.rating}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusClass(audit.status)}`}>
                      {audit.status}
                    </span>
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
          {audits.map((audit) => (
            <div
              key={audit.id}
              className="bg-white border border-primary/[0.06] rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-txt-primary mb-1">
                    {audit.auditTitle}
                  </h3>
                  <p className="text-xs text-txt-muted">
                    {audit.auditCode} • {audit.auditDescription}
                  </p>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors ml-2">
                  <MoreVertical className="w-5 h-5 text-txt-muted" />
                </button>
              </div>

              {/* Type and Status */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getTypeColor(audit.type)}`}>
                  {audit.type}
                </span>
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getStatusClass(audit.status)}`}>
                  {audit.status}
                </span>
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getRatingColor(audit.rating)}`}>
                  {audit.rating}
                </span>
              </div>

              {/* Auditor */}
              <div className="mb-3">
                <span className="text-xs text-txt-muted">Auditor: </span>
                <span className="text-sm text-txt-primary">{audit.auditor}</span>
              </div>

              {/* Period */}
              <div className="flex items-start gap-2 mb-3">
                <Calendar className="w-4 h-4 text-txt-muted mt-0.5 flex-shrink-0" />
                <div className="flex flex-col text-xs">
                  <span className="text-txt-primary">{formatDate(audit.periodStart)}</span>
                  <span className="text-txt-muted">to {formatDate(audit.periodEnd)}</span>
                </div>
              </div>

              {/* Findings */}
              <div className="pt-3 border-t border-primary/[0.06]">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-txt-primary">
                    Total Findings: {audit.totalFindings}
                  </span>
                  <div className="flex flex-wrap gap-3 text-xs mt-1">
                    <span className="text-critical font-medium">
                      Critical: {audit.critical}
                    </span>
                    <span className="text-txt-primary">Major: {audit.major}</span>
                    <span className="text-txt-muted">Minor: {audit.minor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {audits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-txt-muted">No audit records found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export {AuditTrailDashboard};