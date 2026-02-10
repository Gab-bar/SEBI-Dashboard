import React, { useState } from 'react';
import { Search, Filter, MoreVertical, AlertTriangle, CheckCircle } from 'lucide-react';

interface ComplianceControl {
  id: string;
  title: string;
  code: string;
  description: string;
  framework: string;
  category: string;
  implementation: 'Implemented' | 'Partial' | 'Not Implemented';
  complianceLevel: number;
  responsibleTeam: string;
  gaps: number;
}

const ComplianceControlMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const controls: ComplianceControl[] = [
    {
      id: '1',
      title: 'Access Control Management',
      code: 'SEBI-AC-01',
      description: 'Implement role-based access controls for trading systems',
      framework: 'SEBI Circular',
      category: 'Access Controls',
      implementation: 'Implemented',
      complianceLevel: 95,
      responsibleTeam: 'IAM Team',
      gaps: 0
    },
    {
      id: '2',
      title: 'Data Loss Prevention',
      code: 'SEBI-DLP-01',
      description: 'Deploy DLP solutions to prevent data leakage',
      framework: 'SEBI Circular',
      category: 'Data Protection',
      implementation: 'Partial',
      complianceLevel: 75,
      responsibleTeam: 'Data Protection Team',
      gaps: 2
    },
    {
      id: '3',
      title: 'Network Segmentation',
      code: 'SEBI-NET-01',
      description: 'Implement network segmentation for trading environments',
      framework: 'SEBI Circular',
      category: 'Network Security',
      implementation: 'Implemented',
      complianceLevel: 88,
      responsibleTeam: 'Network Team',
      gaps: 1
    },
    {
      id: '4',
      title: 'Information Security Roles',
      code: 'ISO-A.9.1.1',
      description: 'Define roles and responsibilities for information security',
      framework: 'ISO 27001',
      category: 'Organization Security',
      implementation: 'Implemented',
      complianceLevel: 100,
      responsibleTeam: 'CISO Office',
      gaps: 0
    },
    {
      id: '5',
      title: 'Incident Response',
      code: 'SEBI-INC-01',
      description: 'Establish incident response procedures and team',
      framework: 'SEBI Circular',
      category: 'Incident Management',
      implementation: 'Not Implemented',
      complianceLevel: 30,
      responsibleTeam: 'SOC Team',
      gaps: 3
    }
  ];

  const getImplementationColor = (implementation: string) => {
    switch (implementation) {
      case 'Implemented':
        return 'bg-primary text-white';
      case 'Partial':
        return 'bg-white text-txt-primary border border-primary/[0.08]';
      case 'Not Implemented':
        return 'bg-white text-txt-primary border border-primary/[0.08]';
      default:
        return 'bg-gray-200';
    }
  };

  const getComplianceColor = (level: number) => {
    if (level >= 90) return 'bg-primary';
    if (level >= 70) return 'bg-gray-700';
    return 'bg-gray-400';
  };

  const filteredControls = controls.filter(control =>
    control.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    control.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    control.framework.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-surface-bg p-4 md:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto glass-panel">
        {/* Header */}
        <div className="p-6 border-b border-primary/[0.06]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h1 className="text-2xl md:section-header-title">
              Compliance Control Matrix
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-txt-muted w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search controls..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full sm:w-80 pl-10 pr-4 py-2 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>
              
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center justify-center gap-2 px-4 py-2 border border-primary/[0.08] rounded-lg hover:bg-surface-bg transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table - Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Control
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Framework
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Implementation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Compliance Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Responsible Team
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Gaps
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-primary/[0.06]">
              {filteredControls.map((control) => (
                <tr key={control.id} className="hover:bg-surface-bg transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-txt-primary">{control.title}</span>
                      <span className="text-xs text-txt-muted mt-1">{control.code}</span>
                      <span className="text-xs text-txt-muted mt-1">{control.description}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-primary text-white">
                      {control.framework}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-txt-primary">
                    {control.category}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getImplementationColor(control.implementation)}`}>
                      {control.implementation}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 progress-track max-w-[100px]" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                        <div
                          className={`h-2 rounded-full ${getComplianceColor(control.complianceLevel)}`}
                          style={{ width: `${control.complianceLevel}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-txt-primary min-w-[45px]">
                        {control.complianceLevel}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-txt-primary">
                    {control.responsibleTeam}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {control.gaps === 0 ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm text-txt-primary">None</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-medium text-txt-primary">{control.gaps}</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                      <MoreVertical className="w-5 h-5 text-txt-muted" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards - Mobile/Tablet */}
        <div className="lg:hidden divide-y divide-primary/[0.06]">
          {filteredControls.map((control) => (
            <div key={control.id} className="p-4 hover:bg-surface-bg transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-medium text-txt-primary">{control.title}</h3>
                  <p className="text-sm text-txt-muted mt-1">{control.code}</p>
                </div>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors ml-2">
                  <MoreVertical className="w-5 h-5 text-txt-muted" />
                </button>
              </div>
              
              <p className="text-sm text-txt-secondary mb-3">{control.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <span className="text-xs text-txt-muted block mb-1">Framework</span>
                  <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-primary text-white">
                    {control.framework}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-txt-muted block mb-1">Category</span>
                  <span className="text-sm text-txt-primary">{control.category}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <span className="text-xs text-txt-muted block mb-1">Implementation</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getImplementationColor(control.implementation)}`}>
                    {control.implementation}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-txt-muted block mb-1">Gaps</span>
                  <div className="flex items-center gap-2">
                    {control.gaps === 0 ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-sm text-txt-primary">None</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-txt-primary">{control.gaps}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <span className="text-xs text-txt-muted block mb-1">Compliance Level</span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                    <div
                      className={`h-2 rounded-full ${getComplianceColor(control.complianceLevel)}`}
                      style={{ width: `${control.complianceLevel}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-txt-primary">
                    {control.complianceLevel}%
                  </span>
                </div>
              </div>
              
              <div>
                <span className="text-xs text-txt-muted block mb-1">Responsible Team</span>
                <span className="text-sm text-txt-primary">{control.responsibleTeam}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredControls.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-txt-muted">No controls found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export  {ComplianceControlMatrix};