import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search, Filter } from 'lucide-react';

interface Classification {
  id: string;
  title: string;
  type: string;
  tags: string[];
  date: string;
  owner: string;
  storageAccess: {
    storage: string;
    access: string;
    retention: string;
  };
  securityControls: {
    encryption: string;
    accessControl: string;
    monitoring: string;
  };
  regulatoryRequirements: string[];
  compliance: {
    framework: string;
    status: string;
    auditFrequency: string;
  };
  businessJustification: string;
  isExpanded: boolean;
}

const DataClassificationMatrix = () => {
  const [classifications, setClassifications] = useState<Classification[]>([
    {
      id: '1',
      title: 'Client Personal Information',
      type: 'Confidential',
      tags: ['High Sensitivity', 'High Risk'],
      date: 'DD: 2024 Performance Report',
      owner: 'Date Owner: Chief Privacy Officer',
      storageAccess: {
        storage: 'Storage & Access',
        access: 'Encrypted All Repositories, Data access limited to specific roles or higher',
        retention: 'Retention: 5 Years, Encrypted'
      },
      securityControls: {
        encryption: 'Security Controls',
        accessControl: 'Role-based access, MFA required',
        monitoring: 'Real-time audit logs, Quarterly access reviews'
      },
      regulatoryRequirements: ['GDPR Provisions', 'Data Protection Act', 'Regulatory Requirements'],
      compliance: {
        framework: 'Compliance',
        status: 'Security assessment by IT',
        auditFrequency: 'Audit: Quarterly'
      },
      businessJustification: 'Required to deliver core services; limited retention to customer needs',
      isExpanded: false
    },
    {
      id: '2',
      title: 'Trading Transaction Data',
      type: 'Critical',
      tags: ['Highly Sensitive', 'Financial Records'],
      date: 'DD: 2024 Transaction Report',
      owner: 'Date Owner: Chief Financial Officer',
      storageAccess: {
        storage: 'Storage & Access',
        access: 'Primary data center + secondary; data storage only. All financial transactions must be protected.',
        retention: 'Retention: 7 Years, Secure Storage'
      },
      securityControls: {
        encryption: 'Security Controls',
        accessControl: 'MFA Required, Restricted Access',
        monitoring: 'Real-time Monitoring'
      },
      regulatoryRequirements: ['Regulatory Requirements', 'Financial Services Act', 'MiFID Provisions'],
      compliance: {
        framework: 'Compliance',
        status: 'Under regular review',
        auditFrequency: 'Audit: Monthly'
      },
      businessJustification: 'Business Justification: Trading operations, regulatory reporting, audit requirements',
      isExpanded: false
    },
    {
      id: '3',
      title: 'Employee Personal Data',
      type: 'Confidential',
      tags: ['High Sensitivity', 'Internal Use'],
      date: 'DD: 2024 HR Report',
      owner: 'Date Owner: Chief Human Resources Officer',
      storageAccess: {
        storage: 'Storage & Access',
        access: 'HR Systems, Encrypted',
        retention: 'Retention: 7 Years Post-Employment'
      },
      securityControls: {
        encryption: 'Security Controls',
        accessControl: 'Role-based access',
        monitoring: 'Annual security review, payroll, settlement reporting'
      },
      regulatoryRequirements: ['Labor Laws', 'Data Protection Act', 'Regulatory Requirements'],
      compliance: {
        framework: 'Compliance',
        status: 'Meets standards',
        auditFrequency: 'Audit: Semi-Annual'
      },
      businessJustification: 'Employee management, HR administration',
      isExpanded: false
    },
    {
      id: '4',
      title: 'System Configuration Data',
      type: 'Internal',
      tags: ['Medium Sensitivity', 'Internal Use'],
      date: 'DD: 2024 System Configurations',
      owner: 'Date Owner: Chief Technology Officer',
      storageAccess: {
        storage: 'Storage & Access',
        access: 'Internal repositories, Restricted Access',
        retention: 'Retention: 3 Years'
      },
      securityControls: {
        encryption: 'Security Controls',
        accessControl: 'IT Staff only',
        monitoring: 'Regular system monitoring, change management'
      },
      regulatoryRequirements: ['Business Justification: System maintenance, disaster recovery, change management'],
      compliance: {
        framework: 'Compliance',
        status: 'Operational Standards',
        auditFrequency: 'Audit: Quarterly'
      },
      businessJustification: 'System maintenance, disaster recovery, change management',
      isExpanded: false
    },
    {
      id: '5',
      title: 'Marketing Material',
      type: 'Public',
      tags: ['Low Sensitivity', 'Public'],
      date: 'DD: 2024 Public Materials',
      owner: 'Date Owner: Chief Marketing Officer',
      storageAccess: {
        storage: 'Storage & Access',
        access: 'Marketing Repositories, Public Access',
        retention: 'Retention: As needed'
      },
      securityControls: {
        encryption: 'Security Controls',
        accessControl: 'Marketing Standard',
        monitoring: 'Basic monitoring'
      },
      regulatoryRequirements: ['Regulatory Requirements', 'Marketing Standards', 'Brand Guidelines'],
      compliance: {
        framework: 'Compliance',
        status: 'Standard policies',
        auditFrequency: 'Audit: Annual'
      },
      businessJustification: 'Business and marketing materials, brand promotion',
      isExpanded: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpand = (id: string) => {
    setClassifications(classifications.map(item => 
      item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
    ));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Critical':
        return 'bg-red-600 text-white';
      case 'Confidential':
        return 'bg-orange-500 text-white';
      case 'Internal':
        return 'bg-blue-500 text-white';
      case 'Public':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getTagColor = (tag: string) => {
    if (tag.includes('High') || tag.includes('Critical') || tag.includes('Financial')) {
      return 'bg-red-100 text-red-700';
    }
    if (tag.includes('Medium')) {
      return 'bg-yellow-100 text-yellow-700';
    }
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Data Classification Matrix</h1>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Search size={16} />
                Search Classifications
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter size={16} />
                All Classifications
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Classifications List */}
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
        {classifications.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="mt-1 text-gray-400 hover:text-gray-600"
                  >
                    {item.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                      <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className={`px-2.5 py-0.5 rounded text-xs font-medium ${getTagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>{item.date}</div>
                      <div>{item.owner}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-3 gap-6 mb-4">
                {/* Storage & Access */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-700 mb-2">{item.storageAccess.storage}</h3>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>{item.storageAccess.access}</p>
                    <p className="text-gray-500">{item.storageAccess.retention}</p>
                  </div>
                </div>

                {/* Security Controls */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-700 mb-2">{item.securityControls.encryption}</h3>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>{item.securityControls.accessControl}</p>
                    <p className="text-gray-500">{item.securityControls.monitoring}</p>
                  </div>
                </div>

                {/* Compliance */}
                <div>
                  <h3 className="text-xs font-semibold text-gray-700 mb-2">{item.compliance.framework}</h3>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>{item.compliance.status}</p>
                    <p className="text-gray-500">{item.compliance.auditFrequency}</p>
                  </div>
                </div>
              </div>

              {/* Regulatory Requirements */}
              <div className="mb-4">
                <h3 className="text-xs font-semibold text-gray-700 mb-2">Regulatory Requirements</h3>
                <div className="flex flex-wrap gap-2">
                  {item.regulatoryRequirements.map((req, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Justification */}
              {item.isExpanded && (
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-xs font-semibold text-gray-700 mb-2">Business Justification</h3>
                  <p className="text-xs text-gray-600">{item.businessJustification}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { DataClassificationMatrix };