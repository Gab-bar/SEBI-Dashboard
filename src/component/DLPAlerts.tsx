import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { getSeverityClass, getStatusClass } from '@/lib/colors';

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
    critical: { value: 4, label: 'Critical', color: 'bg-critical-soft' },
    high: { value: 23, label: 'High', color: 'bg-warning-soft' },
    medium: { value: 112, label: 'Medium', color: 'bg-warning-soft' },
    low: { value: 62, label: 'Low', color: 'bg-primary-soft' },
    malwareDetected: { value: 35, label: 'Malware Detected', color: 'bg-pink-50' },
    unauthorized: { value: 18, label: 'Unauthorized Access Attempts', color: 'bg-success-soft' },
    suspiciousActivity: { value: 29, label: 'Suspicious Activity', color: 'bg-purple-50' }
  };

  const toggleExpand = (id: string) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, isExpanded: !alert.isExpanded } : alert
    ));
  };
  return (
    <div className="min-h-screen bg-surface-bg p-4 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Today's DLP Alert Summary */}
          <div className="flex-1 glass-panel p-6">
            <h2 className="text-lg font-semibold text-txt-primary mb-6">Today's DLP Alert Summary</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.critical.color}`}>
                <div className="text-3xl font-bold text-critical">{summaryMetrics.critical.value}</div>
                <div className="text-xs text-txt-secondary mt-1">{summaryMetrics.critical.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.high.color}`}>
                <div className="text-3xl font-bold text-amber-600">{summaryMetrics.high.value}</div>
                <div className="text-xs text-txt-secondary mt-1">{summaryMetrics.high.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.medium.color}`}>
                <div className="text-3xl font-bold text-amber-600">{summaryMetrics.medium.value}</div>
                <div className="text-xs text-txt-secondary mt-1">{summaryMetrics.medium.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.low.color}`}>
                <div className="text-3xl font-bold text-primary">{summaryMetrics.low.value}</div>
                <div className="text-xs text-txt-secondary mt-1">{summaryMetrics.low.label}</div>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-txt-primary mb-4">Action Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.malwareDetected.color}`}>
                <div className="text-3xl font-bold text-pink-600">{summaryMetrics.malwareDetected.value}</div>
                <div className="text-xs text-txt-secondary mt-1">{summaryMetrics.malwareDetected.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.unauthorized.color}`}>
                <div className="text-3xl font-bold text-success">{summaryMetrics.unauthorized.value}</div>
                <div className="text-xs text-txt-secondary mt-1">{summaryMetrics.unauthorized.label}</div>
              </div>
              <div className={`p-4 rounded-lg text-center ${summaryMetrics.suspiciousActivity.color}`}>
                <div className="text-3xl font-bold text-purple-600">{summaryMetrics.suspiciousActivity.value}</div>
                <div className="text-xs text-txt-secondary mt-1">{summaryMetrics.suspiciousActivity.label}</div>
              </div>
            </div>
          </div>

          {/* Top Violation Types */}
          <div className="lg:w-96 glass-panel p-6">
            <h2 className="text-lg font-semibold text-txt-primary mb-4">Top Violation Types</h2>
            <div className="space-y-3">
              {topViolations.map((violation, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-sm text-txt-primary">{violation.type}</span>
                    {violation.badge && (
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusClass(violation.badge)}`}>
                        {violation.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-lg font-bold text-txt-primary">{violation.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent DLP Alerts */}
        <div className="glass-panel p-6">
          <h2 className="text-lg font-semibold text-txt-primary mb-4">Recent DLP Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="border border-primary/[0.06] rounded-lg overflow-hidden">
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleExpand(alert.id)}
                      className="mt-1 text-txt-muted hover:text-txt-secondary flex-shrink-0"
                    >
                      {alert.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getSeverityClass(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${getStatusClass(alert.status)}`}>
                          {alert.status}
                        </span>
                        <span className="text-xs text-txt-muted">{alert.timestamp}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-txt-primary mb-2">{alert.title}</h3>
                      <div className="text-xs text-txt-secondary space-y-1">
                        <div>{alert.user}</div>
                        <div>{alert.policy}</div>
                        <div>{alert.recommendation}</div>
                        {alert.resolution && <div>Resolution: {alert.resolution}</div>}
                      </div>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs">
                        <span className="text-txt-primary font-medium">{alert.riskScore}</span>
                        <span className="text-txt-muted">{alert.dueDate}</span>
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