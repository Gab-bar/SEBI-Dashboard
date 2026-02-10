import React, { useState } from 'react';
import { Search, Eye, Download, RotateCcw } from 'lucide-react';

interface PolicyVersion {
  policy: string;
  policyId: string;
  fileSize: string;
  version: string;
  date: string;
  approved: string;
  author: string;
  approvedBy: string;
  changes: string;
  changeType: 'Major' | 'Minor';
  status: 'Current' | 'Previous' | 'Under Review';
}

const PolicyVersionControl = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const policyData: PolicyVersion[] = [
    {
      policy: 'ISMS Policy',
      policyId: 'POL-001',
      fileSize: '2.3 MB',
      version: 'v3.2',
      date: '2024-11-15',
      approved: '2024-11-14',
      author: 'John Doe',
      approvedBy: 'Board of Directors',
      changes: 'Updated compliance requirements for SEBI guidelines',
      changeType: 'Major',
      status: 'Current'
    },
    {
      policy: 'ISMS Policy',
      policyId: 'POL-001',
      fileSize: '2.1 MB',
      version: 'v3.1',
      date: '2024-10-15',
      approved: '2024-10-14',
      author: 'Jane Smith',
      approvedBy: 'CISO',
      changes: 'Added new encryption standards',
      changeType: 'Minor',
      status: 'Previous'
    },
    {
      policy: 'ISMS Policy',
      policyId: 'POL-001',
      fileSize: '2.0 MB',
      version: 'v3.0',
      date: '2024-09-15',
      approved: '2024-09-10',
      author: 'John Doe',
      approvedBy: 'Board of Directors',
      changes: 'Major revision for annual review',
      changeType: 'Major',
      status: 'Previous'
    },
    {
      policy: 'Access Control Policy',
      policyId: 'POL-002',
      fileSize: '1.8 MB',
      version: 'v2.1',
      date: '2024-11-10',
      approved: '2024-11-10',
      author: 'Alice Johnson',
      approvedBy: 'CISO',
      changes: 'Added MFA requirements',
      changeType: 'Minor',
      status: 'Under Review'
    }
  ];

  const filteredData = policyData.filter(item =>
    item.policy.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-txt-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h1 className="section-header-title">Policy Version Control & History</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-5 h-5" />
              <input
                type="text"
                placeholder="Search versions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-primary/[0.08] rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary-ring"
              />
            </div>
            <button className="px-4 py-2 bg-white border border-primary/[0.08] rounded-lg text-txt-primary hover:bg-surface-bg font-medium">
              Compare Versions
            </button>
            <button className="px-4 py-2 bg-white border border-primary/[0.08] rounded-lg text-txt-primary hover:bg-surface-bg font-medium">
              Rollback
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="glass-panel border border-primary/[0.06] overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Policy</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Version</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Author</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Changes</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Change Type</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-surface-bg transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-txt-primary">{item.policy}</div>
                      <div className="text-sm text-txt-muted">{item.policyId} • {item.fileSize}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-txt-primary">{item.version}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-txt-primary">{item.date}</div>
                      <div className="text-sm text-txt-muted">Approved: {item.approved}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-txt-primary">{item.author}</div>
                      <div className="text-sm text-txt-muted">Approved by: {item.approvedBy}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{item.changes}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      item.changeType === 'Major' 
                        ? 'bg-critical-soft text-critical' 
                        : 'bg-gray-100 text-txt-primary'
                    }`}>
                      {item.changeType}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Current' 
                        ? 'bg-primary text-white' 
                        : item.status === 'Under Review'
                        ? 'bg-gray-100 text-txt-primary'
                        : 'bg-gray-100 text-txt-primary'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <button className="text-txt-secondary hover:text-txt-primary" title="View">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-txt-secondary hover:text-txt-primary" title="Download">
                        <Download className="w-5 h-5" />
                      </button>
                      {item.status !== 'Current' && (
                        <button className="text-txt-secondary hover:text-txt-primary" title="Restore">
                          <RotateCcw className="w-5 h-5" />
                        </button>
                      )}
                    </div>
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

export default PolicyVersionControl;