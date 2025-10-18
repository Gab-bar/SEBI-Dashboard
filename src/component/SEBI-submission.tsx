import React from 'react';
import { ChevronDown, FileText } from 'lucide-react';

interface Submission {
  id: string;
  title: string;
  status: 'Submitted' | 'Under Review' | 'Approved' | 'High';
  dueDate: string;
  submittedBy: string;
  submittedDate: string;
  reference: string;
  type: string;
  assignedTo: string;
  priority: string;
  metrics: {
    onTime: { value: number; label: string; total?: string };
    quality: { value: number; label: string; total?: string };
    client: { value: number; label: string; total?: string };
    findings: { value: number; label: string; total?: string };
  };
}

const SEBISubmissions = () => {
  const submissions: Submission[] = [
    {
      id: 'quarterly-vapt-report',
      title: 'Quarterly VAPT Report',
      status: 'Submitted',
      dueDate: '2024-12-15',
      submittedBy: 'John Doe',
      submittedDate: '2024-12-10',
      reference: 'SEBI/HO/MIRSD/CRD/2024/001',
      type: 'Quarterly Report',
      assignedTo: 'Compliance Desk',
      priority: 'High',
      metrics: {
        onTime: { value: 95, label: 'On Time', total: 'Cyber Security' },
        quality: { value: 92, label: 'Quality', total: 'KYC/AML Process' },
        client: { value: 100, label: 'Client', total: 'Periodic Review' },
        findings: { value: 94, label: 'Findings', total: 'Done (Jan 2024)' }
      }
    },
    {
      id: 'annual-security',
      title: 'Annual Security Assessment',
      status: 'Under Review',
      dueDate: '2024-11-30',
      submittedBy: 'Jane Smith',
      submittedDate: '2024-11-25',
      reference: 'SEBI/HO/MIRSD/CRD/2024/002',
      type: 'Annual',
      assignedTo: 'IT Department',
      priority: 'Medium',
      metrics: {
        onTime: { value: 98, label: 'CR', total: 'On Time Delivery' },
        quality: { value: 89, label: 'H8', total: 'Quality Assessment' },
        client: { value: 91, label: 'C7', total: 'Client Satisfaction' },
        findings: { value: 96, label: 'C2', total: 'Audit Findings' }
      }
    },
    {
      id: 'incident-related',
      title: 'Incident Related Assessment',
      status: 'Approved',
      dueDate: '2024-10-15',
      submittedBy: 'Mike Johnson',
      submittedDate: '2024-10-10',
      reference: 'SEBI/HO/MIRSD/CRD/2024/003',
      type: 'Incident',
      assignedTo: 'Legal Department',
      priority: 'High',
      metrics: {
        onTime: { value: 100, label: 'Medium', total: 'CL 04/2024' },
        quality: { value: 94, label: 'High', total: '12 sections' },
        client: { value: 88, label: 'None', total: '2 hours' },
        findings: { value: 92, label: 'C', total: '4 hours' }
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-gray-900 text-white';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approved':
        return 'bg-gray-900 text-white';
      case 'High':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">SEBI Submissions</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium text-sm">
            <FileText className="w-4 h-4" />
            New Submission
          </button>
        </div>

        {/* Submissions */}
        <div className="space-y-6">
          {submissions.map((submission, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg font-semibold text-gray-900">{submission.title}</h2>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                    {submission.status === 'Under Review' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        High
                      </span>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-6 mt-2 text-xs text-gray-600">
                  <span>Due Date: {submission.dueDate}</span>
                  <span>Submitted By: {submission.submittedBy}</span>
                  <span>Submitted: {submission.submittedDate}</span>
                  <span>Reference: {submission.reference}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-6 py-3 bg-white">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gray-900 h-2 rounded-full transition-all duration-300"
                    style={{ width: '65%' }}
                  />
                </div>
              </div>

              {/* Content Grid */}
              <div className="px-6 py-4">
                <div className="grid grid-cols-2 gap-x-12 gap-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Submission Reference</span>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                      <span className="text-sm text-gray-900">{submission.reference}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Compliance Type</span>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(submission.status)}`}>
                        {submission.status}
                      </span>
                      <span className="text-sm text-gray-900">{submission.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Due Assessment</span>
                    <span className="text-sm text-gray-900">{submission.assignedTo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Remediation Status</span>
                    <span className="text-sm text-gray-900">{submission.assignedTo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Compliance Date</span>
                    <span className="text-sm text-gray-900">{submission.dueDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Date Created</span>
                    <span className="text-sm text-gray-900">{submission.submittedDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Due Priority</span>
                    <span className="text-sm text-gray-900">{submission.priority}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Next Review Date</span>
                    <span className="text-sm text-gray-900">{submission.dueDate}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-6 mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 mb-1">{submission.metrics.onTime.label}</div>
                    <div className="text-xs text-gray-500 mb-2">{submission.metrics.onTime.total}</div>
                    <div className="text-2xl font-semibold text-gray-900">{submission.metrics.onTime.value}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 mb-1">{submission.metrics.quality.label}</div>
                    <div className="text-xs text-gray-500 mb-2">{submission.metrics.quality.total}</div>
                    <div className="text-2xl font-semibold text-gray-900">{submission.metrics.quality.value}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 mb-1">{submission.metrics.client.label}</div>
                    <div className="text-xs text-gray-500 mb-2">{submission.metrics.client.total}</div>
                    <div className="text-2xl font-semibold text-gray-900">{submission.metrics.client.value}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900 mb-1">{submission.metrics.findings.label}</div>
                    <div className="text-xs text-gray-500 mb-2">{submission.metrics.findings.total}</div>
                    <div className="text-2xl font-semibold text-gray-900">{submission.metrics.findings.value}%</div>
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

export {SEBISubmissions};