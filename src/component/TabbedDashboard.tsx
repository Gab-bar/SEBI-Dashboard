import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Shield, Target, FileText, Users } from 'lucide-react';
import RiskHeatmap from './RiskHeatmap';
import ComplianceDashboard from './ComplainceDashboard';
import { SecurityAlertDashboard } from './SecurityAlertDashboard';
import SEBIReportingTracker from './Sebi-reporting';
import AlertsNotifications from './AlertAndnotification';
import CommitteeMembersDirectory from './committeeMembersDirectory';
import MeetingCalendar from './MeetingCalender';
import AgendaRepository from './Agenda&Minutes';
import {ActionItemsTracker} from './ActionItemsTracker';
import AnnualReportsDashboard from './AnualReport';
import CybersecurityPolicyRepository from './policy-repository';
import PolicyVersionControl from './VersionControl';
import {ApprovalWorkflow} from './ApprovalWorkflow';
import {AccessLogs} from './AccessLogs';
import {RegulatorySharing} from './RegulatorySharing';
import {SecurityControlsInventory} from './ControlInventory';
import {ImplementationStatusDashboard} from "./ImplementationStatus";
import { ControlTestingLogs } from './TestingLogs';
import { ConfigFilesEvidence } from './ConfigurationUploads';
import { RiskRegister } from './RiskRegister';
import { RiskAssessmentCalendar } from './AssessmentCalender';
import { RiskScoringMatrix } from './RiskScoringmatrix';
import { RiskTreatmentPlans } from './TreatmentPlans';
import { GRCRiskReporting } from './SEBI-reporting-2';
import { AssessmentSchedule } from './VA/PT_logs';
import { AuditorVendorDirectory } from './Auditor-assignment';
import { FindingsTracker } from './Finding-Tracker';
import { AssessmentReports } from './Reports-upload'; 
import { SEBISubmissions } from './SEBI-submission';
import { SecurityIncidentLog } from './IncidentResponse';
import { IncidentResponseTimeline } from './ResponseContainment';
import { RootCauseAnalysisMitigation } from './RootCauseAnalysis';
import { SEBIIncidentReporting } from './SEBI-reporting-3';
import { CERTInThreatIntelligence } from './CERT-integration';
import { AlertBreakdownDashboard } from './AlertBreakdown';
import { CriticalAlertsTimeline } from './CriticalAlertTimeline';
import { SIEMUseCaseLibrary } from './SIEMuseCaseLibrary';
import { SOCShiftLogs } from './SOCShift';
import { FalsePositiveTracker } from './FalsePosticeTracker';
import { VendorInventory } from './VendorInventory';
import { VendorCyberRiskScoring } from './VendorCyberRiskScoring';
import { DueDiligenceAssessments } from './DueDiligence';
import { ContractUploadReview } from './ContractUploadReview';
import { SecurityAuditTracker } from './SecurityAuditTracker';
import { DataClassificationMatrix } from './DataClassificationMatrix';
import { DLPPolicyManagement } from './DLPPolicies';
import { DLPAlertSummary } from './DLPAlerts';
import { DataMaskingEncryption } from './MaskingEncryption';
import { DataAccessAuditTrail } from './DataAccessAudit';
import { TrainingCalendar } from './TrainingCalender';
import { TrainingAttendanceTracker } from './TrainingAttendenceTracker';  
import { TrainingMaterialsRepository } from './TrainingmaterialRepository';
import { PhishingSimulationResults } from './PhisingSimulationResult';
import { ComplianceScoreByDepartment } from './ComplainceScore';
import { ComplianceControlMatrix } from './ComplainceControlMatrix';
import { GapAnalysisDashboard } from './GapAnalysisDashboard';
import { AuditTrailDashboard } from './AuditTrailDashboard';
import { ReportsGenerator } from './ReportGenerator';
import { SEBISubmissionTracker } from './CyberPolicySubmission';
import { UserRolesPermissions } from './UserRolePermission';
import { DepartmentMappingHierarchy } from './DepartmentMapping';
import { ActivityLogsApp } from './ActivityLogAccessManagement';
import { SSOLDAPIntegration } from './IntegrationTable';
import { MFAManagement } from './MultiFactorAuthentication';
import { MasterDataManagementApp } from './MasterDataManagement';
import { NotificationEngineApp } from './NotificationEngine';
import { CustomFieldManagerApp } from './CustomFieldManager';
import { RoleBasedAccessSettingsApp } from './RoleBasedAccessSettings';
import { BackupRestoreApp } from './Backup&Restore';

