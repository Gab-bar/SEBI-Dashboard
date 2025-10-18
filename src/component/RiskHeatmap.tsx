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

  const getBadgeColor = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-red-100 text-red-700';
      case 'High':
        return 'bg-orange-100 text-orange-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Risk Heatmap</h3>
        <div className="flex gap-3">
          <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700">
            <option>Filter</option>
          </select>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black flex items-center gap-2">
            <span className="text-lg">+</span>
            Add Risk
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Risk Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Probability</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Impact</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Risk Level</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Owner</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Controls</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Next Review</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {risks.map((risk, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{risk.category}</div>
                  <div className="text-sm text-gray-600">{risk.subtitle}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(risk.probability)}`}>
                    {risk.probability}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(risk.impact)}`}>
                    {risk.impact}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(risk.level)}`}>
                    {risk.level}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{risk.owner}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{risk.controls}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{risk.nextReview}</td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
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
