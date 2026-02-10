import React from 'react';
import { Share2, Building2, Calendar, Mail, Eye, Download, AlertTriangle, Plus } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface RegulatorySharing {
  documentName: string;
  policies: string[];
  submittedBy: string;
  regulator: string;
  sharedDate: string;
  status: 'Submitted' | 'Acknowledged' | 'Under Review' | 'Shared';
  statusDetail: string;
  reference: string;
  dueDate: string;
  contact: string;
  hasAlert?: boolean;
}

const RegulatorySharing = () => {
  const sharingData: RegulatorySharing[] = [
    {
      documentName: 'Annual Cyber Security Report 2024',
      policies: ['POL-001', 'POL-004'],
      submittedBy: 'Compliance Officer',
      regulator: 'SEBI',
      sharedDate: '2024-11-15',
      status: 'Submitted',
      statusDetail: 'Received',
      reference: 'SEBI/HO/MIRSD/CRD/2024/001',
      dueDate: '2024-11-30',
      contact: 'compliance@sebi.gov.in',
      hasAlert: false
    },
    {
      documentName: 'Incident Response Plan',
      policies: ['POL-004'],
      submittedBy: 'CISO',
      regulator: 'CERT-In',
      sharedDate: '2024-10-20',
      status: 'Acknowledged',
      statusDetail: 'Acknowledged',
      reference: 'CERT-In/2024/IR/456',
      dueDate: '2024-10-31',
      contact: 'incident@cert-in.org.in',
      hasAlert: false
    },
    {
      documentName: 'Data Protection Assessment',
      policies: ['POL-003'],
      submittedBy: 'Data Privacy Officer',
      regulator: 'RBI',
      sharedDate: '2024-09-25',
      status: 'Under Review',
      statusDetail: 'Under Review',
      reference: 'RBI/DPSS/2024/789',
      dueDate: '2024-10-15',
      contact: 'dpss@rbi.org.in',
      hasAlert: true
    },
    {
      documentName: 'Vendor Management Framework',
      policies: ['POL-005'],
      submittedBy: 'Risk Manager',
      regulator: 'Internal Audit',
      sharedDate: '2024-11-01',
      status: 'Shared',
      statusDetail: 'Pending',
      reference: 'IA/2024/VM/123',
      dueDate: '2024-11-15',
      contact: 'internal.audit@company.com',
      hasAlert: false
    }
  ];
  return (
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Share2 className="w-8 h-8 text-txt-primary" />
            <h1 className="section-header-title">
              Regulatory Sharing (Documents shared with SEBI/other bodies)
            </h1>
          </div>
          
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover font-medium">
            <Plus className="w-5 h-5" />
            New Sharing
          </button>
        </div>

        {/* Table */}
        <div className="glass-panel border border-primary/[0.06] overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Document</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Regulator</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Shared Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Reference</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Due Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-txt-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {sharingData.map((item, index) => (
                <tr key={index} className="hover:bg-surface-bg transition-colors">
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium text-txt-primary">{item.documentName}</div>
                      <div className="text-sm text-txt-muted">
                        Policies: {item.policies.join(', ')}
                      </div>
                      <div className="text-sm text-txt-muted">By: {item.submittedBy}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-txt-muted" />
                      <span className="text-txt-primary">{item.regulator}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-txt-muted" />
                      <span className="text-txt-primary">{item.sharedDate}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(item.status)}`}>
                        {item.status}
                      </span>
                      <div className="text-sm text-txt-muted mt-1">{item.statusDetail}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-txt-primary font-mono text-sm">{item.reference}</span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-txt-muted" />
                      <span className="text-txt-primary">{item.dueDate}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-txt-muted" />
                      <span className="text-txt-secondary text-sm">{item.contact}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <button className="text-txt-secondary hover:text-txt-primary" title="View">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-txt-secondary hover:text-txt-primary" title="Download">
                        <Download className="w-5 h-5" />
                      </button>
                      {item.hasAlert && (
                        <button className="text-txt-secondary hover:text-txt-primary" title="Alert">
                          <AlertTriangle className="w-5 h-5" />
                        </button>
                      )}
                    </div>
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

export {RegulatorySharing};