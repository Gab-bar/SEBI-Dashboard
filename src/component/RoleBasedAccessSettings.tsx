import React, { useState } from 'react';
import { Search, Shield, MoreVertical } from 'lucide-react';

interface AccessSetting {
  id: string;
  feature: string;
  description: string;
  module: string;
  assignedRoles: string[];
  roleCount: number;
  status: 'Enabled' | 'Disabled';
  lastModified: string;
  modifiedBy: string;
}

const RoleBasedAccessSettingsApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moduleFilter, setModuleFilter] = useState('All Modules');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const accessSettings: AccessSetting[] = [
    {
      id: '1',
      feature: 'Advanced Risk Analytics',
      description: 'Access to advanced risk calculation and predictive analytics',
      module: 'Risk Management',
      assignedRoles: ['Super Administrator', 'Risk Manager'],
      roleCount: 3,
      status: 'Enabled',
      lastModified: '2024-03-18',
      modifiedBy: 'System Admin'
    },
    {
      id: '2',
      feature: 'Bulk Data Export',
      description: 'Ability to export large datasets and reports',
      module: 'All Modules',
      assignedRoles: ['Super Administrator', 'Auditor'],
      roleCount: 2,
      status: 'Enabled',
      lastModified: '2024-03-15',
      modifiedBy: 'Admin User'
    },
    {
      id: '3',
      feature: 'User Account Management',
      description: 'Create, modify, and deactivate user accounts',
      module: 'Access Management',
      assignedRoles: ['Super Administrator', 'HR Manager'],
      roleCount: 2,
      status: 'Enabled',
      lastModified: '2024-03-10',
      modifiedBy: 'Security Manager'
    },
    {
      id: '4',
      feature: 'Policy Approval Workflow',
      description: 'Approve and reject policy changes and updates',
      module: 'Policy Management',
      assignedRoles: ['Compliance Officer', 'Legal Head'],
      roleCount: 3,
      status: 'Enabled',
      lastModified: '2024-03-12',
      modifiedBy: 'Compliance Officer'
    },
    {
      id: '5',
      feature: 'Incident Response Escalation',
      description: 'Escalate incidents and notify emergency contacts',
      module: 'Incident Management',
      assignedRoles: ['Security Analyst', 'SOC Manager'],
      roleCount: 3,
      status: 'Enabled',
      lastModified: '2024-03-20',
      modifiedBy: 'SOC Manager'
    },
    {
      id: '6',
      feature: 'System Configuration Changes',
      description: 'Modify system settings and configurations',
      module: 'Admin & Configuration',
      assignedRoles: ['Super Administrator'],
      roleCount: 1,
      status: 'Enabled',
      lastModified: '2024-03-05',
      modifiedBy: 'System Admin'
    },
    {
      id: '7',
      feature: 'Financial Data Access',
      description: 'View financial impact and cost data in reports',
      module: 'All Modules',
      assignedRoles: ['Finance Manager', 'Compliance Officer'],
      roleCount: 3,
      status: 'Disabled',
      lastModified: '2024-03-01',
      modifiedBy: 'Finance Head'
    }
  ];

  // Get unique modules for filter
  const modules = ['All Modules', ...Array.from(new Set(accessSettings.map(setting => setting.module)))];

  // Filter logic
  const filteredSettings = accessSettings.filter(setting => {
    const matchesSearch = searchQuery === '' || 
      setting.feature.toLowerCase().includes(searchQuery.toLowerCase()) ||
      setting.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      setting.module.toLowerCase().includes(searchQuery.toLowerCase()) ||
      setting.assignedRoles.some(role => role.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesModule = moduleFilter === 'All Modules' || setting.module === moduleFilter;
    const matchesStatus = statusFilter === 'All Status' || setting.status === statusFilter;

    return matchesSearch && matchesModule && matchesStatus;
  });

  // Calculate stats
  const stats = {
    totalFeatures: accessSettings.length,
    enabledFeatures: accessSettings.filter(s => s.status === 'Enabled').length,
    disabledFeatures: accessSettings.filter(s => s.status === 'Disabled').length,
    roleCoverage: 95,
    securityScore: 88,
    maxScore: 100
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Role-Based Access Settings</h1>
          <p className="text-sm text-gray-600 mt-1">Configure feature access and permissions by role</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          <Shield className="w-5 h-5" />
          Configure Access
        </button>
      </div>

      {/* Access Settings Table */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        {/* Table Header Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search access settings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Module Filter */}
              <select
                value={moduleFilter}
                onChange={(e) => setModuleFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {modules.map(module => (
                  <option key={module} value={module}>{module}</option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All Status</option>
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {(searchQuery || moduleFilter !== 'All Modules' || statusFilter !== 'All Status') && (
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="text-gray-700">
                Showing <span className="font-semibold">{filteredSettings.length}</span> of <span className="font-semibold">{accessSettings.length}</span> settings
              </div>
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
                {moduleFilter !== 'All Modules' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    Module: {moduleFilter}
                    <button 
                      onClick={() => setModuleFilter('All Modules')}
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
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setModuleFilter('All Modules');
                    setStatusFilter('All Status');
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-xs"
                >
                  Clear all
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table - Desktop View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assigned Roles
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Modified
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSettings.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <div className="text-lg font-medium mb-1">No settings found</div>
                      <div className="text-sm">Try adjusting your filters or search query</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredSettings.map((setting) => (
                  <tr key={setting.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{setting.feature}</div>
                      <div className="text-sm text-gray-500">{setting.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{setting.module}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{setting.roleCount} roles</div>
                      <div className="text-sm text-gray-500">
                        {setting.assignedRoles.slice(0, 2).join(', ')}
                        {setting.roleCount > 2 && ` +${setting.roleCount - 2} more`}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${setting.status === 'Enabled' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${
                          setting.status === 'Enabled' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {setting.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{setting.lastModified}</div>
                      <div className="text-sm text-gray-500">by {setting.modifiedBy}</div>
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
          {filteredSettings.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-500">
                <div className="text-lg font-medium mb-1">No settings found</div>
                <div className="text-sm">Try adjusting your filters or search query</div>
              </div>
            </div>
          ) : (
            filteredSettings.map((setting) => (
              <div key={setting.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{setting.feature}</div>
                    <div className="text-xs text-gray-500 mt-1">{setting.description}</div>
                  </div>
                  <button className="text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="text-gray-500">Module: </span>
                    <span className="text-gray-900">{setting.module}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Roles: </span>
                    <span className="text-gray-900">
                      {setting.roleCount} roles ({setting.assignedRoles.slice(0, 2).join(', ')}
                      {setting.roleCount > 2 && ` +${setting.roleCount - 2} more`})
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Modified: </span>
                    <span className="text-gray-900">{setting.lastModified} by {setting.modifiedBy}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${setting.status === 'Enabled' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${
                      setting.status === 'Enabled' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {setting.status}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Feature Control Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Feature Control</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.totalFeatures}</div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Enabled</span>
              <span className="font-medium text-gray-900">{stats.enabledFeatures}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Disabled</span>
              <span className="font-medium text-gray-900">{stats.disabledFeatures}</span>
            </div>
          </div>
        </div>

        {/* Role Coverage Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Role Coverage</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.roleCoverage}%</div>
          <div className="text-sm text-gray-600 mb-2">Roles have defined access</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: `${stats.roleCoverage}%` }}></div>
          </div>
        </div>

        {/* Security Score Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Security Score</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.securityScore}/{stats.maxScore}</div>
          <div className="text-sm text-gray-600 mb-2">Access control maturity</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: `${(stats.securityScore / stats.maxScore) * 100}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export  {RoleBasedAccessSettingsApp};