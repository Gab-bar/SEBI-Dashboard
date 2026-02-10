import React, { useState } from 'react';
import { MoreVertical, CheckCircle, AlertTriangle, Plus } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface Provider {
  id: string;
  name: string;
  url: string;
  type: 'LDAP' | 'SAML' | 'OAuth2' | 'Local';
  users: number;
  groups: number;
  lastSync: string;
  lastSyncTime: string;
  status: 'Synchronized' | 'Active';
  errors: number;
}

interface ConfigDetail {
  label: string;
  value: string;
}

const SSOLDAPIntegration = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>('1');

  const providers: Provider[] = [
    {
      id: '1',
      name: 'Active Directory',
      url: 'ldap://ad.company.com:389',
      type: 'LDAP',
      users: 142,
      groups: 25,
      lastSync: '2024-03-20',
      lastSyncTime: '14:00:00',
      status: 'Synchronized',
      errors: 0
    },
    {
      id: '2',
      name: 'Microsoft Azure AD',
      url: 'https://login.microsoftonline.com/',
      type: 'SAML',
      users: 98,
      groups: 18,
      lastSync: '2024-03-20',
      lastSyncTime: '13:45:00',
      status: 'Active',
      errors: 0
    },
    {
      id: '3',
      name: 'Google Workspace',
      url: 'https://oauth2.googleapis.com/',
      type: 'OAuth2',
      users: 65,
      groups: 12,
      lastSync: '2024-03-20',
      lastSyncTime: '14:15:00',
      status: 'Active',
      errors: 2
    },
    {
      id: '4',
      name: 'Internal Database',
      url: 'localhost',
      type: 'Local',
      users: 15,
      groups: 5,
      lastSync: 'N/A',
      lastSyncTime: '',
      status: 'Active',
      errors: 0
    }
  ];

  const configDetails: ConfigDetail[] = [
    { label: 'Server URL', value: 'ldap://ad.company.com:389' },
    { label: 'Base DN', value: 'dc=company,dc=com' },
    { label: 'Bind User', value: 'svc_ldap@company.com' },
    { label: 'SSL/TLS', value: 'Enabled' },
    { label: 'Sync Interval', value: 'Every 4 hours' },
    { label: 'Last Successful Sync', value: '2024-03-20 14:00:00' },
    { label: 'Connection Status', value: 'Connected' },
    { label: 'Auto Provisioning', value: 'Enabled' }
  ];
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'LDAP': 'bg-primary-soft text-primary',
      'SAML': 'bg-purple-50 text-purple-700',
      'OAuth2': 'bg-warning-soft text-amber-700',
      'Local': 'bg-gray-100 text-txt-primary'
    };
    return colors[type] || 'bg-gray-100 text-txt-primary';
  };

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <div className="bg-white border-b border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-txt-primary">SSO/LDAP Integration</h1>
              <p className="text-sm text-txt-muted mt-1">Authentication providers and synchronization status</p>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-hover transition-colors flex items-center gap-2 w-full lg:w-auto justify-center">
              <Plus size={16} />
              Add Provider
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Providers Table */}
        <div className="glass-panel overflow-hidden shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface-bg border-b border-primary/[0.06]">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Provider
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Users
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Last Sync
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Errors
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-right text-xs font-medium text-txt-muted uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-primary/[0.06]">
                {providers.map((provider) => (
                  <tr 
                    key={provider.id} 
                    className="hover:bg-surface-bg transition-colors cursor-pointer"
                    onClick={() => setSelectedProvider(provider.id)}
                  >
                    <td className="px-4 lg:px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-txt-primary">{provider.name}</div>
                        <div className="text-xs text-txt-muted">{provider.url}</div>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${getTypeColor(provider.type)}`}>
                        {provider.type}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4">
                      <div className="text-sm text-txt-primary">{provider.users} users</div>
                      <div className="text-xs text-txt-muted">{provider.groups} groups</div>
                    </td>
                    <td className="px-4 lg:px-6 py-4">
                      <div className="text-sm text-txt-primary">{provider.lastSync}</div>
                      {provider.lastSyncTime && (
                        <div className="text-xs text-txt-muted">{provider.lastSyncTime}</div>
                      )}
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusClass(provider.status)}`}>
                        {provider.status}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {provider.errors === 0 ? (
                          <>
                            <CheckCircle size={16} className="text-green-500" />
                            <span className="text-sm text-txt-primary">0</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle size={16} className="text-critical" />
                            <span className="text-sm text-critical">{provider.errors}</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-right">
                      <button 
                        className="text-txt-muted hover:text-txt-secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Directory Configuration */}
        <div className="glass-panel p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-txt-primary">Active Directory Configuration</h2>
            <p className="text-sm text-txt-muted mt-1">Current LDAP connection settings and status</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  Server URL
                </div>
                <div className="text-sm text-txt-primary">ldap://ad.company.com:389</div>
              </div>

              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  Base DN
                </div>
                <div className="text-sm text-txt-primary">dc=company,dc=com</div>
              </div>

              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  Bind User
                </div>
                <div className="text-sm text-txt-primary">svc_ldap@company.com</div>
              </div>

              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  SSL/TLS
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-txt-primary">Enabled</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  Sync Interval
                </div>
                <div className="text-sm text-txt-primary">Every 4 hours</div>
              </div>

              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  Last Successful Sync
                </div>
                <div className="text-sm text-txt-primary">2024-03-20 14:00:00</div>
              </div>

              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  Connection Status
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-txt-primary">Connected</span>
                </div>
              </div>

              <div>
                <div className="text-xs font-medium text-txt-muted uppercase tracking-wider mb-1">
                  Auto Provisioning
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  <span className="text-sm text-txt-primary">Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {SSOLDAPIntegration};