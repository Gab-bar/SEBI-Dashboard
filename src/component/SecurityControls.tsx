'use client';

import React from 'react';
import { Download, Plus, Users, Calendar, Target, TrendingUp } from 'lucide-react';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';
import { Shield, CheckCircle, Clock } from 'lucide-react';


interface StatCard {
  icon?: React.ReactElement;
  label: string;
  value: string | number;
}

export default function SecurityControls() {

    const tabs: TabType[] = [ 'Control Inventory' , 'Implementation Status' , 'Testing Logs' , 'Configuration Uploads' ];

    const stats: StatCard[] = [
        {
            icon: <Shield className="w-6 h-6" />,
            label: 'Total Controls',
            value: 5,
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            label: 'Implemented',
            value: 3,
        },
        {
            icon: <Clock className="w-6 h-6" />,
            label: 'In Progress',
            value: 1,
        },
        {
            // icon: <TrendingUp className="w-6 h-6" />,
            label: 'Avg Implementation',
            value: 1,
        },
    ];

  return (
        <div className="bg-surface-bg p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-8">
            <div>
                <h1 className="section-header-title mb-2">Security Controls Management</h1>
                <p className="text-txt-secondary">Track technical security control implementation and compliance</p>
            </div>
            <div className="flex items-center gap-3">
                {/* <button className="neu-button-secondary text-sm">
                <Download className="w-4 h-4" />
                Upload Policy
                </button> */}
                <button className="neu-button-secondary text-sm">
                <Download className="w-4 h-4" />
                Export Controls
                </button>
                <button className="neu-button-primary text-sm">
                <Plus className="w-4 h-4" />    
                Add controls
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
        <TabbedDashboard tabs={tabs}/>
        </div>

  );
}

export { SecurityControls };