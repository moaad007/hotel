import { useNavigate } from 'react-router-dom';
import { Hotel, Receipt, ClipboardList } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Hotel Management System</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {[
          { title: 'Rooms', icon: Hotel, path: '/rooms', color: 'bg-emerald-500' },
          { title: 'Bills', icon: Receipt, path: '/bills', color: 'bg-blue-500' },
          { title: 'Needs', icon: ClipboardList, path: '/needs', color: 'bg-purple-500' }
        ].map(({ title, icon: Icon, path, color }) => (
          <button
            key={title}
            onClick={() => navigate(path)}
            className={`${color} hover:opacity-90 text-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center gap-4`}
          >
            <Icon size={48} />
            <span className="text-xl font-semibold">{title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}