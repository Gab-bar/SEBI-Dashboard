import React, { useState } from 'react';
import { Search, Plus, MoreVertical, FolderOpen } from 'lucide-react';

interface MasterDataItem {
  id: string;
  category: string;
  categoryIcon: string;
  name: string;
  description: string;
  code: string;
  records: number;
  status: 'Active' | 'Inactive';
  lastUpdated: string;
}

const MasterDataManagementApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const masterData: MasterDataItem[] = [
    {
      id: '1',
      category: 'Departments',
      categoryIcon: 'folder',
      name: 'Information Technology',
      description: 'Technology and systems management',
      code: 'IT',
      records: 25,
      status: 'Active',
      lastUpdated: '2024-03-20'
    },
    {
      id: '2',
      category: 'Compliance Frameworks',
      categoryIcon: 'folder',
      name: 'SEBI Regulations',
      description: 'Securities and Exchange Board of India guidelines',
      code: 'SEBI',
      records: 147,
      status: 'Active',
      lastUpdated: '2024-03-18'
    },
    {
      id: '3',
      category: 'Risk Categories',
      categoryIcon: 'folder',
      name: 'Cybersecurity Risk',
      description: 'Information security and cyber threat risks',
      code: 'CYBER',
      records: 52,
      status: 'Active',
      lastUpdated: '2024-03-19'
    },
    {
      id: '4',
      category: 'Locations',
      categoryIcon: 'folder',
      name: 'Mumbai Head Office',
      description: 'Primary business location in Mumbai',
      code: 'MUM-HO',
      records: 156,
      status: 'Active',
      lastUpdated: '2024-03-15'
    },
    {
      id: '5',
      category: 'Asset Types',
      categoryIcon: 'folder',
      name: 'Server Hardware',
      description: 'Physical and virtual server infrastructure',
      code: 'SRV',
      records: 89,
      status: 'Active',
      lastUpdated: '2024-03-17'
    },
    {
      id: '6',
      category: 'Vendor Classifications',
      categoryIcon: 'folder',
      name: 'Critical Service Provider',
      description: 'Vendors providing business-critical services',
      code: 'CSP',
      records: 23,
      status: 'Active',
      lastUpdated: '2024-03-16'
    },
    {
      id: '7',
      category: 'Incident Severity',
      categoryIcon: 'folder',
      name: 'High Priority',
      description: 'Business-critical incidents requiring immediate attention',
      code: 'P1',
      records: 8,
      status: 'Active',
      lastUpdated: '2024-03-14'
    }
  ];

  // Filter logic
  const filteredData = masterData.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'All Categories' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'All Status' || item.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Get unique categories for filter
  const categories = ['All Categories', ...Array.from(new Set(masterData.map(item => item.category)))];

  // Calculate stats
  const stats = {
    dataQualityScore: 94,
    activeCategories: Array.from(new Set(masterData.map(item => item.category))).length,
    totalRecords: masterData.reduce((sum, item) => sum + item.records, 0),
    recentUpdates: 23
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Master Data Management</h1>
          <p className="text-sm text-gray-600 mt-1">Manage system configuration and reference data</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          <Plus className="w-5 h-5" />
          Add Master Data
        </button>
      </div>

      {/* Master Data Table */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        {/* Table Header Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search master data..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
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
        {(searchQuery || categoryFilter !== 'All Categories' || statusFilter !== 'All Status') && (
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="text-gray-700">
                Showing <span className="font-semibold">{filteredData.length}</span> of <span className="font-semibold">{masterData.length}</span> items
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
                {categoryFilter !== 'All Categories' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    Category: {categoryFilter}
                    <button 
                      onClick={() => setCategoryFilter('All Categories')}
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
                    setCategoryFilter('All Categories');
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
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Records
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <div className="text-lg font-medium mb-1">No data found</div>
                      <div className="text-sm">Try adjusting your filters or search query</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <FolderOpen className="w-5 h-5 text-blue-500" />
                        <span className="text-sm text-gray-900">{item.category}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-mono">{item.code}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.records}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-700">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.lastUpdated}</div>
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
          {filteredData.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-500">
                <div className="text-lg font-medium mb-1">No data found</div>
                <div className="text-sm">Try adjusting your filters or search query</div>
              </div>
            </div>
          ) : (
            filteredData.map((item) => (
              <div key={item.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                  </div>
                  <button className="text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FolderOpen className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-500">Category: </span>
                    <span className="text-gray-900">{item.category}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Code: </span>
                    <span className="text-gray-900 font-mono">{item.code}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Records: </span>
                    <span className="text-gray-900">{item.records}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Updated: </span>
                    <span className="text-gray-900">{item.lastUpdated}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-700">
                    {item.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Data Quality Score Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Data Quality Score</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.dataQualityScore}%</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-gray-900" style={{ width: `${stats.dataQualityScore}%` }}></div>
          </div>
          <div className="text-sm text-gray-600">Excellent data consistency</div>
        </div>

        {/* Active Categories Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Active Categories</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.activeCategories}</div>
          <div className="text-sm text-gray-600 mb-2">{stats.totalRecords} total records</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Recent Updates Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Recent Updates</div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{stats.recentUpdates}</div>
          <div className="text-sm text-gray-600 mb-2">This month</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MasterDataManagementApp };