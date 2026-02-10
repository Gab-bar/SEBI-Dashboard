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
    if (result === 'Pass') return 'bg-primary text-white';
    if (result === 'Partial Pass') return 'bg-gray-200 text-txt-primary';
    return 'bg-critical-soft text-critical';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 90) return 'bg-primary';
    if (score >= 75) return 'bg-gray-700';
    return 'bg-surface-bg0';
  };

  const getIssuesColor = (issues: number) => {
    if (issues === 0) return 'text-success';
    if (issues <= 2) return 'text-primary';
    return 'text-amber-600';
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Control Testing Logs</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
            <Plus size={18} />
            Schedule Test
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-primary/[0.06] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-surface-bg border-b border-primary/[0.06]">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Control</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Test Type</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Date</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Result</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Score</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Issues</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Next Test</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-txt-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/[0.06]">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-surface-bg transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium text-txt-primary">{log.control}</div>
                      <div className="text-sm text-txt-muted">{log.controlId}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{log.testType}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-txt-primary">{log.date}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getResultBadgeColor(log.result)}`}>
                      {log.result}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-txt-primary font-medium min-w-[40px]">{log.score}%</span>
                      <div className="flex-1 progress-track w-24" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
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
                    <span className="text-txt-primary">{log.nextTest}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-txt-muted hover:text-txt-secondary transition-colors">
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