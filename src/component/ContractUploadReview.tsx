import React, { useState } from 'react';
import { Search, Filter, Upload, MoreVertical } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface Contract {
  id: string;
  vendor: string;
  documentType: string;
  uploadDate: string;
  uploadedBy: string;
  reviewStatus: 'Approved' | 'Under Review' | 'Pending' | 'Rejected';
  reviewer: string;
  reviewDate: string;
  nextReview: string;
  comments?: string;
}

const ContractUploadReview = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contracts: Contract[] = [
    {
      id: '1',
      vendor: 'CloudStack Solutions Pvt Ltd',
      documentType: 'Master Service Agreement',
      uploadDate: 'Thu 03-08-25',
      uploadedBy: 'Risk',
      reviewStatus: 'Approved',
      reviewer: 'Risk Owner',
      reviewDate: 'Contract Rev',
      nextReview: '2025-06-30',
      comments: ''
    },
    {
      id: '2',
      vendor: 'Global Software Solutions',
      documentType: 'Software Development Agreement',
      uploadDate: 'Thu 03-08-25',
      uploadedBy: 'Risk',
      reviewStatus: 'Under Review',
      reviewer: 'High Risk',
      reviewDate: 'High Risk',
      nextReview: '2025-12-30',
      comments: ''
    },
    {
      id: '3',
      vendor: 'DataShield Inc Services',
      documentType: 'Data Processing Agreement',
      uploadDate: 'Thu 03-08-25',
      uploadedBy: 'Risk',
      reviewStatus: 'Under Review',
      reviewer: 'Under Review',
      reviewDate: 'High Risk',
      nextReview: '2025-12-30',
      comments: ''
    }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-txt-primary">Contract Uploads & Review Logs</h1>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-primary-hover transition-colors flex items-center gap-2">
            <Upload size={16} />
            Upload Contract
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="border-b border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-txt-muted" size={20} />
              <input
                type="text"
                placeholder="Search..."
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
        <div className="glass-panel overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-bg border-b border-primary/[0.06]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Vendor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Document Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Upload Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Uploaded By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Review Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Reviewer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Review Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Next Review
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Comments
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-primary/[0.06]">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-surface-bg transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-txt-primary">{contract.vendor}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-txt-primary">{contract.documentType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{contract.uploadDate}</div>
                      <div className="text-xs text-txt-muted">{contract.uploadedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{contract.uploadedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(contract.reviewStatus)}`}>
                        {contract.reviewStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{contract.reviewer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{contract.reviewDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-primary">{contract.nextReview}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-txt-muted">—</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
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
    </div>
  );
};

export  {ContractUploadReview};