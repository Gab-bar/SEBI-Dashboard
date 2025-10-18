import React, { useState } from 'react';
import { Search, Eye, Edit } from 'lucide-react';

interface Gap {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium';
  risk: 'Critical Risk' | 'High Risk' | 'Medium Risk' | 'Low Risk';
  status: 'In Progress' | 'Planning' | 'Approved' | 'Not Started';
  description: string;
  currentState: string;
  requiredState: string;
  estimatedCost: string;
  timeframe: string;
  owner: string;
  impact: string;
}

const GapAnalysisDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('Priority');

  const gaps: Gap[] = [
    {
      id: '1',
      title: 'Data Loss Prevention',
      severity: 'Critical',
      risk: 'High Risk',
      status: 'In Progress',
      description: 'Missing web, mobile, and endpoint DLP coverage',
      currentState: 'Email DLP implemented',
      requiredState: 'Full DLP coverage (Email, Web, Mobile, Endpoint)',
      estimatedCost: '₹25,00,000',
      timeframe: '3 months',
      owner: 'Data Protection Officer',
      impact: 'Potential data leakage through unmonitored channels'
    },
    {
      id: '2',
      title: 'Incident Response',
      severity: 'Critical',
      risk: 'Critical Risk',
      status: 'Planning',
      description: 'No dedicated IR team, procedures not tested',
      currentState: 'Draft procedures available',
      requiredState: 'Fully operational IR team with tested procedures',
      estimatedCost: '₹15,00,000',
      timeframe: '2 months',
      owner: 'CISO',
      impact: 'Delayed incident response, potential regulatory violations'
    },
    {
      id: '3',
      title: 'Network Monitoring',
      severity: 'High',
      risk: 'Medium Risk',
      status: 'Approved',
      description: 'No real-time network monitoring or SIEM',
      currentState: 'Basic firewall logging',
      requiredState: '24x7 network monitoring with SIEM integration',
      estimatedCost: '₹35,00,000',
      timeframe: '4 months',
      owner: 'SOC Manager',
      impact: 'Delayed detection of network-based attacks'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-red-500 text-white';
      case 'Medium':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical Risk':
        return 'bg-red-500 text-white';
      case 'High Risk':
        return 'bg-red-500 text-white';
      case 'Medium Risk':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-green-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-white text-blue-700 border border-blue-300';
      case 'Planning':
        return 'bg-white text-gray-700 border border-gray-300';
      case 'Approved':
        return 'bg-white text-green-700 border border-green-300';
      default:
        return 'bg-white text-gray-700 border border-gray-300';
    }
  };

  const filteredGaps = gaps.filter(gap =>
    gap.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gap.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gap.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Gap Analysis Dashboard
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search gaps..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option>Priority</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Gap Cards */}
        <div className="space-y-4">
          {filteredGaps.map((gap) => (
            <div
              key={gap.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                      {gap.title}
                    </h2>
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full ${getSeverityColor(gap.severity)}`}>
                      {gap.severity}
                    </span>
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full ${getRiskColor(gap.risk)}`}>
                      {gap.risk}
                    </span>
                    <span className={`inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full ${getStatusColor(gap.status)}`}>
                      {gap.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{gap.description}</p>
                </div>
                
                <div className="flex gap-2 lg:ml-4">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span className="hidden sm:inline">View</span>
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Edit className="w-4 h-4" />
                    <span className="hidden sm:inline">Update</span>
                  </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-1">Current State:</h3>
                  <p className="text-sm text-gray-600">{gap.currentState}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-1">Required State:</h3>
                  <p className="text-sm text-gray-600">{gap.requiredState}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-1">Estimated Cost:</h3>
                  <p className="text-sm text-gray-600">{gap.estimatedCost}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-gray-900 mb-1">Timeframe:</h3>
                  <p className="text-sm text-gray-600">{gap.timeframe}</p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-900">Owner:</span>
                  <span className="text-sm text-gray-600">{gap.owner}</span>
                </div>
                <div className="flex items-start gap-2 sm:flex-1">
                  <span className="text-xs font-semibold text-gray-900 whitespace-nowrap">Impact:</span>
                  <span className="text-sm text-gray-600">{gap.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGaps.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <p className="text-gray-500">No gaps found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { GapAnalysisDashboard };