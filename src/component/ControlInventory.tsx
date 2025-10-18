import React, { useState } from 'react';
import { Search, ChevronDown, MoreHorizontal, AlertTriangle, Clock, Settings } from 'lucide-react';

interface SecurityControl {
  id: string;
  name: string;
  code: string;
  category: string;
  priority: 'Critical' | 'High' | 'Medium';
  status: 'Implemented' | 'In Progress' | 'Planned';
  implementation: number;
  compliance: 'Compliant' | 'Partial' | 'Non-Compliant';
  owner: string;
  actionType: 'complete' | 'update' | 'start';
  actionText: string;
}

const SecurityControlsInventory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const controls: SecurityControl[] = [
    {
      id: '1',
      name: 'Multi-Factor Authentication',
      code: 'SEBI-AC-01',
      category: 'Access Control',
      priority: 'Critical',
      status: 'Implemented',
      implementation: 98,
      compliance: 'Compliant',
      owner: 'IAM Team',
      actionType: 'complete',
      actionText: 'Complete Setup'
    },
    {
      id: '2',
      name: 'Data Loss Prevention',
      code: 'SEBI-DLP-01',
      category: 'Data Protection',
      priority: 'Critical',
      status: 'Implemented',
      implementation: 95,
      compliance: 'Compliant',
      owner: 'Security Team',
      actionType: 'complete',
      actionText: 'Complete Setup'
    },
    {
      id: '3',
      name: 'Malware Protection',
      code: 'ISO-27001-A.12.2.1',
      category: 'Endpoint Security',
      priority: 'High',
      status: 'Implemented',
      implementation: 92,
      compliance: 'Compliant',
      owner: 'IT Security',
      actionType: 'complete',
      actionText: 'Complete Setup'
    },
    {
      id: '4',
      name: 'Network Segmentation',
      code: 'SEBI-NET-01',
      category: 'Network Security',
      priority: 'High',
      status: 'In Progress',
      implementation: 75,
      compliance: 'Partial',
      owner: 'Network Team',
      actionType: 'update',
      actionText: 'Update Progress'
    },
    {
      id: '5',
      name: 'Data Encryption at Rest',
      code: 'SEBI-ENC-01',
      category: 'Data Protection',
      priority: 'Critical',
      status: 'Implemented',
      implementation: 90,
      compliance: 'Compliant',
      owner: 'Database Team',
      actionType: 'complete',
      actionText: 'Complete Setup'
    },
    {
      id: '6',
      name: 'Security Monitoring & SIEM',
      code: 'SEBI-MON-01',
      category: 'Monitoring',
      priority: 'Critical',
      status: 'Implemented',
      implementation: 88,
      compliance: 'Compliant',
      owner: 'SOC Team',
      actionType: 'complete',
      actionText: 'Complete Setup'
    },
    {
      id: '7',
      name: 'Business Continuity Planning',
      code: 'SEBI-BCP-01',
      category: 'Business Continuity',
      priority: 'High',
      status: 'Planned',
      implementation: 30,
      compliance: 'Non-Compliant',
      owner: 'Risk Team',
      actionType: 'start',
      actionText: 'Start Implementation'
    },
    {
      id: '8',
      name: 'Access to Networks & Services',
      code: 'ISO-27001-A.9.1.2',
      category: 'Access Control',
      priority: 'High',
      status: 'Implemented',
      implementation: 85,
      compliance: 'Compliant',
      owner: 'Network Security',
      actionType: 'complete',
      actionText: 'Complete Setup'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-500 text-white';
      case 'High':
        return 'bg-white text-gray-900 border border-gray-300';
      case 'Medium':
        return 'bg-white text-gray-900 border border-gray-300';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Implemented':
        return 'bg-gray-900 text-white';
      case 'In Progress':
        return 'bg-white text-gray-900 border border-gray-300';
      case 'Planned':
        return 'bg-white text-gray-900 border border-gray-300';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getComplianceColor = (compliance: string) => {
    switch (compliance) {
      case 'Compliant':
        return 'bg-gray-900 text-white';
      case 'Partial':
        return 'bg-white text-gray-900 border border-gray-300';
      case 'Non-Compliant':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getActionStyle = (actionType: string) => {
    switch (actionType) {
      case 'complete':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'update':
        return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'start':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      default:
        return 'bg-gray-500 hover:bg-gray-600 text-white';
    }
  };

  const getActionIcon = (actionType: string) => {
    switch (actionType) {
      case 'complete':
        return <AlertTriangle className="w-4 h-4" />;
      case 'update':
        return <Clock className="w-4 h-4" />;
      case 'start':
        return <Settings className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Security Controls Inventory
          </h1>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search controls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-[160px] justify-between"
              >
                <span className="text-gray-700">{categoryFilter}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              
              {isCategoryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="py-1">
                    {['All Categories', 'Access Control', 'Data Protection', 'Endpoint Security', 'Network Security', 'Monitoring', 'Business Continuity'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setCategoryFilter(cat);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Status Filter */}
            <div className="relative">
              <button
                onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-[140px] justify-between"
              >
                <span className="text-gray-700">{statusFilter}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              
              {isStatusDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="py-1">
                    {['All Status', 'Implemented', 'In Progress', 'Planned'].map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setIsStatusDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
            <div className="col-span-2">Control</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-1">Priority</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2">Implementation</div>
            <div className="col-span-1">Compliance</div>
            <div className="col-span-1">Owner</div>
            <div className="col-span-2">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {controls.map((control) => (
              <div
                key={control.id}
                className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors items-center"
              >
                {/* Control */}
                <div className="col-span-2">
                  <p className="text-sm font-semibold text-gray-900">
                    {control.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{control.code}</p>
                </div>

                {/* Category */}
                <div className="col-span-2">
                  <p className="text-sm text-gray-900">{control.category}</p>
                </div>

                {/* Priority */}
                <div className="col-span-1">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(control.priority)}`}>
                    {control.priority}
                  </span>
                </div>

                {/* Status */}
                <div className="col-span-1">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(control.status)}`}>
                    {control.status}
                  </span>
                </div>

                {/* Implementation */}
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900 min-w-[35px]">
                      {control.implementation}%
                    </span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gray-900 transition-all duration-300"
                        style={{ width: `${control.implementation}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Compliance */}
                <div className="col-span-1">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getComplianceColor(control.compliance)}`}>
                    {control.compliance}
                  </span>
                </div>

                {/* Owner */}
                <div className="col-span-1">
                  <p className="text-sm text-gray-900">{control.owner}</p>
                </div>

                {/* Actions */}
                <div className="col-span-2 flex items-center gap-2">
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium transition-colors ${getActionStyle(control.actionType)}`}>
                    {getActionIcon(control.actionType)}
                    {control.actionText}
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export  {SecurityControlsInventory};