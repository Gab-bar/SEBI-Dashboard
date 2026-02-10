import React, { useState } from 'react';
import { Plus, Calendar, Clock, User, MoreHorizontal } from 'lucide-react';
import { getPriorityClass, getStatusClass } from '@/lib/colors';

interface Assessment {
  id: string;
  title: string;
  status: 'Scheduled' | 'In Progress' | 'Critical' | 'Completed';
  priority: 'High' | 'Medium' | 'Low';
  date: string;
  duration: string;
  lead: string;
  scope: string;
  methodology: string;
  participants: string[];
  cost: string;
  frequency: string;
  lastAssessment: string;
}

const RiskAssessmentCalendar = () => {
  const [assessments] = useState<Assessment[]>([
    {
      id: '1',
      title: 'Quarterly Cybersecurity Risk Assessment',
      status: 'Scheduled',
      priority: 'High',
      date: '2024-12-15',
      duration: '5 days',
      lead: 'External Risk Consultant',
      scope: 'All IT Systems and Processes',
      methodology: 'ISO 27005',
      participants: ['CISO', 'Risk Manager', 'IT Security Team', 'Business Units'],
      cost: '$5,50,000',
      frequency: 'Quarterly',
      lastAssessment: '2024-09-15'
    },
    {
      id: '2',
      title: 'Vendor Risk Assessment - Cloud Provider',
      status: 'In Progress',
      priority: 'Medium',
      date: '2024-12-08',
      duration: '3 days',
      lead: 'Internal Risk Team',
      scope: 'Cloud Infrastructure Security',
      methodology: 'NIST Cybersecurity Framework',
      participants: ['Vendor Risk Manager', 'Cloud Architect', 'Security Team'],
      cost: '$2,25,000',
      frequency: 'Semi-Annual',
      lastAssessment: '2024-06-08'
    },
    {
      id: '3',
      title: 'Trading Platform Security Assessment',
      status: 'Critical',
      priority: 'High',
      date: '2024-12-20',
      duration: '7 days',
      lead: 'Specialized Security Firm',
      scope: 'Trading Platform Architecture',
      methodology: 'OWASP + Custom Framework',
      participants: ['Trading Systems Team', 'Security Architect', 'Risk Analyst'],
      cost: '$8,75,000',
      frequency: 'Quarterly',
      lastAssessment: '2024-08-20'
    },
    {
      id: '4',
      title: 'Business Continuity Risk Review',
      status: 'Completed',
      priority: 'Medium',
      date: '2024-12-12',
      duration: '2 days',
      lead: 'BCP Consultant',
      scope: 'Business Continuity Plans',
      methodology: 'ISO 22301',
      participants: ['Risk Manager', 'Operations Team', 'IT Recovery Team'],
      cost: '$3,50,000',
      frequency: 'Semi-Annual',
      lastAssessment: '2024-06-12'
    }
  ]);
  return (
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Risk Assessment Calendar</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
            <Plus size={18} />
            Schedule Assessment
          </button>
        </div>

        {/* Assessment Cards */}
        <div className="space-y-4">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="stat-card">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-txt-primary">{assessment.title}</h3>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(assessment.status)}`}>
                      {assessment.status}
                    </span>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getPriorityClass(assessment.priority)}`}>
                      {assessment.priority}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-txt-secondary">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{assessment.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{assessment.lead}</span>
                    </div>
                  </div>
                </div>
                
                <button className="text-txt-muted hover:text-txt-secondary transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Card Content */}
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-txt-primary">Scope: </span>
                  <span className="text-sm text-txt-secondary">{assessment.scope}</span>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-txt-primary">Methodology: </span>
                  <span className="text-sm text-txt-secondary">{assessment.methodology}</span>
                </div>

                <div>
                  <span className="text-sm font-medium text-txt-primary block mb-2">Participants:</span>
                  <div className="flex flex-wrap gap-2">
                    {assessment.participants.map((participant, index) => (
                      <span key={index} className="inline-flex px-3 py-1 bg-gray-100 text-txt-primary rounded-md text-sm">
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Info */}
                <div className="flex items-center gap-6 pt-3 border-t border-primary/[0.06] text-sm text-txt-secondary">
                  <div>
                    <span className="font-medium">Cost: </span>
                    <span>{assessment.cost}</span>
                  </div>
                  <div>
                    <span className="font-medium">Frequency: </span>
                    <span>{assessment.frequency}</span>
                  </div>
                  <div>
                    <span className="font-medium">Last Assessment: </span>
                    <span>{assessment.lastAssessment}</span>
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

export { RiskAssessmentCalendar };