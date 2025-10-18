import React, { useState } from 'react';
import { Plus, Calendar, Clock, User, MoreHorizontal } from 'lucide-react';

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-gray-200 text-gray-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'Completed':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-gray-700 text-white';
      case 'Medium':
        return 'bg-gray-500 text-white';
      case 'Low':
        return 'bg-gray-300 text-gray-700';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Risk Assessment Calendar</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Plus size={18} />
            Schedule Assessment
          </button>
        </div>

        {/* Assessment Cards */}
        <div className="space-y-4">
          {assessments.map((assessment) => (
            <div key={assessment.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{assessment.title}</h3>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                      {assessment.status}
                    </span>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(assessment.priority)}`}>
                      {assessment.priority}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
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
                
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              {/* Card Content */}
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-700">Scope: </span>
                  <span className="text-sm text-gray-600">{assessment.scope}</span>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-gray-700">Methodology: </span>
                  <span className="text-sm text-gray-600">{assessment.methodology}</span>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-700 block mb-2">Participants:</span>
                  <div className="flex flex-wrap gap-2">
                    {assessment.participants.map((participant, index) => (
                      <span key={index} className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Info */}
                <div className="flex items-center gap-6 pt-3 border-t border-gray-200 text-sm text-gray-600">
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