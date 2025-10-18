import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal } from 'lucide-react';

interface Risk {
  id: string;
  risk: string;
  riskId: string;
  category: string;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  currentScore: number;
  owner: string;
  status: 'Active' | 'Monitoring' | 'Controlled';
  nextReview: string;
}

const RiskRegister = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  const [risks] = useState<Risk[]>([
    {
      id: '1',
      risk: 'Cyber Attack on Trading System',
      riskId: 'RISK-001',
      category: 'Cybersecurity',
      riskLevel: 'Critical',
      currentScore: 12,
      owner: 'CISO',
      status: 'Active',
      nextReview: '2024-12-15'
    },
    {
      id: '2',
      risk: 'Data Breach - Client Information',
      riskId: 'RISK-002',
      category: 'Data Protection',
      riskLevel: 'High',
      currentScore: 9,
      owner: 'Data Protection Officer',
      status: 'Active',
      nextReview: '2024-12-10'
    },
    {
      id: '3',
      risk: 'Vendor Security Breach',
      riskId: 'RISK-003',
      category: 'Third Party',
      riskLevel: 'Medium',
      currentScore: 8,
      owner: 'Vendor Risk Manager',
      status: 'Monitoring',
      nextReview: '2024-12-05'
    },
    {
      id: '4',
      risk: 'Regulatory Non-Compliance',
      riskId: 'RISK-004',
      category: 'Compliance',
      riskLevel: 'Low',
      currentScore: 4,
      owner: 'Compliance Officer',
      status: 'Controlled',
      nextReview: '2024-12-20'
    },
    {
      id: '5',
      risk: 'Insider Threat - Privileged Access',
      riskId: 'RISK-005',
      category: 'People',
      riskLevel: 'Medium',
      currentScore: 5,
      owner: 'HR Security',
      status: 'Active',
      nextReview: '2024-12-08'
    }
  ]);

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-gray-700 text-white';
      case 'Medium':
        return 'bg-gray-500 text-white';
      case 'Low':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-gray-700';
      case 'Monitoring':
        return 'text-gray-700';
      case 'Controlled':
        return 'bg-gray-900 text-white px-3 py-1 rounded-full';
      default:
        return 'text-gray-700';
    }
  };

  const getScoreBarWidth = (score: number) => {
    return `${(score / 12) * 100}%`;
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Risk Register</h1>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search risks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-64"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700">{selectedCategory}</span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
            </div>

            {/* Level Filter */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-gray-700">{selectedLevel}</span>
                <ChevronDown size={18} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Risk</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Category</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Risk Level</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Current Score</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Owner</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Next Review</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {risks.map((risk) => (
                <tr key={risk.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{risk.risk}</div>
                      <div className="text-sm text-gray-500">{risk.riskId}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{risk.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getRiskLevelColor(risk.riskLevel)}`}>
                      {risk.riskLevel}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-900 font-medium min-w-[20px]">{risk.currentScore}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-16">
                        <div 
                          className="bg-gray-900 h-2 rounded-full"
                          style={{ width: getScoreBarWidth(risk.currentScore) }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{risk.owner}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={risk.status === 'Controlled' ? getStatusColor(risk.status) : `${getStatusColor(risk.status)}`}>
                      {risk.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{risk.nextReview}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreHorizontal size={20} />
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

export  {RiskRegister};