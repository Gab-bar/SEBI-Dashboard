import React, { useState } from 'react';
import { FileText, Search, Filter, MoreVertical } from 'lucide-react';
import { getPriorityClass, getStatusClass } from '@/lib/colors';

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
  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <div className="bg-white border-b border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-txt-primary mb-4">Cybersecurity Policy Repository</h1>
          
          {/* Tabs */}
          {/* <div className="flex gap-8 border-b border-primary/[0.06]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? 'text-txt-primary border-b-2 border-gray-900'
                    : 'text-txt-muted hover:text-txt-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white border-b border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-txt-muted" size={20} />
              <input
                type="text"
                placeholder="Search policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-ring"
              />
            </div>
            <button className="px-4 py-2 border border-primary/[0.08] rounded-lg bg-white hover:bg-surface-bg flex items-center gap-2 text-txt-primary">
              <Filter size={18} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="glass-panel border border-primary/[0.06] overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Policy Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Version
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Owner
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-primary/[0.06]">
              {policies.map((policy) => (
                <tr key={policy.id} className="hover:bg-surface-bg transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-3">
                      <FileText className="text-txt-muted mt-1" size={18} />
                      <div>
                        <div className="text-sm font-medium text-txt-primary">{policy.name}</div>
                        <div className="text-xs text-txt-muted">
                          {policy.policyCode} • {policy.size} • {policy.downloads} downloads
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-txt-primary">{policy.category}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-txt-primary">{policy.version}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(policy.status)}`}>
                      {policy.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-txt-primary">{policy.owner}</div>
                    <div className="text-xs text-txt-muted">Approver: {policy.approver}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityClass(policy.priority)}`}>
                      {policy.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-txt-primary">{policy.lastUpdated}</div>
                    <div className="text-xs text-txt-muted">Next: 2024 12 15</div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-txt-muted hover:text-txt-secondary">
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