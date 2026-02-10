import React, { useState } from 'react';
import { Plus, MoreHorizontal, ChevronDown } from 'lucide-react';
import { getPriorityClass, getStatusClass } from '@/lib/colors';

interface ActionItem {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  category: string;
  status: 'In Progress' | 'Planning' | 'Completed' | 'Not Started';
  priority: 'Critical' | 'High' | 'Medium';
  progress: number;
  latestUpdate: string;
  timeSpent: string;
  totalTime: string;
}

const ActionItemsTracker = () => {
  const [statusFilter, setStatusFilter] = useState('Status');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const actionItems: ActionItem[] = [
    {
      id: '1',
      title: 'Implement enhanced monitoring controls',
      description: 'Deploy additional SIEM rules and monitoring dashboards for improved threat detection',
      assignedTo: 'Vikram Singh',
      dueDate: '2024-12-01',
      category: 'Security Enhancement',
      status: 'In Progress',
      priority: 'Critical',
      progress: 75,
      latestUpdate: 'SIEM rules configured, dashboard development in progress',
      timeSpent: '30h',
      totalTime: '40h'
    },
    {
      id: '2',
      title: 'Conduct comprehensive security awareness training',
      description: 'Organize mandatory security awareness sessions for all employees with focus on phishing prevention',
      assignedTo: 'Priya Sharma',
      dueDate: '2024-12-15',
      category: 'Training & Awareness',
      status: 'Planning',
      priority: 'High',
      progress: 25,
      latestUpdate: 'Training materials being prepared, schedule coordination in progress',
      timeSpent: '15h',
      totalTime: '60h'
    },
    {
      id: '3',
      title: 'Review and update vendor access controls',
      description: 'Audit all vendor access permissions and implement stricter access controls',
      assignedTo: 'Amit Patel',
      dueDate: '2024-11-27',
      category: 'Access Control',
      status: 'Completed',
      priority: 'High',
      progress: 100,
      latestUpdate: 'All vendor access permissions reviewed and updated. New access control matrix implemented.',
      timeSpent: '28h',
      totalTime: '25h'
    },
    {
      id: '4',
      title: 'Develop incident response playbook updates',
      description: 'Update incident response procedures based on recent security incident learnings',
      assignedTo: 'Priya Sharma',
      dueDate: '2024-12-10',
      category: 'Process Improvement',
      status: 'In Progress',
      priority: 'Medium',
      progress: 45,
      latestUpdate: 'Draft updates completed, stakeholder review in progress',
      timeSpent: '16h',
      totalTime: '35h'
    },
    {
      id: '5',
      title: 'Quarterly compliance report preparation',
      description: 'Prepare comprehensive quarterly compliance report for SEBI submission',
      assignedTo: 'Amit Patel',
      dueDate: '2024-12-20',
      category: 'Compliance Reporting',
      status: 'Not Started',
      priority: 'Critical',
      progress: 0,
      latestUpdate: 'Awaiting Q4 data compilation',
      timeSpent: '0h',
      totalTime: '50h'
    }
  ];
  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-primary';
    if (progress >= 75) return 'bg-primary';
    if (progress >= 50) return 'bg-primary';
    return 'bg-primary';
  };

  return (
    <div className="min-h-screen bg-surface-bg p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="section-header-title">
            Action Items Tracker
          </h1>
          
          <div className="flex items-center gap-4">
            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-primary/[0.08] rounded-lg hover:bg-surface-bg transition-colors"
              >
                <span className="text-txt-primary">{statusFilter}</span>
                <ChevronDown className="w-4 h-4 text-txt-muted" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-primary/[0.06] rounded-lg shadow-lg z-10">
                  <div className="py-1">
                    {['All Status', 'In Progress', 'Planning', 'Completed', 'Not Started'].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-txt-primary text-sm"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* New Action Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg hover:bg-primary-hover transition-colors font-medium">
              <Plus className="w-4 h-4" />
              New Action
            </button>
          </div>
        </div>

        {/* Action Items List */}
        <div className="space-y-4">
          {actionItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 hover:shadow-md transition-shadow"
            >
              {/* Header Row */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-txt-primary">
                      {item.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                      {item.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityClass(item.priority)}`}>
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-sm text-txt-secondary mb-3">
                    {item.description}
                  </p>
                </div>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-txt-muted" />
                </button>
              </div>

              {/* Metadata Row */}
              <div className="flex items-center gap-6 text-sm text-txt-secondary mb-4">
                <div>
                  <span className="font-medium">Assigned to:</span> {item.assignedTo}
                </div>
                <div>
                  <span className="font-medium">Due:</span> {item.dueDate}
                </div>
                <div>
                  <span className="font-medium">Category:</span> {item.category}
                </div>
              </div>

              {/* Progress Section */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="font-medium text-txt-primary">Progress: {item.progress}%</span>
                  <span className="text-txt-muted">{item.timeSpent} / {item.totalTime}</span>
                </div>
                <div className="w-full progress-track overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className={`h-full ${getProgressColor(item.progress)} transition-all duration-300`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>

              {/* Latest Update */}
              <div className="pt-3 border-t border-gray-100">
                <p className="text-sm text-txt-secondary">
                  <span className="font-medium text-txt-primary">Latest Update:</span> {item.latestUpdate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export  {ActionItemsTracker};