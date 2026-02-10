'use client';

import React, { useState } from 'react';
import { Plus, MoreVertical, Calendar, Clock, Users, MapPin, Video } from 'lucide-react';

interface Meeting {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  status: 'Scheduled' | 'Completed';
  priority: 'High' | 'Critical';
  date: string;
  time: string;
  mode: 'Hybrid' | 'In-Person' | 'Virtual';
  description: string;
  organizer: string;
  attendees: number;
  venue: string;
}

const MeetingCalendar = () => {
  const [statusFilter, setStatusFilter] = useState('Completed');

  const meetings: Meeting[] = [
    {
      id: '1',
      icon: <Users className="w-5 h-5" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-txt-secondary',
      title: 'Monthly Cybersecurity Committee Meeting',
      status: 'Scheduled',
      priority: 'High',
      date: '2024-12-05',
      time: '10:00 AM - 12:00 PM',
      mode: 'Hybrid',
      description: 'Security posture review, incident analysis, compliance updates',
      organizer: 'Priya Sharma',
      attendees: 4,
      venue: 'Conference Room A / MS Teams',
    },
    {
      id: '2',
      icon: <MapPin className="w-5 h-5" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-txt-secondary',
      title: 'Quarterly Risk Assessment Review',
      status: 'Scheduled',
      priority: 'Critical',
      date: '2024-12-10',
      time: '02:00 PM - 04:30 PM',
      mode: 'In-Person',
      description: 'Q4 risk review, mitigation strategies, SEBI compliance update',
      organizer: 'Amit Patel',
      attendees: 4,
      venue: 'Board Room',
    },
    {
      id: '3',
      icon: <Video className="w-5 h-5" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-txt-secondary',
      title: 'Emergency Security Incident Review',
      status: 'Completed',
      priority: 'Critical',
      date: '2024-11-25',
      time: '04:00 PM - 05:00 PM',
      mode: 'Virtual',
      description: 'Security incident post-mortem, remediation actions',
      organizer: 'Priya Sharma',
      attendees: 3,
      venue: 'MS Teams',
    },
    {
      id: '4',
      icon: <MapPin className="w-5 h-5" />,
      iconBg: 'bg-gray-100',
      iconColor: 'text-txt-secondary',
      title: 'Annual Governance Framework Review',
      status: 'Scheduled',
      priority: 'Critical',
      date: '2024-12-15',
      time: '09:00 AM - 05:00 PM',
      mode: 'In-Person',
      description: 'Annual review, policy updates, strategic planning for 2025',
      organizer: 'Rajesh Kumar',
      attendees: 1,
      venue: 'Executive Conference Center',
    },
  ];

  const getPriorityBadgeStyles = (priority: string) => {
    if (priority === 'Critical') {
      return 'bg-critical text-white';
    }
    return 'bg-warning-soft text-amber-700 border border-orange-200';
  };

  const getStatusBadgeStyles = (status: string) => {
    if (status === 'Completed') {
      return 'bg-primary text-white';
    }
    return 'bg-primary-soft text-primary border border-blue-200';
  };

  const getModeIcon = (mode: string) => {
    if (mode === 'Virtual') {
      return <Video className="w-4 h-4" />;
    }
    if (mode === 'In-Person') {
      return <MapPin className="w-4 h-4" />;
    }
    return <Users className="w-4 h-4" />;
  };

  return (
    <div className="bg-surface-bg min-h-screen p-3 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="section-header-title">Meeting Calendar</h1>
          <div className="flex items-center gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-primary/[0.08] rounded-lg text-sm font-medium text-txt-primary bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option>All Meetings</option>
              <option>Scheduled</option>
              <option>Completed</option>
            </select>
            <button className="neu-button-primary text-sm">
              <Plus className="w-4 h-4" />
              Schedule Meeting
            </button>
          </div>
        </div>

        {/* Meetings List */}
        <div className="space-y-4">
          {meetings.map((meeting) => (
            <div
              key={meeting.id}
              className="glass-panel p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`${meeting.iconBg} ${meeting.iconColor} p-3 rounded-lg flex-shrink-0`}>
                  {meeting.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Title and Badges */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-bold text-txt-primary">{meeting.title}</h3>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusBadgeStyles(meeting.status)}`}>
                        {meeting.status}
                      </span>
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getPriorityBadgeStyles(meeting.priority)}`}>
                        {meeting.priority}
                      </span>
                    </div>
                    <button className="text-txt-muted hover:text-txt-secondary flex-shrink-0">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Date, Time, and Mode */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-txt-secondary">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{meeting.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{meeting.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {getModeIcon(meeting.mode)}
                      <span>{meeting.mode}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-txt-secondary mb-3">{meeting.description}</p>

                  {/* Organizer, Attendees, Venue */}
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-txt-primary">Organizer:</span>{' '}
                      <span className="text-txt-secondary">{meeting.organizer}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-txt-primary">Attendees:</span>{' '}
                      <span className="text-txt-secondary">{meeting.attendees}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-txt-primary">Venue:</span>{' '}
                      <span className="text-txt-secondary">{meeting.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetingCalendar;