import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Mail, MessageSquare } from 'lucide-react';

interface NotificationTemplate {
  id: string;
  name: string;
  lastUsed: string;
  type: 'Email' | 'SMS';
  category: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  deliveryRate: string;
  sent: number;
  status: 'Active' | 'Inactive';
}

interface DeliveryLog {
  id: string;
  template: string;
  recipient: string;
  type: 'Email' | 'SMS';
  status: 'Delivered' | 'Failed' | 'Pending';
  sentAt: string;
}

const NotificationEngineApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const templates: NotificationTemplate[] = [
    {
      id: '1',
      name: 'Security Incident Alert',
      lastUsed: '2024-03-20 09:15:00',
      type: 'Email',
      category: 'Security',
      priority: 'Critical',
      deliveryRate: '98.2',
      sent: 47,
      status: 'Active'
    },
    {
      id: '2',
      name: 'Compliance Review Due',
      lastUsed: '2024-03-19 16:30:00',
      type: 'Email',
      category: 'Compliance',
      priority: 'High',
      deliveryRate: '95.7',
      sent: 234,
      status: 'Active'
    },
    {
      id: '3',
      name: 'Training Reminder',
      lastUsed: '2024-03-18 14:45:00',
      type: 'SMS',
      category: 'Training',
      priority: 'Medium',
      deliveryRate: '92.3',
      sent: 1256,
      status: 'Active'
    },
    {
      id: '4',
      name: 'Audit Finding Report',
      lastUsed: '2024-03-17 11:20:00',
      type: 'Email',
      category: 'Audit',
      priority: 'High',
      deliveryRate: '97.8',
      sent: 89,
      status: 'Active'
    },
    {
      id: '5',
      name: 'System Maintenance',
      lastUsed: '2024-03-15 18:00:00',
      type: 'Email',
      category: 'System',
      priority: 'Medium',
      deliveryRate: '94.1',
      sent: 567,
      status: 'Active'
    },
    {
      id: '6',
      name: 'Password Expiry Warning',
      lastUsed: '2024-03-20 08:00:00',
      type: 'Email',
      category: 'Security',
      priority: 'Low',
      deliveryRate: '96.5',
      sent: 342,
      status: 'Active'
    }
  ];

  const deliveryLogs: DeliveryLog[] = [
    {
      id: '1',
      template: 'Security Incident Alert',
      recipient: 'security-team@company.com',
      type: 'Email',
      status: 'Delivered',
      sentAt: '2024-03-20 09:15:23'
    },
    {
      id: '2',
      template: 'Training Reminder',
      recipient: '+91-9876543210',
      type: 'SMS',
      status: 'Delivered',
      sentAt: '2024-03-18 14:45:12'
    },
    {
      id: '3',
      template: 'Compliance Review Due',
      recipient: 'compliance@company.com',
      type: 'Email',
      status: 'Failed',
      sentAt: '2024-03-19 16:30:45'
    }
  ];

  // Filter logic
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = searchQuery === '' || 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === 'All Types' || template.type === typeFilter;
    const matchesStatus = statusFilter === 'All Status' || template.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  // Calculate stats
  const stats = {
    deliverySuccessRate: 95.2,
    notificationsThisWeek: 2456,
    activeTemplates: templates.filter(t => t.status === 'Active').length,
    emailTemplates: templates.filter(t => t.type === 'Email').length,
    smsTemplates: templates.filter(t => t.type === 'SMS').length,
    queueStatus: 12
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-700';
      case 'High':
        return 'bg-red-50 text-red-600';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'Low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Notification Engine</h1>
          <p className="text-sm text-gray-600 mt-1">Manage email/SMS templates and delivery settings</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5" />
          Create Template
        </button>
      </div>

      {/* Templates Table */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        {/* Table Header Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Type Filter */}
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All Types</option>
                <option>Email</option>
                <option>SMS</option>
              </select>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {(searchQuery || typeFilter !== 'All Types' || statusFilter !== 'All Status') && (
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="text-gray-700">
                Showing <span className="font-semibold">{filteredTemplates.length}</span> of <span className="font-semibold">{templates.length}</span> templates
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
                {typeFilter !== 'All Types' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    Type: {typeFilter}
                    <button 
                      onClick={() => setTypeFilter('All Types')}
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
                    setTypeFilter('All Types');
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
                  Template Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTemplates.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <div className="text-lg font-medium mb-1">No templates found</div>
                      <div className="text-sm">Try adjusting your filters or search query</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredTemplates.map((template) => (
                  <tr key={template.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{template.name}</div>
                      <div className="text-sm text-gray-500">Last used: {template.lastUsed}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {template.type === 'Email' ? (
                          <>
                            <Mail className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-900">Email</span>
                          </>
                        ) : (
                          <>
                            <MessageSquare className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-900">SMS</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{template.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getPriorityColor(template.priority)}`}>
                        {template.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{template.deliveryRate}%</div>
                      <div className="text-sm text-gray-500">{template.sent} sent</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(template.status)}`}>
                        {template.status}
                      </span>
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
          {filteredTemplates.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-500">
                <div className="text-lg font-medium mb-1">No templates found</div>
                <div className="text-sm">Try adjusting your filters or search query</div>
              </div>
            </div>
          ) : (
            filteredTemplates.map((template) => (
              <div key={template.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{template.name}</div>
                    <div className="text-xs text-gray-500 mt-1">Last used: {template.lastUsed}</div>
                  </div>
                  <button className="text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    {template.type === 'Email' ? (
                      <Mail className="w-4 h-4 text-blue-500" />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-green-500" />
                    )}
                    <span className="text-gray-500">Type: </span>
                    <span className="text-gray-900">{template.type}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Category: </span>
                    <span className="text-gray-900">{template.category}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Delivery: </span>
                    <span className="text-gray-900">{template.deliveryRate}% ({template.sent} sent)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getPriorityColor(template.priority)}`}>
                    {template.priority}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(template.status)}`}>
                    {template.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Delivery Success Rate Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Delivery Success Rate</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.deliverySuccessRate}%</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-gray-900" style={{ width: `${stats.deliverySuccessRate}%` }}></div>
          </div>
          <div className="text-sm text-gray-600">{stats.notificationsThisWeek.toLocaleString()} notifications this week</div>
        </div>

        {/* Active Templates Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Active Templates</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.activeTemplates}</div>
          <div className="space-y-1 mb-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Email</span>
              <span className="font-medium text-gray-900">{stats.emailTemplates}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">SMS</span>
              <span className="font-medium text-gray-900">{stats.smsTemplates}</span>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Queue Status Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Queue Status</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.queueStatus}</div>
          <div className="text-sm text-gray-600 mb-2">Pending notifications</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: '25%' }}></div>
          </div>
        </div>
      </div>

      {/* Recent Notification Delivery Logs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Recent Notification Delivery Logs</h2>
          <p className="text-sm text-gray-600 mt-1">Latest notification delivery attempts and status</p>
        </div>

        {/* Logs Table - Desktop View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Template
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sent At
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deliveryLogs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{log.template}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{log.recipient}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {log.type === 'Email' ? (
                        <>
                          <Mail className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-900">Email</span>
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-900">SMS</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{log.sentAt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Logs Table - Mobile View (Cards) */}
        <div className="lg:hidden divide-y divide-gray-200">
          {deliveryLogs.map((log) => (
            <div key={log.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">{log.template}</div>
                  <div className="text-xs text-gray-500 mt-1">{log.sentAt}</div>
                </div>
                <button className="text-gray-400">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="text-sm">
                  <span className="text-gray-500">Recipient: </span>
                  <span className="text-gray-900">{log.recipient}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {log.type === 'Email' ? (
                    <Mail className="w-4 h-4 text-blue-500" />
                  ) : (
                    <MessageSquare className="w-4 h-4 text-green-500" />
                  )}
                  <span className="text-gray-500">Type: </span>
                  <span className="text-gray-900">{log.type}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(log.status)}`}>
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {NotificationEngineApp};