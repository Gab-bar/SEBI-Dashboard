import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Alert {
  id: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Unresolved' | 'In Progress' | 'Resolved';
  title: string;
  timestamp: string;
  user: string;
  policy: string;
  recommendation: string;
  riskScore: string;
  dueDate: string;
  resolution?: string;
  isExpanded: boolean;
}

interface TopViolation {
  type: string;
  badge?: string;
  count: number;
}

const DLPAlertSummary = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      severity: 'Critical',
      status: 'Unresolved',
      title: 'Attempted to email banking portfolio data to external domain',
      timestamp: 'Today, 05:13 AM - DLP Rule: External Email',
      user: 'User: Jennifer Smith (Finance)',
      policy: 'Policy: Financial Data Protection Policy',
      recommendation: 'Recommendation: Block transfer, notify user, escalate to management team',
      riskScore: 'Risk Score: 9.5/10',
      dueDate: 'Due Date: 11 AM',
      isExpanded: false
    },
    {
      id: '2',
      severity: 'High',
      status: 'In Progress',
      title: 'Employee SSN location detected in the upload',
      timestamp: 'Today, 04:28 AM - DLP Rule: PII Upload',
      user: 'User: Tom Anderson (HR)',
      policy: 'Policy: Personal Data Protection Policy',
      recommendation: 'Recommendation: Notify user, move file to secure location',
      riskScore: 'Risk Score: 7.8/10',
      dueDate: 'Due Date: 12:15 PM',
      isExpanded: false
    },
    {
      id: '3',
      severity: 'Medium',
      status: 'Resolved',
      title: 'Large file transfer from work PC detected to file sharing service',
      timestamp: 'Today, 02:45 AM - DLP Rule: File Sharing',
      user: 'User: Sarah Williams (Marketing)',
      policy: 'Policy: Cloud Service/Data Privacy Policy',
      recommendation: 'Recommendation: Add log to user file, review at next',
      riskScore: 'Risk Score: 4.5/10',
      dueDate: 'Due Date: 2:11 AM',
      isExpanded: false
    },
    {
      id: '4',
      severity: 'Critical',
      status: 'Unresolved',
      title: 'Proprietary algorithm code attempted to be uploaded to GitHub',
      timestamp: 'Today, 01:15 AM - DLP Rule: Code Repository',
      user: 'User: David Chen (Engineering)',
      policy: 'Policy: Intellectual Property Protection',
      recommendation: 'Recommendation: public code review',
      riskScore: 'Risk Score: 9.2/10',
      dueDate: 'Due Date: 12:15 PM',
      isExpanded: false
    },
    {
      id: '5',
      severity: 'Medium',
      status: 'Unresolved',
      title: 'Unusual location detected trying to bulk email to verification team',
      timestamp: 'Today, 12:30 AM - DLP Rule: Location',
      user: 'User: Michael Johnson (Operations)',
      policy: 'Policy: Access Risk Prevention Policy',
      recommendation: 'Recommendation: verify location, monitor suspicious user',
      riskScore: 'Risk Score: 6.2/10',
      dueDate: 'Due Date: 11:20 AM',
      resolution: 'Resolution: False Anomaly/traffic',
      isExpanded: false
    }
  ]);

  const topViolations: TopViolation[] = [
    { type: 'External Email Attempts', badge: 'High', count: 45 },
    { type: 'Cloud File Transfers', badge: 'Medium', count: 38 },
    { type: 'Source Code Uploads', badge: 'Critical', count: 22 },
    { type: 'Improper Data Sharing', count: 18 },
    { type: 'Other Data Breaches', badge: 'High', count: 12 }
  ];

  const summaryMetrics = {
    critical: { value: 4, label: 'Critical', color: 'bg-red-50' },
    high: { value: 23, label: 'High', color: 'bg-orange-50' },
    medium: { value: 112, label: 'Medium', color: 'bg-yellow-50' },
    low: { value: 62, label: 'Low', color: 'bg-blue-50' },
    malwareDetected: { value: 35, label: 'Malware Detected', color: 'bg-pink-50' },
    unauthorized: { value: 18, label: 'Unauthorized Access Attempts', color: 'bg-green-50' },
    suspiciousActivity: { value: 29, label: 'Suspicious Activity', color: 'bg-purple-50' }
  };

  const toggleExpand = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, isExpanded: !alert.isExpanded } : alert
    ));
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-600 text-white';
      case 'High':
        return 'bg-orange-500 text-white';
      case 'Medium':
        return 'bg-yellow-500 text-white';
      case 'Low':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Unresolved':
        return 'bg-red-500 text-white';
      case 'In Progress':
        return 'bg-gray-900 text-white';
      case 'Resolved':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Critical':
        return 'bg-red-600 text-white';
      case 'High':
        return 'bg-red-500 text-white';
      case 'Medium':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Today's DLP Alert Summary */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Today's DLP Alert Summary</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.critical.color}`}>
                <div className="text-3xl font-bold text-red-600">{summaryMetrics.critical.value}</div>
                <div className="text-xs text-gray-600 mt-1">{summaryMetrics.critical.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.high.color}`}>
                <div className="text-3xl font-bold text-orange-600">{summaryMetrics.high.value}</div>
                <div className="text-xs text-gray-600 mt-1">{summaryMetrics.high.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.medium.color}`}>
                <div className="text-3xl font-bold text-yellow-600">{summaryMetrics.medium.value}</div>
                <div className="text-xs text-gray-600 mt-1">{summaryMetrics.medium.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.low.color}`}>
                <div className="text-3xl font-bold text-blue-600">{summaryMetrics.low.value}</div>
                <div className="text-xs text-gray-600 mt-1">{summaryMetrics.low.label}</div>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-gray-700 mb-4">Action Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.malwareDetected.color}`}>
                <div className="text-3xl font-bold text-pink-600">{summaryMetrics.malwareDetected.value}</div>
                <div className="text-xs text-gray-600 mt-1">{summaryMetrics.malwareDetected.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.unauthorized.color}`}>
                <div className="text-3xl font-bold text-green-600">{summaryMetrics.unauthorized.value}</div>
                <div className="text-xs text-gray-600 mt-1">{summaryMetrics.unauthorized.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.suspiciousActivity.color}`}>
                <div className="text-3xl font-bold text-purple-600">{summaryMetrics.suspiciousActivity.value}</div>
                <div className="text-xs text-gray-600 mt-1">{summaryMetrics.suspiciousActivity.label}</div>
              </div>
            </div>
          </div>

          {/* Top Violation Types */}
          <div className="lg:w-96 bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Violation Types</h2>
            <div className="space-y-3">
              {topViolations.map((violation, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-sm text-gray-900">{violation.type}</span>
                    {violation.badge && (
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getBadgeColor(violation.badge)}`}>
                        {violation.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-lg font-bold text-gray-900">{violation.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent DLP Alerts */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent DLP Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleExpand(alert.id)}
                      className="mt-1 text-gray-400 hover:text-gray-600 flex-shrink-0"
                    >
                      {alert.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getStatusColor(alert.status)}`}>
                          {alert.status}
                        </span>
                        <span className="text-xs text-gray-500">{alert.timestamp}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">{alert.title}</h3>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>{alert.user}</div>
                        <div>{alert.policy}</div>
                        <div>{alert.recommendation}</div>
                        {alert.resolution && <div>Resolution: {alert.resolution}</div>}
                      </div>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs">
                        <span className="text-gray-900 font-medium">{alert.riskScore}</span>
                        <span className="text-gray-500">{alert.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export {DLPAlertSummary};