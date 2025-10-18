import React from 'react';

interface TimelineEvent {
  title: string;
  status: 'Completed' | 'In Progress';
  category: string;
  description: string;
  timestamp: string;
  by: string;
}

const IncidentResponseTimeline = () => {
  const incidentId = 'INC-2024-002';
  const incidentType = 'Malware Incident';

  const events: TimelineEvent[] = [
    {
      title: 'Incident Detected',
      status: 'Completed',
      category: 'Detection',
      description: 'Antivirus system detected malware on TRD-05 workstation',
      timestamp: '2024-11-22 09:15:45',
      by: 'Endpoint Security System'
    },
    {
      title: 'Initial Assessment',
      status: 'Completed',
      category: 'Assessment',
      description: 'SOC analyst confirmed malware presence and escalated to IR team',
      timestamp: '2024-11-22 09:18:30',
      by: 'SOC Analyst - Priya Kumar'
    },
    {
      title: 'Containment Initiated',
      status: 'Completed',
      category: 'Containment',
      description: 'Isolated affected workstation from network, suspended user access',
      timestamp: '2024-11-22 09:25:15',
      by: 'IR Team Lead - Rajesh Singh'
    },
    {
      title: 'Stakeholder Notification',
      status: 'Completed',
      category: 'Communication',
      description: 'Notified CISO, Trading Head, and Risk Manager about the incident',
      timestamp: '2024-11-22 09:30:00',
      by: 'IR Team Lead - Rajesh Singh'
    },
    {
      title: 'Forensic Analysis Started',
      status: 'In Progress',
      category: 'Investigation',
      description: 'Digital forensics team began analysis of affected system',
      timestamp: '2024-11-22 10:15:30',
      by: 'Forensics Team - Digital Evidence Labs'
    },
    {
      title: 'Backup Systems Activated',
      status: 'Completed',
      category: 'Recovery',
      description: 'Activated backup trading workstation to minimize business impact',
      timestamp: '2024-11-22 11:00:00',
      by: 'IT Operations - Backup Team'
    },
    {
      title: 'Client Notification Prepared',
      status: 'In Progress',
      category: 'Communication',
      description: 'Draft client communication prepared pending investigation results',
      timestamp: '2024-11-22 14:30:00',
      by: 'Communications Team'
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Incident Response Timeline</h1>
          <div className="flex items-center gap-3">
            <span className="text-base font-medium text-gray-900">Incident: {incidentId}</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
              {incidentType}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-200" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative pl-8">
                {/* Status dot */}
                <div className={`absolute left-0 top-0 w-4 h-4 rounded-full border-2 ${
                  event.status === 'Completed' 
                    ? 'bg-green-500 border-green-500' 
                    : 'bg-yellow-500 border-yellow-500'
                }`} />

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-gray-900">{event.title}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.status === 'Completed' 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-gray-100 text-gray-700 border border-gray-300'
                    }`}>
                      {event.status}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs bg-white text-gray-700 border border-gray-300">
                      {event.category}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 mb-2">{event.description}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{event.timestamp}</span>
                    <span>By: {event.by}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export  {IncidentResponseTimeline};