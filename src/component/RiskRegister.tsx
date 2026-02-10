import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal } from 'lucide-react';
import { getSeverityClass, getStatusClass } from '@/lib/colors';

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
  const getScoreBarWidth = (score: number) => {
    return `${(score / 12) * 100}%`;
  };

  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Risk Register</h1>
          
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted" size={18} />
              <input
                type="text"
                placeholder="Search risks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent w-64"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 border border-primary/[0.08] rounded-lg hover:bg-surface-bg transition-colors">
                <span className="text-txt-primary">{selectedCategory}</span>
                <ChevronDown size={18} className="text-txt-muted" />
              </button>
            </div>

            {/* Level Filter */}
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 border border-primary/[0.08] rounded-lg hover:bg-surface-bg transition-colors">
                <span className="text-txt-primary">{selectedLevel}</span>
                <ChevronDown size={18} className="text-txt-muted" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-primary/[0.06] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Risk</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Category</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Risk Level</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Current Score</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Owner</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Next Review</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {risks.map((risk) => (
                <tr key={risk.id} className="hover:bg-surface-bg transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-txt-primary">{risk.risk}</div>
                      <div className="text-sm text-txt-muted">{risk.riskId}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{risk.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getSeverityClass(risk.riskLevel)}`}>
                      {risk.riskLevel}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-txt-primary font-medium min-w-[20px]">{risk.currentScore}</span>
                      <div className="flex-1 progress-track w-16" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                        <div 
                          className="progress-fill"
                          style={{ width: getScoreBarWidth(risk.currentScore) }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{risk.owner}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={risk.status === 'Controlled' ? getStatusClass(risk.status) : `${getStatusClass(risk.status)}`}>
                      {risk.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{risk.nextReview}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-txt-muted hover:text-txt-secondary transition-colors">
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
    </div>
  );
};

export  {RiskRegister};