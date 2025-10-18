import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Hash, Type, ChevronDown, Calendar, CheckCircle, XCircle } from 'lucide-react';

interface CustomField {
  id: string;
  name: string;
  description: string;
  type: 'Number' | 'Text' | 'Dropdown' | 'Date';
  module: string;
  required: boolean;
  usage: number;
  status: 'Active' | 'Inactive';
}

const CustomFieldManagerApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moduleFilter, setModuleFilter] = useState('All Modules');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const customFields: CustomField[] = [
    {
      id: '1',
      name: 'Business Impact Score',
      description: 'Quantitative assessment of business impact (1-10 scale)',
      type: 'Number',
      module: 'Risk Management',
      required: true,
      usage: 156,
      status: 'Active'
    },
    {
      id: '2',
      name: 'Regulatory Reference',
      description: 'Reference to specific regulatory requirement',
      type: 'Text',
      module: 'Policy Management',
      required: false,
      usage: 89,
      status: 'Active'
    },
    {
      id: '3',
      name: 'Incident Category',
      description: 'Categorization of security incidents',
      type: 'Dropdown',
      module: 'Incident Management',
      required: true,
      usage: 234,
      status: 'Active'
    },
    {
      id: '4',
      name: 'Training Completion Date',
      description: 'Date when user completed training module',
      type: 'Date',
      module: 'Training Management',
      required: true,
      usage: 445,
      status: 'Active'
    },
    {
      id: '5',
      name: 'Vendor Risk Rating',
      description: 'Risk assessment rating for third-party vendors',
      type: 'Dropdown',
      module: 'Vendor Risk',
      required: true,
      usage: 67,
      status: 'Active'
    },
    {
      id: '6',
      name: 'Data Classification Level',
      description: 'Sensitivity level of data assets',
      type: 'Dropdown',
      module: 'Data Classification',
      required: true,
      usage: 178,
      status: 'Active'
    }
  ];

  // Get unique modules for filter
  const modules = ['All Modules', ...Array.from(new Set(customFields.map(field => field.module)))];

  // Filter logic
  const filteredFields = customFields.filter(field => {
    const matchesSearch = searchQuery === '' || 
      field.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      field.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      field.module.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesModule = moduleFilter === 'All Modules' || field.module === moduleFilter;
    const matchesStatus = statusFilter === 'All Status' || field.status === statusFilter;

    return matchesSearch && matchesModule && matchesStatus;
  });

  // Calculate stats
  const fieldTypeBreakdown = {
    text: customFields.filter(f => f.type === 'Text').length,
    dropdown: customFields.filter(f => f.type === 'Dropdown').length,
    number: customFields.filter(f => f.type === 'Number').length,
    date: customFields.filter(f => f.type === 'Date').length
  };

  const stats = {
    totalFields: customFields.length,
    fieldUsage: customFields.reduce((sum, field) => sum + field.usage, 0),
    moduleCoverage: Array.from(new Set(customFields.map(f => f.module))).length,
    totalModules: 12
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Number':
        return <Hash className="w-4 h-4 text-green-600" />;
      case 'Text':
        return <Type className="w-4 h-4 text-blue-600" />;
      case 'Dropdown':
        return <ChevronDown className="w-4 h-4 text-orange-600" />;
      case 'Date':
        return <Calendar className="w-4 h-4 text-purple-600" />;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Number':
        return 'text-green-600';
      case 'Text':
        return 'text-blue-600';
      case 'Dropdown':
        return 'text-orange-600';
      case 'Date':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Custom Field Manager</h1>
          <p className="text-sm text-gray-600 mt-1">Create and manage dynamic fields for modules</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5" />
          Create Field
        </button>
      </div>

      {/* Custom Fields Table */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        {/* Table Header Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search custom fields..."
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
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {(searchQuery || moduleFilter !== 'All Modules' || statusFilter !== 'All Status') && (
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="text-gray-700">
                Showing <span className="font-semibold">{filteredFields.length}</span> of <span className="font-semibold">{customFields.length}</span> fields
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
                  Field Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Required
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usage
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
              {filteredFields.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <div className="text-lg font-medium mb-1">No fields found</div>
                      <div className="text-sm">Try adjusting your filters or search query</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredFields.map((field) => (
                  <tr key={field.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{field.name}</div>
                      <div className="text-sm text-gray-500">{field.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(field.type)}
                        <span className={`text-sm font-medium ${getTypeColor(field.type)}`}>
                          {field.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{field.module}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        {field.required ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-red-500" />
                            <span className="text-sm text-gray-900">Yes</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-900">No</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{field.usage} times</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-700">
                        {field.status}
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
          {filteredFields.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-500">
                <div className="text-lg font-medium mb-1">No fields found</div>
                <div className="text-sm">Try adjusting your filters or search query</div>
              </div>
            </div>
          ) : (
            filteredFields.map((field) => (
              <div key={field.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{field.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{field.description}</div>
                  </div>
                  <button className="text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    {getTypeIcon(field.type)}
                    <span className="text-gray-500">Type: </span>
                    <span className={`font-medium ${getTypeColor(field.type)}`}>{field.type}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Module: </span>
                    <span className="text-gray-900">{field.module}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Required: </span>
                    {field.required ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-red-500" />
                        <span className="text-gray-900">Yes</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">No</span>
                      </>
                    )}
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Usage: </span>
                    <span className="text-gray-900">{field.usage} times</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-700">
                    {field.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Custom Fields Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Total Custom Fields</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.totalFields}</div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Text Fields</span>
              <span className="font-medium text-gray-900">{fieldTypeBreakdown.text}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Dropdown</span>
              <span className="font-medium text-gray-900">{fieldTypeBreakdown.dropdown}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Number</span>
              <span className="font-medium text-gray-900">{fieldTypeBreakdown.number}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Date</span>
              <span className="font-medium text-gray-900">{fieldTypeBreakdown.date}</span>
            </div>
          </div>
        </div>

        {/* Field Usage Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Field Usage</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.fieldUsage.toLocaleString()}</div>
          <div className="text-sm text-gray-600 mb-2">Total field instances</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Module Coverage Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Module Coverage</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.moduleCoverage}/{stats.totalModules}</div>
          <div className="text-sm text-gray-600 mb-2">Modules with custom fields</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gray-900" 
              style={{ width: `${(stats.moduleCoverage / stats.totalModules) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {CustomFieldManagerApp};