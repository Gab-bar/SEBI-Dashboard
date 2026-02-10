'use client';

import React from 'react';
import { Download, Plus, Users, Calendar, Target, TrendingUp } from 'lucide-react';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';


interface StatCard {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

import { Sidebar } from './Sidebar'; 
import TopBar from './TopBar';

export default function GovernanceCommittee() {

     const tabs: TabType[] = [ 'Members Directory' , 'Meeting Calendar' , 'Agenda Minutes' , 'Action Tracker' , 'Annual Report'];


    const stats: StatCard[] = [
        {
            icon: <Users className="w-6 h-6" />,
            label: 'Active Members',
            value: 5,
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            label: 'Upcoming Meetings',
            value: 3,
        },
        {
            icon: <Target className="w-6 h-6" />,
            label: 'Active Actions',
            value: 4,
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            label: 'Avg Attendance',
            value: '94%',
        },
    ];

  return (
        <div className="bg-surface-bg p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-8">
            <div>
                <h1 className="section-header-title mb-2">Governance & Committee</h1>
                <p className="text-txt-secondary">Manage committee members, meetings, and governance activities</p>
            </div>
            <div className="flex items-center gap-3">
                <button className="neu-button-secondary text-sm">
                <Download className="w-4 h-4" />
                Export
                </button>
                <button className="neu-button-primary text-sm">
                <Plus className="w-4 h-4" />
                New Meeting
                </button>
            </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div
                key={index}
                className="stat-card"
                >
                <div className="flex items-start gap-4">
                    <div className="text-txt-secondary">
                    {stat.icon}
                    </div>
                    <div>
                    <p className="text-sm font-medium text-txt-secondary mb-1">{stat.label}</p>
                    <p className="section-header-title">{stat.value}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <TabbedDashboard tabs={tabs}/>
        </div>

  );
}

export { GovernanceCommittee };