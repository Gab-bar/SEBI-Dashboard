import React, { useState } from 'react';
import { Search, Plus, Users, MoreVertical, ChevronDown, CheckCircle, XCircle } from 'lucide-react';
import { getRiskClass, getStatusClass } from '@/lib/colors';

interface Role {
  id: string;
  roleName: string;
  description: string;
  permissions: number;
  users: number;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Inactive' | 'Suspended';
  lastModified: string;
}

interface PermissionSet {
  module: string;
  view: boolean;
  create: boolean;
  edit: boolean;
  delete: boolean;
  export: boolean;
}

const UserRolesPermissions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [riskFilter, setRiskFilter] = useState('All Risk');
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const roles: Role[] = [
    {
      id: '1',
      roleName: 'Super Administrator',
      description: 'Full system access with all administrative privileges',
      permissions: 47,
      users: 3,
      riskLevel: 'Critical',
      status: 'Active',
      lastModified: '2024-03-20'
    },
    {
      id: '2',
      roleName: 'Compliance Officer',
      description: 'Access to compliance, audit, and risk management modules',
      permissions: 32,
      users: 8,
      riskLevel: 'High',
      status: 'Active',
      lastModified: '2024-03-18'
    },
    {
      id: '3',
      roleName: 'Security Analyst',
      description: 'SOC monitoring, incident management, and security controls',
      permissions: 28,
      users: 12,
      riskLevel: 'High',
      status: 'Active',
      lastModified: '2024-03-15'
    },
    {
      id: '4',
      roleName: 'Auditor',
      description: 'Read-only access to audit trails and compliance reports',
      permissions: 15,
      users: 6,
      riskLevel: 'Medium',
      status: 'Active',
      lastModified: '2024-03-10'
    },
    {
      id: '5',
      roleName: 'Department Head',
      description: 'Departmental user management and training oversight',
      permissions: 18,
      users: 15,
      riskLevel: 'Medium',
      status: 'Active',
      lastModified: '2024-03-12'
    },
    {
      id: '6',
      roleName: 'Read-Only User',
      description: 'View-only access to assigned modules',
      permissions: 8,
      users: 45,
      riskLevel: 'Low',
      status: 'Active',
      lastModified: '2024-03-20'
    },
    {
      id: '7',
      roleName: 'External Auditor',
      description: 'Temporary access for external audit activities',
      permissions: 12,
      users: 2,
      riskLevel: 'Medium',
      status: 'Suspended',
      lastModified: '2024-03-01'
    }
  ];

  const permissionsMatrix: PermissionSet[] = [
    { module: 'Dashboard', view: true, create: false, edit: false, delete: false, export: true },
    { module: 'Security Controls', view: true, create: true, edit: true, delete: false, export: true },
    { module: 'Policy Management', view: true, create: true, edit: true, delete: true, export: true },
    { module: 'Risk Management', view: true, create: true, edit: true, delete: false, export: true },
    { module: 'Audit Management', view: true, create: false, edit: false, delete: false, export: true },
    { module: 'Incident Management', view: true, create: true, edit: true, delete: false, export: true },
    { module: 'SOC Monitoring', view: true, create: false, edit: true, delete: false, export: true },
    { module: 'Vendor Risk', view: true, create: true, edit: true, delete: false, export: true },
    { module: 'Training Management', view: true, create: true, edit: true, delete: false, export: true },
    { module: 'Data Classification', view: true, create: false, edit: true, delete: false, export: true },
    { module: 'Access Management', view: true, create: true, edit: true, delete: true, export: false },
    { module: 'Compliance Reports', view: true, create: false, edit: false, delete: false, export: true }
  ];
  const filteredRoles = roles.filter(role =>
    (role.roleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'All Status' || role.status === statusFilter) &&
    (riskFilter === 'All Risk' || role.riskLevel === riskFilter)
  );

  return (
    <div className="min-h-screen bg-surface-bg p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl md:section-header-title mb-2">
                User Roles & Permissions
              </h1>
              <p className="text-sm text-txt-secondary">
                Manage user roles and their associated permissions
              </p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors w-full sm:w-auto">
              <Plus className="w-4 h-4" />
              Create Role
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-5 h-5" />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative flex-1 md:flex-initial">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full md:w-40 appearance-none px-4 py-2.5 pr-10 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white cursor-pointer"
                >
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Suspended</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-5 h-5 pointer-events-none" />
              </div>
              <div className="relative flex-1 md:flex-initial">
                <select
                  value={riskFilter}
                  onChange={(e) => setRiskFilter(e.target.value)}
                  className="w-full md:w-40 appearance-none px-4 py-2.5 pr-10 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white cursor-pointer"
                >
                  <option>All Risk</option>
                  <option>Critical</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block glass-panel overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Role Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Users
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Risk Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Last Modified
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-primary/[0.06]">
              {filteredRoles.map((role) => (
                <tr key={role.id} className="hover:bg-surface-bg transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-txt-primary">
                        {role.roleName}
                      </span>
                      <span className="text-xs text-txt-muted mt-1">
                        {role.description}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-txt-primary">
                      {role.permissions} permissions
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-txt-muted" />
                      <span className="text-sm font-medium text-txt-primary">{role.users}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getRiskClass(role.riskLevel)}`}>
                      {role.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusClass(role.status)}`}>
                      {role.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-txt-primary">{role.lastModified}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => setSelectedRole(role)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
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
          {filteredRoles.map((role) => (
            <div
              key={role.id}
              className="bg-white border border-primary/[0.06] rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-txt-primary mb-1">
                    {role.roleName}
                  </h3>
                  <p className="text-sm text-txt-secondary">{role.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedRole(role)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors ml-2"
                >
                  <MoreVertical className="w-5 h-5 text-txt-muted" />
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getRiskClass(role.riskLevel)}`}>
                  {role.riskLevel}
                </span>
                <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${getStatusClass(role.status)}`}>
                  {role.status}
                </span>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-primary/[0.06] mb-3">
                <div>
                  <span className="text-xs text-txt-muted block mb-1">Permissions</span>
                  <span className="text-sm font-medium text-txt-primary">
                    {role.permissions} permissions
                  </span>
                </div>
                <div>
                  <span className="text-xs text-txt-muted block mb-1">Users</span>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-txt-muted" />
                    <span className="text-sm font-medium text-txt-primary">{role.users}</span>
                  </div>
                </div>
              </div>

              {/* Last Modified */}
              <div>
                <span className="text-xs text-txt-muted">Last Modified: </span>
                <span className="text-sm text-txt-primary">{role.lastModified}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRoles.length === 0 && (
          <div className="glass-panel p-12 text-center">
            <p className="text-txt-muted mb-4">No roles found matching your filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('All Status');
                setRiskFilter('All Risk');
              }}
              className="text-sm text-txt-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Permission Matrix Modal */}
        {selectedRole && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-primary/[0.06]">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-txt-primary">
                      Permission Matrix - {selectedRole.roleName}
                    </h2>
                    <p className="text-sm text-txt-secondary mt-1">
                      Detailed permissions for the selected role
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="text-txt-muted hover:text-txt-secondary transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Body - Desktop Table */}
              <div className="overflow-auto max-h-[calc(90vh-120px)]">
                <div className="hidden md:block">
                  <table className="w-full">
                    <thead className="bg-surface-bg sticky top-0 z-10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Module
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-txt-muted uppercase tracking-wider">
                          View
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Create
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Edit
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Delete
                        </th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Export
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-primary/[0.06]">
                      {permissionsMatrix.map((permission, index) => (
                        <tr key={index} className="hover:bg-surface-bg">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-txt-primary">
                            {permission.module}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {permission.view ? (
                              <CheckCircle className="w-5 h-5 text-success inline-block" />
                            ) : (
                              <XCircle className="w-5 h-5 text-critical inline-block" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {permission.create ? (
                              <CheckCircle className="w-5 h-5 text-success inline-block" />
                            ) : (
                              <XCircle className="w-5 h-5 text-critical inline-block" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {permission.edit ? (
                              <CheckCircle className="w-5 h-5 text-success inline-block" />
                            ) : (
                              <XCircle className="w-5 h-5 text-critical inline-block" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {permission.delete ? (
                              <CheckCircle className="w-5 h-5 text-success inline-block" />
                            ) : (
                              <XCircle className="w-5 h-5 text-critical inline-block" />
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {permission.export ? (
                              <CheckCircle className="w-5 h-5 text-success inline-block" />
                            ) : (
                              <XCircle className="w-5 h-5 text-critical inline-block" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Modal Body - Mobile Cards */}
                <div className="md:hidden p-4 space-y-4">
                  {permissionsMatrix.map((permission, index) => (
                    <div key={index} className="bg-surface-bg rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-txt-primary mb-3">
                        {permission.module}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-txt-secondary">View</span>
                          {permission.view ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : (
                            <XCircle className="w-4 h-4 text-critical" />
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-txt-secondary">Create</span>
                          {permission.create ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : (
                            <XCircle className="w-4 h-4 text-critical" />
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-txt-secondary">Edit</span>
                          {permission.edit ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : (
                            <XCircle className="w-4 h-4 text-critical" />
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-txt-secondary">Delete</span>
                          {permission.delete ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : (
                            <XCircle className="w-4 h-4 text-critical" />
                          )}
                        </div>
                        <div className="flex items-center justify-between col-span-2">
                          <span className="text-xs text-txt-secondary">Export</span>
                          {permission.export ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : (
                            <XCircle className="w-4 h-4 text-critical" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export  {UserRolesPermissions};