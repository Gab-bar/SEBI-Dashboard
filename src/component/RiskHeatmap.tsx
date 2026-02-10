import { getStatusClass } from '@/lib/colors';
export default function RiskHeatmap() {
  const risks = [
    {
      category: 'Cyber Attacks',
      subtitle: 'Enhanced monitoring deployed',
      probability: 'High',
      impact: 'High',
      level: 'Critical',
      owner: 'CISO',
      controls: 8,
      nextReview: '2024-12-18'
    },
    {
      category: 'Data Breach',
      subtitle: 'DLP controls implemented',
      probability: 'Medium',
      impact: 'High',
      level: 'High',
      owner: 'Data Protection Officer',
      controls: 12,
      nextReview: '2024-12-15'
    },
    {
      category: 'Vendor Security',
      subtitle: 'Third-party assessment ongoing',
      probability: 'Medium',
      impact: 'Medium',
      level: 'Medium',
      owner: 'Vendor Manager',
      controls: 6,
      nextReview: '2024-12-20'
    },
    {
  category: 'System Outage',
  subtitle: 'Business continuity plan',
  probability: 'Low',
  impact: 'High',
  level: 'Medium',
  owner: 'IT Manager',
  controls: 10,
  nextReview: '2024-12-12'
},
{
  category: 'Insider Threats',
  subtitle: 'User monitoring & training',
  probability: 'Low',
  impact: 'Medium',
  level: 'Low',
  owner: 'HR Security',
  controls: 5,
  nextReview: '2024-12-08'
},
{
  category: 'Regulatory Non-compliance',
  subtitle: 'Compliance monitoring',
  probability: 'Medium',
  impact: 'High',
  level: 'High',
  owner: 'Compliance Officer',
  controls: 15,
  nextReview: '2024-12-20'
}
  ];
  return (
    <div className="glass-card overflow-hidden">
      <div className="px-6 py-5 border-b border-primary/[0.06] flex items-center justify-between">
        <h3 className="text-lg font-semibold text-txt-primary">Risk Heatmap</h3>
        <div className="flex gap-3">
          <select className="px-4 py-2 bg-white border border-primary/[0.08] rounded-lg text-sm font-medium text-txt-primary">
            <option>Filter</option>
          </select>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover flex items-center gap-2">
            <span className="text-lg">+</span>
            Add Risk
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface-bg">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Risk Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Probability</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Impact</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Risk Level</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Owner</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Controls</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Next Review</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-txt-secondary">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/[0.06]">
            {risks.map((risk, index) => (
              <tr key={index} className="hover:bg-surface-bg">
                <td className="px-6 py-4">
                  <div className="font-medium text-txt-primary">{risk.category}</div>
                  <div className="text-sm text-txt-secondary">{risk.subtitle}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(risk.probability)}`}>
                    {risk.probability}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(risk.impact)}`}>
                    {risk.impact}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(risk.level)}`}>
                    {risk.level}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-txt-primary">{risk.owner}</td>
                <td className="px-6 py-4 text-sm text-txt-primary">{risk.controls}</td>
                <td className="px-6 py-4 text-sm text-txt-primary">{risk.nextReview}</td>
                <td className="px-6 py-4">
                  <button className="text-txt-muted hover:text-txt-secondary">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
