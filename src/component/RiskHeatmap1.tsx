import React from 'react';
 
 const RiskHeatmap: React.FC = () => {
  const risks = [
    { name: 'Data Breach', likelihood: 'High', impact: 'Critical' },
    { name: 'Insider Threat', likelihood: 'Medium', impact: 'High' },
    { name: 'Phishing Attack', likelihood: 'High', impact: 'Medium' },
    { name: 'DDoS Attack', likelihood: 'Low', impact: 'Medium' },
    { name: 'Ransomware', likelihood: 'Medium', impact: 'Critical' },
  ];

  return (
    <div className="stat-card">
      <h2 className="text-2xl font-bold text-txt-primary mb-6">Risk Heatmap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {risks.map((risk, idx) => (
          <div key={idx} className="border border-primary/[0.06] rounded-lg p-4">
            <h3 className="font-semibold text-txt-primary mb-2">{risk.name}</h3>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-primary-soft text-primary rounded">
                {risk.likelihood}
              </span>
              <span className="text-xs px-2 py-1 bg-critical-soft text-critical rounded">
                {risk.impact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskHeatmap;