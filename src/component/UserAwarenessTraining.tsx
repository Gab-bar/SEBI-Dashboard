'use client';

import React from 'react';
import { Download, Plus, Users, Calendar, Target, TrendingUp, Clock, Bell } from 'lucide-react';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';
import { AlertTriangle,  Activity, CheckCircle2, BookOpen, Shield } from "lucide-react";


interface StatCard {
  icon?: React.ReactElement
  label: string;
  value: string | number;
}

function UserAwarenessTraining() {

    const tabs: TabType[] = ['Training Calendar' , 'Attendance Tracker' , 'Material Repository' , 'Phising Simulation', 'Complaince Scores'];

    const stats: StatCard[] = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            label: "Active Trainings",
            value: 4,
        },
        {
            icon: <Users className="w-6 h-6" />,
            label: "Total Enrolled",
            value: 190,
        },
        {
            icon: <Target className="w-6 h-6" />,
            label: 'Avg Complaince',
            value: "90%",
        },
        {
            icon: <Shield className="w-6 h-6" />,
            label: 'Phishing Success',
            value: "82%",
        },
        // {
        //     // icon: <TrendingUp className="w-6 h-6" />,
        //     label: 'Pending Approval',
        //     value: 1,
        // },
    ];

  return (
        <div className="bg-surface-bg p-3 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6 lg:mb-8">
            <div>
                <h1 className="section-header-title mb-2">User Awareness & Training</h1>
                <p className="text-txt-secondary">Manage employee cybersecurity training, awareness, and simulations</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <button className="neu-button-secondary text-sm">
                <Download className="w-4 h-4" />
                Upload Policy
                </button>
                <button className="neu-button-secondary text-sm">
                <Download className="w-4 h-4" />
                Export Report
                </button>
                <button className="neu-button-primary text-sm">
                <Plus className="w-4 h-4" />
                New Policy
                </button>
            </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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

export { UserAwarenessTraining };