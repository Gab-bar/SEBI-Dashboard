export default function StatsCards() {
  const stats = [
    {
      title: 'Overall Compliance',
      value: '87%',
      description: '136 of 156 controls implemented',
      icon: '🛡️',
      color: 'green',
      progress: 87
    },
    {
      title: 'Critical Risks',
      value: '1',
      description: '2 High priority risks',
      icon: '⚠️',
      color: 'red',
      valueColor: 'text-red-600'
    },
    {
      title: "Today's Alerts",
      value: 'Safety & Alerts',
      description: '201 resolved, 46 pending',
      icon: '🔔',
      color: 'blue',
      small: true
    },
    {
      title: 'System Health',
      value: '94%',
      description: '5/6 systems healthy',
      icon: '💚',
      color: 'green',
      valueColor: 'text-green-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xs font-medium text-gray-600 mb-4">{stat.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className={`text-3xl font-semibold mb-2 ${stat.valueColor || 'text-gray-900'} ${stat.small ? 'text-xl' : ''}`}>
                {stat.value}
              </div>
              <p className="text-xs text-gray-600">{stat.description}</p>
              {stat.progress && (
                <div className="mt-3 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-900 rounded-full"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              )}
            </div>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
              stat.color === 'green' ? 'bg-green-100' :
              stat.color === 'red' ? 'bg-red-100' :
              'bg-blue-100'
            }`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}