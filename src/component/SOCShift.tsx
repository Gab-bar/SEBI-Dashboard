import React from 'react';
import { Download, ArrowDown, ArrowUp } from 'lucide-react';

interface ShiftLog {
  id: string;
  shift: string;
  date: string;
  timeRange: string;
  criticalAlerts: number;
  highAlerts: number;
  mediumAlerts: number;
  lowAlerts: number;
  keyIncidents: string[];
  teamMembers: string[];
  resolver: string;
  resolved: number;
  escalated: number;
  avgResponseTime: string;
  metrics: {
    alertsResolved: number;
    responseTime: string;
    escalated: number;
  };
  handoverNotes: string;
}

const SOCShiftLogs = () => {
  const shiftLogs: ShiftLog[] = [
    {
      id: 'log-001',
      shift: 'Day Shift (08:00 - 16:00)',
      date: 'Dec 15, 24',
      timeRange: '08:00 - 16:00',
      criticalAlerts: 3,
      highAlerts: 12,
      mediumAlerts: 45,
      lowAlerts: 89,
      keyIncidents: [
        'Critical ransomware detection on server (Incident ID: INC-2024-045)',
        'Failed login attempts from 3+ IP address (Brute force attack)',
        'Unauthorized file access detected (Data Loss Prevention alert)',
        'Unusual network traffic spike detected'
      ],
      teamMembers: ['Team Leader', 'Security Analysts', 'Support Personnel'],
      resolver: 'Priya Sharma',
      resolved: 142,
      escalated: 6,
      avgResponseTime: 'Average 2.5 minutes',
      metrics: {
        alertsResolved: 95,
        responseTime: '2.5m',
        escalated: 4
      },
      handoverNotes: 'Pending: Forensic investigation for ransomware (INC-2024-045) expected to be finished sometime after Friday evening (5 PM)'
    },
    {
      id: 'log-002',
      shift: 'Evening Shift (16:00 - 00:00)',
      date: 'Dec 15, 24',
      timeRange: '16:00 - 00:00',
      criticalAlerts: 2,
      highAlerts: 8,
      mediumAlerts: 38,
      lowAlerts: 76,
      keyIncidents: [
        'Successful phishing campaign detected (INC-2024-046) (5+ employees)',
        'Privilege escalation attempts detected from 5+ accounts',
        'Multiple failed DLP policies detected',
        'Malware file downloads blocked by antivirus'
      ],
      teamMembers: ['Team Leader', 'Security Analysts', 'Support Personnel'],
      resolver: 'Amit Kumar',
      resolved: 118,
      escalated: 4,
      avgResponseTime: 'Average 3.8 minutes',
      metrics: {
        alertsResolved: 93,
        responseTime: '3.8m',
        escalated: 3
      },
      handoverNotes: 'Pending: DLP policy operational. Continue monitoring DLP alerts (All alerts from Phish simulation campaign)'
    },
    {
      id: 'log-003',
      shift: 'Night Shift (00:00 - 08:00)',
      date: 'Dec 15, 24',
      timeRange: '00:00 - 08:00',
      criticalAlerts: 1,
      highAlerts: 5,
      mediumAlerts: 28,
      lowAlerts: 52,
      keyIncidents: [
        'Suspicious outbound traffic detected (Possible C2)',
        'Excessive AdminSDK login activity',
        'Suspicious DNS resolution patterns',
        'Anomaly detected with API usage'
      ],
      teamMembers: ['Team Leader', 'Security Analysts', 'Support Personnel'],
      resolver: 'Rajesh Singh',
      resolved: 82,
      escalated: 3,
      avgResponseTime: 'Average 4.2 minutes',
      metrics: {
        alertsResolved: 95,
        responseTime: '4.2m',
        escalated: 2
      },
      handoverNotes: 'Pending: Security team to investigate. API credentials blocking IOC during Day-Shift'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">SOC Shift Logs</h1>

        {/* Shift Log Cards */}
        <div className="space-y-6">
          {shiftLogs.map((log) => (
            <div key={log.id} className="bg-white rounded-lg border border-gray-200 p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{log.shift}</h2>
                  <div className="text-sm text-gray-600 mt-1">
                    Shift on {log.date} | {log.timeRange}
                  </div>
                </div>
              </div>

              {/* Alert Stats */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-3xl font-bold text-blue-600">{log.criticalAlerts}</div>
                    <ArrowDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500">Critical</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-3xl font-bold text-gray-600">{log.highAlerts}</div>
                    <ArrowDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500">High</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-3xl font-bold text-green-600">{log.mediumAlerts}</div>
                    <ArrowUp className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500">Medium</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="text-3xl font-bold text-yellow-600">{log.lowAlerts}</div>
                    <Download className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500">Low</div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Key Incidents */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Key Incidents</h3>
                    <ul className="space-y-1.5">
                      {log.keyIncidents.map((incident, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                          <span>{incident}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Team Members */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Team Members</h3>
                    <div className="space-y-1">
                      {log.teamMembers.map((member, idx) => (
                        <div key={idx} className="text-sm text-gray-700">{member}</div>
                      ))}
                    </div>
                  </div>

                  {/* Resolver Info */}
                  <div className="space-y-1">
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Resolver: </span>
                      <span className="text-gray-700">{log.resolver}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Resolved: </span>
                      <span className="text-gray-700">{log.resolved}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Escalated: </span>
                      <span className="text-gray-700">{log.escalated}</span>
                    </div>
                  </div>

                  {/* Handover Notes */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Handover Notes</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-900">{log.handoverNotes}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Metrics Dashboard */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Metrics Dashboard</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Response Time</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                          Completed
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Resolved Alerts</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-white">
                          Completed
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">Escalated</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
                          Updated
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="pt-4">
                    <div className="text-sm text-gray-700 mb-1">
                      Average {log.avgResponseTime}
                    </div>
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

export  {SOCShiftLogs};