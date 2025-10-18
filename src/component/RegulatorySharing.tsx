import React from 'react';
import { Share2, Building2, Calendar, Mail, Eye, Download, AlertTriangle, Plus } from 'lucide-react';

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-gray-900 text-white';
      case 'Acknowledged':
        return 'bg-gray-900 text-white';
      case 'Under Review':
        return 'bg-blue-50 text-blue-700 border border-blue-200';
      case 'Shared':
        return 'bg-gray-100 text-gray-700 border border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Share2 className="w-8 h-8 text-gray-900" />
            <h1 className="text-3xl font-semibold text-gray-900">
              Regulatory Sharing (Documents shared with SEBI/other bodies)
            </h1>
          </div>
          
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 font-medium">
            <Plus className="w-5 h-5" />
            New Sharing
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Document</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Regulator</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Shared Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Reference</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Due Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sharingData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-5 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{item.documentName}</div>
                      <div className="text-sm text-gray-500">
                        Policies: {item.policies.join(', ')}
                      </div>
                      <div className="text-sm text-gray-500">By: {item.submittedBy}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{item.regulator}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{item.sharedDate}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">{item.statusDetail}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-gray-900 font-mono text-sm">{item.reference}</span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{item.dueDate}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{item.contact}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center gap-3">
                      <button className="text-gray-600 hover:text-gray-900" title="View">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900" title="Download">
                        <Download className="w-5 h-5" />
                      </button>
                      {item.hasAlert && (
                        <button className="text-gray-600 hover:text-gray-900" title="Alert">
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