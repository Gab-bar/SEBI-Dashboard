import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';
import { getStatusClass, getSeverityClass } from '@/lib/colors';

interface Assessment {
  title: string;
  id: string;
  scope: string;
  status: 'Scheduled' | 'In Progress' | 'Completed';
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  schedule: string;
  scheduleDays: string;
  vendor: string;
  vendorName: string;
  cost: string;
  systems: string[];
  leadAssessor: string;
  methodology: string;
  lastAssessment: string;
}

const AssessmentSchedule = () => {
  const assessments: Assessment[] = [
    {
      title: 'External Penetration Testing',
      id: 'VAPT-001',
      scope: 'Trading Platform & Client Portal',
      status: 'Scheduled',
      priority: 'Critical',
      schedule: '2024-12-15',
      scheduleDays: '7 days',
      vendor: 'Vendor',
      vendorName: 'CyberSec Solutions Pvt Ltd',
      cost: '₹5,50,000',
      systems: ['Trading Platform', 'Client Portal', 'API Gateway'],
      leadAssessor: 'Rajesh Gupta (CISSP, CEH)',
      methodology: 'OWASP + NIST',
      lastAssessment: '2024-09-15'
    },
    {
      title: 'Internal Network Assessment',
      id: 'VAPT-002',
      scope: 'Internal Network & Infrastructure',
      status: 'In Progress',
      priority: 'High',
      schedule: '2024-12-08',
      scheduleDays: '5 days',
      vendor: 'Vendor',
      vendorName: 'SecureAudit Technologies',
      cost: '₹6,25,000',
      systems: ['Internal Network', 'Domain Controllers', 'Database Servers'],
      leadAssessor: 'Amit Kumar (OSCP, CISM)',
      methodology: 'PTES + Custom Framework',
      lastAssessment: '2024-08-08'
    },
    {
      title: 'Web Application Security Testing',
      id: 'VAPT-003',
      scope: 'All Web Applications',
      status: 'Scheduled',
      priority: 'High',
      schedule: '2024-12-22',
      scheduleDays: '10 days',
      vendor: 'Vendor',
      vendorName: 'AppSec Experts',
      cost: '₹12,75,000',
      systems: ['Trading Web App', 'Client Portal', 'Admin Dashboard', 'Reporting Portal'],
      leadAssessor: 'Neha Patel (GWEB, CSLP)',
      methodology: 'OWASP Testing Guide',
      lastAssessment: '2024-09-22'
    },
    {
      title: 'Cloud Security Assessment',
      id: 'VAPT-004',
      scope: 'AWS Cloud Infrastructure',
      status: 'Completed',
      priority: 'Medium',
      schedule: '2024-12-05',
      scheduleDays: '4 days',
      vendor: 'Vendor',
      vendorName: 'CloudSec Consultants',
      cost: '₹4,50,000',
      systems: ['AWS EC2', 'S3 Buckets', 'RDS Instances', 'IAM Policies'],
      leadAssessor: 'Suresh Reddy (CCSP, AWS Security)',
      methodology: 'CSA CCM + AWS Well-Architected',
      lastAssessment: '2024-06-05'
    }
  ];

  return (
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Assessment Schedule</h1>
          <button className="neu-button-primary text-sm">
            <Plus className="w-4 h-4" />
            Schedule New Assessment
          </button>
        </div>

        {/* Assessment Cards */}
        <div className="space-y-4">
          {assessments.map((assessment, index) => (
            <div key={index} className="glass-panel p-6 hover:shadow-card-hover transition-shadow animate-fade-in">
              {/* Header Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-lg font-semibold text-txt-primary">{assessment.title}</h2>
                    <span className={getStatusClass(assessment.status)}>
                      {assessment.status}
                    </span>
                    <span className={getSeverityClass(assessment.priority)}>
                      {assessment.priority}
                    </span>
                  </div>
                  <div className="text-sm text-txt-secondary">
                    {assessment.id} | {assessment.scope}
                  </div>
                </div>
                <button className="text-txt-muted hover:text-txt-secondary">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {/* Left Column */}
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-1">Schedule</div>
                    <div className="text-sm text-txt-secondary">{assessment.schedule} ({assessment.scheduleDays})</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-1">Systems:</div>
                    <div className="flex flex-wrap gap-2">
                      {assessment.systems.map((system, idx) => (
                        <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded bg-surface-bg text-txt-primary text-xs">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-1">{assessment.vendor}</div>
                    <div className="text-sm text-txt-secondary">{assessment.vendorName}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-1">Cost</div>
                    <div className="text-sm text-txt-secondary">{assessment.cost}</div>
                  </div>
                </div>
              </div>

              {/* Footer Row */}
              <div className="mt-4 pt-4 border-t border-primary/[0.06] flex items-center justify-between text-sm">
                <div className="flex items-center gap-6 text-txt-secondary">
                  <span><span className="font-medium">Lead Assessor:</span> {assessment.leadAssessor}</span>
                  <span><span className="font-medium">Methodology:</span> {assessment.methodology}</span>
                  <span><span className="font-medium">Last Assessment:</span> {assessment.lastAssessment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {AssessmentSchedule};
