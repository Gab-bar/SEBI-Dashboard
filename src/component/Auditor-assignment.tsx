import React from 'react';
import { Plus, Star, MapPin, Mail, Phone, MoreHorizontal } from 'lucide-react';

interface Vendor {
  companyName: string;
  type: 'External Vendor' | 'Internal Team';
  rating: number;
  leadAuditor: string;
  auditorTitle: string;
  teamSize: number;
  experience: string;
  previousEngagements: number;
  availability: 'Available' | 'Busy' | 'Internal Resource';
  availabilityDetail?: string;
  specializations: string[];
  certifications: string[];
  onTimeDelivery: number;
  qualityScore: number;
  clientSatisfaction: number;
  findingsAccuracy: number;
  location: string;
  country: string;
  email: string;
  phone: string;
}

const AuditorVendorDirectory = () => {
  const vendors: Vendor[] = [
    {
      companyName: 'CyberSec Solutions Pvt Ltd',
      type: 'External Vendor',
      rating: 4.8,
      leadAuditor: 'Rajesh Gupta',
      auditorTitle: 'Team Size 5',
      teamSize: 5,
      experience: '12+ years',
      previousEngagements: 8,
      availability: 'Available',
      availabilityDetail: '₹1,25,000',
      specializations: ['Penetration Testing', 'Red Team Exercises', 'VAPT'],
      certifications: ['CISSP', 'CEH', 'OSCP', 'CISM', 'ISO 27001 Lead Auditor'],
      onTimeDelivery: 95,
      qualityScore: 92,
      clientSatisfaction: 88,
      findingsAccuracy: 94,
      location: 'Mumbai',
      country: 'India',
      email: 'contact@cybersec-solutions.com',
      phone: '+91 98765 43210'
    },
    {
      companyName: 'SecureAudit Technologies',
      type: 'External Vendor',
      rating: 4.6,
      leadAuditor: 'Amit Kumar',
      auditorTitle: 'Team Size 4',
      teamSize: 4,
      experience: '15+ years',
      previousEngagements: 12,
      availability: 'Busy',
      availabilityDetail: '₹1,15,000',
      specializations: ['Network Security Audit', 'Infrastructure Assessment', 'Compliance Audit'],
      certifications: ['CISA', 'CISSP', 'CISM', 'ISO 27001 LA'],
      onTimeDelivery: 98,
      qualityScore: 89,
      clientSatisfaction: 91,
      findingsAccuracy: 96,
      location: 'Bangalore',
      country: 'India',
      email: 'audit@secureaudit.co.in',
      phone: '+91 98765 43211'
    },
    {
      companyName: 'Internal Security Team',
      type: 'Internal Team',
      rating: 4.2,
      leadAuditor: 'Priya Sharma (CISO)',
      auditorTitle: 'Team Size 3',
      teamSize: 3,
      experience: '8+ years',
      previousEngagements: 25,
      availability: 'Internal Resource',
      specializations: ['Code Review', 'Configuration Audit', 'Quick Assessments'],
      certifications: ['GSEC', 'GCIH', 'GPEN', 'CISSP'],
      onTimeDelivery: 85,
      qualityScore: 82,
      clientSatisfaction: 87,
      findingsAccuracy: 89,
      location: 'Mumbai',
      country: 'India',
      email: 'security.team@company.com',
      phone: 'Internal Extension 1234'
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'bg-green-600 text-white';
      case 'Busy':
        return 'bg-primary text-white';
      case 'Internal Resource':
        return 'bg-primary text-white';
      default:
        return 'bg-gray-100 text-txt-primary';
    }
  };

  const getMetricColor = (value: number) => {
    if (value >= 90) return 'text-success';
    if (value >= 80) return 'text-primary';
    if (value >= 70) return 'text-purple-600';
    return 'text-amber-600';
  };

  return (
    <div className="min-h-screen bg-surface-bg p-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-txt-primary">Auditor & Vendor Directory</h1>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover font-medium text-sm">
            <Plus className="w-4 h-4" />
            Add Auditor
          </button>
        </div>

        {/* Vendor Cards */}
        <div className="space-y-4">
          {vendors.map((vendor, index) => (
            <div key={index} className="glass-panel p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold text-txt-primary">{vendor.companyName}</h2>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-txt-primary border border-primary/[0.08]">
                    {vendor.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-txt-primary">{vendor.rating}</span>
                  </div>
                </div>
                <button className="text-txt-muted hover:text-txt-secondary">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-3 gap-8 mb-4">
                {/* Left Column */}
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-1">Lead Auditor</div>
                    <div className="text-sm text-txt-secondary">{vendor.leadAuditor}</div>
                    <div className="text-sm text-txt-muted">{vendor.auditorTitle}</div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-2">Specializations:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {vendor.specializations.map((spec, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-txt-primary border border-primary/[0.08]">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-2">Certifications:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {vendor.certifications.map((cert, idx) => (
                        <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-white text-txt-primary border border-primary/[0.08]">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle Column */}
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-1">Experience</div>
                    <div className="text-sm text-txt-secondary">{vendor.experience}</div>
                    <div className="text-sm text-txt-muted">{vendor.previousEngagements} previous engagements</div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium text-txt-primary mb-1">Availability</div>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(vendor.availability)}`}>
                      {vendor.availability}
                    </span>
                    {vendor.availabilityDetail && (
                      <div className="text-sm text-txt-secondary mt-1">{vendor.availabilityDetail}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-4 gap-8 py-4 border-t border-b border-primary/[0.06] my-4">
                <div className="text-center">
                  <div className={`text-2xl font-semibold ${getMetricColor(vendor.onTimeDelivery)}`}>
                    {vendor.onTimeDelivery}%
                  </div>
                  <div className="text-xs text-txt-muted mt-1">On Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-semibold ${getMetricColor(vendor.qualityScore)}`}>
                    {vendor.qualityScore}%
                  </div>
                  <div className="text-xs text-txt-muted mt-1">Quality Score</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-semibold ${getMetricColor(vendor.clientSatisfaction)}`}>
                    {vendor.clientSatisfaction}%
                  </div>
                  <div className="text-xs text-txt-muted mt-1">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-semibold ${getMetricColor(vendor.findingsAccuracy)}`}>
                    {vendor.findingsAccuracy}%
                  </div>
                  <div className="text-xs text-txt-muted mt-1">Findings Accuracy</div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-6 text-sm text-txt-secondary">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-txt-muted" />
                  <span>{vendor.location}, {vendor.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-txt-muted" />
                  <span>{vendor.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-txt-muted" />
                  <span>{vendor.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { AuditorVendorDirectory };