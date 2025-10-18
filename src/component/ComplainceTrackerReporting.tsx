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
            icon: <AlertTriangle className="w-6 h-6 text-[#da1111]" />,
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
        <div className="bg-white p-6">
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Compliance Tracker & Reports</h1>
                <p className="text-gray-600">Maintain audit readiness and generate regulatory reports</p>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                    <div className="flex items-start gap-4 flex-col">
                        <div className="text-gray-600 flex justify-between w-full">
                            <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                            <span>{stat.icon}</span>   
                        </div>
                        <div>
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

export { ComplainceTrackerReporting };