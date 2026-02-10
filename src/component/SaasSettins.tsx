import React, { useState } from 'react';

interface SettingsForm {
  organizationName: string;
  timezone: string;
  highThreshold: number;
  mediumThreshold: number;
  lowThreshold: number;
  advancedRiskAnalytics: boolean;
  bulkExport: boolean;
  incidentEscalation: boolean;
}

const SaaSSettings = () => {
  const [settings, setSettings] = useState<SettingsForm>({
    organizationName: 'Organization',
    timezone: 'Asia/Kolkata',
    highThreshold: 80,
    mediumThreshold: 50,
    lowThreshold: 20,
    advancedRiskAnalytics: true,
    bulkExport: true,
    incidentEscalation: true
  });

  const handleInputChange = (field: keyof SettingsForm, value: string | number | boolean) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // Add your save logic here
  };

  const handleReset = () => {
    setSettings({
      organizationName: 'Organization',
      timezone: 'Asia/Kolkata',
      highThreshold: 80,
      mediumThreshold: 50,
      lowThreshold: 20,
      advancedRiskAnalytics: true,
      bulkExport: true,
      incidentEscalation: true
    });
  };

  const timezones = [
    'Asia/Kolkata',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Singapore',
    'Australia/Sydney',
    'Pacific/Auckland'
  ];

  return (
    <div className="min-h-screen bg-surface-bg py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel border border-primary/[0.06] p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:section-header-title">SaaS Settings</h1>
            <p className="text-sm text-txt-muted mt-2">Organization and feature configuration for your tenant</p>
          </div>

          {/* Organization Name & Timezone */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-txt-primary mb-2">
                Organization Name
              </label>
              <input
                type="text"
                value={settings.organizationName}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                className="w-full px-4 py-2.5 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-ring focus:border-transparent"
                placeholder="Organization"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-txt-primary mb-2">
                Timezone
              </label>
              <select
                value={settings.timezone}
                onChange={(e) => handleInputChange('timezone', e.target.value)}
                className="w-full px-4 py-2.5 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-ring focus:border-transparent bg-white"
              >
                {timezones.map(tz => (
                  <option key={tz} value={tz}>{tz}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Risk Thresholds */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-txt-primary mb-4">Risk Thresholds</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-txt-primary mb-2">
                  High
                </label>
                <input
                  type="number"
                  value={settings.highThreshold}
                  onChange={(e) => handleInputChange('highThreshold', parseInt(e.target.value))}
                  className="w-full px-4 py-2.5 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-ring focus:border-transparent"
                  min="0"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-txt-primary mb-2">
                  Medium
                </label>
                <input
                  type="number"
                  value={settings.mediumThreshold}
                  onChange={(e) => handleInputChange('mediumThreshold', parseInt(e.target.value))}
                  className="w-full px-4 py-2.5 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-ring focus:border-transparent"
                  min="0"
                  max="100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-txt-primary mb-2">
                  Low
                </label>
                <input
                  type="number"
                  value={settings.lowThreshold}
                  onChange={(e) => handleInputChange('lowThreshold', parseInt(e.target.value))}
                  className="w-full px-4 py-2.5 border border-primary/[0.08] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-ring focus:border-transparent"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-txt-primary mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Advanced Risk Analytics */}
              <div className="border border-primary/[0.06] rounded-lg p-4 hover:border-primary/[0.08] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-txt-primary mb-1">
                      Advanced Risk Analytics
                    </h3>
                    <p className="text-xs text-txt-muted">
                      Enable enhanced risk calculations
                    </p>
                  </div>
                  <button
                    onClick={() => handleInputChange('advancedRiskAnalytics', !settings.advancedRiskAnalytics)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-ring focus:ring-offset-2 ml-4 ${
                      settings.advancedRiskAnalytics ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        settings.advancedRiskAnalytics ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Bulk Export */}
              <div className="border border-primary/[0.06] rounded-lg p-4 hover:border-primary/[0.08] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-txt-primary mb-1">
                      Bulk Export
                    </h3>
                    <p className="text-xs text-txt-muted">
                      Allow large dataset exports
                    </p>
                  </div>
                  <button
                    onClick={() => handleInputChange('bulkExport', !settings.bulkExport)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-ring focus:ring-offset-2 ml-4 ${
                      settings.bulkExport ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        settings.bulkExport ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Incident Escalation */}
              <div className="border border-primary/[0.06] rounded-lg p-4 hover:border-primary/[0.08] transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-txt-primary mb-1">
                      Incident Escalation
                    </h3>
                    <p className="text-xs text-txt-muted">
                      Enable response escalation
                    </p>
                  </div>
                  <button
                    onClick={() => handleInputChange('incidentEscalation', !settings.incidentEscalation)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-ring focus:ring-offset-2 ml-4 ${
                      settings.incidentEscalation ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        settings.incidentEscalation ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-primary/[0.06]">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Save Settings
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-white text-txt-primary font-medium rounded-lg border border-primary/[0.08] hover:bg-surface-bg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export {SaaSSettings};  