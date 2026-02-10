import React, { useState } from 'react';
import { Upload, MoreHorizontal, Shield, Activity, Monitor, Lock, Network } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface ConfigFile {
  id: string;
  system: string;
  systemIcon: string;
  file: string;
  fileSize: string;
  category: string;
  uploadDate: string;
  status: 'Approved' | 'Under Review' | 'Rejected';
  reviewer: string;
  reviewDate: string;
  version: string;
}

const ConfigFilesEvidence = () => {
  const [files] = useState<ConfigFile[]>([
    {
      id: '1',
      system: 'Firewall Configuration',
      systemIcon: 'shield',
      file: 'Firewall_Rules_Nov2024.txt',
      fileSize: '245 KB',
      category: 'Network Security',
      uploadDate: '2024-11-20',
      status: 'Approved',
      reviewer: 'Security Manager',
      reviewDate: '2024-11-21',
      version: 'v2.3'
    },
    {
      id: '2',
      system: 'SIEM Rules Configuration',
      systemIcon: 'activity',
      file: 'SIEM_Rules_Update_Nov2024.xml',
      fileSize: '1.2 MB',
      category: 'Monitoring',
      uploadDate: '2024-11-19',
      status: 'Under Review',
      reviewer: 'SOC Manager',
      reviewDate: '',
      version: 'v4.1'
    },
    {
      id: '3',
      system: 'Endpoint Protection Policy',
      systemIcon: 'monitor',
      file: 'Endpoint_Policy_Nov2024.json',
      fileSize: '87 KB',
      category: 'Endpoint Security',
      uploadDate: '2024-11-18',
      status: 'Approved',
      reviewer: 'CISO',
      reviewDate: '2024-11-19',
      version: 'v1.8'
    },
    {
      id: '4',
      system: 'Database Encryption Settings',
      systemIcon: 'lock',
      file: 'DB_Encryption_Config_Nov2024.sql',
      fileSize: '156 KB',
      category: 'Data Protection',
      uploadDate: '2024-11-15',
      status: 'Approved',
      reviewer: 'Database Manager',
      reviewDate: '2024-11-16',
      version: 'v3.2'
    },
    {
      id: '5',
      system: 'VPN Configuration',
      systemIcon: 'network',
      file: 'VPN_Settings_Nov2024.conf',
      fileSize: '92 KB',
      category: 'Network Security',
      uploadDate: '2024-11-10',
      status: 'Rejected',
      reviewer: 'Network Manager',
      reviewDate: '2024-11-12',
      version: 'v2.1'
    }
  ]);
  const getIcon = (iconType: string) => {
    const iconProps = { size: 18, className: 'text-primary' };
    switch (iconType) {
      case 'shield':
        return <Shield {...iconProps} />;
      case 'activity':
        return <Activity {...iconProps} />;
      case 'monitor':
        return <Monitor {...iconProps} />;
      case 'lock':
        return <Lock {...iconProps} />;
      case 'network':
        return <Network {...iconProps} />;
      default:
        return <Shield {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-white p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Configuration Files & Evidence</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
            <Upload size={18} />
            Upload Configuration
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-primary/[0.06] rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">System</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">File</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Category</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Upload Date</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Reviewer</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Version</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-surface-bg transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {getIcon(file.systemIcon)}
                      </div>
                      <span className="font-medium text-txt-primary">{file.system}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-txt-primary">{file.file}</div>
                      <div className="text-sm text-txt-muted">{file.fileSize}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{file.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{file.uploadDate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(file.status)}`}>
                      {file.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-txt-primary">{file.reviewer}</div>
                      {file.reviewDate && (
                        <div className="text-sm text-txt-muted">{file.reviewDate}</div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{file.version}</span>
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

export {ConfigFilesEvidence};