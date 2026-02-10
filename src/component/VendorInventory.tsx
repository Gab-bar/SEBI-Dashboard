import React, { useState } from 'react';
import { Search, Filter, Download, ChevronRight } from 'lucide-react';

interface Vendor {
  id: string;
  name: string;
  type: 'Active' | 'Pending' | 'Inactive' | 'High';
  tier: 'Tier 1' | 'Tier 2' | 'High Risk';
  category: string;
  contract: string;
  services: string[];
  riskRating: string;
  assessments: {
    securityAudit?: string;
    complianceMonitoring?: string;
    securityAssessment?: string;
    riskReview?: string;
  };
  sla: string;
  incidents: number;
  lastReview: string;
  nextReview: string;
  spoc: string;
  riskOwner: string;
  reviewStatus: string;
}

const VendorInventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const vendors: Vendor[] = [
    {
      id: '1',
      name: 'CloudStack Solutions Pvt Ltd',
      type: 'Active',
      tier: 'Tier 1',
      category: 'AWS, SaaS Integration',
      contract: 'Primary: AWS, 11-12',
      services: ['Infrastructure Hosting', 'Cybersecurity Monitoring', 'Tech Support'],
      riskRating: 'Low',
      assessments: {
        securityAudit: 'Q2',
        complianceMonitoring: 'Q3 (pending review)'
      },
      sla: '99.9%',
      incidents: 0,
      lastReview: 'Stock Review: 2024-10-15',
      nextReview: 'Next Review: Service level agreement review',
      spoc: 'SPOC: 8.5/10',
      riskOwner: 'Risk: Low Risk',
      reviewStatus: 'Risk Evaluation: Performance Review Due Q1'
    },
    {
      id: '2',
      name: 'SecureAuth Technologies',
      type: 'Active',
      tier: 'Tier 2',
      category: 'AWS, SaaS Integration',
      contract: 'Primary: AWS',
      services: ['Cybersecurity Consulting', 'Cybersecurity Consulting', 'Security Consulting'],
      riskRating: 'Low',
      assessments: {
        securityAudit: 'Q2',
        complianceMonitoring: 'Q3 (pending review)'
      },
      sla: '99.5%',
      incidents: 0,
      lastReview: 'Stock Review: 2024-09-20',
      nextReview: 'Next Review: Security review Q2 2025',
      spoc: 'SPOC: 8.0/10',
      riskOwner: 'Risk: Low Risk',
      reviewStatus: 'Risk Evaluation: Security review Q2 2025'
    },
    {
      id: '3',
      name: 'DataShield Inc. Services',
      type: 'Active',
      tier: 'High Risk',
      category: 'AWS, SaaS Integration',
      contract: 'Primary: AWS',
      services: ['Data Backup', 'Disaster Recovery', 'Data Backup'],
      riskRating: 'Medium',
      assessments: {
        securityAudit: 'Q2',
        complianceMonitoring: 'Q3 (Not compliant to regulatory req)'
      },
      sla: '99.9%',
      incidents: 1,
      lastReview: 'Stock Review: 2024-08-10',
      nextReview: 'Next Review: Compliance Review Q2 2025',
      spoc: 'SPOC: 7.5/10',
      riskOwner: 'Risk: Medium Risk',
      reviewStatus: 'Risk Evaluation: Review pending for breach'
    },
    {
      id: '4',
      name: 'TechGuard Analytics',
      type: 'Active',
      tier: 'Tier 1',
      category: 'AWS',
      contract: 'Primary: AWS',
      services: ['SIEM', 'Threat Intelligence', 'Endpoint Management'],
      riskRating: 'Low',
      assessments: {
        securityAudit: 'Q2',
        complianceMonitoring: 'Q3 (passed without observation)'
      },
      sla: '99.9%',
      incidents: 0,
      lastReview: 'Stock Review: 2024-11-01',
      nextReview: 'Next Review: Threat intelligence license renewal',
      spoc: 'SPOC: 9.0/10',
      riskOwner: 'Risk: Low Risk',
      reviewStatus: 'Risk Evaluation: On track'
    },
    {
      id: '5',
      name: 'Global Software Solutions',
      type: 'Active',
      tier: 'High Risk',
      category: 'AWS',
      contract: 'Enterprise-Wide',
      services: ['Custom Software Development', 'Application Maintenance', 'Technical Consulting'],
      riskRating: 'Low',
      assessments: {
        securityAudit: 'Q2',
        complianceMonitoring: 'Q3 (pending update)'
      },
      sla: '99.5%',
      incidents: 0,
      lastReview: 'Stock Review: 2024-09-15',
      nextReview: 'Next Review: Development & Maintenance cycle',
      spoc: 'SPOC: 8.0/10',
      riskOwner: 'Risk: Low Risk',
      reviewStatus: 'Risk Evaluation: Q1'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Active':
        return 'bg-primary text-white';
      case 'Pending':
        return 'bg-warning-soft0 text-white';
      case 'Inactive':
        return 'bg-gray-400 text-white';
      case 'High':
        return 'bg-critical text-white';
      default:
        return 'bg-gray-300 text-txt-primary';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Tier 1':
        return 'bg-primary text-white';
      case 'Tier 2':
        return 'bg-gray-700 text-white';
      case 'High Risk':
        return 'bg-critical text-white';
      default:
        return 'bg-gray-300 text-txt-primary';
    }
  };

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <div className="bg-white border-b border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-txt-primary">Vendor Inventory</h1>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-primary/[0.08] rounded text-sm hover:bg-surface-bg transition-colors flex items-center gap-2">
                <Search size={16} />
                Search Vendors
              </button>
              <button className="px-4 py-2 bg-white border border-primary/[0.08] rounded text-sm hover:bg-surface-bg transition-colors flex items-center gap-2">
                <Filter size={16} />
                All Vendors
              </button>
              <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-primary-hover transition-colors">
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Cards */}
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="glass-panel hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Vendor Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-lg font-semibold text-txt-primary">{vendor.name}</h2>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getTypeColor(vendor.type)}`}>
                      {vendor.type}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getTierColor(vendor.tier)}`}>
                      {vendor.tier}
                    </span>
                  </div>
                  <div className="text-xs text-txt-muted">{vendor.category}</div>
                </div>
                <button className="text-txt-muted hover:text-txt-secondary">
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Vendor Details */}
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <div className="text-xs text-txt-muted mb-1">Contract Value</div>
                  <div className="text-sm text-txt-primary">{vendor.contract}</div>
                </div>
                <div>
                  <div className="text-xs text-txt-muted mb-1">Risk Rating</div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-txt-primary">{vendor.lastReview}</div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <div className="text-xs text-txt-muted mb-2">Services</div>
                <div className="flex flex-wrap gap-2">
                  {vendor.services.map((service, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-100 text-txt-primary rounded text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Assessments */}
              <div className="mb-4">
                <div className="text-xs text-txt-muted mb-2">Risk Rating</div>
                <div className="flex flex-wrap gap-4 text-xs">
                  {vendor.assessments.securityAudit && (
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-100 rounded">{vendor.assessments.securityAudit}</span>
                      <span className="text-txt-secondary">Security Audit</span>
                    </div>
                  )}
                  {vendor.assessments.complianceMonitoring && (
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-100 rounded">
                        {vendor.assessments.complianceMonitoring}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-primary/[0.06]">
                <div className="flex items-center gap-6 text-xs text-txt-secondary">
                  <span>{vendor.sla}</span>
                  <span>Incidents: {vendor.incidents}</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div>
                    <div className="text-txt-primary font-medium">{vendor.spoc}</div>
                    <div className="text-txt-muted">{vendor.riskOwner}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-txt-muted">{vendor.nextReview}</div>
                    <div className="text-txt-muted">{vendor.reviewStatus}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {VendorInventory};