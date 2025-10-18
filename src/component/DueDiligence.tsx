import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MoreVertical } from 'lucide-react';

interface AssessmentItem {
  name: string;
  status: 'Completed' | 'In Progress' | 'Pending' | 'Overdue';
  assignedTo: string;
  dueDate?: string;
  progress?: string;
}

interface Assessment {
  id: string;
  vendor: string;
  assessmentType: string;
  tier: string;
  date: string;
  assessor: string;
  items: AssessmentItem[];
  requirements: string[];
  summary: string;
  nextReview: string;
  isExpanded: boolean;
}

const DueDiligenceAssessments = () => {
  const [assessments, setAssessments] = useState<Assessment[]>([
    {
      id: '1',
      vendor: 'Global Software Solutions',
      assessmentType: 'Initial Survey',
      tier: 'High Risk',
      date: 'DD: Q2-2024 | Cybersecurity Assessment 5H, Q4, FY 24',
      assessor: 'Assessment Conducted By: Risk Team',
      isExpanded: false,
      items: [
        { name: 'Vendor Credentials', status: 'Completed', assignedTo: 'Vendor Review', progress: '100%' },
        { name: 'Data Protection', status: 'Completed', assignedTo: 'Compliance Evaluation', progress: '100%' },
        { name: 'Compliance & Certifications', status: 'In Progress', assignedTo: 'Compliance Reviews', progress: '85%' },
        { name: 'Business Continuity', status: 'Pending', assignedTo: 'Response Pending', progress: '0%' }
      ],
      requirements: [
        'Submitted data privacy policies and procedures',
        'Evidence of ISO 27001 certification',
        'Business continuity and disaster recovery plans',
        'Incident response documentation'
      ],
      summary: 'Assessment Optional',
      nextReview: 'Next Review: 2025-Q3, 30'
    },
    {
      id: '2',
      vendor: 'CloudStack Solutions Pvt Ltd',
      assessmentType: 'Re-Survey',
      tier: 'Vendor Re-R',
      date: 'DD: Q2-2025 | Cybersecurity Re-Assessment 6H',
      assessor: 'Assessment Conducted By: Risk Team',
      isExpanded: false,
      items: [
        { name: 'Vendor Credentials', status: 'Completed', assignedTo: 'Vendor Review', progress: '100%' },
        { name: 'Data Protection', status: 'Completed', assignedTo: 'Vendor Review', progress: '100%' },
        { name: 'Compliance & Certifications', status: 'Completed', assignedTo: 'Compliance Reviews', progress: '100%' },
        { name: 'Business Continuity', status: 'Completed', assignedTo: 'Security Measures', progress: '100%' }
      ],
      requirements: [
        'Updated security policies and procedures',
        'Latest SOC2 compliance certificate',
        'Enhanced incident and disaster recovery strategies',
        'Penetration test results'
      ],
      summary: 'Assessment Approved',
      nextReview: 'Next Review: 2025-Q1, 30'
    }
  ]);

  const toggleExpand = (id: string) => {
    setAssessments(assessments.map(assessment => 
      assessment.id === id ? { ...assessment, isExpanded: !assessment.isExpanded } : assessment
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gray-900 text-white';
      case 'In Progress':
        return 'bg-gray-900 text-white';
      case 'Pending':
        return 'bg-gray-900 text-white';
      case 'Overdue':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Due Diligence Assessments</h1>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors">
            New Assessment
          </button>
        </div>
      </div>

      {/* Assessments List */}
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Assessment Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <button
                    onClick={() => toggleExpand(assessment.id)}
                    className="mt-1 text-gray-400 hover:text-gray-600"
                  >
                    {assessment.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-semibold text-gray-900">{assessment.vendor}</h2>
                      <span className="px-2.5 py-0.5 bg-gray-200 text-gray-800 rounded text-xs font-medium">
                        {assessment.assessmentType}
                      </span>
                      <span className="px-2.5 py-0.5 bg-gray-200 text-gray-800 rounded text-xs font-medium">
                        {assessment.tier}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>{assessment.date}</div>
                      <div>{assessment.assessor}</div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gray-900 to-gray-700"
                    style={{ width: assessment.id === '1' ? '70%' : '100%' }}
                  />
                </div>
              </div>

              {/* Assessment Items */}
              <div className="space-y-2 mb-6">
                {assessment.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-gray-500">{item.assignedTo}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{item.progress}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Requirements */}
              {assessment.isExpanded && (
                <div className="mb-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Requirements</h3>
                  <ul className="space-y-2">
                    {assessment.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-gray-500">Summary:</span>
                  <span className="font-medium text-gray-900">{assessment.summary}</span>
                </div>
                <div className="text-xs text-gray-500">
                  {assessment.nextReview}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {DueDiligenceAssessments};