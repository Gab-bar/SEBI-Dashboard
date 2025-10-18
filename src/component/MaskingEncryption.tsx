import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Shield } from 'lucide-react';

interface System {
  id: string;
  name: string;
  type: string;
  tags: string[];
  date: string;
  metrics: {
    encrypted: { value: string; label: string; color: string };
    masked: { value: string; label: string; color: string };
    unencrypted: { value: string; label: string; color: string };
  };
  securityStatus: {
    database: { status: string; badge: string };
    storage: { status: string; badge: string };
    api: { status: string; badge: string };
    backup: { status: string; badge?: string };
  };
  securityControls: string[];
  keyManagement: {
    method: string;
    rotation: string;
    backup: string;
  };
  notice?: {
    type: 'warning' | 'error';
    message: string;
  };
  isExpanded: boolean;
}

const DataMaskingEncryption = () => {
  const [systems, setSystems] = useState<System[]>([
    {
      id: '1',
      name: 'Customer Database',
      type: 'In Production',
      tags: ['Weekly Report', 'Finance Mix'],
      date: 'Last TDM Process Run: Dec 15 (Today)',
      metrics: {
        encrypted: { value: '94%', label: 'Encrypted Data', color: 'bg-blue-50' },
        masked: { value: '3', label: 'Masked Fields', color: 'bg-green-50' },
        unencrypted: { value: '6', label: 'Unencrypted Exceptions', color: 'bg-gray-50' }
      },
      securityStatus: {
        database: { status: 'Operational', badge: 'Encrypted' },
        storage: { status: 'Encrypted', badge: 'Encrypted' },
        api: { status: 'Unmasked', badge: 'Unmasked' },
        backup: { status: 'Pending', badge: 'Pending' }
      },
      securityControls: [
        'Partial Masking',
        'Access Restrictions',
        'Reason: Encrypted'
      ],
      keyManagement: {
        method: 'Key Management',
        rotation: 'Daily rotation: AWS KMS Q3 Q4',
        backup: 'Backup Status: AWS & AWS integration'
      },
      isExpanded: false
    },
    {
      id: '2',
      name: 'Trading Transaction Database',
      type: 'In Production',
      tags: ['Risk Assessed', 'Finance'],
      date: 'Last TDM Process Run: Dec 11 (Today)',
      metrics: {
        encrypted: { value: '98%', label: 'Encrypted Data', color: 'bg-blue-50' },
        masked: { value: '4', label: 'Masked Fields', color: 'bg-green-50' },
        unencrypted: { value: '2', label: 'Unencrypted Exceptions', color: 'bg-gray-50' }
      },
      securityStatus: {
        database: { status: 'Protected', badge: 'Operational' },
        storage: { status: 'Encrypted', badge: 'Encrypted' },
        api: { status: 'Unmasked', badge: 'Unmasked' },
        backup: { status: 'Operational' }
      },
      securityControls: [
        'Sensitive Attributes',
        'Dynamic Recognition',
        'Partial Recognition'
      ],
      keyManagement: {
        method: 'Key Management',
        rotation: 'Policy rotation: AWS Q3',
        backup: 'Backup Status: Finance Protection'
      },
      isExpanded: false
    },
    {
      id: '3',
      name: 'Employee HR Database',
      type: 'Testing/Review',
      tags: ['Current Period', 'Finance Mix'],
      date: 'Last TDM Process Run: Dec 11 (Refresh Pending)',
      metrics: {
        encrypted: { value: '78%', label: 'Encrypted Data', color: 'bg-blue-50' },
        masked: { value: '4', label: 'Masked Fields', color: 'bg-green-50' },
        unencrypted: { value: '8', label: 'Unencrypted Exceptions', color: 'bg-gray-50' }
      },
      securityStatus: {
        database: { status: 'Unmasked', badge: 'Unmasked' },
        storage: { status: 'Unmasked', badge: 'Unmasked' },
        api: { status: 'Unmasked', badge: 'Unmasked' },
        backup: { status: 'Manual' }
      },
      securityControls: [
        'Sensitive Attributes',
        'Finance Recognition',
        'Partial Recognition'
      ],
      keyManagement: {
        method: 'Key Management',
        rotation: 'Policy rotation: Manual Q3',
        backup: 'Backup Status: Finance Protection'
      },
      notice: {
        type: 'error',
        message: 'System flagged - Requires review - new encryption rules to be applied'
      },
      isExpanded: false
    },
    {
      id: '4',
      name: 'Document Management System',
      type: 'In Production',
      tags: ['Data Retention', 'Finance'],
      date: 'Last TDM Process Run: December 13 (Today)',
      metrics: {
        encrypted: { value: '92%', label: 'Encrypted Data', color: 'bg-blue-50' },
        masked: { value: '3', label: 'Masked Fields', color: 'bg-green-50' },
        unencrypted: { value: '5', label: 'Unencrypted Exceptions', color: 'bg-gray-50' }
      },
      securityStatus: {
        database: { status: 'Unmasked', badge: 'Unmasked' },
        storage: { status: 'Encrypted', badge: 'Encrypted' },
        api: { status: 'Encrypted', badge: 'Encrypted' },
        backup: { status: 'Manual' }
      },
      securityControls: [
        'Sensitive Attributes',
        'Finance Recognition',
        'Partial Recognition'
      ],
      keyManagement: {
        method: 'Key Management',
        rotation: 'Policy rotation: Manual Q3',
        backup: 'Backup Status: Manual Q3 Finance Protection'
      },
      isExpanded: false
    }
  ]);

  const toggleExpand = (id: string) => {
    setSystems(systems.map(system => 
      system.id === id ? { ...system, isExpanded: !system.isExpanded } : system
    ));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'In Production':
        return 'bg-gray-900 text-white';
      case 'Testing/Review':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Encrypted':
        return 'bg-gray-900 text-white';
      case 'Operational':
        return 'bg-gray-900 text-white';
      case 'Unmasked':
        return 'bg-gray-900 text-white';
      case 'Protected':
        return 'bg-gray-900 text-white';
      case 'Pending':
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
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Data Masking & Encryption Status</h1>
        </div>
      </div>

      {/* Systems List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {systems.map((system) => (
          <div key={system.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                  <button
                    onClick={() => toggleExpand(system.id)}
                    className="mt-1 text-gray-400 hover:text-gray-600 flex-shrink-0"
                  >
                    {system.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                        {system.name}
                      </h2>
                      <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getTypeColor(system.type)} flex-shrink-0`}>
                        {system.type}
                      </span>
                      {system.tags.map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded text-xs flex-shrink-0">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 break-words">{system.date}</div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`p-3 sm:p-4 rounded-lg text-center ${system.metrics.encrypted.color}`}>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {system.metrics.encrypted.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{system.metrics.encrypted.label}</div>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg text-center ${system.metrics.masked.color}`}>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {system.metrics.masked.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{system.metrics.masked.label}</div>
                </div>
                <div className={`p-3 sm:p-4 rounded-lg text-center ${system.metrics.unencrypted.color}`}>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {system.metrics.unencrypted.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{system.metrics.unencrypted.label}</div>
                </div>
              </div>

              {/* Security Status */}
              <div className="mb-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3">Security Status:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs text-gray-600">Database</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-900">{system.securityStatus.database.status}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getBadgeColor(system.securityStatus.database.badge)}`}>
                        {system.securityStatus.database.badge}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs text-gray-600">Storage</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-900">{system.securityStatus.storage.status}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getBadgeColor(system.securityStatus.storage.badge)}`}>
                        {system.securityStatus.storage.badge}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs text-gray-600">API</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-900">{system.securityStatus.api.status}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getBadgeColor(system.securityStatus.api.badge)}`}>
                        {system.securityStatus.api.badge}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="text-xs text-gray-600">Backup</span>
                    <span className="text-xs text-gray-900">{system.securityStatus.backup.status}</span>
                  </div>
                </div>
              </div>

              {/* Security Controls */}
              <div className="mb-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">Security Controls:</h3>
                <div className="flex flex-wrap gap-2">
                  {system.securityControls.map((control, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {control}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Management */}
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <Shield className="text-gray-400 flex-shrink-0 mt-1" size={20} />
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-semibold text-gray-900 mb-1">{system.keyManagement.method}</h3>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="break-words">{system.keyManagement.rotation}</div>
                    <div className="break-words">{system.keyManagement.backup}</div>
                  </div>
                </div>
              </div>

              {/* Notice */}
              {system.notice && (
                <div className={`mt-4 p-3 sm:p-4 rounded-lg ${
                  system.notice.type === 'error' ? 'bg-red-50 border border-red-200' : 'bg-orange-50 border border-orange-200'
                }`}>
                  <p className={`text-xs ${
                    system.notice.type === 'error' ? 'text-red-700' : 'text-orange-700'
                  } break-words`}>
                    <strong>System flagged</strong> - {system.notice.message}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {DataMaskingEncryption};