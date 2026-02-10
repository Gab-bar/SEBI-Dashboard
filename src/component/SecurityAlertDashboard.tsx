import React from "react";

const SecurityAlertDashboard: React.FC = () => {
  const alertSummary = {
    critical: 3,
    high: 0,
    medium: 89,
    low: 137,
  };

  const topAlertTypes = [
    { name: 'Failed Login Attempts', occurrences: 45, severity: 'Medium' },
    { name: 'Malware Detection', occurrences: 12, severity: 'High' },
    { name: 'Data Exfiltration Attempt', occurrences: 3, severity: 'Critical' },
    { name: 'Unauthorized Access', occurrences: 28, severity: 'High' },
    { name: 'Suspicious Network Traffic', occurrences: 67, severity: 'Medium' },
    { name: 'Policy Violation', occurrences: 24, severity: 'Low' },
    { name: 'Phishing Attempt', occurrences: 18, severity: 'High' },
    { name: 'System Anomaly', occurrences: 40, severity: 'Medium' },
  ];

  const weeklyTrend = [
    { day: 'Mon', total: 198, resolved: 165 },
    { day: 'Tue', total: 234, resolved: 210 },
    { day: 'Wed', total: 267, resolved: 234 },
    { day: 'Thu', total: 198, resolved: 189 },
    { day: 'Fri', total: 298, resolved: 267 },
    { day: 'Sat', total: 156, resolved: 145 },
    { day: 'Sun', total: 247, resolved: 201 },
  ];

  const getSeverityBadgeStyles = (severity: string): string => {
    switch (severity) {
      case 'Critical':
        return 'bg-critical text-white';
      case 'High':
        return 'bg-primary-hover text-white';
      case 'Medium':
        return 'bg-gray-200 text-txt-primary';
      case 'Low':
        return 'bg-gray-100 text-txt-secondary';
      default:
        return 'bg-gray-100 text-txt-secondary';
    }
  };

  const maxTotal = Math.max(...weeklyTrend.map(item => item.total));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="stat-card">
          <h2 className="text-2xl font-bold text-txt-primary mb-6">Today's Alert Summary</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-critical-soft rounded-lg p-3 sm:p-4 lg:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-critical mb-1">{alertSummary.critical}</div>
              <div className="text-sm text-txt-secondary">Critical</div>
            </div>
            <div className="text-center p-3 sm:p-4 lg:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-txt-muted mb-1">{alertSummary.high}</div>
              <div className="text-sm text-txt-secondary">High</div>
            </div>
            <div className="text-center p-3 sm:p-4 lg:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-txt-primary mb-1">{alertSummary.medium}</div>
              <div className="text-sm text-txt-secondary">Medium</div>
            </div>
            <div className="text-center p-3 sm:p-4 lg:p-6">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-txt-primary mb-1">{alertSummary.low}</div>
              <div className="text-sm text-txt-secondary">Low</div>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <h2 className="text-xl font-bold text-txt-primary mb-4">Top Alert Types</h2>
          <div className="space-y-3">
            {topAlertTypes.map((alert, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border border-primary/[0.06] rounded-lg hover:bg-surface-bg transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-txt-primary">{alert.name}</h3>
                  <p className="text-sm text-txt-muted">{alert.occurrences} occurrences</p>
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-medium ${getSeverityBadgeStyles(alert.severity)}`}
                >
                  {alert.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="stat-card">
          <h2 className="text-2xl font-bold text-txt-primary mb-6">Weekly Trend</h2>
          <div className="space-y-6">
            {weeklyTrend.map((item, idx) => (
              <div key={idx}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-2">
                  <span className="font-medium text-txt-primary">{item.day}</span>
                  <span className="font-bold text-txt-primary">{item.total}</span>
                </div>
                <div className="w-full progress-track mb-1" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="progress-fill transition-all"
                    style={{ width: `${(item.total / maxTotal) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-txt-muted">{item.resolved} resolved</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SecurityAlertDashboard };