import React, { useState } from 'react';
import { Upload, MoreHorizontal, Shield, Activity, Monitor, Lock, Network } from 'lucide-react';

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-gray-900 text-white';
      case 'Under Review':
        return 'bg-gray-200 text-gray-700';
      case 'Rejected':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getIcon = (iconType: string) => {
    const iconProps = { size: 18, className: 'text-blue-600' };
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
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Configuration Files & Evidence</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Upload size={18} />
            Upload Configuration
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">System</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">File</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Category</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Upload Date</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Reviewer</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Version</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {files.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {getIcon(file.systemIcon)}
                      </div>
                      <span className="font-medium text-gray-900">{file.system}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-gray-900">{file.file}</div>
                      <div className="text-sm text-gray-500">{file.fileSize}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{file.category}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{file.uploadDate}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(file.status)}`}>
                      {file.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-gray-900">{file.reviewer}</div>
                      {file.reviewDate && (
                        <div className="text-sm text-gray-500">{file.reviewDate}</div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{file.version}</span>
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

export {ConfigFilesEvidence};