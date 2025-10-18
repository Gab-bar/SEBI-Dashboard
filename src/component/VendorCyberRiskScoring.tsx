import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface RiskCategory {
  title: string;
  description: string;
  items: {
    name: string;
    weight: number;
    score?: number;
  }[];
}

interface Vendor {
  id: string;
  name: string;
  category: string;
  totalScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}

const VendorCyberRiskScoring = () => {
  const [activeTab, setActiveTab] = useState('matrix');

  const riskCategories: RiskCategory[] = [
    {
      title: 'Data Security',
      description: 'Assessment of data protection measures',
      items: [
        { name: 'Data Encryption', weight: 4 },
        { name: 'Access Control', weight: 3 },
        { name: 'Data Backup', weight: 2 },
        { name: 'Data Classification', weight: 2 },
        { name: 'Retention/Disposal', weight: 1 }
      ]
    },
    {
      title: 'Data Classification',
      description: 'Data handling and classification protocols',
      items: [
        { name: 'Data Sensitivity', weight: 3 },
        { name: 'PII Handling', weight: 4 },
        { name: 'Confidential', weight: 3 },
        { name: 'Top Secret', weight: 5 }
      ]
    },
    {
      title: 'Network Security',
      description: 'Network infrastructure protection',
      items: [
        { name: 'Firewall Management', weight: 3 },
        { name: 'DDoS Prevention', weight: 2 },
        { name: 'Intrusion Detection', weight: 4 },
        { name: 'Network Segmentation', weight: 3 }
      ]
    },
    {
      title: 'Geographic Location',
      description: 'Data residency and regulatory compliance',
      items: [
        { name: 'Data Residency', weight: 3 },
        { name: 'Market Coverage', weight: 2 },
        { name: 'Regulatory Compliance', weight: 5 }
      ]
    },
    {
      title: 'Compliance Status',
      description: 'Regulatory and certification compliance',
      items: [
        { name: 'ISO 27001', weight: 4 },
        { name: 'SOC 2 Compliance', weight: 4 },
        { name: 'GDPR Compliance', weight: 5 },
        { name: 'Local Compliance', weight: 3 }
      ]
    },
    {
      title: 'Business Criticality',
      description: 'Impact on business operations',
      items: [
        { name: 'Operational Impact', weight: 5 },
        { name: 'Financial Impact', weight: 4 },
        { name: 'Reputation', weight: 3 }
      ]
    }
  ];

  const currentVendors: Vendor[] = [
    {
      id: '1',
      name: 'CloudStack Solutions Pvt Ltd',
      category: 'Cloud Services',
      totalScore: 85,
      riskLevel: 'Low'
    },
    {
      id: '2',
      name: 'SecureAuth Technologies',
      category: 'Identity Management',
      totalScore: 72,
      riskLevel: 'Medium'
    },
    {
      id: '3',
      name: 'DataShield Inc. Services',
      category: 'Data Protection',
      totalScore: 68,
      riskLevel: 'Medium'
    },
    {
      id: '4',
      name: 'TechGuard InfoSys Ltd',
      category: 'IT Security',
      totalScore: 91,
      riskLevel: 'Low'
    },
    {
      id: '5',
      name: 'Global Software Solutions',
      category: 'Development',
      totalScore: 58,
      riskLevel: 'High'
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'bg-gray-900 text-white';
      case 'Medium':
        return 'bg-gray-700 text-white';
      case 'High':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Vendor Cyber Risk Scoring Matrix</h1>
        </div>
      </div>

      {/* Risk Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-3 gap-6 mb-8">
          {riskCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900">{category.title}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <Info size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mb-4">{category.description}</p>
              
              <div className="space-y-2">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-xs text-gray-700">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        item.weight >= 4 ? 'bg-red-100 text-red-700' : 
                        item.weight >= 3 ? 'bg-orange-100 text-orange-700' : 
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.weight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Risk Score Calculation Info */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 mb-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Risk Score Calculation</h3>
          <div className="grid grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-gray-500">Low Risk:</span>
              <span className="ml-2 font-medium text-gray-900">80-100</span>
            </div>
            <div>
              <span className="text-gray-500">Medium Risk:</span>
              <span className="ml-2 font-medium text-gray-900">60-79</span>
            </div>
            <div>
              <span className="text-gray-500">High Risk:</span>
              <span className="ml-2 font-medium text-gray-900">0-59</span>
            </div>
            <div>
              <span className="text-gray-500">Critical Risk:</span>
              <span className="ml-2 font-medium text-gray-900">0-40</span>
            </div>
          </div>
        </div>

        {/* Current Vendor Risk Scores */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Vendor Risk Scores</h2>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Vendor Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Score
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Risk Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentVendors.map((vendor) => (
                  <tr key={vendor.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{vendor.category}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className={`text-sm font-semibold ${getScoreColor(vendor.totalScore)}`}>
                        {vendor.totalScore}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(vendor.riskLevel)}`}>
                        {vendor.riskLevel}
                      </span>
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

export {VendorCyberRiskScoring};