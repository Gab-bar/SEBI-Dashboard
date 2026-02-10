import React from 'react';
import { AlertTriangle, ChevronDown, Filter, Download, RefreshCw } from 'lucide-react';
import { getSeverityClass, getStatusClass } from '@/lib/colors';

interface Incident {
  id: number;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Resolved' | 'Under Investigation' | 'In Progress';
  incidentId: string;
  dateReported: string;
  reportedBy: string;
  assignedTo: string;
  affectedSystem: string;
  location: string;
  impact: string;
  tags: string[];
  resolution?: string;
  rootCause?: string;
  description: string;
}

const SecurityIncidentLog = () => {
  const incidents: Incident[] = [
    {
      id: 1,
      title: 'Suspicious Login Activity from Unknown Location',
      severity: 'Critical',
      status: 'Active',
      incidentId: 'INC-2024-1201',
      dateReported: '2024-12-15 14:32:45',
      reportedBy: 'Security Monitoring System',
      assignedTo: 'John Doe, SOC Analyst',
      affectedSystem: 'Authentication System',
      location: 'Mumbai, India',
      impact: 'Medium',
      tags: ['Authentication', 'Brute Force', 'External Threat'],
      description: 'Multiple failed login attempts detected from IP address 192.168.1.100 with subsequent successful login using compromised credentials.',
      rootCause: 'Weak password policy allowed brute force attack to succeed after 487 attempts.'
    },
    {
      id: 2,
      title: 'Malware Detection on Trading Workstation',
      severity: 'High',
      status: 'Under Investigation',
      incidentId: 'INC-2024-1198',
      dateReported: '2024-12-14 09:15:22',
      reportedBy: 'Endpoint Detection System',
      assignedTo: 'Jane Smith, Security Analyst',
      affectedSystem: 'Trading Platform Workstation',
      location: 'Bangalore Office',
      impact: 'High',
      tags: ['Malware', 'Trading System', 'Zero-Based'],
      description: 'Trojan detected on trader workstation attempting to exfiltrate trading data and credentials.',
      resolution: 'Workstation isolated from network. Full forensic analysis in progress.'
    },
    {
      id: 3,
      title: 'Unauthorized Data Access by Internal User',
      severity: 'Medium',
      status: 'Resolved',
      incidentId: 'INC-2024-1187',
      dateReported: '2024-12-10 16:45:33',
      reportedBy: 'Data Loss Prevention',
      assignedTo: 'Mike Johnson, Compliance',
      affectedSystem: 'Client Database',
      location: 'Delhi Office',
      impact: 'Medium',
      tags: ['Data Access', 'DLP Policy', 'Unauthorized Access'],
      description: 'Employee accessed customer data outside of normal job responsibilities and business hours.',
      resolution: 'Investigation completed. Employee counseled on data access policies.',
      rootCause: 'Overly permissive access controls on customer database.'
    },
    {
      id: 4,
      title: 'Phishing Email Campaign Targeting Employees',
      severity: 'Medium',
      status: 'In Progress',
      incidentId: 'INC-2024-1175',
      dateReported: '2024-12-08 11:20:15',
      reportedBy: 'Email Security Gateway',
      assignedTo: 'Sarah Lee, Security Team',
      affectedSystem: 'Email Infrastructure',
      location: 'Company-Wide',
      impact: 'Low',
      tags: ['Phishing', 'Social Engineering', 'Email Security'],
      description: 'Coordinated phishing campaign detected targeting finance department with fake invoice attachments.',
      resolution: 'Email blocked. Security awareness training scheduled for all employees.'
    },
    {
      id: 5,
      title: 'Network Infrastructure DDoS Attack',
      severity: 'High',
      status: 'Resolved',
      incidentId: 'INC-2024-1156',
      dateReported: '2024-12-05 03:47:12',
      reportedBy: 'Network Monitoring Team',
      assignedTo: 'Network Operations Center',
      affectedSystem: 'Public Web Infrastructure',
      location: 'Mumbai Data Center',
      impact: 'Critical',
      tags: ['DDoS', 'Network Change', 'Business Continuity'],
      description: 'Distributed denial-of-service attack targeting public-facing trading portals with 50 Gbps traffic.',
      resolution: 'Traffic rerouted through DDoS mitigation service. All systems restored within 45 minutes.',
      rootCause: 'Insufficient traffic filtering and rate limiting on edge routers.'
    }
  ];
  return (
    <div className="min-h-screen bg-surface-bg p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Security Incident Log</h1>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-primary/[0.08] rounded-lg bg-white hover:bg-surface-bg text-sm font-medium text-txt-primary">
              <Filter className="w-4 h-4" />
              Add Incident
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-primary/[0.08] rounded-lg bg-white hover:bg-surface-bg text-sm font-medium text-txt-primary">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-primary/[0.08] rounded-lg bg-white hover:bg-surface-bg text-sm font-medium text-txt-primary">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Incidents */}
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div key={incident.id} className="glass-panel">
              {/* Header */}
              <div className="px-6 py-4 border-b border-primary/[0.06] bg-surface-bg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <AlertTriangle className="w-5 h-5 text-txt-muted mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-base font-semibold text-txt-primary">{incident.title}</h2>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getStatusClass(incident.status)}`}>
                          {incident.status}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${getSeverityClass(incident.severity)}`}>
                          {incident.severity}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-txt-secondary">
                        <span>INC: {incident.incidentId}</span>
                        <span>Reported: {incident.dateReported}</span>
                      </div>
                    </div>
                    <button className="text-txt-muted hover:text-txt-secondary">
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-4">
                <p className="text-sm text-txt-primary mb-4">{incident.description}</p>

                <div className="grid grid-cols-3 gap-x-8 gap-y-3 mb-4">
                  <div>
                    <div className="text-xs font-medium text-txt-muted mb-1">Reported by</div>
                    <div className="text-sm text-txt-primary">{incident.reportedBy}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-txt-muted mb-1">Assigned to</div>
                    <div className="text-sm text-txt-primary">{incident.assignedTo}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-txt-muted mb-1">Impact</div>
                    <div className="text-sm text-txt-primary">{incident.impact}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-txt-muted mb-1">Affected System</div>
                    <div className="text-sm text-txt-primary">{incident.affectedSystem}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-txt-muted mb-1">Location</div>
                    <div className="text-sm text-txt-primary">{incident.location}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-txt-muted mb-1">Date Reported</div>
                    <div className="text-sm text-txt-primary">{incident.dateReported}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="text-xs font-medium text-txt-muted mb-2">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {incident.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs bg-gray-100 text-txt-primary border border-primary/[0.08]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resolution */}
                {incident.resolution && (
                  <div className="bg-success-soft border border-green-200 rounded-lg p-3">
                    <div className="text-xs font-medium text-green-900 mb-1">Resolution</div>
                    <div className="text-sm text-success">{incident.resolution}</div>
                  </div>
                )}

                {/* Root Cause */}
                {incident.rootCause && (
                  <div className="bg-primary-soft border border-blue-200 rounded-lg p-3 mt-3">
                    <div className="text-xs font-medium text-blue-900 mb-1">Root Cause</div>
                    <div className="text-sm text-primary">{incident.rootCause}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {SecurityIncidentLog};