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
      valueColor: 'text-critical'
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
      valueColor: 'text-success'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card animate-card-${index + 1}`}>
          <h3 className="text-xs font-medium text-txt-secondary mb-4">{stat.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className={`text-3xl font-semibold mb-2 ${stat.valueColor || 'text-txt-primary'} ${stat.small ? 'text-xl' : ''}`}>
                {stat.value}
              </div>
              <p className="text-xs text-txt-secondary">{stat.description}</p>
              {stat.progress && (
                <div className="mt-3 progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className="progress-fill"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              )}
            </div>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
              stat.color === 'green' ? 'bg-success-soft' :
              stat.color === 'red' ? 'bg-critical-soft' :
              'bg-primary-soft'
            }`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