export type TabType = 'Risk Heatmap' | 'Compliance Dashboard' | 'Security Alerts' | 'SEBI Reporting' | "Alerts Notifications" | 'Members Directory' | 'Meeting Calendar' | 'Agenda Minutes' | 'Action Tracker' | 'Annual Report' | 'Master Policy List' | 'Version Control' | 'Approval Workflow' | 'Access Logs' | 'Regulatory Sharing' | 'Control Inventory' | 'Implementation Status' | 'Testing Logs' | 'Configuration Uploads' | 'Risk Register' | 'Assessment Calendar' | 'Risk Scoring' | 'Treatment Plans'| 'SEBI Reporting2' | 'VA/PT Schedule' | 'Auditor Assignment' | 'Findings Tracker' | 'Reports Upload' | 'SEBI Submission' | 'Incident Log' | 'Response & Containment' | 'RCA & Mitigatiion' | 'SEBI Reporting3'| 'CERT-In Integration' | 'Alerts Dashboard' | 'Critical Timelines' | 'Use Case Library' | 'SOC Shift Logs' | 'False Positive Tracker' | 'Vendor Inventory' | 'Cyber Risk Scoring' | 'Due Diligence Forms' | 'Contract Reviews'| 'Security Audits' | 'Classification Matrix' | 'DLP Policies' | 'DLP Alerts' | 'Encryption Status'| 'Data Access Logs' | 'Training Calendar' | 'Attendance Tracker' | 'Material Repository' | 'Phising Simulation' | 'Complaince Scores' | 'Control Matrix' | 'Gap Analysis' | 'Audit Trail' | 'Report Generator' | 'SEBI Submissions' | 'User Roles & Permissions' | 'Department Mapping' | 'Activity Logs' | 'SSO/LDAP Integration'| 'Multi-Factor Authentication' | 'Master Data Management' | 'Notification Engine' | 'Custom Field Manager' | 'Role-Based Access Settings' | 'Backup & Restore' | 'SaaS Settings';

