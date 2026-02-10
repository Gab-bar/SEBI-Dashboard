'use client';

import React from 'react';
import { Download, Plus, Users, Calendar, Target, TrendingUp, Clock, Bell } from 'lucide-react';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';
import { AlertTriangle,  Activity, CheckCircle2, BookOpen, Shield, File } from "lucide-react";


interface StatCard {
  icon?: React.ReactElement
  label: string;
  value: string | number;
}

function ComplainceTrackerReporting() {

    const tabs: TabType[] = ['Control Matrix' , 'Gap Analysis' , 'Audit Trail' , 'Report Generator', 'SEBI Submissions'];

    const stats: StatCard[] = [
        {
            icon: <Shield className="w-6 h-6" />,
            label: "Total Controls",
            value: 5,
        },
        {
            icon: <Target className="w-6 h-6" />,
            label: "Compliance Rate",
            value: "78%",
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-critical" />,
            label: 'Critical Gaps',
            value: 2,
        },
        {
            icon: <File className="w-6 h-6" />,
            label: 'Pending Submissions',
            value: 1,
        },
        {
            icon: <Activity className="w-6 h-6" />,
            label: 'Active Audits',
            value: 1,
        },
    ];

  return (
        <div className="bg-surface-bg p-3 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6 lg:mb-8">
            <div>
                <h1 className="section-header-title mb-2">Compliance Tracker & Reports</h1>
                <p className="text-txt-secondary">Maintain audit readiness and generate regulatory reports</p>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="stat-card"
                >
                    <div className="flex items-start gap-4 flex-col">
                        <div className="text-txt-secondary flex justify-between w-full">
                            <p className="text-sm font-medium text-txt-secondary mb-1">{stat.label}</p>
                            <span>{stat.icon}</span>   
                        </div>
                        <div>
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

export { ComplainceTrackerReporting };