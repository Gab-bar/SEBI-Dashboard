import React, { useState } from 'react';
import { FileText, Search, Filter, MoreVertical } from 'lucide-react';

interface Policy {
  id: string;
  name: string;
  policyCode: string;
  size: string;
  downloads: number;
  category: string;
  version: string;
  status: 'Approved' | 'Under Review' | 'Draft';
  owner: string;
  approver: string;
  priority: 'Critical' | 'High' | 'Medium';
  lastUpdated: string;
}

const CybersecurityPolicyRepository = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Master Policy List');

  const tabs = ['Master Policy List', 'Version Control', 'Approval Workflow', 'Access Logs', 'Regulatory Sharing'];

  const policies: Policy[] = [
    {
      id: '1',
      name: 'Information Security Management System (ISMS) Policy',
      policyCode: 'POL-001',
      size: '2.3 MB',
      downloads: 45,
      category: 'Core Security',
      version: 'v3.2',
      status: 'Approved',
      owner: 'CISO',
      approver: 'Board of Directors',
      priority: 'Critical',
      lastUpdated: '2024-11-15'
    },
    {
      id: '2',
      name: 'Access Control Policy',
      policyCode: 'POL-002',
      size: '1.8 MB',
      downloads: 23,
      category: 'Access Management',
      version: 'v2.1',
      status: 'Under Review',
      owner: 'IAM Team Lead',
      approver: 'CISO',
      priority: 'High',
      lastUpdated: '2024-11-10'
    },
    {
      id: '3',
      name: 'Data Loss Prevention (DLP) Policy',
      policyCode: 'POL-003',
      size: '1.5 MB',
      downloads: 12,
      category: 'Data Protection',
      version: 'v1.5',
      status: 'Draft',
      owner: 'Data Protection Officer',
      approver: 'Compliance Officer',
      priority: 'High',
      lastUpdated: '2024-11-08'
    },
    {
      id: '4',
      name: 'Incident Response Plan',
      policyCode: 'POL-004',
      size: '3.1 MB',
      downloads: 67,
      category: 'Incident Management',
      version: 'v4.0',
      status: 'Approved',
      owner: 'SOC Manager',
      approver: 'CISO',
      priority: 'Critical',
      lastUpdated: '2024-10-25'
    },
    {
      id: '5',
      name: 'Vendor Management Policy',
      policyCode: 'POL-005',
      size: '2.0 MB',
      downloads: 34,
      category: 'Third Party Risk',
      version: 'v2.3',
      status: 'Approved',
      owner: 'Risk Manager',
      approver: 'Board of Directors',
      priority: 'Medium',
      lastUpdated: '2024-10-20'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-gray-900 text-white';
      case 'Under Review':
        return 'bg-gray-600 text-white';
      case 'Draft':
        return 'bg-gray-400 text-white';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-red-400 text-white';
      case 'Medium':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity Policy Repository</h1>
          
          {/* Tabs */}
          {/* <div className="flex gap-8 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 flex items-center gap-2 text-gray-700">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Policy Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
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
              {policies.map((policy) => (
                <tr key={policy.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <FileText className="text-gray-400 mt-1" size={18} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{policy.name}</div>
                        <div className="text-xs text-gray-500">
                          {policy.policyCode} • {policy.size} • {policy.downloads} downloads
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{policy.category}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{policy.version}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(policy.status)}`}>
                      {policy.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{policy.owner}</div>
                    <div className="text-xs text-gray-500">Approver: {policy.approver}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(policy.priority)}`}>
                      {policy.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{policy.lastUpdated}</div>
                    <div className="text-xs text-gray-500">Next: 2024 12 15</div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
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
  );
};

export default CybersecurityPolicyRepository;