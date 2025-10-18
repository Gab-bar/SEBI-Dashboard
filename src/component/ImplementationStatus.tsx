import React from 'react';
import { BarChart3, Globe, Server, Network, Database, Monitor } from 'lucide-react';

interface SystemStatus {
  id: string;
  name: string;
  team: string;
  icon: React.ReactNode;
  status: 'Good' | 'Attention Required' | 'Improvement Needed' | 'Excellent';
  compliance: number;
  totalControls: number;
  implementedControls: number;
  implemented: number;
  inProgress: number;
  planned: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lastAssessment: string;
  nextAssessment: string;
}

const ImplementationStatusDashboard = () => {
  const systems: SystemStatus[] = [
    {
      id: '1',
      name: 'Trading Platform',
      team: 'Trading Systems Team',
      icon: <BarChart3 className="w-5 h-5" />,
      status: 'Good',
      compliance: 93,
      totalControls: 45,
      implementedControls: 42,
      implemented: 42,
      inProgress: 2,
      planned: 1,
      criticalCount: 0,
      highCount: 1,
      mediumCount: 3,
      lastAssessment: '2024-11-18',
      nextAssessment: '2024-12-18'
    },
    {
      id: '2',
      name: 'Client Portal',
      team: 'Web Development Team',
      icon: <Globe className="w-5 h-5" />,
      status: 'Good',
      compliance: 92,
      totalControls: 38,
      implementedControls: 35,
      implemented: 35,
      inProgress: 2,
      planned: 1,
      criticalCount: 0,
      highCount: 2,
      mediumCount: 1,
      lastAssessment: '2024-11-15',
      nextAssessment: '2024-12-15'
    },
    {
      id: '3',
      name: 'Data Center Infrastructure',
      team: 'Infrastructure Team',
      icon: <Server className="w-5 h-5" />,
      status: 'Attention Required',
      compliance: 90,
      totalControls: 52,
      implementedControls: 47,
      implemented: 47,
      inProgress: 3,
      planned: 2,
      criticalCount: 1,
      highCount: 2,
      mediumCount: 4,
      lastAssessment: '2024-11-12',
      nextAssessment: '2024-12-12'
    },
    {
      id: '4',
      name: 'Network Infrastructure',
      team: 'Network Team',
      icon: <Network className="w-5 h-5" />,
      status: 'Improvement Needed',
      compliance: 85,
      totalControls: 40,
      implementedControls: 34,
      implemented: 34,
      inProgress: 4,
      planned: 2,
      criticalCount: 0,
      highCount: 3,
      mediumCount: 5,
      lastAssessment: '2024-11-10',
      nextAssessment: '2024-12-10'
    },
    {
      id: '5',
      name: 'Database Systems',
      team: 'Database Team',
      icon: <Database className="w-5 h-5" />,
      status: 'Good',
      compliance: 91,
      totalControls: 35,
      implementedControls: 32,
      implemented: 32,
      inProgress: 2,
      planned: 1,
      criticalCount: 0,
      highCount: 1,
      mediumCount: 2,
      lastAssessment: '2024-11-16',
      nextAssessment: '2024-12-16'
    },
    {
      id: '6',
      name: 'Endpoint Devices',
      team: 'IT Support Team',
      icon: <Monitor className="w-5 h-5" />,
      status: 'Excellent',
      compliance: 93,
      totalControls: 28,
      implementedControls: 26,
      implemented: 26,
      inProgress: 1,
      planned: 1,
      criticalCount: 0,
      highCount: 0,
      mediumCount: 2,
      lastAssessment: '2024-11-20',
      nextAssessment: '2024-12-20'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Excellent':
        return 'bg-gray-900 text-white';
      case 'Good':
        return 'bg-gray-900 text-white';
      case 'Attention Required':
        return 'bg-white text-gray-900 border border-gray-900';
      case 'Improvement Needed':
        return 'bg-white text-gray-900 border border-gray-900';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Implementation Status by System
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {systems.map((system) => (
            <div
              key={system.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {system.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {system.name}
                    </h3>
                    <p className="text-sm text-gray-500">{system.team}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(system.status)}`}>
                  {system.status}
                </span>
              </div>

              {/* Compliance Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">
                    Compliance: {system.compliance}%
                  </span>
                  <span className="text-gray-500">
                    {system.implementedControls}/{system.totalControls} controls
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gray-900 transition-all duration-300"
                    style={{ width: `${system.compliance}%` }}
                  />
                </div>
              </div>

              {/* Status Boxes */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {/* Implemented */}
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    {system.implemented}
                  </div>
                  <div className="text-xs text-green-700 font-medium">
                    Implemented
                  </div>
                </div>

                {/* In Progress */}
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-yellow-700 mb-1">
                    {system.inProgress}
                  </div>
                  <div className="text-xs text-yellow-700 font-medium">
                    In Progress
                  </div>
                </div>

                {/* Planned */}
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-gray-700 mb-1">
                    {system.planned}
                  </div>
                  <div className="text-xs text-gray-700 font-medium">
                    Planned
                  </div>
                </div>
              </div>

              {/* Priority Counts */}
              <div className="flex items-center justify-between py-3 border-t border-gray-100">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-red-600 font-medium">
                    Critical: {system.criticalCount}
                  </span>
                  <span className="text-orange-600 font-medium">
                    High: {system.highCount}
                  </span>
                  <span className="text-yellow-600 font-medium">
                    Medium: {system.mediumCount}
                  </span>
                </div>
              </div>

              {/* Assessment Dates */}
              <div className="pt-3 border-t border-gray-100 text-xs text-gray-500">
                <span>Last Assessment: {system.lastAssessment}</span>
                <span className="mx-2">|</span>
                <span>Next: {system.nextAssessment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export  {ImplementationStatusDashboard};