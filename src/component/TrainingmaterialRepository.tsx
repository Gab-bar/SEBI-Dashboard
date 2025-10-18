import React, { useState } from 'react';
import { Search, Upload, MoreVertical, Star } from 'lucide-react';

interface TrainingMaterial {
  id: string;
  title: string;
  badge?: string;
  description: string;
  version: string;
  size: string;
  downloads: number;
  rating: number;
  topics: string[];
  updated: string;
  access: string;
}

const trainingMaterials: TrainingMaterial[] = [
  {
    id: '1',
    title: 'Cybersecurity Awareness Handbook 2024',
    badge: 'New',
    description: 'Comprehensive guide covering cybersecurity best practices for all employees.',
    version: '2.4',
    size: '2.1 MB',
    downloads: 1247,
    rating: 4.8,
    topics: ['Essential Training', 'Security Awareness', 'Social Engineering', '+3 more'],
    updated: '2024-11-15',
    access: 'Public'
  },
  {
    id: '2',
    title: 'Advanced Threat Detection Video Series',
    badge: 'Video',
    description: '10-part video series covering advanced threat detection techniques and tools.',
    version: '1.2',
    size: '1.2 GB',
    downloads: 856,
    rating: 4.9,
    topics: ['Data Analytics', 'Advanced Analysis', 'Network Detection', '+2 more'],
    updated: '2024-09-22',
    access: 'Restricted'
  },
  {
    id: '3',
    title: 'Phishing Simulation Tool Suite',
    badge: 'Suite',
    description: 'Collection of realistic phishing email templates for training simulations.',
    version: '3.1',
    size: '125 MB',
    downloads: 2341,
    rating: 4.6,
    topics: ['Simulation Tool Components', 'Controlled Operating', 'Software Updates', '+3 more'],
    updated: '2024-11-12',
    access: 'Internal'
  },
  {
    id: '4',
    title: 'Incident Response Playbook',
    badge: 'eBook',
    description: 'Step-by-step guide for incident response procedures with decision trees.',
    version: '4.2',
    size: '15.3 MB',
    downloads: 1534,
    rating: 4.9,
    topics: ['Incident Documentation', 'Response Procedure', 'Escalation Matrix', '+2 more'],
    updated: '2024-10-18',
    access: 'Confidential'
  },
  {
    id: '5',
    title: 'Data Protection Quick Reference Cards',
    badge: 'Poster',
    description: 'Visual quick cards for data classification and handling procedures.',
    version: '1.8',
    size: '3.7 MB',
    downloads: 3102,
    rating: 4.7,
    topics: ['Data Classification', 'Handling Procedures', 'Storage Requirements', '+2 more'],
    updated: '2024-11-01',
    access: 'Public'
  },
  {
    id: '6',
    title: 'Secure Development Guidelines',
    badge: 'Guide',
    description: 'Comprehensive secure coding practices and security testing methodologies.',
    version: '2.0',
    size: '8.4 MB',
    downloads: 987,
    rating: 4.8,
    topics: ['Secure Coding', 'Testing Methods', 'Code Review', '+1 more'],
    updated: '2024-10-05',
    access: 'Internal'
  }
];

const TrainingMaterialsRepository: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case 'New':
        return 'bg-blue-600 text-white';
      case 'Video':
        return 'bg-purple-600 text-white';
      case 'Suite':
        return 'bg-green-600 text-white';
      case 'eBook':
        return 'bg-orange-600 text-white';
      case 'Poster':
        return 'bg-pink-600 text-white';
      case 'Guide':
        return 'bg-indigo-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  const getAccessColor = (access: string) => {
    switch (access) {
      case 'Public':
        return 'text-green-600 bg-green-50';
      case 'Internal':
        return 'text-blue-600 bg-blue-50';
      case 'Restricted':
        return 'text-orange-600 bg-orange-50';
      case 'Confidential':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 md:px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
              Training Materials Repository
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                <Upload className="w-4 h-4" />
                Upload Material
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {trainingMaterials.map((material) => (
            <div
              key={material.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="p-4 md:p-6">
                {/* Title and Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 flex-wrap flex-1">
                    <h2 className="text-base md:text-lg font-semibold text-gray-900">
                      {material.title}
                    </h2>
                    {material.badge && (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getBadgeColor(material.badge)}`}>
                        {material.badge}
                      </span>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {material.description}
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Version:</span>
                    <span className="ml-2 font-medium text-gray-900">{material.version}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Size:</span>
                    <span className="ml-2 font-medium text-gray-900">{material.size}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Downloads:</span>
                    <span className="ml-2 font-medium text-gray-900">{material.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900">{material.rating}/5</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 font-medium">Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {material.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Updated: {material.updated}</span>
                    <span className={`px-2 py-1 rounded-full font-medium ${getAccessColor(material.access)}`}>
                      {material.access}
                    </span>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Load More Materials
          </button>
        </div>
      </main>
    </div>
  );
};

export { TrainingMaterialsRepository };