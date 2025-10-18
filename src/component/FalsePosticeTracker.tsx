import React, { useState } from 'react';
import { Search, MoreVertical } from 'lucide-react';

interface FalsePositive {
  id: string;
  incidentId: string;
  date: string;
  severity: 'High' | 'Medium' | 'Low' | 'Critical';
  reason: string;
  description: string;
  detectedBy: string;
  status: 'Resolved' | 'Under Review' | 'Investigating';
  resolution: string;
  comments?: string;
}

const FalsePositiveTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const falsePositives: FalsePositive[] = [
    {
      id: '1',
      incidentId: 'INC-FP-001',
      date: '2024-11-25',
      severity: 'High',
      reason: 'Suspicious download from a known IP to Firewall',
      description: 'Alert triggered due to accessing admin panel from non-whitelisted IP address',
      detectedBy: 'Security',
      status: 'Resolved',
      resolution: 'Confirmed legitimate business review of longer "string business rules"',
      comments: ''
    },
    {
      id: '2',
      incidentId: 'INC-FP-002',
      date: '2024-11-18',
      severity: 'High',
      reason: 'Email malicious attachment scoring positive',
      description: 'Automated email scanning flagged attachment as malicious based on binary',
      detectedBy: 'High',
      status: 'Resolved',
      resolution: 'Adjusted threshold checking on same file, but not malicious vs FP filter',
      comments: ''
    },
    {
      id: '3',
      incidentId: 'INC-FP-003',
      date: '2024-11-15',
      severity: 'Critical',
      reason: 'Unauthorized database backup & similar change',
      description: 'Database backup activity triggered unauthorized access alert from configuration tool',
      detectedBy: 'Medium',
      status: 'Resolved',
      resolution: 'Added condition checking to note, IP restriction',
      comments: ''
    },
    {
      id: '4',
      incidentId: 'INC-FP-004',
      date: '2024-11-10',
      severity: 'Medium',
      reason: 'Possible ransomware detection, flagged downloads',
      description: 'File encryption patterns detected during standard backup procedures',
      detectedBy: 'Medium',
      status: 'Resolved',
      resolution: 'Updated whitelist rules for authorized backup pattern',
      comments: ''
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-600 text-white';
      case 'High':
        return 'bg-red-500 text-white';
      case 'Medium':
        return 'bg-orange-500 text-white';
      case 'Low':
        return 'bg-yellow-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved':
        return 'bg-gray-900 text-white';
      case 'Under Review':
        return 'bg-orange-500 text-white';
      case 'Investigating':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">False Positive Tracker</h1>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors">
            Record New Incident
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Incident ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Severity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reason
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Detected By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Resolution
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Comments
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {falsePositives.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.incidentId}</div>
                      <div className="text-xs text-gray-500">{item.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(item.severity)}`}>
                        {item.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md">
                        <div className="font-medium mb-1">{item.reason}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.detectedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-md">{item.resolution}</div>
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

export {FalsePositiveTracker};