import React, { useState } from 'react';
import { Search, Building2, Users, MoreVertical, ChevronDown, ChevronRight } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  costCenter: string;
  head: string;
  users: number;
  roles: number;
  location: string;
  status: 'Active' | 'Inactive';
  children?: Department[];
}

const DepartmentMappingHierarchy = () => {
  const [activeView, setActiveView] = useState<'mapping' | 'hierarchy'>('mapping');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set(['2', '3']));

  const departments: Department[] = [
    {
      id: '1',
      name: 'Information Technology',
      costCenter: 'IT-001',
      head: 'Rajesh Kumar',
      users: 25,
      roles: 3,
      location: 'Mumbai',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Compliance & Risk',
      costCenter: 'CR-002',
      head: 'Priya Sharma',
      users: 18,
      roles: 3,
      location: 'Mumbai',
      status: 'Active',
      children: [
        {
          id: '2-1',
          name: 'Internal Audit',
          costCenter: 'IA-003',
          head: 'Suresh Patel',
          users: 12,
          roles: 3,
          location: 'Delhi',
          status: 'Active'
        }
      ]
    },
    {
      id: '3',
      name: 'Operations',
      costCenter: 'OP-004',
      head: 'Anjali Singh',
      users: 45,
      roles: 2,
      location: 'Mumbai',
      status: 'Active',
      children: [
        {
          id: '3-1',
          name: 'Trading',
          costCenter: 'TR-005',
          head: 'Vikram Malhotra',
          users: 32,
          roles: 3,
          location: 'Mumbai',
          status: 'Active'
        }
      ]
    },
    {
      id: '4',
      name: 'Human Resources',
      costCenter: 'HR-006',
      head: 'Meera Joshi',
      users: 15,
      roles: 2,
      location: 'Mumbai',
      status: 'Active'
    },
    {
      id: '5',
      name: 'Finance',
      costCenter: 'FN-007',
      head: 'Rohit Gupta',
      users: 28,
      roles: 3,
      location: 'Delhi',
      status: 'Active'
    }
  ];

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedDepts);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedDepts(newExpanded);
  };

  const renderDepartmentRow = (dept: Department, level: number = 0) => {
    const hasChildren = dept.children && dept.children.length > 0;
    const isExpanded = expandedDepts.has(dept.id);

    return (
      <React.Fragment key={dept.id}>
        <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
          <td className="px-4 lg:px-6 py-4">
            <div className="flex items-center gap-2" style={{ paddingLeft: `${level * 24}px` }}>
              {hasChildren && (
                <button
                  onClick={() => toggleExpand(dept.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
              )}
              {!hasChildren && level > 0 && <div className="w-4" />}
              <div>
                <div className="text-sm font-medium text-gray-900">{dept.name}</div>
                <div className="text-xs text-gray-500">Cost Center: {dept.costCenter}</div>
              </div>
            </div>
          </td>
          <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-400" />
              <span className="text-sm text-gray-900">{dept.head}</span>
            </div>
          </td>
          <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
              {dept.users} users
            </span>
          </td>
          <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-gray-900">{dept.roles} roles assigned</span>
          </td>
          <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
            <span className="text-sm text-gray-900">{dept.location}</span>
          </td>
          <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
            <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              {dept.status}
            </span>
          </td>
          <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-right">
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={18} />
            </button>
          </td>
        </tr>
        {hasChildren && isExpanded && dept.children?.map(child => renderDepartmentRow(child, level + 1))}
      </React.Fragment>
    );
  };

  const renderHierarchyItem = (dept: Department, level: number = 0) => {
    const hasChildren = dept.children && dept.children.length > 0;
    const isExpanded = expandedDepts.has(dept.id);

    return (
      <div key={dept.id} className="mb-3">
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              {hasChildren && (
                <button
                  onClick={() => toggleExpand(dept.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>
              )}
              <Building2 size={20} className="text-blue-500" />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-gray-900">{dept.name}</h3>
                  <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                    {dept.users} users
                  </span>
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              {dept.status}
            </span>
          </div>
        </div>
        {hasChildren && isExpanded && dept.children && (
          <div className="ml-8 mt-2 border-l-2 border-gray-200 pl-4">
            {dept.children.map(child => renderHierarchyItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Department Mapping View */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Department Mapping</h1>
              <p className="text-sm text-gray-500 mt-1">Organizational structure and user-department relationships</p>
            </div>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2 w-full lg:w-auto justify-center">
              <Building2 size={16} />
              Add Department
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Table View */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department Head
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Users
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Roles
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {departments.map(dept => renderDepartmentRow(dept))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Department Hierarchy View */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Department Hierarchy</h2>
            <p className="text-sm text-gray-500 mt-1">Organizational structure and reporting relationships</p>
          </div>
          
          <div className="space-y-2">
            {departments.map(dept => renderHierarchyItem(dept))}
          </div>
        </div>
      </div>
    </div>
  );
};

export {DepartmentMappingHierarchy};