import React, { useState } from 'react';
import { Search, Filter, Download, MoreVertical, Activity } from 'lucide-react';

interface ActivityLog {
  id: string;
  timestamp: string;
  time: string;
  user: string;
  ip: string;
  action: string;
  resource: string;
  status: 'Success' | 'Failed';
  riskScore: 'Low' | 'Medium' | 'High';
  location: string;
}

interface Stats {
  loginActivity: {
    total: number;
    successful: number;
    failed: number;
  };
  highRiskActivities: number;
  permissionChanges: number;
}

const ActivityLogsApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [riskFilter, setRiskFilter] = useState('All Risk');
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);

  const stats: Stats = {
    loginActivity: {
      total: 342,
      successful: 325,
      failed: 17
    },
    highRiskActivities: 8,
    permissionChanges: 23
  };

  const activityLogs: ActivityLog[] = [
    {
      id: '1',
      timestamp: '2024-03-20',
      time: '14:32:15',
      user: 'admin@company.com',
      ip: '192.168.1.100',
      action: 'User Login',
      resource: 'Access Management Portal',
      status: 'Success',
      riskScore: 'Low',
      location: 'Mumbai, India'
    },
    {
      id: '2',
      timestamp: '2024-03-20',
      time: '14:28:42',
      user: 'compliance.officer@company.com',
      ip: '192.168.1.102',
      action: 'Role Assignment',
      resource: 'User: john.doe@company.com',
      status: 'Success',
      riskScore: 'Medium',
      location: 'Mumbai, India'
    },
    {
      id: '3',
      timestamp: '2024-03-20',
      time: '14:25:18',
      user: 'security.analyst@company.com',
      ip: '192.168.1.105',
      action: 'Permission Modification',
      resource: 'Role: Security Analyst',
      status: 'Success',
      riskScore: 'High',
      location: 'Delhi, India'
    },
    {
      id: '4',
      timestamp: '2024-03-20',
      time: '14:22:09',
      user: 'external.auditor@audit-firm.com',
      ip: '203.192.15.45',
      action: 'Failed Login Attempt',
      resource: 'Access Management Portal',
      status: 'Failed',
      riskScore: 'High',
      location: 'Unknown'
    },
    {
      id: '5',
      timestamp: '2024-03-20',
      time: '14:18:33',
      user: 'dept.head@company.com',
      ip: '192.168.1.108',
      action: 'Department User Update',
      resource: 'Department: Operations',
      status: 'Success',
      riskScore: 'Medium',
      location: 'Mumbai, India'
    },
    {
      id: '6',
      timestamp: '2024-03-20',
      time: '14:15:27',
      user: 'admin@company.com',
      ip: '192.168.1.100',
      action: 'Role Creation',
      resource: 'Role: Project Manager',
      status: 'Success',
      riskScore: 'High',
      location: 'Mumbai, India'
    },
    {
      id: '7',
      timestamp: '2024-03-20',
      time: '14:12:45',
      user: 'auditor@company.com',
      ip: '192.168.1.115',
      action: 'Report Export',
      resource: 'User Activity Report',
      status: 'Success',
      riskScore: 'Low',
      location: 'Delhi, India'
    },
    {
      id: '8',
      timestamp: '2024-03-20',
      time: '14:08:12',
      user: 'user@company.com',
      ip: '192.168.1.120',
      action: 'Password Change',
      resource: 'User Profile',
      status: 'Success',
      riskScore: 'Low',
      location: 'Mumbai, India'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'High':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Success' 
      ? 'bg-gray-100 text-gray-700' 
      : 'bg-red-100 text-red-700';
  };

  // Filter logic
  const filteredLogs = activityLogs.filter(log => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.ip.includes(searchQuery);

    // Status filter
    const matchesStatus = statusFilter === 'All Status' || log.status === statusFilter;

    // Risk filter
    const matchesRisk = riskFilter === 'All Risk' || log.riskScore === riskFilter;

    return matchesSearch && matchesStatus && matchesRisk;
  });

  // Calculate filtered stats
  const filteredStats = {
    total: filteredLogs.length,
    successful: filteredLogs.filter(log => log.status === 'Success').length,
    failed: filteredLogs.filter(log => log.status === 'Failed').length,
    highRisk: filteredLogs.filter(log => log.riskScore === 'High').length,
    mediumRisk: filteredLogs.filter(log => log.riskScore === 'Medium').length,
    lowRisk: filteredLogs.filter(log => log.riskScore === 'Low').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Activity Logs</h1>
        <p className="text-sm text-gray-600 mt-1">User activity tracking and audit trail</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Login Activity Card */}
        {/* <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Login Activity (24h)</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stats.loginActivity.total}</div>
          <div className="space-y-1">
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-600">{stats.loginActivity.successful} successful logins</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span className="text-gray-600">{stats.loginActivity.failed} failed attempts</span>
            </div>
          </div>
        </div> */}

        {/* Results Summary */}
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="text-gray-700">
              Showing <span className="font-semibold">{filteredLogs.length}</span> of <span className="font-semibold">{activityLogs.length}</span> activities
            </div>
            {(searchQuery || statusFilter !== 'All Status' || riskFilter !== 'All Risk') && (
              <>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      Search: "{searchQuery}"
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="hover:bg-blue-200 rounded-full p-0.5"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {statusFilter !== 'All Status' && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      Status: {statusFilter}
                      <button 
                        onClick={() => setStatusFilter('All Status')}
                        className="hover:bg-blue-200 rounded-full p-0.5"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {riskFilter !== 'All Risk' && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      Risk: {riskFilter}
                      <button 
                        onClick={() => setRiskFilter('All Risk')}
                        className="hover:bg-blue-200 rounded-full p-0.5"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setStatusFilter('All Status');
                      setRiskFilter('All Risk');
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium text-xs"
                  >
                    Clear all
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* High Risk Activities Card */}
        {/* <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">High Risk Activities</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stats.highRiskActivities}</div>
          <div className="text-sm text-gray-600">Requiring immediate review</div>
          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-800" style={{ width: '75%' }}></div>
          </div>
        </div> */}

        {/* Permission Changes Card */}
        {/* <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Permission Changes</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stats.permissionChanges}</div>
          <div className="text-sm text-gray-600">Role/permission modifications</div>
          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-800" style={{ width: '100%' }}></div>
          </div>
        </div> */}
      </div>

      {/* Activity Logs Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        {/* Table Header Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search activity logs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters and Actions */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All Status</option>
                <option>Success</option>
                <option>Failed</option>
              </select>

              {/* Risk Filter */}
              <select
                value={riskFilter}
                onChange={(e) => setRiskFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All Risk</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              {/* Advanced Filter Button */}
              <button 
                onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Advanced Filter</span>
              </button>

              {/* Export Button */}
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Export Logs</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table - Desktop View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resource
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <div className="text-lg font-medium mb-1">No activities found</div>
                      <div className="text-sm">Try adjusting your filters or search query</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{log.timestamp}</div>
                    <div className="text-sm text-gray-500">{log.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{log.user}</div>
                    <div className="text-sm text-gray-500">{log.ip}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-900">{log.action}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{log.resource}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getRiskColor(log.riskScore)}`}>
                      {log.riskScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{log.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table - Mobile View (Cards) */}
        <div className="lg:hidden divide-y divide-gray-200">
          {filteredLogs.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-500">
                <div className="text-lg font-medium mb-1">No activities found</div>
                <div className="text-sm">Try adjusting your filters or search query</div>
              </div>
            </div>
          ) : (
            filteredLogs.map((log) => (
            <div key={log.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">{log.action}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {log.timestamp} {log.time}
                  </div>
                </div>
                <button className="text-gray-400">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="text-sm">
                  <span className="text-gray-500">User: </span>
                  <span className="text-gray-900">{log.user}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Resource: </span>
                  <span className="text-gray-900">{log.resource}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Location: </span>
                  <span className="text-gray-900">{log.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(log.status)}`}>
                  {log.status}
                </span>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getRiskColor(log.riskScore)}`}>
                  {log.riskScore}
                </span>
              </div>
            </div>
          ))
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Login Activity Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Login Activity (24h)</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stats.loginActivity.total}</div>
          <div className="space-y-1">
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-600">{stats.loginActivity.successful} successful logins</span>
            </div>
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              <span className="text-gray-600">{stats.loginActivity.failed} failed attempts</span>
            </div>
          </div>
        </div>

        {/* High Risk Activities Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">High Risk Activities</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stats.highRiskActivities}</div>
          <div className="text-sm text-gray-600">Requiring immediate review</div>
          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-800" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Permission Changes Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Permission Changes</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stats.permissionChanges}</div>
          <div className="text-sm text-gray-600">Role/permission modifications</div>
          <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-800" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export  {ActivityLogsApp};