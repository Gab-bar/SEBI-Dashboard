'use client';

import React from 'react';
import { Download, Plus, Users, Calendar, Target, TrendingUp  } from 'lucide-react';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';
import { Shield, CheckCircle, Clock } from 'lucide-react';
import { AlertTriangle,  Activity, CheckCircle2 } from "lucide-react";


interface StatCard {
  icon?: React.ReactElement;
  label: string;
  value: string | number;
}

export default function VaptAuditManagement() {

    const tabs: TabType[] = [ 'VA/PT Schedule' , 'Auditor Assignment' , 'Findings Tracker' , 'Reports Upload', 'SEBI Submission' ];

    const stats: StatCard[] = [
        {
            icon: <Calendar className="w-6 h-6" />,
            label: 'Scheduled Assessments',
            value: 2,
        },
        {
            icon: <AlertTriangle className="w-6 h-6" />,
            label: 'Critical Findings',
            value: 1,
        },
        {
            icon: <Activity className="w-6 h-6" />,
            label: 'Open Findings',
            value: 2,   
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            label: 'Avg Implementation',
            value: 1,
        },
    ];

  return (
        <div className="bg-surface-bg p-3 sm:p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4 sm:mb-6 lg:mb-8">
            <div>
                <h1 className="section-header-title mb-2">VA/PT & Audit Management</h1>
                <p className="text-txt-secondary">Manage vulnerability assessments, penetration tests, and audits</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* <button className="neu-button-secondary text-sm">
                <Download className="w-4 h-4" />
                Upload Policy
                </button> */}
                <button className="neu-button-secondary text-sm">
                    <Download className="w-4 h-4" />
                    Export Reports
                </button>
                <button className="neu-button-primary text-sm">
                    <Plus className="w-4 h-4" />    
                    Schedule Assessment
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
                        {stat.icon && <div className="text-txt-secondary">
                        {stat.icon}
                        </div>}
                        <div>
                            <p className="text-sm font-medium text-txt-secondary mb-1">{stat.label}</p>
                            <p className="section-header-title">{stat.value}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
        <TabbedDashboard tabs={tabs} />
        </div>

  );
}

export { VaptAuditManagement };