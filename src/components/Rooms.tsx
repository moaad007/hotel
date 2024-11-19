import { useNavigate } from 'react-router-dom';
import { DoorClosed } from 'lucide-react';

export function Rooms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 text-gray-600 hover:text-gray-800 flex items-center gap-2"
      >
        ← Back to Home
      </button>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Select a Room</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
        {[...Array(8)].map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(`/room/${index + 1}`)}
            className="bg-white hover:bg-gray-50 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center gap-4"
          >
            <DoorClosed className="text-indigo-500" size={32} />
            <span className="text-xl font-semibold text-gray-800">Room {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}