import React, { useState } from 'react';
import { FileText, Download, MoreVertical, Calendar } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface Report {
  id: string;
  title: string;
  status: 'Published' | 'Submitted' | 'Draft';
  description: string;
  pages: number;
  year: number;
  attachments: number;
  sections: string[];
  author: string;
  reviewedBy: string;
  published: string;
}

const AnnualReportsDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('Year');

  const reports: Report[] = [
    {
      id: '1',
      title: 'Annual Cybersecurity Governance Report 2024',
      status: 'Published',
      description: 'Comprehensive review of cybersecurity governance, risk management, and compliance activities for 2024',
      pages: 85,
      year: 2024,
      attachments: 4,
      sections: ['Executive Summary', 'Governance Framework', 'Risk Management', 'Security Controls', 'Incident Management', 'Compliance Status', 'Training & Awareness', 'Future Roadmap'],
      author: 'Cybersecurity Committee',
      reviewedBy: 'Board of Directors',
      published: '2024-05-15'
    },
    {
      id: '2',
      title: 'SEBI Compliance Annual Report 2024',
      status: 'Submitted',
      description: 'Annual compliance report submitted to SEBI, outlining adherence to cybersecurity guidelines',
      pages: 45,
      year: 2024,
      attachments: 3,
      sections: ['Regulatory Framework', 'Control Implementation', 'Testing & Validation', 'Gap Analysis', 'Remediation Actions', 'Continuous Monitoring'],
      author: 'Compliance Team',
      reviewedBy: 'Chief Risk Officer',
      published: '2024-09-30'
    },
    {
      id: '3',
      title: 'Committee Performance & Effectiveness Report 2024',
      status: 'Draft',
      description: 'Assessment of committee effectiveness, member performance, and governance improvements',
      pages: 32,
      year: 2024,
      attachments: 2,
      sections: ['Committee Overview', 'Meeting Statistics', 'Member Performance', 'Action Item Tracking', 'Governance Effectiveness', 'Recommendations'],
      author: 'Committee Secretary',
      reviewedBy: 'Chairman',
      published: ''
    }
  ];
  return (
    <div className="min-h-screen bg-surface-bg p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="section-header-title">Annual Reports</h1>
          <div className="flex items-center gap-4">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-primary/[0.08] rounded-lg bg-white text-txt-primary focus:outline-none focus:ring-2 focus:ring-primary-ring"
            >
              <option>Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <button className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors">
              <Download size={18} />
              Generate Report
            </button>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {reports.map((report) => (
            <div key={report.id} className="glass-panel border border-primary/[0.06] p-6 hover:shadow-md transition-shadow">
              {/* Report Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-semibold text-txt-primary">{report.title}</h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                  <p className="text-txt-secondary text-sm">{report.description}</p>
                </div>
                <button className="text-txt-muted hover:text-txt-secondary">
                  <MoreVertical size={20} />
                </button>
              </div>

              {/* Report Stats */}
              <div className="grid grid-cols-4 gap-8 mb-6">
                <div className="text-center">
                  <div className="section-header-title">{report.pages}</div>
                  <div className="text-sm text-txt-muted">Pages</div>
                </div>
                <div className="flex items-center justify-center">
                  <FileText size={32} className="text-gray-300" />
                  <div className="ml-2 text-sm text-txt-muted">File Size</div>
                </div>
                <div className="text-center">
                  <div className="section-header-title">{report.year}</div>
                  <div className="text-sm text-txt-muted">Report Year</div>
                </div>
                <div className="text-center">
                  <div className="section-header-title">{report.attachments}</div>
                  <div className="text-sm text-txt-muted">Attachments</div>
                </div>
              </div>

              {/* Report Sections */}
              <div className="mb-4">
                <div className="text-sm font-medium text-txt-primary mb-2">Report Sections:</div>
                <div className="flex flex-wrap gap-2">
                  {report.sections.map((section, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-txt-primary rounded-md text-xs">
                      {section}
                    </span>
                  ))}
                </div>
              </div>

              {/* Report Footer */}
              <div className="flex items-center gap-6 text-sm text-txt-secondary pt-4 border-t border-primary/[0.06]">
                <span>Author: {report.author}</span>
                <span>Reviewed by: {report.reviewedBy}</span>
                {report.published && (
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    Published: {report.published}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnualReportsDashboard;