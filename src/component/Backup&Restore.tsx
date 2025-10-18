import React, { useState } from 'react';
import { Search, RotateCcw, Plus, MoreVertical, Database, HardDrive, FileText, CheckCircle } from 'lucide-react';

interface BackupSchedule {
  id: string;
  name: string;
  storage: string;
  type: 'Database' | 'Full System' | 'Configuration' | 'Documents';
  schedule: string;
  scheduleTime: string;
  lastRun: string;
  lastRunTime: string;
  size: string;
  status: 'Running' | 'Paused' | 'Failed' | 'Completed';
}

interface RestorePoint {
  id: string;
  name: string;
  description: string;
  type: 'Manual' | 'Automatic' | 'Scheduled';
  created: string;
  createdTime: string;
  size: string;
  status: 'Available' | 'Expired' | 'Restoring';
  retentionUntil: string;
}

const BackupRestoreApp: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const backupSchedules: BackupSchedule[] = [
    {
      id: '1',
      name: 'Daily Database Backup',
      storage: 'Azure Blob Storage',
      type: 'Database',
      schedule: 'Daily',
      scheduleTime: '02:00 AM',
      lastRun: '2024-03-20',
      lastRunTime: '02:00:00',
      size: '2.4 GB',
      status: 'Running'
    },
    {
      id: '2',
      name: 'Weekly Full System Backup',
      storage: 'AWS S3',
      type: 'Full System',
      schedule: 'Weekly',
      scheduleTime: 'Saturday 01:00 AM',
      lastRun: '2024-03-16',
      lastRunTime: '01:00:00',
      size: '45.7 GB',
      status: 'Running'
    },
    {
      id: '3',
      name: 'Configuration Backup',
      storage: 'Local Storage',
      type: 'Configuration',
      schedule: 'Daily',
      scheduleTime: '12:00 AM',
      lastRun: '2024-03-20',
      lastRunTime: '00:00:00',
      size: '125 MB',
      status: 'Running'
    },
    {
      id: '4',
      name: 'Document Archive Backup',
      storage: 'Google Cloud Storage',
      type: 'Documents',
      schedule: 'Weekly',
      scheduleTime: 'Sunday 03:00 AM',
      lastRun: '2024-03-10',
      lastRunTime: '03:00:00',
      size: '12.8 GB',
      status: 'Paused'
    }
  ];

  const restorePoints: RestorePoint[] = [
    {
      id: '1',
      name: 'Pre-System Update Checkpoint',
      description: 'Created before major system update deployment',
      type: 'Manual',
      created: '2024-03-19',
      createdTime: '15:30:00',
      size: '2.1 GB',
      status: 'Available',
      retentionUntil: '2024-06-19'
    },
    {
      id: '2',
      name: 'Daily Auto Restore Point',
      description: 'Automatic daily restore point',
      type: 'Automatic',
      created: '2024-03-20',
      createdTime: '02:15:00',
      size: '2.4 GB',
      status: 'Available',
      retentionUntil: '2024-04-20'
    },
    {
      id: '3',
      name: 'Policy Migration Backup',
      description: 'Before policy framework migration',
      type: 'Manual',
      created: '2024-03-15',
      createdTime: '10:45:00',
      size: '890 MB',
      status: 'Available',
      retentionUntil: '2024-09-15'
    },
    {
      id: '4',
      name: 'Quarterly Compliance Checkpoint',
      description: 'Quarterly compliance data snapshot',
      type: 'Scheduled',
      created: '2024-03-01',
      createdTime: '00:00:00',
      size: '3.2 GB',
      status: 'Available',
      retentionUntil: '2025-03-01'
    }
  ];

  // Filter logic for backups
  const filteredBackups = backupSchedules.filter(backup => {
    const matchesSearch = searchQuery === '' || 
      backup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      backup.storage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      backup.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All Status' || backup.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate stats
  const totalSize = backupSchedules.reduce((sum, backup) => {
    const value = parseFloat(backup.size);
    const unit = backup.size.includes('GB') ? 1 : 0.001;
    return sum + (value * unit);
  }, 0);

  const stats = {
    totalBackupSize: totalSize.toFixed(1),
    successRate: 98.5,
    activeSchedules: backupSchedules.filter(b => b.status === 'Running').length,
    totalSchedules: backupSchedules.length,
    pausedSchedules: backupSchedules.filter(b => b.status === 'Paused').length,
    nextBackup: '2h',
    nextBackupName: 'Configuration backup'
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Database':
        return <Database className="w-4 h-4 text-blue-600" />;
      case 'Full System':
        return <HardDrive className="w-4 h-4 text-purple-600" />;
      case 'Configuration':
        return <Database className="w-4 h-4 text-orange-600" />;
      case 'Documents':
        return <FileText className="w-4 h-4 text-green-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Running':
      case 'Available':
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Paused':
        return 'bg-gray-100 text-gray-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      case 'Restoring':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Manual':
        return 'bg-gray-100 text-gray-700';
      case 'Automatic':
        return 'bg-blue-100 text-blue-700';
      case 'Scheduled':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Backup & Restore</h1>
          <p className="text-sm text-gray-600 mt-1">Manage data backup schedules and restore operations</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <RotateCcw className="w-5 h-5" />
            Create Restore Point
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            Schedule Backup
          </button>
        </div>
      </div>

      {/* Backup Schedules Table */}
      <div className="bg-white rounded-lg border border-gray-200 mb-6">
        {/* Table Header Controls */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search backup schedules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option>All Status</option>
                <option>Running</option>
                <option>Paused</option>
                <option>Failed</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        {(searchQuery || statusFilter !== 'All Status') && (
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="text-gray-700">
                Showing <span className="font-semibold">{filteredBackups.length}</span> of <span className="font-semibold">{backupSchedules.length}</span> schedules
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex flex-wrap gap-2">
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    Search: "{searchQuery}"
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="hover:bg-blue-200 rounded-full p-0.5"
                    >
                      ×
                    </button>
                  </span>
                )}
                {statusFilter !== 'All Status' && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    Status: {statusFilter}
                    <button 
                      onClick={() => setStatusFilter('All Status')}
                      className="hover:bg-blue-200 rounded-full p-0.5"
                    >
                      ×
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setStatusFilter('All Status');
                  }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-xs"
                >
                  Clear all
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Table - Desktop View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Backup Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schedule
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Run
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBackups.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="text-gray-500">
                      <div className="text-lg font-medium mb-1">No backups found</div>
                      <div className="text-sm">Try adjusting your filters or search query</div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredBackups.map((backup) => (
                  <tr key={backup.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{backup.name}</div>
                      <div className="text-sm text-gray-500">{backup.storage}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(backup.type)}
                        <span className="text-sm text-gray-900">{backup.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{backup.schedule}</div>
                      <div className="text-sm text-gray-500">{backup.scheduleTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{backup.lastRun}</div>
                      <div className="text-sm text-gray-500">{backup.lastRunTime}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{backup.size}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(backup.status)}`}>
                        {backup.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table - Mobile View (Cards) */}
        <div className="lg:hidden divide-y divide-gray-200">
          {filteredBackups.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-500">
                <div className="text-lg font-medium mb-1">No backups found</div>
                <div className="text-sm">Try adjusting your filters or search query</div>
              </div>
            </div>
          ) : (
            filteredBackups.map((backup) => (
              <div key={backup.id} className="p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{backup.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{backup.storage}</div>
                  </div>
                  <button className="text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    {getTypeIcon(backup.type)}
                    <span className="text-gray-500">Type: </span>
                    <span className="text-gray-900">{backup.type}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Schedule: </span>
                    <span className="text-gray-900">{backup.schedule} {backup.scheduleTime}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Last Run: </span>
                    <span className="text-gray-900">{backup.lastRun} {backup.lastRunTime}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Size: </span>
                    <span className="text-gray-900">{backup.size}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(backup.status)}`}>
                    {backup.status}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Backup Size Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Total Backup Size</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stats.totalBackupSize} GB</div>
          <div className="text-sm text-gray-600">Across all schedules</div>
        </div>

        {/* Success Rate Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Success Rate</div>
          <div className="text-3xl font-bold text-gray-900 mb-2">{stats.successRate}%</div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gray-900" style={{ width: `${stats.successRate}%` }}></div>
          </div>
        </div>

        {/* Active Schedules Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Active Schedules</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stats.activeSchedules}/{stats.totalSchedules}</div>
          <div className="text-sm text-gray-600">{stats.pausedSchedules} schedule paused</div>
        </div>

        {/* Next Backup Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="text-sm text-gray-600 mb-2">Next Backup</div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{stats.nextBackup}</div>
          <div className="text-sm text-gray-600">{stats.nextBackupName}</div>
        </div>
      </div>

      {/* Available Restore Points */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Available Restore Points</h2>
          <p className="text-sm text-gray-600 mt-1">System restore points for data recovery</p>
        </div>

        {/* Restore Points Table - Desktop View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Restore Point
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Retention Until
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {restorePoints.map((point) => (
                <tr key={point.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{point.name}</div>
                    <div className="text-sm text-gray-500">{point.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getTypeColor(point.type)}`}>
                      {point.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{point.created}</div>
                    <div className="text-sm text-gray-500">{point.createdTime}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{point.size}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(point.status)}`}>
                        {point.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{point.retentionUntil}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Restore Points Table - Mobile View (Cards) */}
        <div className="lg:hidden divide-y divide-gray-200">
          {restorePoints.map((point) => (
            <div key={point.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-sm font-medium text-gray-900">{point.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{point.description}</div>
                </div>
                <button className="text-gray-400">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="text-sm">
                  <span className="text-gray-500">Created: </span>
                  <span className="text-gray-900">{point.created} {point.createdTime}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Size: </span>
                  <span className="text-gray-900">{point.size}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Retention: </span>
                  <span className="text-gray-900">{point.retentionUntil}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getTypeColor(point.type)}`}>
                  {point.type}
                </span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-md ${getStatusColor(point.status)}`}>
                    {point.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {BackupRestoreApp};