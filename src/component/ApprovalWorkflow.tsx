import React from 'react';
import { Users, CheckCircle, XCircle, Clock, Calendar } from 'lucide-react';

interface WorkflowItem {
  policy: string;
  policyId: string;
  currentStage: string;
  status: 'Pending' | 'In Progress' | 'Approved';
  assignee: string;
  submittedDate: string;
  priority: 'High' | 'Medium' | 'Critical';
  dueDate: string;
  estimatedDays: number;
  progressNote: string;
  actionType: 'approve-reject' | 'review' | 'complete';
}

const ApprovalWorkflow = () => {
  const workflowData: WorkflowItem[] = [
    {
      policy: 'Access Control Policy',
      policyId: 'POL-002',
      currentStage: 'CISO Review',
      status: 'Pending',
      assignee: 'John Doe',
      submittedDate: '2024-11-30',
      priority: 'High',
      dueDate: '2024-12-05',
      estimatedDays: 3,
      progressNote: 'Awaiting CISO approval after legal review',
      actionType: 'approve-reject'
    },
    {
      policy: 'DLP Policy',
      policyId: 'POL-003',
      currentStage: 'Legal Review',
      status: 'In Progress',
      assignee: 'Legal Team',
      submittedDate: '2024-11-28',
      priority: 'Medium',
      dueDate: '2024-12-03',
      estimatedDays: 5,
      progressNote: 'Under legal compliance review',
      actionType: 'review'
    },
    {
      policy: 'ISMS Policy',
      policyId: 'POL-001',
      currentStage: 'Board Approval',
      status: 'Approved',
      assignee: 'Board of Directors',
      submittedDate: '2024-11-15',
      priority: 'Critical',
      dueDate: '2024-11-20',
      estimatedDays: 1,
      progressNote: 'Approved by board on 2024-11-18',
      actionType: 'complete'
    },
    {
      policy: 'Business Continuity Policy',
      policyId: 'POL-006',
      currentStage: 'Draft Review',
      status: 'In Progress',
      assignee: 'Risk Team',
      submittedDate: '2024-12-01',
      priority: 'Medium',
      dueDate: '2024-12-10',
      estimatedDays: 7,
      progressNote: 'Initial draft under technical review',
      actionType: 'review'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500 text-white';
      case 'Critical':
        return 'bg-red-600 text-white';
      case 'Medium':
        return 'bg-gray-100 text-gray-700 border border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-gray-100 text-gray-700';
      case 'In Progress':
        return 'bg-blue-50 text-blue-700';
      case 'Approved':
        return 'bg-gray-900 text-white';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const renderActions = (actionType: string) => {
    switch (actionType) {
      case 'approve-reject':
        return (
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Approve</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <XCircle className="w-5 h-5" />
              <span className="font-medium">Reject</span>
            </button>
          </div>
        );
      case 'complete':
        return (
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium">
            <CheckCircle className="w-4 h-4" />
            Complete
          </button>
        );
      case 'review':
        return (
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <Clock className="w-5 h-5" />
            <span className="font-medium">In Review</span>
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-gray-900" />
            <h1 className="text-3xl font-semibold text-gray-900">
              Approval Workflow (Draft → Reviewed → Approved)
            </h1>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Policy</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Current Stage</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Assignee</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Priority</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Due Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Progress</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {workflowData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{item.policy}</div>
                      <div className="text-sm text-gray-500">{item.policyId}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-gray-100 text-gray-700">
                      {item.currentStage}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{item.assignee}</div>
                      <div className="text-sm text-gray-500">Submitted: {item.submittedDate}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{item.dueDate}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{item.estimatedDays} days estimated</div>
                      <div className="text-sm text-gray-500">{item.progressNote}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    {renderActions(item.actionType)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export  {ApprovalWorkflow};