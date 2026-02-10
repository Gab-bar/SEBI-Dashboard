import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TrainingSession {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  duration: string;
  description: string;
  learningObjectives: string[];
  tags: string[];
  instructor: string;
  seats: string;
  enrolled: number;
  location: string;
}

const trainingSessions: TrainingSession[] = [
  {
    id: '1',
    title: 'Cybersecurity Awareness Fundamentals',
    category: 'Scheduled',
    date: 'Mon 10, Dec 2025',
    time: '9:00 AM - 12:00 PM',
    duration: '3 hours',
    description: 'Learn fundamental cybersecurity concepts including identity, access, monitoring activity, cloud management, and change management.',
    learningObjectives: [
      'Identify common phishing attempts',
      'Implement secure password practices',
      'Understand multi-factor authentication',
      'Recognize social engineering tactics'
    ],
    tags: ['Security', 'Fundamentals', 'Online'],
    instructor: 'John Smith',
    seats: 'Available: 15 out of 30 seats',
    enrolled: 15,
    location: 'Virtual - MS Teams'
  },
  {
    id: '2',
    title: 'Advanced Threat Detection Workshop',
    category: 'Scheduled',
    date: 'Wed 12, Jan 2026',
    time: '2:00 PM - 5:00 PM',
    duration: '3 hours',
    description: 'Deep dive into advanced threat detection techniques, SIEM analysis, and incident response procedures.',
    learningObjectives: [
      'Analyze SIEM alerts effectively',
      'Identify IOCs in network traffic',
      'Perform forensic analysis',
      'Document security incidents'
    ],
    tags: ['Advanced', 'Security', 'Hybrid'],
    instructor: 'Sarah Johnson',
    seats: 'Available: 8 out of 20 seats',
    enrolled: 12,
    location: 'Conference Room A / Virtual'
  },
  {
    id: '3',
    title: 'Data Protection & Privacy Training',
    category: 'Upcoming',
    date: 'Fri 15, Feb 2026',
    time: '10:00 AM - 1:00 PM',
    duration: '3 hours',
    description: 'Comprehensive training on data protection regulations, privacy best practices, and secure data handling procedures.',
    learningObjectives: [
      'Understand GDPR compliance requirements',
      'Implement data minimization principles',
      'Handle personal data securely',
      'Respond to data subject requests'
    ],
    tags: ['Compliance', 'Privacy', 'Hybrid'],
    instructor: 'Mike Davis',
    seats: 'Available: 20 out of 25 seats',
    enrolled: 5,
    location: 'Training Center / Virtual'
  },
  {
    id: '4',
    title: 'Incident Response Simulation Session',
    category: 'Scheduled',
    date: 'Mon 20, Jan 2026',
    time: '9:00 AM - 4:00 PM',
    duration: '7 hours',
    description: 'Hands-on incident response simulation with real-world scenarios and collaborative problem-solving.',
    learningObjectives: [
      'Execute incident response procedures',
      'Coordinate with security teams',
      'Contain and remediate threats',
      'Document lessons learned'
    ],
    tags: ['Hands-on', 'Advanced', 'On-site'],
    instructor: 'Lisa Anderson',
    seats: 'Available: 12 out of 15 seats',
    enrolled: 3,
    location: 'Security Operations Center'
  },
  {
    id: '5',
    title: 'Secure Development Employee',
    category: 'Scheduled',
    date: 'Thu 25, Mar 2026',
    time: '1:00 PM - 4:00 PM',
    duration: '3 hours',
    description: 'Training for developers on secure coding practices, vulnerability prevention, and security testing.',
    learningObjectives: [
      'Implement secure coding practices',
      'Identify common vulnerabilities',
      'Perform security code reviews',
      'Use security testing tools'
    ],
    tags: ['Development', 'Security', 'Online'],
    instructor: 'David Brown',
    seats: 'Available: 18 out of 30 seats',
    enrolled: 12,
    location: 'Virtual - Zoom'
  }
];

const TrainingCalendar: React.FC = () => {
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set());

  const toggleSession = (id: string) => {
    const newExpanded = new Set(expandedSessions);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSessions(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Scheduled':
        return 'bg-primary-hover text-white';
      case 'Upcoming':
        return 'bg-blue-600 text-white';
      case 'Hybrid':
        return 'bg-green-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <header className="bg-white border-b border-primary/[0.06] px-4 py-3 md:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold text-txt-primary">Training Calendar</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors">
            Filter Sessions
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="space-y-4">
          {trainingSessions.map((session) => (
            <div
              key={session.id}
              className="glass-panel border border-primary/[0.06] overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Session Header */}
              <div className="p-4 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  {/* Left Section */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h2 className="text-lg md:text-xl font-semibold text-txt-primary">
                        {session.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(session.category)}`}>
                        {session.category}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm text-txt-secondary mb-3">
                      <p className="font-medium">{session.date}</p>
                      <p>{session.time} - {session.duration}</p>
                    </div>

                    <p className="text-txt-primary text-sm md:text-base mb-3">
                      {session.description}
                    </p>

                    {expandedSessions.has(session.id) && (
                      <div className="mt-4 space-y-3">
                        <div>
                          <h3 className="font-semibold text-txt-primary mb-2 text-sm">Learning Objectives:</h3>
                          <ul className="space-y-1">
                            {session.learningObjectives.map((obj, idx) => (
                              <li key={idx} className="flex items-start text-sm text-txt-primary">
                                <span className="mr-2">•</span>
                                <span>{obj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-3">
                      {session.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-txt-primary rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Section - Details */}
                  <div className="lg:w-64 space-y-2 text-sm">
                    <div className="bg-surface-bg p-3 rounded-lg">
                      <p className="font-semibold text-txt-primary mb-1">Instructor</p>
                      <p className="text-txt-primary">{session.instructor}</p>
                    </div>
                    <div className="bg-surface-bg p-3 rounded-lg">
                      <p className="font-semibold text-txt-primary mb-1">Seats</p>
                      <p className="text-txt-primary">{session.seats}</p>
                      <div className="mt-2 w-full progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${(session.enrolled / (session.enrolled + parseInt(session.seats.split(' ')[1]))) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-surface-bg p-3 rounded-lg">
                      <p className="font-semibold text-txt-primary mb-1">Location</p>
                      <p className="text-txt-primary">{session.location}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-4 pt-4 border-t border-gray-100">
                  <button className="flex-1 sm:flex-none bg-primary text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-primary-hover transition-colors">
                    Enroll Now
                  </button>
                  <button
                    onClick={() => toggleSession(session.id)}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-primary/[0.08] text-txt-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-surface-bg transition-colors"
                  >
                    {expandedSessions.has(session.id) ? (
                      <>
                        Less Details
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        More Details
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <button className="flex-1 sm:flex-none border border-primary/[0.08] text-txt-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-surface-bg transition-colors">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export { TrainingCalendar };