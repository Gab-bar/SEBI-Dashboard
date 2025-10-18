import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DepartmentData {
  name: string;
  employees: number;
  clicked: number;
  reported: number;
  percentage: number;
}

interface CampaignResult {
  id: string;
  title: string;
  badge: string;
  status: string;
  duration: string;
  totalSent: number;
  clickRate: string;
  reportRate: string;
  passRate: string;
  departments: DepartmentData[];
  trendAnalysis: string;
}

const campaignResults: CampaignResult[] = [
  {
    id: '1',
    title: 'Q4 2024 Spear Phishing Campaign',
    badge: 'Completed',
    status: 'Sent Monthly',
    duration: 'Phase 08 | 2024-11-01 | 30 days',
    totalSent: 450,
    clickRate: '19.9%',
    reportRate: '34.8%',
    passRate: '80.1%',
    departments: [
      { name: 'Finance', employees: 92, clicked: 33, reported: 26, percentage: 92.7 },
      { name: 'IT', employees: 68, clicked: 8, reported: 54, percentage: 88.0 },
      { name: 'HR', employees: 45, clicked: 21, reported: 18, percentage: 73.3 },
      { name: 'Operations', employees: 134, clicked: 35, reported: 74, percentage: 74.6 },
      { name: 'Sales', employees: 89, clicked: 21, reported: 62, percentage: 76.4 },
      { name: 'Management', employees: 22, clicked: 12, reported: 9, percentage: 40.9 }
    ],
    trendAnalysis: '15% better than Q3 2024 | Above industry average | Best Level: Medium'
  },
  {
    id: '2',
    title: 'Mobile Phishing Awareness Test',
    badge: 'Completed',
    status: 'Sent Monthly',
    duration: 'Phase 05 | 2024-10-15 | 21 days',
    totalSent: 287,
    clickRate: '15.8%',
    reportRate: '31.2%',
    passRate: '84.2%',
    departments: [
      { name: 'Sales', employees: 89, clicked: 18, reported: 67, percentage: 75.3 },
      { name: 'Field Operations', employees: 143, clicked: 27, reported: 99, percentage: 81.1 },
      { name: 'Customer Service', employees: 55, clicked: 13, reported: 38, percentage: 69.1 }
    ],
    trendAnalysis: '8% better than previous mobile campaign | 7% industry average | Risk Level: Medium'
  }
];

const PhishingSimulationResults: React.FC = () => {
  const getPercentageColor = (percentage: number): string => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPercentageTextColor = (percentage: number): string => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 md:px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            Phishing Simulation Results
          </h1>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors whitespace-nowrap">
            New Campaign
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8 space-y-6">
        {campaignResults.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            {/* Campaign Header */}
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                    {campaign.title}
                  </h2>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {campaign.badge}
                  </span>
                  <span className="text-sm text-gray-600">{campaign.status}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600 self-end md:self-auto">
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600">{campaign.duration}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-6 bg-gray-50">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                  {campaign.totalSent}
                </div>
                <div className="text-xs text-gray-600">Email Sent</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">
                  {campaign.clickRate}
                </div>
                <div className="text-xs text-gray-600">Click Rate</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                  {campaign.reportRate}
                </div>
                <div className="text-xs text-gray-600">Report Rate</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center col-span-2 md:col-span-1">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                  {campaign.passRate}
                </div>
                <div className="text-xs text-gray-600">Pass Rate</div>
              </div>
            </div>

            {/* Department Performance */}
            <div className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                Department Performance:
              </h3>
              
              <div className="space-y-3">
                {campaign.departments.map((dept, idx) => (
                  <div key={idx} className="flex flex-col space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-medium text-gray-900 text-sm md:text-base truncate">
                            {dept.name}
                          </span>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {dept.employees} employees
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span className="text-xs text-gray-600 whitespace-nowrap hidden sm:inline">
                          Clicked: {dept.clicked} | Reported: {dept.reported}
                        </span>
                        <span className={`font-semibold text-sm ${getPercentageTextColor(dept.percentage)}`}>
                          {dept.percentage}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Mobile stats */}
                    <div className="text-xs text-gray-600 sm:hidden">
                      Clicked: {dept.clicked} | Reported: {dept.reported}
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${getPercentageColor(dept.percentage)}`}
                        style={{ width: `${dept.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trend Analysis */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Trend Analysis:</span> {campaign.trendAnalysis}
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export {PhishingSimulationResults};