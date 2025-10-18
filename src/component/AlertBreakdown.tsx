import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AlertType {
  name: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  tags: string[];
  count: number;
  change: string;
}

const AlertBreakdownDashboard = () => {
  const todayStats = {
    critical: 8,
    high: 45,
    medium: 312,
    low: 582,
    total: 947
  };

  const weeklyTrend = [
    { day: 'Mon', critical: 3, high: 12, medium: 45, low: 89, total: 149 },
    { day: 'Tue', critical: 5, high: 8, medium: 38, low: 76, total: 127 },
    { day: 'Wed', critical: 2, high: 15, medium: 52, low: 94, total: 163 },
    { day: 'Thu', critical: 4, high: 9, medium: 41, low: 88, total: 142 },
    { day: 'Fri', critical: 6, high: 11, medium: 48, low: 85, total: 150 },
    { day: 'Sat', critical: 1, high: 7, medium: 35, low: 71, total: 114 },
    { day: 'Sun', critical: 4, high: 10, medium: 43, low: 79, total: 136 }
  ];

  const alertTypes: AlertType[] = [
    {
      name: 'Failed Authentication',
      severity: 'Medium',
      tags: ['Security: SSH/Telnet Attempts', 'Avg. Resolution: 5 minutes'],
      count: 2845,
      change: '+12%'
    },
    {
      name: 'Malware Detection',
      severity: 'High',
      tags: ['Security: Endpoint Protection', 'Avg. Resolution: 24 minutes'],
      count: 187,
      change: '+8%'
    },
    {
      name: 'Suspicious Network Traffic',
      severity: 'Medium',
      tags: ['Security: Network IDS', 'Avg. Resolution: 15 minutes'],
      count: 1567,
      change: '-5%'
    },
    {
      name: 'Data Exfiltration Attempt',
      severity: 'Critical',
      tags: ['Security: DLP System', 'Avg. Resolution: 45 minutes'],
      count: 23,
      change: '+43%'
    },
    {
      name: 'Privilege Escalation',
      severity: 'High',
      tags: ['Security: PAM System', 'Avg. Resolution: 20 minutes'],
      count: 89,
      change: '-15%'
    },
    {
      name: 'Phishing Email Detected',
      severity: 'Medium',
      tags: ['Security: Email Gateway', 'Avg. Resolution: 30 minutes'],
      count: 456,
      change: '+7%'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'High':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const maxTotal = Math.max(...weeklyTrend.map(d => d.total));

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* Today's Alert Breakdown */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Alert Breakdown</h2>
          
          <div className="space-y-4">
            {/* Critical */}
            <div className="flex items-center">
              <div className="w-32 text-sm text-gray-700">Critical</div>
              <div className="flex-1 relative">
                <div className="flex items-center">
                  <div className="w-full bg-red-50 rounded-full h-8 relative">
                    <div 
                      className="bg-red-500 h-8 rounded-full flex items-center justify-start px-3"
                      style={{ width: `${(todayStats.critical / todayStats.total) * 100}%` }}
                    >
                      <span className="text-xs font-medium text-white">{todayStats.critical}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-24 text-right">
                <span className="text-sm text-gray-700">High</span>
              </div>
              <div className="w-16 text-right">
                <span className="text-lg font-semibold text-gray-900">{todayStats.high}</span>
              </div>
            </div>

            {/* Medium */}
            <div className="flex items-center">
              <div className="w-32 text-sm text-gray-700">Medium</div>
              <div className="flex-1 relative">
                <div className="flex items-center">
                  <div className="w-full bg-yellow-50 rounded-full h-8 relative">
                    <div 
                      className="bg-yellow-500 h-8 rounded-full flex items-center justify-start px-3"
                      style={{ width: `${(todayStats.medium / todayStats.total) * 100}%` }}
                    >
                      <span className="text-xs font-medium text-white">{todayStats.medium}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-24 text-right">
                <span className="text-sm text-gray-700">Low</span>
              </div>
              <div className="w-16 text-right">
                <span className="text-lg font-semibold text-gray-900">{todayStats.low}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center pt-2 border-t border-gray-200">
              <div className="w-32 text-sm font-medium text-gray-900">Total Alerts</div>
              <div className="flex-1"></div>
              <div className="w-24 text-right text-sm text-gray-600">
                {todayStats.total} / 1,247
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Top Alert Types */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Alert Types</h2>
            
            <div className="space-y-3">
              {alertTypes.map((alert, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-medium text-gray-900">{alert.name}</span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      {alert.severity === 'Critical' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white">
                          Critical
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      {alert.tags.map((tag, tagIdx) => (
                        <React.Fragment key={tagIdx}>
                          <span>{tag}</span>
                          {tagIdx < alert.tags.length - 1 && <span>•</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-semibold text-gray-900">{alert.count}</div>
                    <div className={`text-xs font-medium ${
                      alert.change.startsWith('+') ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {alert.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Alert Trend */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Alert Trend</h2>
            
            <div className="space-y-3">
              {weeklyTrend.map((day, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-gray-700">{day.day}</div>
                  
                  <div className="flex items-center gap-1 text-xs">
                    <div className="flex items-center gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <span className="text-gray-600">{day.critical}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      <span className="text-gray-600">{day.high}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                      <span className="text-gray-600">{day.medium}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-gray-600">{day.low}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute left-0 h-full bg-gray-900 rounded-full transition-all"
                        style={{ width: `${(day.total / maxTotal) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="w-12 text-right text-sm font-semibold text-gray-900">
                    {day.total}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export  {AlertBreakdownDashboard};