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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Eye className="w-8 h-8 text-gray-900" />
            <h1 className="text-3xl font-semibold text-gray-900">
              Access Logs (Who viewed/downloaded what policies)
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <select
                value={actionFilter}
                onChange={(e) => setActionFilter(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="All">Action</option>
                <option value="Downloaded">Downloaded</option>
                <option value="Viewed">Viewed</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">User</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Policy</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Action</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Timestamp</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Department</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">IP Address</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Session</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLogs.map((log, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{log.userName}</div>
                        <div className="text-sm text-gray-600">{log.userEmail}</div>
                        <div className="text-sm text-gray-500">{log.userRole}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{log.policy}</div>
                      <div className="text-sm text-gray-500">{log.policyId}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      log.action === 'Downloaded' 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-gray-900 font-mono text-sm">{log.timestamp}</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-gray-900">{log.department}</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-gray-900 font-mono text-sm">{log.ipAddress}</span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-gray-600 font-mono text-sm">{log.sessionId}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredLogs.length} of {logsData.length} logs
        </div>
      </div>
    </div>
  );
};

export  {AccessLogs};