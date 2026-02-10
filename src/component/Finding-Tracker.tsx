import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal } from 'lucide-react';
import { getSeverityClass, getStatusClass } from '@/lib/colors';

interface Finding {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  system: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  assignee: string;
  dueDate: string;
  cvss: number;
}

const FindingsTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('All Severity');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const findings: Finding[] = [
    {
      id: 'FIND-001',
      title: 'SQL Injection in Trading Module',
      severity: 'Critical',
      system: 'Trading Platform',
      status: 'Open',
      assignee: 'Development Team',
      dueDate: '2024-12-15',
      cvss: 9.1
    },
    {
      id: 'FIND-002',
      title: 'Weak Administrator Passwords',
      severity: 'High',
      system: 'Domain Controllers',
      status: 'In Progress',
      assignee: 'IT Administration',
      dueDate: '2024-12-01',
      cvss: 7.5
    },
    {
      id: 'FIND-003',
      title: 'Cross-Site Scripting (XSS) in Client Portal',
      severity: 'Medium',
      system: 'Client Portal',
      status: 'Resolved',
      assignee: 'Web Development Team',
      dueDate: '2024-11-15',
      cvss: 5.4
    },
    {
      id: 'FIND-004',
      title: 'Public S3 Bucket with Sensitive Data',
      severity: 'High',
      system: 'AWS S3',
      status: 'Resolved',
      assignee: 'Cloud Operations',
      dueDate: '2024-11-08',
      cvss: 7.2
    },
    {
      id: 'FIND-005',
      title: 'Outdated Operating Systems',
      severity: 'Medium',
      system: 'Legacy Servers',
      status: 'Open',
      assignee: 'Infrastructure Team',
      dueDate: '2024-12-31',
      cvss: 6.1
    }
  ];
  const filteredFindings = findings.filter(finding => {
    const matchesSearch = 
      finding.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      finding.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      finding.system.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeverity = severityFilter === 'All Severity' || finding.severity === severityFilter;
    const matchesStatus = statusFilter === 'All Status' || finding.status === statusFilter;
    
    return matchesSearch && matchesSeverity && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-surface-bg p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Findings Tracker</h1>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Search findings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-primary/[0.08] rounded-lg w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary-ring"
              />
            </div>
            
            <div className="relative">
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="appearance-none pl-3 pr-9 py-2 border border-primary/[0.08] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-ring cursor-pointer"
              >
                <option>All Severity</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-4 h-4 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none pl-3 pr-9 py-2 border border-primary/[0.08] rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-ring cursor-pointer"
              >
                <option>All Status</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="glass-panel border border-primary/[0.06] overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Finding</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Severity</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">System</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Status</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Assignee</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Due Date</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">CVSS</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-txt-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {filteredFindings.map((finding, index) => (
                <tr key={index} className="hover:bg-surface-bg transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-txt-primary text-sm">{finding.title}</div>
                      <div className="text-xs text-txt-muted">{finding.id}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getSeverityClass(finding.severity)}`}>
                      {finding.severity}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-txt-primary">{finding.system}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(finding.status)}`}>
                      {finding.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-txt-primary">{finding.assignee}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-txt-primary">{finding.dueDate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-txt-primary">{finding.cvss}</span>
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

        {/* Results count */}
        <div className="mt-4 text-sm text-txt-secondary">
          Showing {filteredFindings.length} of {findings.length} findings
        </div>
      </div>
    </div>
  );
};

export  {FindingsTracker};