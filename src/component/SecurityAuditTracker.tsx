import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertCircle } from 'lucide-react';

interface Finding {
  description: string;
  recommendation: string;
  status: 'Critical' | 'High' | 'Medium' | 'Low' | 'Open' | 'In Progress' | 'Closed';
  assignee?: string;
}

interface Audit {
  id: string;
  vendor: string;
  auditType: string;
  date: string;
  auditor: string;
  critical: number;
  high: number;
  medium: number;
  compliance: string;
  findings: Finding[];
  overallRating: string;
  nextAudit: string;
  certificationDetails?: string;
  isExpanded: boolean;
}

const SecurityAuditTracker = () => {
  const [audits, setAudits] = useState<Audit[]>([
    {
      id: '1',
      vendor: 'CloudStack Solutions Pvt Ltd',
      auditType: 'Re-Survey',
      date: 'Audit Date: Q1 25 | Q3 2025-06 Control Security Audit',
      auditor: 'Internal Security Team',
      critical: 0,
      high: 3,
      medium: 8,
      compliance: '87%',
      findings: [
        {
          description: 'Backup encryption keys not properly segregated',
          recommendation: 'Implement multi-key encryption system',
          status: 'High',
          assignee: 'Resolved'
        },
        {
          description: 'Lack detection control and security requirements',
          recommendation: 'Enhance security monitoring',
          status: 'Medium',
          assignee: 'In Progress'
        },
        {
          description: 'Incomplete admin review documentation',
          recommendation: 'Complete documentation process',
          status: 'Medium',
          assignee: 'In Progress'
        }
      ],
      overallRating: 'Good',
      nextAudit: 'Next Audit: 2026-06-15',
      certificationDetails: 'Certification Impact: ISO 27001 2025 certification',
      isExpanded: false
    },
    {
      id: '2',
      vendor: 'DataShield Inc. Services',
      auditType: 'In Progress',
      date: 'Audit Date: Q1, 25 | Q3 2025-06 Control Security Audit',
      auditor: 'Control Panel Audit',
      critical: 2,
      high: 6,
      medium: 8,
      compliance: '62%',
      findings: [
        {
          description: 'Backup verification logs are disclosed',
          recommendation: 'Improve monitoring to track logs',
          status: 'Critical',
          assignee: 'Open'
        },
        {
          description: 'Vendor contact information incomplete',
          recommendation: 'Update vendor management records',
          status: 'Critical',
          assignee: 'In Progress'
        },
        {
          description: 'Credentials discovered incorrectly during testing',
          recommendation: 'Password management policy',
          status: 'High',
          assignee: 'Open'
        }
      ],
      overallRating: 'Needs Improvement',
      nextAudit: 'Next Audit: 2025-10-12',
      certificationDetails: 'Certification Impact: SOC 2 in progress on 25-08',
      isExpanded: false
    },
    {
      id: '3',
      vendor: 'Global Software Solutions',
      auditType: 'Audit Round Two',
      date: 'Audit Date: Q2 25 | Q3 2025-06 Compliance, Regulatory, Security Assessment',
      auditor: 'Audit Round Two',
      critical: 3,
      high: 7,
      medium: 12,
      compliance: '45%',
      findings: [
        {
          description: 'Incomplete penetration testing - infrastructure',
          recommendation: 'Complete pen testing immediately',
          status: 'Critical',
          assignee: 'Open'
        },
        {
          description: 'Failure in audit during security reviews',
          recommendation: 'Implement enhanced audit protocols',
          status: 'Critical',
          assignee: 'Open'
        },
        {
          description: 'Unclear security policies for vendors',
          recommendation: 'Update and clarify policies',
          status: 'Critical',
          assignee: 'Open'
        }
      ],
      overallRating: 'Unsatisfactory',
      nextAudit: 'Next Audit: 2025-12-20',
      certificationDetails: 'Certification Impact: ISO - retest for security classification',
      isExpanded: false
    }
  ]);

  const toggleExpand = (id: string) => {
    setAudits(audits.map(audit => 
      audit.id === id ? { ...audit, isExpanded: !audit.isExpanded } : audit
    ));
  };

  const getSeverityColor = (severity: string | number) => {
    const val = typeof severity === 'string' ? severity : '';
    switch (val) {
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
      case 'Closed':
        return 'bg-gray-900 text-white';
      case 'In Progress':
        return 'bg-gray-900 text-white';
      case 'Open':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  const getComplianceColor = (compliance: string) => {
    const percent = parseInt(compliance);
    if (percent >= 80) return 'text-blue-600';
    if (percent >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Security Audit Tracker</h1>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors">
            New Audit Log
          </button>
        </div>
      </div>

      {/* Audits List */}
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {audits.map((audit) => (
          <div key={audit.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Audit Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <button
                    onClick={() => toggleExpand(audit.id)}
                    className="mt-1 text-gray-400 hover:text-gray-600"
                  >
                    {audit.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-semibold text-gray-900">{audit.vendor}</h2>
                      <span className="px-2.5 py-0.5 bg-gray-900 text-white rounded text-xs font-medium">
                        {audit.auditType}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>{audit.date}</div>
                      <div>{audit.auditor}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#ffe5e5' }}>
                  <div className="flex items-center justify-center mb-2">
                    <AlertCircle className="text-red-500" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-red-600">{audit.critical}</div>
                  <div className="text-xs text-gray-600 mt-1">Critical</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#fff4e5' }}>
                  <div className="flex items-center justify-center mb-2">
                    <AlertCircle className="text-orange-500" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-orange-600">{audit.high}</div>
                  <div className="text-xs text-gray-600 mt-1">High</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#fffbeb' }}>
                  <div className="flex items-center justify-center mb-2">
                    <AlertCircle className="text-yellow-500" size={20} />
                  </div>
                  <div className="text-3xl font-bold text-yellow-600">{audit.medium}</div>
                  <div className="text-xs text-gray-600 mt-1">Medium</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: '#e8f4fd' }}>
                  <div className={`text-3xl font-bold ${getComplianceColor(audit.compliance)}`}>
                    {audit.compliance}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Compliance</div>
                </div>
              </div>

              {/* Findings */}
              <div className="space-y-3 mb-6">
                <h3 className="text-sm font-semibold text-gray-700">Key Findings:</h3>
                {audit.findings.map((finding, idx) => (
                  <div key={idx} className="flex items-start justify-between py-2.5 border-b border-gray-100 last:border-0">
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 mb-1">{finding.description}</div>
                      <div className="text-xs text-gray-500">{finding.recommendation}</div>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(finding.status)}`}>
                        {finding.status}
                      </span>
                      {finding.assignee && (
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(finding.assignee)}`}>
                          {finding.assignee}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-6 text-gray-600">
                    <span>Overall Rating: <span className="font-medium text-gray-900">{audit.overallRating}</span></span>
                    <span>{audit.nextAudit}</span>
                  </div>
                  {audit.certificationDetails && (
                    <div className="text-gray-500">{audit.certificationDetails}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export  {SecurityAuditTracker};