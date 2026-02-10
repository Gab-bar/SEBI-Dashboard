// ============================================
// FILE: components/Dashboard.tsx
// ============================================
'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import TopBar from './TopBar';
import StatsCards from './StatsCards';
import TabbedDashboard from './TabbedDashboard';
import type { TabType } from './TabbedDashboard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Risk Heatmap');

  const tabs: TabType[] = [
    'Compliance Dashboard',
    'Risk Heatmap',
    'Security Alerts',
    'SEBI Reporting',
    'Alerts Notifications'
  ];

  return (
        <div className="p-3 sm:p-4 lg:p-6 xl:p-8">
          {/* Page Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:justify-between gap-4">
            <div>
              <h2 className="section-header-title mb-2">
                SEBI Cybersecurity Dashboard
              </h2>
              <p className="section-header-subtitle">
                Comprehensive overview of cybersecurity compliance and operations
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
              <select className="neu-select">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>

              <button className="neu-button-secondary flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>

              <button className="neu-button-primary flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Dashboard
              </button>
            </div>
          </div>

          <StatsCards />

          <TabbedDashboard tabs={tabs}/>

        </div>
  );
}
