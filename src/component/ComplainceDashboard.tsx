import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Shield,
  Target,
  FileText,
  Users,
} from 'lucide-react';

const ComplianceDashboard: React.FC = () => {
  const categories = [
    { name: 'Access Control', percentage: 92, controls: '18/20', status: 'Good' },
    { name: 'Data Protection', percentage: 88, controls: '22/25', status: 'Good' },
    { name: 'Network Security', percentage: 85, controls: '17/20', status: 'Good' },
    { name: 'Incident Response', percentage: 90, controls: '14/15', status: 'Excellent' },
    { name: 'Risk Management', percentage: 82, controls: '16/20', status: 'Good' },
    { name: 'Vendor Management', percentage: 79, controls: '19/24', status: 'Moderate' },
  ];

  const quickActions = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Schedule Security Assessment',
      description: 'Plan next vulnerability assessment',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Review Risk Register',
      description: 'Update risk assessments',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Generate Compliance Report',
      description: 'Create SEBI compliance report',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Manage User Training',
      description: 'Track training completion',
    },
  ];

  const systemHealth = [
    { name: 'SIEM Platform', uptime: 99.8, alerts: 2, status: 'Healthy' },
    { name: 'DLP System', uptime: 99.5, alerts: 1, status: 'Healthy' },
    { name: 'Endpoint Protection', uptime: 98.2, alerts: 5, status: 'Warning' },
    { name: 'Network Monitoring', uptime: 99.9, alerts: 0, status: 'Healthy' },
    { name: 'Backup Systems', uptime: 99.7, alerts: 1, status: 'Healthy' },
    { name: 'Access Control', uptime: 99.6, alerts: 0, status: 'Healthy' },
  ];

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Excellent':
        return 'text-green-600';
      case 'Good':
      case 'Healthy':
        return 'text-green-500';
      case 'Moderate':
        return 'text-yellow-500';
      case 'Warning':
        return 'text-yellow-600';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusBgColor = (status: string): string => {
    switch (status) {
      case 'Excellent':
      case 'Good':
      case 'Healthy':
        return 'bg-green-50';
      case 'Moderate':
        return 'bg-yellow-50';
      case 'Warning':
        return 'bg-yellow-100';
      default:
        return 'bg-gray-50';
    }
  };

  const getTrendIcon = (percentage: number) => {
    return percentage >= 85 ? (
      <TrendingUp className="w-4 h-4 text-green-600" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-600" />
    );
  };

  return (
    <div className="space-y-8">
      {/* ================= Compliance Categories + Quick Actions ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Compliance Categories
            </h2>
            <div className="space-y-6">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500">
                        {category.controls} controls
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(category.percentage)}
                      <span className="font-semibold text-gray-900">
                        {category.percentage}%
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${getStatusBgColor(
                          category.status
                        )} ${getStatusColor(category.status)}`}
                      >
                        {category.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-900 h-2 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex gap-3">
                    <div className="text-gray-400 flex-shrink-0">
                      {action.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {action.title}
                      </h4>
                      <p className="text-xs text-gray-500">{action.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= System Health Monitor Section ================= */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          System Health Monitor
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemHealth.map((system) => (
            <div
              key={system.name}
              className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900">{system.name}</h3>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusBgColor(
                    system.status
                  )} ${getStatusColor(system.status)}`}
                >
                  {system.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                Uptime: {system.uptime}%
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gray-900 h-2 rounded-full"
                  style={{ width: `${system.uptime}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">
                {system.alerts} active {system.alerts === 1 ? 'alert' : 'alerts'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceDashboard;
