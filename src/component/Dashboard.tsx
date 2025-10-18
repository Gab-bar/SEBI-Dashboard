// ============================================
// FILE: components/Dashboard.tsx
// ============================================
'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar'; 
import TopBar from './TopBar';
import StatsCards from './StatsCards';
// import RiskHeatmap from './RiskHeatmap';
// import ComplianceDashboard from "./ComplainceDashboard";
// import SecurityAlertDashboard from './securityAlertDashboard';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Risk Heatmap');

    // const tabs: TabType[] = ['Risk Heatmap', 'Compliance Dashboard', 'Security Alerts', 'SEBI Reporting', 'Alerts Notifications'];


  const tabs: TabType[] = [
    'Compliance Dashboard',
    'Risk Heatmap',
    'Security Alerts',
    'SEBI Reporting',
    'Alerts Notifications'
  ];

  return (

        
        <div className="p-8">
          {/* Page Header */}
          <div className="mb-6 flex justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                SEBI Cybersecurity Dashboard
              </h2>
              <p className="text-gray-600">
                Comprehensive overview of cybersecurity compliance and operations
              </p>
            </div>
            
            <div className="flex gap-3 mt-4">
              <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
              
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
              
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Dashboard
              </button>
            </div>
          </div>

          <StatsCards />

          {/* Tabs */}
          {/* <div className="flex gap-2 mb-6 border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <RiskHeatmap />
          <ComplianceDashboard/>
          <SecurityAlertDashboard/> */}
          <TabbedDashboard tabs={tabs}/> 
          
        </div>

  );
}