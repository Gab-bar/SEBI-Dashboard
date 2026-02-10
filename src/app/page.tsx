import Dashboard from '@/component/Dashboard';
import { Sidebar } from '@/component/Sidebar';
import TopBar from '@/component/TopBar';

export default function Home() {
  return (
    // <div className="flex min-h-screen bg-gray-50">
    //   <Sidebar />
      
    //   <div className="flex-1 overflow-y-auto ml-64">
    //     <TopBar />
    //     <Dashboard />
    //   </div>
    // </div>
    <Dashboard />
  );
}