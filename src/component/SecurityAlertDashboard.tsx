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
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-gray-800 text-white';
      case 'Medium':
        return 'bg-gray-200 text-gray-800';
      case 'Low':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const maxTotal = Math.max(...weeklyTrend.map(item => item.total));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Alert Summary</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-1">{alertSummary.critical}</div>
              <div className="text-sm text-gray-600">Critical</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-gray-400 mb-1">{alertSummary.high}</div>
              <div className="text-sm text-gray-600">High</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-gray-900 mb-1">{alertSummary.medium}</div>
              <div className="text-sm text-gray-600">Medium</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-gray-900 mb-1">{alertSummary.low}</div>
              <div className="text-sm text-gray-600">Low</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Alert Types</h2>
          <div className="space-y-3">
            {topAlertTypes.map((alert, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{alert.name}</h3>
                  <p className="text-sm text-gray-500">{alert.occurrences} occurrences</p>
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
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Trend</h2>
          <div className="space-y-6">
            {weeklyTrend.map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{item.day}</span>
                  <span className="font-bold text-gray-900">{item.total}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                  <div
                    className="bg-gray-900 h-2 rounded-full transition-all"
                    style={{ width: `${(item.total / maxTotal) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{item.resolved} resolved</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SecurityAlertDashboard };