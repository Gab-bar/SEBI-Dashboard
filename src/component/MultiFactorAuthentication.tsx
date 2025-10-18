import React, { useState } from 'react';
import { Search, Settings, Users, MoreVertical, Smartphone, Key, MessageSquare } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  mfaStatus: 'Enrolled' | 'Pending' | 'Expired';
  primaryMethod: string;
  methodIcon: 'app' | 'token' | 'sms' | 'none';
  devices: number;
  lastUsed: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
}

interface Device {
  id: string;
  name: string;
  type: string;
  typeIcon: 'app' | 'token' | 'sms';
  owner: string;
  registered: string;
  lastUsed: string;
  trustLevel: 'High' | 'Medium' | 'Low';
  status: 'Active' | 'Inactive';
}

const MFAManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [departmentFilter, setDepartmentFilter] = useState('All Departments');

  const users: User[] = [
    {
      id: '1',
      name: 'System Administrator',
      email: 'admin@company.com',
      department: 'Information Technology',
      mfaStatus: 'Enrolled',
      primaryMethod: 'Authenticator App',
      methodIcon: 'app',
      devices: 3,
      lastUsed: '2024-03-20 14:32:15',
      riskLevel: 'Low'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      email: 'compliance.officer@company.com',
      department: 'Compliance & Risk',
      mfaStatus: 'Enrolled',
      primaryMethod: 'Hardware Token',
      methodIcon: 'token',
      devices: 2,
      lastUsed: '2024-03-20 14:28:42',
      riskLevel: 'Low'
    },
    {
      id: '3',
      name: 'Rahul Verma',
      email: 'security.analyst@company.com',
      department: 'Information Technology',
      mfaStatus: 'Enrolled',
      primaryMethod: 'Authenticator App',
      methodIcon: 'app',
      devices: 2,
      lastUsed: '2024-03-20 14:25:18',
      riskLevel: 'Low'
    },
    {
      id: '4',
      name: 'Suresh Patel',
      email: 'auditor@company.com',
      department: 'Internal Audit',
      mfaStatus: 'Pending',
      primaryMethod: 'None',
      methodIcon: 'none',
      devices: 0,
      lastUsed: 'Never',
      riskLevel: 'High'
    },
    {
      id: '5',
      name: 'Anjali Singh',
      email: 'dept.head@company.com',
      department: 'Operations',
      mfaStatus: 'Enrolled',
      primaryMethod: 'SMS',
      methodIcon: 'sms',
      devices: 1,
      lastUsed: '2024-03-20 14:18:33',
      riskLevel: 'Medium'
    },
    {
      id: '6',
      name: 'External Auditor',
      email: 'external.auditor@audit-firm.com',
      department: 'External',
      mfaStatus: 'Expired',
      primaryMethod: 'Hardware Token',
      methodIcon: 'token',
      devices: 1,
      lastUsed: '2024-02-28 16:45:00',
      riskLevel: 'Critical'
    }
  ];

  const devices: Device[] = [
    {
      id: '1',
      name: 'iPhone 14 Pro',
      type: 'Mobile App',
      typeIcon: 'app',
      owner: 'System Administrator',
      registered: '2024-01-15',
      lastUsed: '2024-03-20 14:32:15',
      trustLevel: 'High',
      status: 'Active'
    },
    {
      id: '2',
      name: 'YubiKey 5C',
      type: 'Hardware Token',
      typeIcon: 'token',
      owner: 'System Administrator',
      registered: '2024-01-16',
      lastUsed: '2024-03-19 09:15:30',
      trustLevel: 'High',
      status: 'Active'
    },
    {
      id: '3',
      name: 'RSA SecurID',
      type: 'Hardware Token',
      typeIcon: 'token',
      owner: 'Priya Sharma',
      registered: '2024-01-20',
      lastUsed: '2024-03-20 14:28:42',
      trustLevel: 'High',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Google Authenticator',
      type: 'Mobile App',
      typeIcon: 'app',
      owner: 'Rahul Verma',
      registered: '2024-02-01',
      lastUsed: '2024-03-20 14:25:18',
      trustLevel: 'Medium',
      status: 'Active'
    },
    {
      id: '5',
      name: '+91-98765-43210',
      type: 'SMS',
      typeIcon: 'sms',
      owner: 'Anjali Singh',
      registered: '2024-02-15',
      lastUsed: '2024-03-20 14:18:33',
      trustLevel: 'Medium',
      status: 'Active'
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All Status' || user.mfaStatus === statusFilter;
    const matchesDepartment = departmentFilter === 'All Departments' || user.department === departmentFilter;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Enrolled':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Expired':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-orange-100 text-orange-800';
      case 'Critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTrustColor = (trust: string) => {
    switch (trust) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getMethodIcon = (icon: string) => {
    switch (icon) {
      case 'app':
        return <Smartphone size={16} className="text-blue-600" />;
      case 'token':
        return <Key size={16} className="text-green-600" />;
      case 'sms':
        return <MessageSquare size={16} className="text-orange-600" />;
      default:
        return null;
    }
  };

  const enrollmentRate = 89;
  const totalUsers = 147;
  const enrolledUsers = 131;
  const securityScore = 85;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Multi-Factor Authentication</h1>
              <p className="text-sm text-gray-500 mt-1">MFA enrollment status and device management</p>
            </div>
            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Settings size={16} />
                MFA Policy
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
                <Users size={16} />
                Bulk Enrollment
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option>All Status</option>
              <option>Enrolled</option>
              <option>Pending</option>
              <option>Expired</option>
            </select>
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option>All Departments</option>
              <option>Information Technology</option>
              <option>Compliance & Risk</option>
              <option>Operations</option>
              <option>Internal Audit</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Users Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    MFA Status
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Primary Method
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Devices
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Used
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Risk Level
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 lg:px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.department}</div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${getStatusColor(user.mfaStatus)}`}>
                        {user.mfaStatus}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getMethodIcon(user.methodIcon)}
                        <span className="text-sm text-gray-900">{user.primaryMethod}</span>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.devices} devices</div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.lastUsed}</div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${getRiskColor(user.riskLevel)}`}>
                        {user.riskLevel}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Enrollment Rate */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Enrollment Rate</h3>
            <div className="text-4xl font-bold text-gray-900 mb-3">{enrollmentRate}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-gray-900 h-2 rounded-full" style={{ width: `${enrollmentRate}%` }}></div>
            </div>
            <p className="text-xs text-gray-500">{enrolledUsers} of {totalUsers} users enrolled</p>
          </div>

          {/* Device Distribution */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Device Distribution</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Authenticator App</span>
                <span className="font-medium text-gray-900">45%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Hardware Token</span>
                <span className="font-medium text-gray-900">30%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">SMS</span>
                <span className="font-medium text-gray-900">25%</span>
              </div>
            </div>
          </div>

          {/* Security Score */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-sm font-medium text-gray-700 mb-4">Security Score</h3>
            <div className="text-4xl font-bold text-gray-900 mb-3">{securityScore}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-gray-900 h-2 rounded-full" style={{ width: `${securityScore}%` }}></div>
            </div>
            <p className="text-xs text-gray-500">Good security posture</p>
          </div>
        </div>

        {/* Registered MFA Devices */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Registered MFA Devices</h2>
            <p className="text-sm text-gray-500 mt-1">All registered devices across the organization</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Device Name
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Device Type
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Owner
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registered
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Used
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trust Level
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 lg:px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {devices.map((device) => (
                  <tr key={device.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getMethodIcon(device.typeIcon)}
                        <span className="text-sm font-medium text-gray-900">{device.name}</span>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {device.type}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{device.owner}</div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{device.registered}</div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{device.lastUsed}</div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${getTrustColor(device.trustLevel)}`}>
                        {device.trustLevel}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {device.status}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export {MFAManagement};