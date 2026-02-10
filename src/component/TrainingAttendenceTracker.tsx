import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { getStatusClass } from '@/lib/colors';

interface Attendee {
  name: string;
  role: string;
  department: string;
  attendance: 'Present' | 'Absent';
  status: 'Completed' | 'Partially Completed' | 'Absent';
  rating: number;
}

interface TrainingSession {
  id: string;
  title: string;
  date: string;
  metrics: {
    registered: number;
    attended: number;
    attendanceRate: string;
    avgRating: number;
  };
  attendees: Attendee[];
  trainerFeedback: string;
}

const TrainingAttendanceTracker = () => {
  const sessions: TrainingSession[] = [
    {
      id: '1',
      title: 'Incident Response Simulation Exercise',
      date: '2024-11-28',
      metrics: {
        registered: 25,
        attended: 22,
        attendanceRate: '88%',
        avgRating: 4.5
      },
      attendees: [
        {
          name: 'Rajesh Kumar',
          role: 'Security Manager',
          department: 'IT Security',
          attendance: 'Present',
          status: 'Completed',
          rating: 5
        },
        {
          name: 'Priya Sharma',
          role: 'Analyst',
          department: 'Information Security',
          attendance: 'Present',
          status: 'Completed',
          rating: 5
        },
        {
          name: 'Amit Patel',
          role: 'Risk Manager',
          department: 'Risk Management',
          attendance: 'Present',
          status: 'Completed',
          rating: 4
        },
        {
          name: 'Neha Singh',
          role: 'Operations Manager',
          department: 'IT Operations',
          attendance: 'Absent',
          status: 'Absent',
          rating: 0
        },
        {
          name: 'Vikram Reddy',
          role: 'SOC Analyst',
          department: 'SOC',
          attendance: 'Present',
          status: 'Partially Completed',
          rating: 4
        }
      ],
      trainerFeedback: 'Overall excellent participation. Team showed great understanding of procedures. Recommend more frequent simulation exercises.'
    },
    {
      id: '2',
      title: 'Phishing Awareness Workshop',
      date: '2024-11-25',
      metrics: {
        registered: 60,
        attended: 57,
        attendanceRate: '95%',
        avgRating: 4.7
      },
      attendees: [
        {
          name: 'Sunita Reddy',
          role: 'Finance Manager',
          department: 'Finance',
          attendance: 'Present',
          status: 'Completed',
          rating: 5
        },
        {
          name: 'Ravi Agarwal',
          role: 'Team Lead',
          department: 'HR',
          attendance: 'Present',
          status: 'Completed',
          rating: 5
        },
        {
          name: 'Kavita Joshi',
          role: 'Administrator',
          department: 'Operations',
          attendance: 'Present',
          status: 'Completed',
          rating: 4
        }
      ],
      trainerFeedback: 'High engagement level. Participants asked relevant questions and showed good understanding of phishing tactics.'
    }
  ];

  const getAttendanceColor = (attendance: string) => {
    return attendance === 'Present' ? 'bg-primary text-white' : 'bg-critical text-white';
  };
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <div className="bg-white border-b border-primary/[0.06] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-bold text-txt-primary">Training Attendance Tracker</h1>
        </div>
      </div>

      {/* Sessions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {sessions.map((session) => (
          <div key={session.id} className="glass-panel overflow-hidden shadow-sm">
            <div className="p-4 sm:p-6">
              {/* Session Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-txt-primary">{session.title}</h2>
                  <p className="text-sm text-txt-muted mt-1">{session.date}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-lg text-center bg-primary-soft">
                  <div className="text-3xl font-bold text-primary">{session.metrics.registered}</div>
                  <div className="text-xs text-txt-secondary mt-1">Registered</div>
                </div>
                <div className="p-4 rounded-lg text-center bg-success-soft">
                  <div className="text-3xl font-bold text-success">{session.metrics.attended}</div>
                  <div className="text-xs text-txt-secondary mt-1">Attended</div>
                </div>
                <div className="p-4 rounded-lg text-center bg-purple-50">
                  <div className="text-3xl font-bold text-purple-600">{session.metrics.attendanceRate}</div>
                  <div className="text-xs text-txt-secondary mt-1">Attendance Rate</div>
                </div>
                <div className="p-4 rounded-lg text-center bg-warning-soft">
                  <div className="text-3xl font-bold text-amber-600">{session.metrics.avgRating}</div>
                  <div className="text-xs text-txt-secondary mt-1">Avg Rating</div>
                </div>
              </div>

              {/* Attendees Table */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-txt-primary mb-4">Sample Attendee Details:</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-surface-bg border-b border-primary/[0.06]">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Employee
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Department
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Attendance
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-txt-muted uppercase tracking-wider">
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-primary/[0.06]">
                      {session.attendees.map((attendee, idx) => (
                        <tr key={idx} className="hover:bg-surface-bg transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-txt-primary">{attendee.name}</div>
                              <div className="text-xs text-txt-muted">{attendee.role}</div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-sm text-txt-primary">{attendee.department}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getAttendanceColor(attendee.attendance)}`}>
                              {attendee.attendance}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(attendee.status)}`}>
                              {attendee.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            {attendee.rating > 0 ? renderStars(attendee.rating) : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Trainer Feedback */}
              <div className="bg-surface-bg rounded-lg p-4">
                <h3 className="text-sm font-semibold text-txt-primary mb-2">Trainer Feedback:</h3>
                <p className="text-sm text-txt-secondary">{session.trainerFeedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TrainingAttendanceTracker };