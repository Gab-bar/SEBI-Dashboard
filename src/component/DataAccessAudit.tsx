import React, { useState } from 'react';
import { Search, Filter, Download, MoreVertical, User, Database } from 'lucide-react';
import { getRiskClass } from '@/lib/colors';

interface AuditLog {
  id: string;
  userName: string;
  userId: string;
  dataAsset: string;
  assetType: string;
  accessType: string;
  department: string;
  riskRating: 'High Risk' | 'Medium' | 'Low';
  compliance: 'Compliant' | 'Non-Compliant' | 'Under Review';
  timestamp: string;
  actions?: string;
}

const DataAccessAuditTrail = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const auditLogs: AuditLog[] = [
    {
      id: '1',
      userName: 'John Stewart',
      userId: 'ID:2001',
      dataAsset: 'Sales',
      assetType: 'Database Segment',
      accessType: 'Viewing & Transaction Database',
      department: 'Compliant',
      riskRating: 'Medium',
      compliance: 'Compliant',
      timestamp: '2024-12-15 08:45:23',
      actions: ''
    },
    {
      id: '2',
      userName: 'Radhika Shankar Kamat',
      userId: 'ID:2005',
      dataAsset: 'SEBI-MSG',
      assetType: 'Trading & Transaction Database',
      accessType: 'Unauthorized',
      department: 'Unauthorized',
      riskRating: 'High Risk',
      compliance: 'Non-Compliant',
      timestamp: '2024-12-15 07:23:11',
      actions: ''
    },
    {
      id: '3',
      userName: 'Sarah HR Manager',
      userId: 'ID:2026',
      dataAsset: 'ADMIN',
      assetType: 'Employee HR Database',
      accessType: 'Compliant',
      department: 'Compliant',
      riskRating: 'Medium',
      compliance: 'Compliant',
      timestamp: '2024-12-15 08:12:15',
      actions: ''
    },
    {
      id: '4',
      userName: 'Alex Finance Coordinator',
      userId: 'ID:2037',
      dataAsset: 'MGMT',
      assetType: 'Database Segment',
      accessType: 'Download',
      department: 'Compliant',
      riskRating: 'Medium',
      compliance: 'Under Review',
      timestamp: '2024-12-15 07:45:02',
      actions: ''
    },
    {
      id: '5',
      userName: 'Chris Human Support',
      userId: 'ID:2051',
      dataAsset: 'MGMT',
      assetType: 'Trading & Transaction Database',
      accessType: 'Compliant',
      department: 'Compliant',
      riskRating: 'Medium',
      compliance: 'Compliant',
      timestamp: '2024-12-14 18:30:45',
      actions: ''
    }
  ];
  const getComplianceColor = (compliance: string) => {
    switch (compliance) {
      case 'Compliant':
        return 'bg-primary text-white';
      case 'Non-Compliant':
        return 'bg-critical text-white';
      case 'Under Review':
        return 'bg-gray-700 text-white';
      default:
        return 'bg-gray-300 text-txt-primary';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-primary/[0.06] sticky top-0 z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-txt-primary">Data Access Audit Trail</h1>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button className="px-4 py-2 bg-white border border-primary/[0.08] rounded text-sm hover:bg-surface-bg transition-colors flex items-center gap-2">
                <Filter size={16} />
                <span className="hidden sm:inline">All Access</span>
              </button>
              <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-primary-hover transition-colors flex items-center gap-2">
                <Download size={16} />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b border-primary/[0.06] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-txt-muted" size={20} />
            <input
              type="text"
              placeholder="Search by user, asset, or action..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-ring"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="glass-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-bg border-b border-primary/[0.06]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    User Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    User ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    Data Asset
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    Access Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    Risk Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    Compliance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-primary/[0.06]">
                {auditLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-surface-bg transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-txt-secondary" />
                        </div>
                        <div className="text-sm font-medium text-txt-primary">{log.userName}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{log.userId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Database size={16} className="text-txt-muted" />
                        <div>
                          <div className="text-sm font-medium text-txt-primary">{log.dataAsset}</div>
                          <div className="text-xs text-txt-muted">{log.assetType}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{log.accessType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{log.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskClass(log.riskRating)}`}>
                        {log.riskRating}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getComplianceColor(log.compliance)}`}>
                        {log.compliance}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{log.timestamp}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-txt-muted hover:text-txt-secondary">
                        <MoreVertical size={18} />
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

export  {DataAccessAuditTrail};