// Main Tabbed Dashboard Component
const TabbedDashboard: React.FC<{ tabs: TabType[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<TabType>('Risk Heatmap');
  // const tabs: TabType[] = ['Risk Heatmap', 'Compliance Dashboard', 'Security Alerts', 'SEBI Reporting', 'Alerts Notifications'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Risk Heatmap':
        return <RiskHeatmap />;
      case 'Compliance Dashboard':
        return <ComplianceDashboard />;
      case 'Security Alerts':
        return <SecurityAlertDashboard />;
      case 'SEBI Reporting':
        return <SEBIReportingTracker />;
      case 'Alerts Notifications':
        return <AlertsNotifications />;
      case 'Members Directory':
        return <CommitteeMembersDirectory />;
      case 'Meeting Calendar':
        return <MeetingCalendar />;
      case 'Agenda Minutes':
        return <AgendaRepository />;
      case 'Action Tracker':
        return <ActionItemsTracker />;
      case 'Annual Report':
        return <AnnualReportsDashboard />;
      case 'Master Policy List':
        return <CybersecurityPolicyRepository />;
      case 'Version Control':
        return <PolicyVersionControl />;
      case 'Approval Workflow':
        return <ApprovalWorkflow/>
      case 'Access Logs':
        return <AccessLogs />
      case 'Regulatory Sharing':
        return <RegulatorySharing />
      case 'Control Inventory':
        return <SecurityControlsInventory />
      case 'Implementation Status':
        return <ImplementationStatusDashboard />
      case 'Testing Logs':
        return <ControlTestingLogs />
      case 'Configuration Uploads':
        return <ConfigFilesEvidence />
      case 'Risk Register':
        return <RiskRegister />
      case 'Assessment Calendar':
        return <RiskAssessmentCalendar />  
      case 'Risk Scoring':
        return <RiskScoringMatrix />
      case 'Treatment Plans':
        return <RiskTreatmentPlans />
      case 'SEBI Reporting2': 
        return <GRCRiskReporting />
      case 'VA/PT Schedule': 
        return <AssessmentSchedule />
      case 'Auditor Assignment': 
        return <AuditorVendorDirectory />
      case 'Findings Tracker': 
        return <FindingsTracker />
      case 'Reports Upload': 
        return <AssessmentReports /> 
      case 'SEBI Submission': 
        return <SEBISubmissions />
      case 'Incident Log': 
        return <SecurityIncidentLog />
      case 'Response & Containment': 
        return <IncidentResponseTimeline />
      case 'RCA & Mitigatiion': 
        return <RootCauseAnalysisMitigation />
      case 'SEBI Reporting3': 
        return <SEBIIncidentReporting />   
      case 'CERT-In Integration': 
        return <CERTInThreatIntelligence />
      case 'Alerts Dashboard': 
        return <AlertBreakdownDashboard />
      case 'Critical Timelines': 
        return <CriticalAlertsTimeline />
      case 'Use Case Library': 
        return <SIEMUseCaseLibrary />
      case 'SOC Shift Logs': 
        return <SOCShiftLogs /> 
      case 'False Positive Tracker': 
        return <FalsePositiveTracker />
      case 'Vendor Inventory': 
        return <VendorInventory />
      case 'Cyber Risk Scoring': 
        return <VendorCyberRiskScoring />
      case 'Due Diligence Forms': 
        return <DueDiligenceAssessments /> 
      case 'Contract Reviews': 
        return <ContractUploadReview /> 
      case 'Security Audits': 
        return <SecurityAuditTracker />
      case 'Classification Matrix': 
        return <DataClassificationMatrix />
      case 'DLP Policies': 
        return <DLPPolicyManagement /> 
      case 'DLP Alerts': 
        return <DLPAlertSummary />
      case 'Encryption Status': 
        return <DataMaskingEncryption /> 
      case 'Data Access Logs': 
        return <DataAccessAuditTrail /> 
      case 'Training Calendar': 
        return <TrainingCalendar />
      case 'Attendance Tracker': 
        return <TrainingAttendanceTracker />
      case 'Material Repository': 
        return <TrainingMaterialsRepository />
      case 'Phising Simulation': 
        return <PhishingSimulationResults /> 
      case 'Complaince Scores': 
        return <ComplianceScoreByDepartment /> 
      case 'Control Matrix': 
        return <ComplianceControlMatrix />
      case 'Gap Analysis': 
        return <GapAnalysisDashboard />
      case 'Audit Trail': 
        return <AuditTrailDashboard />
      case 'Report Generator': 
        return <ReportsGenerator /> 
      case 'SEBI Submissions': 
        return <SEBISubmissionTracker />
      case 'User Roles & Permissions': 
        return <UserRolesPermissions /> 
      case 'Department Mapping': 
        return <DepartmentMappingHierarchy />
      case 'Activity Logs': 
        return <ActivityLogsApp />  
      case 'SSO/LDAP Integration': 
        return <SSOLDAPIntegration />    
      case 'Multi-Factor Authentication': 
        return <MFAManagement />
      case 'Master Data Management': 
        return <MasterDataManagementApp />
      case 'Notification Engine': 
        return <NotificationEngineApp />
      case 'Custom Field Manager': 
        return <CustomFieldManagerApp />
      case 'Role-Based Access Settings': 
        return <RoleBasedAccessSettingsApp />
      case 'Backup & Restore': 
        return <BackupRestoreApp />
      case 'SaaS Settings': 
        return <MFAManagement />
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 py-1 px-2 mb-6 border-b bg-[hsl(210_40%_96.1%)] rounded-md overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium color-[hsl(215.4deg_15.88%_47.02%)] whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-[#fff] rounded-md text-gray-900'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabbedDashboard;