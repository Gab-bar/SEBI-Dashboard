import React from 'react';
import { ChevronDown, Plus } from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Testing' | 'Approved';
  description: string;
  logic: string;
  dataSource: string;
  tags: string[];
  soc: string;
  eventTriggered: string;
  updated: string;
}

const SIEMUseCaseLibrary = () => {
  const useCases: UseCase[] = [
    {
      id: 'uc-001',
      title: 'Brute Force Attack Detection',
      severity: 'High',
      status: 'Active',
      description: 'UC-001 | Multiple failed authentication attempts',
      logic: 'Detects 5+ failed logins from same IP within 5 min, followed by successful login',
      dataSource: 'Windows Security Logs',
      tags: ['Failed Auth Log', 'Successful auth'],
      soc: 'SOC Tier 1 Engineer',
      eventTriggered: 'Priya Sharma',
      updated: 'Last updated: 2024-11-22'
    },
    {
      id: 'uc-002',
      title: 'Data Exfiltration Detection',
      severity: 'Critical',
      status: 'Active',
      description: 'UC-002 | Abnormal data transfer patterns',
      logic: 'Unusual outbound data transfers exceeding 1GB to external destination within short timeframe',
      dataSource: 'Firewall Logs',
      tags: ['DLP Logs', 'Database Audit Logs'],
      soc: 'SOC Tier 2 Analyst',
      eventTriggered: 'Amit Kumar',
      updated: 'Last updated: 2024-11-20'
    },
    {
      id: 'uc-003',
      title: 'Malware Execution & Lateral Movement',
      severity: 'Critical',
      status: 'Testing',
      description: 'UC-003 | Malware Process Detection',
      logic: 'Detection of known malware signatures or suspicious process execution followed by lateral movement attempts',
      dataSource: 'Endpoint Logs',
      tags: ['EDR Logs', 'Process Logs', 'Network Logs'],
      soc: 'SOC Tier 3 Engineer',
      eventTriggered: 'Rajesh Singh',
      updated: 'Last updated: 2024-11-18'
    },
    {
      id: 'uc-004',
      title: 'Privilege Escalation Attempt',
      severity: 'High',
      status: 'Active',
      description: 'UC-004 | Privilege Escalation Detection',
      logic: 'Unauthorized attempts to elevate privileges or access restricted resources outside normal scope',
      dataSource: 'Windows Security Logs',
      tags: ['Failed Auth Logs', 'AD Logs'],
      soc: 'SOC Tier 2 Analyst',
      eventTriggered: 'Neha Patel',
      updated: 'Last updated: 2024-11-15'
    },
    {
      id: 'uc-005',
      title: 'Insider Threat Behavior Analysis',
      severity: 'Medium',
      status: 'Approved',
      description: 'UC-005 | Anomalous User Behavior',
      logic: 'Unusual user activity patterns including off-hours access, multiple failed access attempts, or accessing sensitive data',
      dataSource: 'User Activity Logs',
      tags: ['File Access Logs', 'VPN Logs', 'Email Logs'],
      soc: 'SOC Tier 2 Analyst',
      eventTriggered: 'Vikram Reddy',
      updated: 'Last updated: 2024-11-12'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-600 text-white';
      case 'High':
        return 'bg-orange-100 text-orange-700 border border-orange-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
      case 'Low':
        return 'bg-blue-100 text-blue-700 border border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-gray-900 text-white';
      case 'Testing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approved':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">SIEM Use Case Library</h1>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-sm font-medium text-gray-700">
              Filter
            </button>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium text-sm">
              <Plus className="w-4 h-4" />
              Add Use Case
            </button>
          </div>
        </div>

        {/* Use Case Cards */}
        <div className="space-y-4">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="bg-white rounded-lg border border-gray-200">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-base font-semibold text-gray-900">{useCase.title}</h2>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getSeverityColor(useCase.severity)}`}>
                      {useCase.severity}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(useCase.status)}`}>
                      {useCase.status}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-600">{useCase.description}</div>
              </div>

              {/* Content */}
              <div className="px-6 py-5">
                {/* Progress Bar */}
                <div className="mb-5">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-900 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-8 mb-5">
                  {/* Left Column */}
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">Logic</div>
                      <div className="text-sm text-gray-700">{useCase.logic}</div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">Data Sources</div>
                      <div className="text-sm text-gray-700">{useCase.dataSource}</div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-gray-900 mb-2">Tags</div>
                      <div className="flex flex-wrap gap-2">
                        {useCase.tags.map((tag, idx) => (
                          <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs bg-white text-gray-700 border border-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">SOC</div>
                      <div className="text-sm text-gray-700">{useCase.soc}</div>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">Event Triggered</div>
                      <div className="text-sm text-gray-700">{useCase.eventTriggered}</div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-xs text-gray-500">{useCase.updated}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {SIEMUseCaseLibrary};