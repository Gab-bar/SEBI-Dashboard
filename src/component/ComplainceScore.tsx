import React from 'react';
import { TrendingUp } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface TopPerformer {
  name: string;
  score: number;
}

interface DepartmentCompliance {
  id: string;
  department: string;
  badges: string[];
  employees: number;
  lastAssessment: string;
  complianceRate: number;
  avgScore: number;
  trainingHours: number;
  certifications: number;
  completionProgress: number;
  isImproving: boolean;
  topPerformers: TopPerformer[];
  trainingNeeds: string[];
  keyStrengths: string[];
}

const complianceData: DepartmentCompliance[] = [
  {
    id: '1',
    department: 'Information Technology',
    badges: ['Excellent', 'Low Risk'],
    employees: 85,
    lastAssessment: '2024-11-20',
    complianceRate: 100,
    avgScore: 92.3,
    trainingHours: 340,
    certifications: 12,
    completionProgress: 100,
    isImproving: true,
    topPerformers: [
      { name: 'Vikram Singh', score: 98 },
      { name: 'Priya Kumar', score: 96 },
      { name: 'Rajesh Reddy', score: 95 }
    ],
    trainingNeeds: ['Advanced Security Architecture'],
    keyStrengths: ['Technical competency', 'Security awareness', 'Compliance']
  },
  {
    id: '2',
    department: 'Finance',
    badges: ['Good', 'Medium'],
    employees: 92,
    lastAssessment: '2024-11-18',
    complianceRate: 95,
    avgScore: 87.6,
    trainingHours: 280,
    certifications: 8,
    completionProgress: 95,
    isImproving: true,
    topPerformers: [
      { name: 'Jennifer Lee', score: 94 },
      { name: 'David Kim', score: 92 },
      { name: 'Maria Garcia', score: 90 }
    ],
    trainingNeeds: ['Risk Management', 'Financial Compliance'],
    keyStrengths: ['Attention to detail', 'Regulatory knowledge', 'Process adherence']
  },
  {
    id: '3',
    department: 'Human Resources',
    badges: ['Good', 'Low Risk'],
    employees: 45,
    lastAssessment: '2024-11-15',
    complianceRate: 88,
    avgScore: 84.2,
    trainingHours: 195,
    certifications: 6,
    completionProgress: 88,
    isImproving: false,
    topPerformers: [
      { name: 'Emma Wilson', score: 93 },
      { name: 'Chris Martinez', score: 89 },
      { name: 'Linda Brown', score: 87 }
    ],
    trainingNeeds: ['Privacy Regulations', 'Data Handling'],
    keyStrengths: ['Policy understanding', 'Communication', 'Employee development']
  },
  {
    id: '4',
    department: 'Operations',
    badges: ['Needs Improvement', 'Medium Risk'],
    employees: 134,
    lastAssessment: '2024-11-12',
    complianceRate: 80,
    avgScore: 79.8,
    trainingHours: 425,
    certifications: 5,
    completionProgress: 80,
    isImproving: false,
    topPerformers: [
      { name: 'Robert Garcia', score: 88 },
      { name: 'Lisa Anderson', score: 85 },
      { name: 'James Wilson', score: 83 }
    ],
    trainingNeeds: ['Process Compliance', 'Safety Standards', 'Quality Control'],
    keyStrengths: ['Operational efficiency', 'Team coordination']
  },
  {
    id: '5',
    department: 'Sales',
    badges: ['Needs Improvement', 'High Risk'],
    employees: 89,
    lastAssessment: '2024-11-10',
    complianceRate: 78,
    avgScore: 76.4,
    trainingHours: 215,
    certifications: 3,
    completionProgress: 78,
    isImproving: false,
    topPerformers: [
      { name: 'Jessica Brown', score: 86 },
      { name: 'Tom Martinez', score: 82 },
      { name: 'Sarah Davis', score: 80 }
    ],
    trainingNeeds: ['Customer Data Protection', 'Communication Ethics', 'CRM Compliance'],
    keyStrengths: ['Customer engagement', 'Sales performance']
  },
  {
    id: '6',
    department: 'Management',
    badges: ['Excellent', 'Low Risk'],
    employees: 22,
    lastAssessment: '2024-11-22',
    complianceRate: 100,
    avgScore: 94.8,
    trainingHours: 145,
    certifications: 15,
    completionProgress: 100,
    isImproving: true,
    topPerformers: [
      { name: 'Michael Chen', score: 99 },
      { name: 'Amanda Foster', score: 97 },
      { name: 'Richard Thompson', score: 96 }
    ],
    trainingNeeds: [],
    keyStrengths: ['Strategic thinking', 'Leadership', 'Risk management', 'Compliance oversight']
  }
];

const ComplianceScoreByDepartment: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <header className="bg-white border-b border-primary/[0.06] px-4 py-4 md:px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl md:text-2xl font-semibold text-txt-primary">
            Compliance Score by Department
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8 space-y-6">
        {complianceData.map((dept) => (
          <div
            key={dept.id}
            className="glass-panel border border-primary/[0.06] overflow-hidden"
          >
            {/* Department Header */}
            <div className="px-4 md:px-6 pt-6 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl md:text-2xl font-semibold text-txt-primary">
                    {dept.department}
                  </h2>
                  {dept.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(badge)}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-txt-secondary">
                {dept.employees} employees | Last assessment: {dept.lastAssessment}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 px-4 md:px-6 pb-4">
              <div className="bg-primary-soft rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {dept.complianceRate}%
                </div>
                <div className="text-xs text-txt-secondary">Compliance Rate</div>
              </div>
              
              <div className="bg-success-soft rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-success mb-1">
                  {dept.avgScore}
                </div>
                <div className="text-xs text-txt-secondary">Avg Score</div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                  {dept.trainingHours}
                </div>
                <div className="text-xs text-txt-secondary">Training Hours</div>
              </div>
              
              <div className="bg-warning-soft rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-1">
                  {dept.certifications}
                </div>
                <div className="text-xs text-txt-secondary">Certifications</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="px-4 md:px-6 pb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-txt-primary">Training Completion Progress</h3>
                <div className="flex items-center gap-2">
                  {dept.isImproving && <TrendingUp className="w-4 h-4 text-success" />}
                  <span className="text-sm font-medium text-txt-primary">
                    {dept.completionProgress}% {dept.isImproving && '(improving)'}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-primary transition-all rounded-full"
                  style={{ width: `${dept.completionProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Details Section */}
            <div className="px-4 md:px-6 pb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performers */}
              <div>
                <h3 className="text-sm font-semibold text-txt-primary mb-3">Top Performers:</h3>
                <div className="space-y-2">
                  {dept.topPerformers.map((performer, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm text-txt-primary">{performer.name}</span>
                      <span className="text-sm font-semibold text-txt-primary">{performer.score}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training Needs */}
              <div>
                <h3 className="text-sm font-semibold text-txt-primary mb-3">Training Needs:</h3>
                {dept.trainingNeeds.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {dept.trainingNeeds.map((need, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-warning-soft text-amber-700 rounded-full text-xs"
                      >
                        {need}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-txt-muted italic">No immediate training needs</p>
                )}
              </div>
            </div>

            {/* Key Strengths */}
            {dept.keyStrengths.length > 0 && (
              <div className="px-4 md:px-6 pb-6 border-t border-gray-100 pt-4">
                <p className="text-sm text-txt-primary">
                  <span className="font-semibold">Key Strengths:</span> {dept.keyStrengths.join(', ')}
                </p>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export {ComplianceScoreByDepartment};