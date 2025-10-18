import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal } from 'lucide-react';

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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-white text-gray-700 border border-gray-300';
      case 'Medium':
        return 'bg-white text-gray-700 border border-gray-300';
      case 'Low':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-white text-gray-700 border border-gray-300';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      case 'Resolved':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Findings Tracker</h1>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search findings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="relative">
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="appearance-none pl-3 pr-9 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option>All Severity</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="appearance-none pl-3 pr-9 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option>All Status</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Finding</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Severity</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">System</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Assignee</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Due Date</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">CVSS</th>
                <th className="text-left py-3 px-6 text-xs font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredFindings.map((finding, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{finding.title}</div>
                      <div className="text-xs text-gray-500">{finding.id}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getSeverityColor(finding.severity)}`}>
                      {finding.severity}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-900">{finding.system}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(finding.status)}`}>
                      {finding.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-900">{finding.assignee}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-900">{finding.dueDate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-gray-900">{finding.cvss}</span>
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

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredFindings.length} of {findings.length} findings
        </div>
      </div>
    </div>
  );
};

export  {FindingsTracker};