import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MoreVertical } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

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
  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <div className="bg-white border-b border-primary/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-txt-primary">Due Diligence Assessments</h1>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-primary-hover transition-colors">
            New Assessment
          </button>
        </div>
      </div>

      {/* Assessments List */}
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="glass-panel overflow-hidden">
            {/* Assessment Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <button
                    onClick={() => toggleExpand(assessment.id)}
                    className="mt-1 text-txt-muted hover:text-txt-secondary"
                  >
                    {assessment.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-lg font-semibold text-txt-primary">{assessment.vendor}</h2>
                      <span className="px-2.5 py-0.5 bg-gray-200 text-txt-primary rounded text-xs font-medium">
                        {assessment.assessmentType}
                      </span>
                      <span className="px-2.5 py-0.5 bg-gray-200 text-txt-primary rounded text-xs font-medium">
                        {assessment.tier}
                      </span>
                    </div>
                    <div className="text-xs text-txt-muted space-y-1">
                      <div>{assessment.date}</div>
                      <div>{assessment.assessor}</div>
                    </div>
                  </div>
                </div>
                <button className="text-txt-muted hover:text-txt-secondary">
                  <MoreVertical size={20} />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="progress-track overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
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
                      <span className="text-sm text-txt-primary">{item.name}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-txt-muted">{item.assignedTo}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-txt-muted">{item.progress}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Requirements */}
              {assessment.isExpanded && (
                <div className="mb-6 bg-surface-bg rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-txt-primary mb-3">Key Requirements</h3>
                  <ul className="space-y-2">
                    {assessment.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-txt-primary">
                        <span className="text-txt-muted mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-primary/[0.06]">
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-txt-muted">Summary:</span>
                  <span className="font-medium text-txt-primary">{assessment.summary}</span>
                </div>
                <div className="text-xs text-txt-muted">
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