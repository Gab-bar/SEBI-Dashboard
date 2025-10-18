import React, { useState } from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';

interface TestLog {
  id: string;
  control: string;
  controlId: string;
  testType: string;
  date: string;
  result: string;
  score: number;
  issues: number;
  nextTest: string;
}

const ControlTestingLogs = () => {
  const [logs] = useState<TestLog[]>([
    {
      id: '1',
      control: 'Multi-Factor Authentication',
      controlId: 'SEBI-AC-01',
      testType: 'Automated',
      date: '2024-11-15',
      result: 'Pass',
      score: 98,
      issues: 0,
      nextTest: '2024-12-15'
    },
    {
      id: '2',
      control: 'Data Loss Prevention',
      controlId: 'SEBI-DLP-01',
      testType: 'Manual',
      date: '2024-11-18',
      result: 'Pass',
      score: 95,
      issues: 1,
      nextTest: '2024-12-18'
    },
    {
      id: '3',
      control: 'Network Segmentation',
      controlId: 'SEBI-NET-01',
      testType: 'Hybrid',
      date: '2024-11-10',
      result: 'Partial Pass',
      score: 75,
      issues: 3,
      nextTest: '2024-12-10'
    },
    {
      id: '4',
      control: 'Malware Protection',
      controlId: 'ISO-27001-A.12.2.1',
      testType: 'Automated',
      date: '2024-11-20',
      result: 'Pass',
      score: 92,
      issues: 1,
      nextTest: '2024-12-20'
    },
    {
      id: '5',
      control: 'Data Encryption at Rest',
      controlId: 'SEBI-ENC-01',
      testType: 'Manual',
      date: '2024-11-12',
      result: 'Pass',
      score: 90,
      issues: 2,
      nextTest: '2024-12-12'
    }
  ]);

  const getResultBadgeColor = (result: string) => {
    if (result === 'Pass') return 'bg-gray-900 text-white';
    if (result === 'Partial Pass') return 'bg-gray-200 text-gray-700';
    return 'bg-red-100 text-red-700';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 90) return 'bg-gray-900';
    if (score >= 75) return 'bg-gray-700';
    return 'bg-gray-500';
  };

  const getIssuesColor = (issues: number) => {
    if (issues === 0) return 'text-green-600';
    if (issues <= 2) return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Control Testing Logs</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Plus size={18} />
            Schedule Test
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Control</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Test Type</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Result</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Score</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Issues</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Next Test</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-gray-900">{log.control}</div>
                      <div className="text-sm text-gray-500">{log.controlId}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{log.testType}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{log.date}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getResultBadgeColor(log.result)}`}>
                      {log.result}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-900 font-medium min-w-[40px]">{log.score}%</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-24">
                        <div 
                          className={`h-2 rounded-full ${getScoreBarColor(log.score)}`}
                          style={{ width: `${log.score}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`font-medium ${getIssuesColor(log.issues)}`}>
                      {log.issues}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{log.nextTest}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export  {ControlTestingLogs};