'use client';

import React, { useState } from 'react';
import { Bell, MoreVertical, Shield, FileText, Server, BookOpen, Settings } from 'lucide-react';

interface Alert {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  timestamp: string;
  assignedTo: string;
  source: string;
  category: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Acknowledged' | 'New' | 'In Progress';
}

const AlertsNotifications = () => {
  const [filter, setFilter] = useState('All Types');

  const alerts: Alert[] = [
    {
      id: '1',
      icon: <Shield className="w-5 h-5" />,
      iconBg: 'bg-critical-soft',
      iconColor: 'text-critical',
      title: 'Suspicious login attempts detected',
      description: 'Multiple failed login attempts from unusual geographic locations',
      timestamp: '2024-11-20 14:30',
      assignedTo: 'SOC Team',
      source: 'SIEM',
      category: 'Authentication',
      priority: 'Critical',
      status: 'Active',
    },
    {
      id: '2',
      icon: <FileText className="w-5 h-5" />,
      iconBg: 'bg-primary-soft',
      iconColor: 'text-primary',
      title: 'SEBI report deadline approaching',
      description: 'Quarterly compliance report due in 5 days',
      timestamp: '2024-11-20 12:15',
      assignedTo: 'Compliance Team',
      source: 'Portal',
      category: 'Regulatory',
      priority: 'High',
      status: 'Acknowledged',
    },
    {
      id: '3',
      icon: <Server className="w-5 h-5" />,
      iconBg: 'bg-success-soft',
      iconColor: 'text-success',
      title: 'Vulnerability scan completed',
      description: 'Monthly vulnerability assessment identified 12 new findings',
      timestamp: '2024-11-20 10:45',
      assignedTo: 'Security Team',
      source: 'Vulnerability Scanner',
      category: 'Assessment',
      priority: 'Medium',
      status: 'New',
    },
    {
      id: '4',
      icon: <BookOpen className="w-5 h-5" />,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      title: 'Security training completion reminder',
      description: '15 employees have pending mandatory security training',
      timestamp: '2024-11-20 09:00',
      assignedTo: 'HR Team',
      source: 'Training Portal',
      category: 'Awareness',
      priority: 'Low',
      status: 'New',
    },
    {
      id: '5',
      icon: <Settings className="w-5 h-5" />,
      iconBg: 'bg-warning-soft',
      iconColor: 'text-amber-600',
      title: 'Policy review overdue',
      description: '3 security policies require quarterly review',
      timestamp: '2024-11-19 16:20',
      assignedTo: 'Policy Team',
      source: 'Portal',
      category: 'Documentation',
      priority: 'Medium',
      status: 'In Progress',
    },
  ];

  const getPriorityBadgeStyles = (priority: string) => {
    if (priority === 'Critical') {
      return 'bg-critical text-white';
    }
    if (priority === 'High') {
      return 'bg-warning-soft text-amber-700 border border-orange-200';
    }
    if (priority === 'Medium') {
      return 'bg-surface-bg text-txt-primary border border-primary/[0.06]';
    }
    return 'bg-surface-bg text-txt-secondary border border-primary/[0.06]';
  };

  const getStatusBadgeStyles = (status: string) => {
    if (status === 'Active') {
      return 'bg-green-600 text-white';
    }
    if (status === 'Acknowledged') {
      return 'bg-primary-soft text-primary border border-blue-200';
    }
    if (status === 'New') {
      return 'bg-primary text-white';
    }
    if (status === 'In Progress') {
      return 'bg-purple-50 text-purple-700 border border-purple-200';
    }
    return 'bg-gray-100 text-txt-secondary';
  };

  return (
    <div className="min-h-screen bg-surface-bg p-3 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="section-header-title">Recent Alerts & Notifications</h1>
          <div className="flex items-center gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-primary/[0.08] rounded-lg text-sm font-medium text-txt-primary bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option>All Types</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button className="flex items-center gap-2 text-txt-primary hover:text-txt-primary">
              <Bell className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 text-sm font-medium text-txt-primary hover:text-txt-primary">
              Mark All Read
            </button>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="glass-panel p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`${alert.iconBg} ${alert.iconColor} p-3 rounded-lg flex-shrink-0`}>
                  {alert.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-semibold text-txt-primary">{alert.title}</h3>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getPriorityBadgeStyles(alert.priority)}`}>
                        {alert.priority}
                      </span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusBadgeStyles(alert.status)}`}>
                        {alert.status}
                      </span>
                    </div>
                    <button className="text-txt-muted hover:text-txt-secondary flex-shrink-0">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-sm text-txt-secondary mb-3">{alert.description}</p>

                  <div className="flex items-center gap-4 text-xs text-txt-muted">
                    <span>{alert.timestamp}</span>
                    <span>Assigned: {alert.assignedTo}</span>
                    <span>Source: {alert.source}</span>
                    <span>Category: {alert.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsNotifications;