// ============================================
// FILE: components/Sidebar.tsx
// ============================================
'use client';

import { useState } from 'react';
import { BarChart2, Users, FileText, Shield, AlertTriangle, Search, Bell, Activity, User, Lock, GraduationCap, CheckSquare, Settings, File, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

type menuItem = {
   icon: React.ReactNode, label: string, active: boolean, link: string, id: number,
}

function Sidebar() {

  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const [menuItems, setMenuItems] = useState<menuItem[]>([
  { icon: <BarChart2 width={16} height={16}/>, label: 'Dashboard', active: pathname === "/", link: "/", id: 1 },
  { icon: <Users width={16} height={16}/>, label: 'Governance & Committee', active: pathname === "/governance-committee", link: "/governance-committee", id: 1111 },
  { icon: <FileText width={16} height={16}/>, label: 'Policy & Document Management', active: pathname === "/policy-document", link: "/policy-document", id: 2 },
  { icon: <Shield width={16} height={16}/>, label: 'Security Controls', active: pathname === "/security-controls", link: "/security-controls", id: 3 },
  { icon: <AlertTriangle width={16} height={16}/>, label: 'Risk Management', active: pathname === "/risk-management", link: "/risk-management", id: 4 },
  { icon: <Search width={16} height={16}/>, label: 'VA/PT & Audit Management', active: pathname === "/audit-management", link: "/audit-management", id: 5 },
  { icon: <Bell width={16} height={16}/>, label: 'Incident Management', active: pathname === "/incident-management", link: "/incident-management", id: 6 },
  { icon: <Activity width={16} height={16}/>, label: 'SOC & Monitoring', active: pathname === "/soc-monitoring", link: "/soc-monitoring", id: 7 },
  { icon: <User width={16} height={16}/>, label: 'Vendor & Third-Party Risk', active:  pathname === "/vendor-third-party-risk", link: "/vendor-third-party-risk", id: 8  },
  { icon: <Lock width={16} height={16}/>, label: 'Data Classification & DLP', active: pathname === "/data-classification", link: "/data-classification", id: 9 },
  { icon: <GraduationCap width={16} height={16}/>, label: 'User Awareness & Training', active: pathname === "/user-awareness-training", link: "/user-awareness-training", id: 10 },
  { icon: <CheckSquare width={16} height={16}/>, label: 'Compliance Tracker & Reporting', active: pathname === "/compliance-tracker-reporting", link: "/compliance-tracker-reporting", id: 11 },
  { icon: <Settings width={16} height={16}/>, label: 'Access Management', active: pathname === "/access-management", link: "/access-management", id: 12 },
  { icon: <File width={16} height={16}/>, label: 'Admin & Configuration', active: pathname === "/admin-configuration", link: "/admin-configuration", id: 13 }
]);

  function setActiveStatus(item : menuItem) {
    setMenuItems(state => state.map(el => ({ ...el, active: item.id === el.id })));
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-50 hidden tablet:flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white shadow-neu-raised"
        aria-label={collapsed ? 'Open menu' : 'Close menu'}
      >
        {collapsed ? <Menu size={18} /> : <X size={18} />}
      </button>

      <div
        className={`glass-sidebar h-screen flex flex-col fixed z-40 transition-all duration-base ease-ui
          ${collapsed ? 'laptop:w-[72px]' : 'w-64'}
          tablet:${collapsed ? '-translate-x-full' : 'translate-x-0'}
          tablet:w-64
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="p-6 border-b border-primary/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-14 h-8 bg-primary rounded-md flex items-center justify-center text-white text-lg flex-shrink-0">
               <Shield size={19} strokeWidth={1.7} color="#fff" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-xl font-semibold text-txt-primary">ComplianceHub</h1>
                <p className="text-xs text-txt-secondary">SEBI Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Collapse toggle for laptop */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden laptop:flex items-center justify-center mx-auto my-2 w-8 h-8 rounded-lg hover:bg-primary/[0.05] text-txt-muted transition-colors duration-fast"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <Menu size={16} />
        </button>

        <nav className="py-2 h-full overflow-y-auto">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link ? item.link : "#"}
              onClick={() => setActiveStatus(item)}
              className={item.active ? 'sidebar-item-active' : 'sidebar-item'}
              aria-current={item.active ? 'page' : undefined}
              title={collapsed ? item.label : undefined}
            >
              <span className="text-sm flex-shrink-0">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export { Sidebar };
