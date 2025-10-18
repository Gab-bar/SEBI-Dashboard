'use client';

import React from 'react';
import { Download, Plus, Users, Calendar, Target, TrendingUp, Clock, Check } from 'lucide-react';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';
import { AlertTriangle,  Activity, CheckCircle2 } from "lucide-react";


interface StatCard {
  icon?: React.ReactElement
  label: string;
  value: string | number;
}

function IncidentManagement() {

    const tabs: TabType[] = [ 'Incident Log' , 'Response & Containment' , 'RCA & Mitigatiion' , 'SEBI Reporting3', 'CERT-In Integration' ];

    const stats: StatCard[] = [
        {
            icon: <AlertTriangle className="w-6 h-6 text-[#da1111]" />,
            label: 'Critical Incidents',
            value: 1,
        },
        {
            icon: <Activity className="w-6 h-6" />,
            label: 'Open Incidents',
            value: 1,
        },
        {
            icon: <Clock className="w-6 h-6" />,
            label: 'Avg Response Time',
            value: 2,
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            label: 'Resolved This Month',
            value: 1,
        },
        // {
        //     // icon: <TrendingUp className="w-6 h-6" />,
        //     label: 'Pending Approval',
        //     value: 1,
        // },
    ];

  return (
        <div className="bg-white p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Incident Management</h1>
                <p className="text-gray-600">Track and report cybersecurity incidents and near misses</p>
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Upload Policy
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                Export Report
                </button>
                <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
                <Plus className="w-4 h-4" />
                New Policy
                </button>
            </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                <div className="flex items-start gap-4">
                    <div className="text-gray-600">
                        {stat.icon}
                    </div>
                    <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
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

export { IncidentManagement };  