import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MoreVertical } from 'lucide-react';

interface Treatment {
  name: string;
  assignedTo: string;
  dueDate: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'Overdue';
  completion?: string;
}

interface RiskPlan {
  id: string;
  title: string;
  riskOwner: string;
  category: string;
  severity: number;
  likelihood: number;
  riskScore: string;
  budget: string;
  targetDate: string;
  treatments: Treatment[];
  isExpanded: boolean;
}

const RiskTreatmentPlans = () => {
  const [plans, setPlans] = useState<RiskPlan[]>([
    {
      id: '1',
      title: 'Cyber Attack on Trading System',
      riskOwner: 'IT Security',
      category: 'IT Security',
      severity: 12,
      likelihood: 6,
      riskScore: '72%',
      budget: '$18,50,000',
      targetDate: 'Target Date: 2025-01-31',
      isExpanded: false,
      treatments: [
        {
          name: 'Implement Zero Trust Architecture',
          assignedTo: 'Network Security Team',
          dueDate: 'Due Date: 2024-12-15',
          status: 'In Progress',
          completion: '65%'
        },
        {
          name: 'Deploy Advanced Threat Detection',
          assignedTo: 'SOC Team',
          dueDate: 'Due Date: 2024-11-30',
          status: 'Completed',
          completion: '100%'
        },
        {
          name: 'Conduct Incident Response Simulation',
          assignedTo: 'Security Operations Team',
          dueDate: 'Due Date: 2024-12-20',
          status: 'Planned'
        },
        {
          name: 'Security Controls',
          assignedTo: 'Risk team selected the risk controls to implement actions to prevent the risk from occurring',
          dueDate: 'Monitoring: Weekly progress review, Bi-weekly steering committee update',
          status: 'Planned'
        }
      ]
    },
    {
      id: '2',
      title: 'Data Breach - Client Information',
      riskOwner: 'IT Security',
      category: 'IT Security',
      severity: 9,
      likelihood: 8,
      riskScore: '72%',
      budget: '$1,25,000',
      targetDate: 'Target Date: 2025-01-15',
      isExpanded: false,
      treatments: [
        {
          name: 'Implement DLP',
          assignedTo: 'Compliance Team',
          dueDate: 'Due Date: 2024-12-01',
          status: 'In Progress',
          completion: '45%'
        },
        {
          name: 'Deploy Endpoint Device Monitoring',
          assignedTo: 'Security Ops',
          dueDate: 'Due Date: 2024-11-25',
          status: 'Completed',
          completion: '100%'
        },
        {
          name: 'Enhance Data Encryption Protocols',
          assignedTo: 'Infrastructure Team',
          dueDate: 'Due Date: 2024-12-10',
          status: 'In Progress',
          completion: '70%'
        },
        {
          name: 'Success Criteria',
          assignedTo: 'Risk team selected the risk controls to implement actions to prevent',
          dueDate: 'Monitoring: Security audit quarterly, quarterly progress review',
          status: 'Planned'
        }
      ]
    },
    {
      id: '3',
      title: 'Vendor Security Breach',
      riskOwner: 'Sourcing',
      category: 'Vendor',
      severity: 8,
      likelihood: 8,
      riskScore: '65%',
      budget: '$5,20,000',
      targetDate: 'Target Date: 2025-03-15',
      isExpanded: false,
      treatments: [
        {
          name: 'Enhanced Vendor Security Assessment',
          assignedTo: 'Third Party Risk Team',
          dueDate: 'Due Date: 2024-12-15',
          status: 'In Progress',
          completion: '55%'
        },
        {
          name: 'Vendor Access Monitoring Tools',
          assignedTo: 'IT Security Team',
          dueDate: 'Due Date: 2024-11-30',
          status: 'Completed',
          completion: '100%'
        },
        {
          name: 'Implement Vendor Risk Monitoring Tools',
          assignedTo: 'Vendor Management Team',
          dueDate: 'Due Date: 2024-12-20',
          status: 'Planned'
        },
        {
          name: 'Success Criteria',
          assignedTo: 'Risk team monitored threat & delivery phase, quarterly',
          dueDate: 'Monitoring: Monthly audits, quarterly vendor reviews',
          status: 'Planned'
        }
      ]
    }
  ]);

  const toggleExpand = (id: string) => {
    setPlans(plans.map(plan => 
      plan.id === id ? { ...plan, isExpanded: !plan.isExpanded } : plan
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gray-900 text-white';
      case 'In Progress':
        return 'bg-gray-900 text-white';
      case 'Planned':
        return 'bg-gray-400 text-white';
      case 'Overdue':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Risk Treatment Plans</h1>
          <button className="px-4 py-2 bg-black text-white rounded text-sm hover:bg-gray-800 transition-colors">
            Create Treatment Plan
          </button>
        </div>
      </div>

      {/* Risk Plans */}
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {plans.map((plan) => (
          <div key={plan.id} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Plan Header */}
            <div className="bg-white p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <button
                    onClick={() => toggleExpand(plan.id)}
                    className="mt-1 text-gray-400 hover:text-gray-600"
                  >
                    {plan.isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">{plan.title}</h2>
                    <p className="text-sm text-gray-500">
                      Risk Owner: {plan.riskOwner} | {plan.category}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">{plan.severity}</div>
                  <div className="text-xs text-gray-500 mt-1">Severity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">{plan.likelihood}</div>
                  <div className="text-xs text-gray-500 mt-1">Likelihood</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">{plan.riskScore}</div>
                  <div className="text-xs text-gray-500 mt-1">Risk Score</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">{plan.budget}</div>
                  <div className="text-xs text-gray-500 mt-1">Total Budget</div>
                </div>
              </div>

              <div className="mt-4 text-right text-xs text-gray-500">
                {plan.targetDate}
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gray-800 to-gray-600"
                    style={{ width: '60%' }}
                  />
                </div>
              </div>
            </div>

            {/* Treatment Activities */}
            {plan.isExpanded && (
              <div className="bg-gray-50 border-t border-gray-200">
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">Treatment Activities</h3>
                  <div className="space-y-3">
                    {plan.treatments.map((treatment, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-start gap-3">
                              <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-900 mb-1">
                                  {treatment.name}
                                </h4>
                                <p className="text-xs text-gray-600 mb-1">
                                  Assigned to: {treatment.assignedTo}
                                </p>
                                <p className="text-xs text-gray-500">{treatment.dueDate}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {treatment.completion && (
                              <span className="text-xs text-gray-600 font-medium">
                                {treatment.completion}
                              </span>
                            )}
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(treatment.status)}`}>
                              {treatment.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export {RiskTreatmentPlans};