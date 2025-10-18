'use client';

import React, { useState } from 'react';
import { Search, Mail, Phone, MoreVertical, Star, User } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  status: 'Active' | 'Inactive';
  title: string;
  department: string;
  email: string;
  phone: string;
  expertise: string[];
  experience: string;
  attendance: string;
  score: number;
}
    
const CommitteeMembersDirectory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');

  const members: Member[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      status: 'Active',
      title: 'Chairman & Managing Director',
      department: 'Executive Leadership',
      email: 'rajesh.kumar@company.com',
      phone: '+91 98765 43210',
      expertise: ['Corporate Governance', 'Strategic Planning', 'Risk Management'],
      experience: '15+ years',
      attendance: '95%',
      score: 4.8,
    },
    {
      id: '2',
      name: 'Priya Sharma',
      status: 'Active',
      title: 'Chief Information Security Officer',
      department: 'Information Security',
      email: 'priya.sharma@company.com',
      phone: '+91 98765 43211',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Assessment'],
      experience: '12+ years',
      attendance: '98%',
      score: 4.9,
    },
    {
      id: '3',
      name: 'Amit Patel',
      status: 'Active',
      title: 'Head of Compliance',
      department: 'Legal & Compliance',
      email: 'amit.patel@company.com',
      phone: '+91 98765 43212',
      expertise: ['Regulatory Compliance', 'Audit Management', 'Policy Development'],
      experience: '10+ years',
      attendance: '92%',
      score: 4.7,
    },
    {
      id: '4',
      name: 'Sneha Reddy',
      status: 'Active',
      title: 'VP of Risk Management',
      department: 'Risk & Governance',
      email: 'sneha.reddy@company.com',
      phone: '+91 98765 43213',
      expertise: ['Enterprise Risk', 'Business Continuity', 'Crisis Management'],
      experience: '14+ years',
      attendance: '96%',
      score: 4.8,
    },
    {
      id: '5',
      name: 'Vikram Singh',
      status: 'Inactive',
      title: 'Security Advisor',
      department: 'Advisory Board',
      email: 'vikram.singh@company.com',
      phone: '+91 98765 43214',
      expertise: ['Security Strategy', 'Threat Intelligence', 'Incident Response'],
      experience: '20+ years',
      attendance: '85%',
      score: 4.6,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Committee Members Directory</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 w-64"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Members List */}
        <div className="space-y-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="bg-gray-100 rounded-full p-4 flex-shrink-0">
                  <User className="w-6 h-6 text-gray-600" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Name and Status */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          member.status === 'Active'
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {member.status}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Title and Department */}
                  <p className="text-base font-semibold text-gray-700 mb-1">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.department}</p>

                  {/* Contact Info */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium px-3 py-1 bg-white border border-gray-300 rounded-full text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Experience:</span>{' '}
                      <span className="text-gray-600">{member.experience}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Attendance:</span>{' '}
                      <span className="text-gray-600">{member.attendance}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium text-gray-900">Score:</span>
                      <span className="text-gray-600">{member.score}/5</span>
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

export default CommitteeMembersDirectory;