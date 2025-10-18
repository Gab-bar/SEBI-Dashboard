import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertCircle } from 'lucide-react';

interface Policy {
  id: string;
  title: string;
  type: string;
  tags: string[];
  date: string;
  description: string;
  metrics: {
    incidents: { value: string; label: string; color: string };
    violations: { value: string; label: string; color: string };
    blocked: { value: string; label: string; color: string };
    alerts: { value: string; label: string; color: string };
  };
  riskAreas: {
    name: string;
    status: string;
    description: string;
  }[];
  applicableTags?: string[];
  isExpanded: boolean;
}

const DLPPolicyManagement = () => {
  const [policies, setPolicies] = useState<Policy[]>([
    {
      id: '1',
      title: 'Financial Data Protection Policy',
      type: 'Active',
      tags: ['Critical'],
      date: 'Last Run: 2H (Today) | Set Financial data Protected Policy',
      description: 'Monitors and restricts financial data transfer. Covers: Credit card data, bank account information, financial records.',
      metrics: {
        incidents: { value: '94.5', label: 'Incidents', color: 'bg-blue-50' },
        violations: { value: '3.2%', label: 'Policy Violations', color: 'bg-orange-50' },
        blocked: { value: '450', label: 'Items Blocked', color: 'bg-green-50' },
        alerts: { value: '2', label: 'High Alerts', color: 'bg-gray-50' }
      },
      riskAreas: [
        { name: 'Risk Areas', status: 'High', description: 'Block transfer to external' },
        { name: 'Block Transfers via Email', status: 'Active', description: 'Prevent unauthorized external transfers' },
        { name: 'Monitor Financial Distribution', status: 'Active', description: 'Continuous monitoring of all financial data' }
      ],
      applicableTags: ['Finance Dept', 'Compliance', 'External Transfers', 'Cloud Services', 'Audit Reports Q3, Q4', 'Expires On Q1, Q2'],
      isExpanded: false
    },
    {
      id: '2',
      title: 'Personal Data Protection Policy',
      type: 'Active',
      tags: ['High'],
      date: 'Last Run: 28H (Today) | Set Financial data Protected Policy',
      description: 'PII protection all type of personal data (name, SSN, address, email etc) Monitoring of data handling across all systems and controls.',
      metrics: {
        incidents: { value: '91%', label: 'Incidents', color: 'bg-blue-50' },
        violations: { value: '6.1%', label: 'Policy Violations', color: 'bg-orange-50' },
        blocked: { value: '462', label: 'Items Blocked', color: 'bg-green-50' },
        alerts: { value: '2', label: 'High Alerts', color: 'bg-gray-50' }
      },
      riskAreas: [
        { name: 'Risk Areas', status: 'Critical', description: 'Protect personal data' },
        { name: 'Block Transfers to Personal', status: 'Active', description: 'Block unauthorized access' }
      ],
      applicableTags: ['GDPR', 'HR Dept', 'Personal Data', 'Access Logs'],
      isExpanded: false
    },
    {
      id: '3',
      title: 'Intellectual Property Protection',
      type: 'Active',
      tags: ['High'],
      date: 'Last Run: Q3Y Tracker - R Tracking (Feb) 2025',
      description: 'Protects proprietary information and trade secrets. Includes...',
      metrics: {
        incidents: { value: '89%', label: 'Incidents', color: 'bg-blue-50' },
        violations: { value: '7.3%', label: 'Policy Violations', color: 'bg-orange-50' },
        blocked: { value: '245', label: 'Items Blocked', color: 'bg-green-50' },
        alerts: { value: '1', label: 'High Alerts', color: 'bg-gray-50' }
      },
      riskAreas: [
        { name: 'Risk Areas', status: 'High', description: 'Product Development & R&D' },
        { name: 'Restrict Data Repository', status: 'Active', description: 'Monitor engineering repositories' }
      ],
      applicableTags: ['Source Ctrl', 'Patents, Meta-team', 'Business Innovation'],
      isExpanded: false
    }
  ]);

  const toggleExpand = (id: string) => {
    setPolicies(policies.map(policy => 
      policy.id === id ? { ...policy, isExpanded: !policy.isExpanded } : policy
    ));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Active':
        return 'bg-gray-900 text-white';
      case 'Inactive':
        return 'bg-gray-400 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Critical':
        return 'bg-red-600 text-white';
      case 'High':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-gray-900 text-white';
      case 'Critical':
      case 'High':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">DLP Policy Management</h1>
            <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
              Create Policy
            </button>
          </div>
        </div>
      </div>

      {/* Policies List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {policies.map((policy) => (
          <div key={policy.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                  <button
                    onClick={() => toggleExpand(policy.id)}
                    className="mt-1 text-gray-400 hover:text-gray-600 flex-shrink-0"
                  >
                    {policy.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                        {policy.title}
                      </h2>
                      <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getTypeColor(policy.type)} flex-shrink-0`}>
                        {policy.type}
                      </span>
                      {policy.tags.map((tag, idx) => (
                        <span key={idx} className={`px-2.5 py-0.5 rounded text-xs font-medium ${getTagColor(tag)} flex-shrink-0`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="break-words">{policy.date}</div>
                      <div className="break-words">{policy.description}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`p-3 sm:p-4 rounded-lg text-center ${policy.metrics.incidents.color}`}>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {policy.metrics.incidents.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{policy.metrics.incidents.label}</div>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg text-center ${policy.metrics.violations.color}`}>
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                    {policy.metrics.violations.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{policy.metrics.violations.label}</div>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg text-center ${policy.metrics.blocked.color}`}>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {policy.metrics.blocked.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{policy.metrics.blocked.label}</div>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg text-center ${policy.metrics.alerts.color}`}>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {policy.metrics.alerts.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{policy.metrics.alerts.label}</div>
                </div>
              </div>

              {/* Risk Areas */}
              <div className="space-y-2 sm:space-y-3 mb-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700">Risk Areas:</h3>
                {policy.riskAreas.map((area, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-gray-100 last:border-0 gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm text-gray-900 font-medium break-words">{area.name}</div>
                      <div className="text-xs text-gray-500 break-words">{area.description}</div>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(area.status)} self-start sm:self-center flex-shrink-0`}>
                      {area.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Applicable Tags */}
              {policy.isExpanded && policy.applicableTags && (
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Applicable Data Types:</h3>
                  <div className="flex flex-wrap gap-2">
                    {policy.applicableTags.map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs break-words">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {DLPPolicyManagement};