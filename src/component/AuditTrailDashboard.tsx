import React, { useState } from 'react';
import { Calendar, MoreVertical } from 'lucide-react';

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
        return 'bg-white text-gray-700 border border-gray-300';
      case 'External':
        return 'bg-white text-gray-700 border border-gray-300';
      case 'Regulatory':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
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
        return 'bg-yellow-500 text-white';
      case 'Pending':
        return 'bg-white text-gray-700 border border-gray-300';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gray-900 text-white';
      case 'In Progress':
        return 'bg-white text-gray-700 border border-gray-300';
      case 'Scheduled':
        return 'bg-white text-blue-700 border border-blue-300';
      case 'Draft':
        return 'bg-white text-gray-500 border border-gray-300';
      default:
        return 'bg-gray-200 text-gray-700';
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
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Audit Trail (Internal/External)
          </h1>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Audit
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Auditor
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Period
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Findings
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Rating
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {audits.map((audit) => (
                <tr key={audit.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {audit.auditTitle}
                      </span>
                      <span className="text-xs text-gray-500 mt-0.5">
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
                    <span className="text-sm text-gray-900">{audit.auditor}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex flex-col text-xs">
                        <span className="text-gray-900">{formatDate(audit.periodStart)}</span>
                        <span className="text-gray-500">to {formatDate(audit.periodEnd)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-gray-900">
                        Total: {audit.totalFindings}
                      </span>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-red-600">Critical: {audit.critical}</span>
                        <span className="text-gray-900">Major: {audit.major}</span>
                        <span className="text-gray-500">Minor: {audit.minor}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getRatingColor(audit.rating)}`}>
                      {audit.rating}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(audit.status)}`}>
                      {audit.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-500" />
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
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {audit.auditTitle}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {audit.auditCode} • {audit.auditDescription}
                  </p>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors ml-2">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Type and Status */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getTypeColor(audit.type)}`}>
                  {audit.type}
                </span>
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(audit.status)}`}>
                  {audit.status}
                </span>
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getRatingColor(audit.rating)}`}>
                  {audit.rating}
                </span>
              </div>

              {/* Auditor */}
              <div className="mb-3">
                <span className="text-xs text-gray-500">Auditor: </span>
                <span className="text-sm text-gray-900">{audit.auditor}</span>
              </div>

              {/* Period */}
              <div className="flex items-start gap-2 mb-3">
                <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col text-xs">
                  <span className="text-gray-900">{formatDate(audit.periodStart)}</span>
                  <span className="text-gray-500">to {formatDate(audit.periodEnd)}</span>
                </div>
              </div>

              {/* Findings */}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-gray-900">
                    Total Findings: {audit.totalFindings}
                  </span>
                  <div className="flex flex-wrap gap-3 text-xs mt-1">
                    <span className="text-red-600 font-medium">
                      Critical: {audit.critical}
                    </span>
                    <span className="text-gray-900">Major: {audit.major}</span>
                    <span className="text-gray-500">Minor: {audit.minor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {audits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No audit records found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export {AuditTrailDashboard};