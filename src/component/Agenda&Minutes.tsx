import React, { useState } from 'react';
import { Upload, MoreHorizontal, FileText, ChevronDown } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface Document {
  id: string;
  filename: string;
  version: string;
  meeting: string;
  meetingId: string;
  date: string;
  type: 'Minutes' | 'Agenda';
  status: 'Approved' | 'Draft' | 'Under Review';
  size: string;
}

const AgendaRepository = () => {
  const [selectedType, setSelectedType] = useState<string>('Type');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const documents: Document[] = [
    {
      id: '1',
      filename: 'Emergency_Security_Review_Minutes_Nov25_2024.pdf',
      version: 'v1.0',
      meeting: 'Emergency Security Incident Review',
      meetingId: 'MEET-003',
      date: '2024-11-25',
      type: 'Minutes',
      status: 'Approved',
      size: '1.2 MB'
    },
    {
      id: '2',
      filename: 'Cybersecurity_Committee_Agenda_Dec05_2024.pdf',
      version: 'v2.1',
      meeting: 'Monthly Cybersecurity Committee Meeting',
      meetingId: 'MEET-001',
      date: '2024-12-05',
      type: 'Agenda',
      status: 'Draft',
      size: '0.8 MB'
    },
    {
      id: '3',
      filename: 'Risk_Assessment_Agenda_Dec10_2024.pdf',
      version: 'v1.0',
      meeting: 'Quarterly Risk Assessment Review',
      meetingId: 'MEET-002',
      date: '2024-12-10',
      type: 'Agenda',
      status: 'Under Review',
      size: '1.5 MB'
    }
  ];
  return (
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="section-header-title">
            Agenda & Minutes Repository
          </h1>
          
          <div className="flex items-center gap-4">
            {/* Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-primary/[0.08] rounded-lg hover:bg-surface-bg transition-colors"
              >
                <span className="text-txt-primary">{selectedType}</span>
                <ChevronDown className="w-4 h-4 text-txt-muted" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-primary/[0.06] rounded-lg shadow-lg z-10">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setSelectedType('All Types');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-txt-primary"
                    >
                      All Types
                    </button>
                    <button
                      onClick={() => {
                        setSelectedType('Minutes');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-txt-primary"
                    >
                      Minutes
                    </button>
                    <button
                      onClick={() => {
                        setSelectedType('Agenda');
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-txt-primary"
                    >
                      Agenda
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Upload Button */}
            <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg hover:bg-primary-hover transition-colors font-medium">
              <Upload className="w-4 h-4" />
              Upload Document
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="glass-card border border-primary/[0.06] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-bg border-b border-primary/[0.06] text-sm font-medium text-txt-secondary">
            <div className="col-span-3">Document</div>
            <div className="col-span-3">Meeting</div>
            <div className="col-span-1">Date</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1">Size</div>
            <div className="col-span-1">Actions</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-primary/[0.06]">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-surface-bg transition-colors items-center"
              >
                {/* Document */}
                <div className="col-span-3 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-txt-muted mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-txt-primary truncate">
                      {doc.filename}
                    </p>
                    <p className="text-xs text-txt-muted mt-0.5">{doc.version}</p>
                  </div>
                </div>

                {/* Meeting */}
                <div className="col-span-3">
                  <p className="text-sm text-txt-primary font-medium">
                    {doc.meeting}
                  </p>
                  <p className="text-xs text-txt-muted mt-0.5">
                    ID: {doc.meetingId}
                  </p>
                </div>

                {/* Date */}
                <div className="col-span-1">
                  <p className="text-sm text-txt-primary">{doc.date}</p>
                </div>

                {/* Type */}
                <div className="col-span-1">
                  <p className="text-sm text-txt-primary">{doc.type}</p>
                </div>

                {/* Status */}
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
                      doc.status
                    )}`}
                  >
                    {doc.status}
                  </span>
                </div>

                {/* Size */}
                <div className="col-span-1">
                  <p className="text-sm text-txt-primary">{doc.size}</p>
                </div>

                {/* Actions */}
                <div className="col-span-1 flex justify-end">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="w-5 h-5 text-txt-muted" />
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

export default AgendaRepository;