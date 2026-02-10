/**
 * Centralized color utility — replaces ~48 duplicated color functions across ~40 components.
 * Returns CSS class strings that map to badge/progress classes defined in globals.css.
 */

const severityMap: Record<string, string> = {
  critical: 'badge-critical',
  high: 'badge-high',
  medium: 'badge-medium',
  low: 'badge-low',
  info: 'badge-info',
  informational: 'badge-info',
};

export function getSeverityClass(severity: string): string {
  return severityMap[severity.toLowerCase()] ?? 'badge-neutral';
}

const statusMap: Record<string, string> = {
  active: 'badge-completed',
  completed: 'badge-completed',
  implemented: 'badge-completed',
  resolved: 'badge-completed',
  closed: 'badge-completed',
  approved: 'badge-completed',
  compliant: 'badge-completed',
  passed: 'badge-completed',
  'in progress': 'badge-in-progress',
  'in-progress': 'badge-in-progress',
  ongoing: 'badge-in-progress',
  open: 'badge-in-progress',
  'under review': 'badge-in-progress',
  'in review': 'badge-in-progress',
  pending: 'badge-pending',
  planned: 'badge-pending',
  draft: 'badge-pending',
  scheduled: 'badge-pending',
  'not started': 'badge-pending',
  overdue: 'badge-critical',
  expired: 'badge-critical',
  failed: 'badge-critical',
  'non-compliant': 'badge-critical',
  rejected: 'badge-critical',
  inactive: 'badge-neutral',
  'n/a': 'badge-neutral',
};

export function getStatusClass(status: string): string {
  return statusMap[status.toLowerCase()] ?? 'badge-neutral';
}

export function getPriorityClass(priority: string): string {
  return getSeverityClass(priority);
}

export function getRiskClass(risk: string): string {
  const normalized = risk.toLowerCase().replace(/\s*risk\s*/i, '').trim();
  return severityMap[normalized] ?? 'badge-neutral';
}

export function getScoreClass(score: number): string {
  if (score >= 90) return 'badge-completed';
  if (score >= 70) return 'badge-in-progress';
  if (score >= 50) return 'badge-pending';
  return 'badge-critical';
}

export function getProgressFillClass(percentage: number): string {
  if (percentage >= 75) return 'progress-fill';
  if (percentage >= 50) return 'progress-fill-success';
  if (percentage >= 25) return 'progress-fill-warning';
  return 'progress-fill-critical';
}
