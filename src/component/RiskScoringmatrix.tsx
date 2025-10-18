import React from 'react';

interface MatrixCell {
  value: number;
  color: string;
}

const RiskScoringMatrix = () => {
  const likelihood = ['Very Low (1)', 'Low (2)', 'Medium (3)', 'High (4)', 'Very High (5)'];
  const impact = ['Very High (5)', 'High (4)', 'Medium (3)', 'Low (2)', 'Very Low (1)'];
  
  const matrix: MatrixCell[][] = [
    [
      { value: 5, color: 'bg-yellow-200' },
      { value: 10, color: 'bg-orange-200' },
      { value: 15, color: 'bg-red-200' },
      { value: 20, color: 'bg-red-400' },
      { value: 25, color: 'bg-red-600' }
    ],
    [
      { value: 4, color: 'bg-green-200' },
      { value: 8, color: 'bg-yellow-200' },
      { value: 12, color: 'bg-orange-200' },
      { value: 16, color: 'bg-red-400' },
      { value: 20, color: 'bg-red-500' }
    ],
    [
      { value: 3, color: 'bg-green-200' },
      { value: 6, color: 'bg-green-300' },
      { value: 9, color: 'bg-yellow-200' },
      { value: 12, color: 'bg-orange-200' },
      { value: 15, color: 'bg-red-200' }
    ],
    [
      { value: 2, color: 'bg-green-200' },
      { value: 4, color: 'bg-green-200' },
      { value: 6, color: 'bg-green-300' },
      { value: 8, color: 'bg-yellow-200' },
      { value: 10, color: 'bg-orange-200' }
    ],
    [
      { value: 1, color: 'bg-green-100' },
      { value: 2, color: 'bg-green-200' },
      { value: 3, color: 'bg-green-300' },
      { value: 4, color: 'bg-green-400' },
      { value: 5, color: 'bg-yellow-200' }
    ]
  ];

  const legends = [
    {
      color: 'bg-green-200',
      label: 'Low Risk (1-6)',
      description: 'Monitor and manage through routine procedures'
    },
    {
      color: 'bg-yellow-200',
      label: 'Medium Risk (8-10)',
      description: 'Management attention and specific mitigation required'
    },
    {
      color: 'bg-orange-200',
      label: 'High Risk (12-16)',
      description: 'Senior management attention and detailed treatment plan'
    },
    {
      color: 'bg-red-400',
      label: 'Critical Risk (20-25)',
      description: 'Immediate action required, board level escalation'
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Risk Scoring Matrix (Impact × Likelihood)
        </h1>

        {/* Matrix Container */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 overflow-x-auto">
          <div className="inline-block min-w-full">
            <table className="border-collapse">
              <thead>
                <tr>
                  <th className="w-40"></th>
                  {likelihood.map((item, index) => (
                    <th key={index} className="px-4 py-3 text-sm font-medium text-gray-700 text-center min-w-48">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {impact.map((impactItem, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-700 text-right pr-6 whitespace-nowrap">
                      {impactItem}
                    </td>
                    {matrix[rowIndex].map((cell, colIndex) => (
                      <td key={colIndex} className="p-2">
                        <div className={`${cell.color} h-20 flex items-center justify-center rounded-lg text-gray-900 font-semibold text-lg border border-gray-300 hover:shadow-md transition-shadow cursor-pointer`}>
                          {cell.value}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {legends.map((legend, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-6 h-6 rounded ${legend.color} border border-gray-300`}></div>
                <h3 className="font-semibold text-gray-900 text-sm">{legend.label}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {legend.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export {RiskScoringMatrix};