import React, { useState } from 'react';
import { Search, Filter, Upload, MoreVertical } from 'lucide-react';

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-gray-900 text-white';
      case 'Under Review':
        return 'bg-gray-700 text-white';
      case 'Pending':
        return 'bg-gray-400 text-white';
      case 'Rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Contract Uploads & Review Logs</h1>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
            <Upload size={16} />
            Upload Contract
          </button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
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
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vendor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Upload Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Uploaded By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Review Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reviewer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Review Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Review
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comments
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contracts.map((contract) => (
                  <tr key={contract.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{contract.vendor}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{contract.documentType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{contract.uploadDate}</div>
                      <div className="text-xs text-gray-500">{contract.uploadedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{contract.uploadedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contract.reviewStatus)}`}>
                        {contract.reviewStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{contract.reviewer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{contract.reviewDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{contract.nextReview}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">—</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
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
    </div>
  );
};

export  {ContractUploadReview};