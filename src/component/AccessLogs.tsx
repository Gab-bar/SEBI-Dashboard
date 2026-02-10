import React, { useState } from 'react';
import { Eye, Search, User, ChevronDown } from 'lucide-react';

interface AccessLog {
  userName: string;
  userEmail: string;
  userRole: string;
  policy: string;
  policyId: string;
  action: 'Downloaded' | 'Viewed';
  timestamp: string;
  department: string;
  ipAddress: string;
  sessionId: string;
}

const AccessLogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState<string>('All');

  const logsData: AccessLog[] = [
    {
      userName: 'Alice Johnson',
      userEmail: 'alice.johnson@company.com',
      userRole: 'Security Analyst',
      policy: 'ISMS Policy',
      policyId: 'POL-001',
      action: 'Downloaded',
      timestamp: '2024-11-20 14:30:25',
      department: 'IT Security',
      ipAddress: '192.168.1.100',
      sessionId: 'SES-1234567890'
    },
    {
      userName: 'Bob Smith',
      userEmail: 'bob.smith@company.com',
      userRole: 'HR Manager',
      policy: 'Access Control Policy',
      policyId: 'POL-002',
      action: 'Viewed',
      timestamp: '2024-11-20 13:15:10',
      department: 'HR',
      ipAddress: '192.168.1.101',
      sessionId: 'SES-1234567891'
    },
    {
      userName: 'Carol Davis',
      userEmail: 'carol.davis@company.com',
      userRole: 'SOC Analyst',
      policy: 'Incident Response Plan',
      policyId: 'POL-004',
      action: 'Downloaded',
      timestamp: '2024-11-20 12:45:33',
      department: 'SOC',
      ipAddress: '192.168.1.102',
      sessionId: 'SES-1234567892'
    },
    {
      userName: 'David Wilson',
      userEmail: 'david.wilson@company.com',
      userRole: 'Procurement Manager',
      policy: 'Vendor Management Policy',
      policyId: 'POL-005',
      action: 'Viewed',
      timestamp: '2024-11-20 11:20:15',
      department: 'Procurement',
      ipAddress: '192.168.1.103',
      sessionId: 'SES-1234567893'
    }
  ];

  const filteredLogs = logsData.filter(log => {
    const matchesSearch = 
      log.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.policy.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesAction = actionFilter === 'All' || log.action === actionFilter;
    
    return matchesSearch && matchesAction;
  });

  return (
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Eye className="w-8 h-8 text-txt-primary" />
            <h1 className="section-header-title">
              Access Logs (Who viewed/downloaded what policies)
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-5 h-5" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-primary/[0.08] rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary-ring"
              />
            </div>
            <div className="relative">
              <select
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 border border-primary/[0.08] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-ring cursor-pointer"
              >
                <option value="All">Action</option>
                <option value="Downloaded">Downloaded</option>
                <option value="Viewed">Viewed</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="glass-panel border border-primary/[0.06] overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">User</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Policy</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Action</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Timestamp</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Department</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">IP Address</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Session</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {filteredLogs.map((log, index) => (
                <tr key={index} className="hover:bg-surface-bg transition-colors">
                  <td className="py-5 px-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <User className="w-5 h-5 text-txt-muted" />
                      </div>
                      <div>
                        <div className="font-medium text-txt-primary">{log.userName}</div>
                        <div className="text-sm text-txt-secondary">{log.userEmail}</div>
                        <div className="text-sm text-txt-muted">{log.userRole}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium text-txt-primary">{log.policy}</div>
                      <div className="text-sm text-txt-muted">{log.policyId}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      log.action === 'Downloaded' 
                        ? 'bg-primary text-white' 
                        : 'bg-white text-txt-primary border border-primary/[0.08]'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-txt-primary font-mono text-sm">{log.timestamp}</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-txt-primary">{log.department}</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-txt-primary font-mono text-sm">{log.ipAddress}</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-txt-secondary font-mono text-sm">{log.sessionId}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-txt-secondary">
          Showing {filteredLogs.length} of {logsData.length} logs
        </div>
      </div>
    </div>
  );
};

export  {AccessLogs};