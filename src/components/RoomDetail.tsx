import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { name: 'Starters', color: 'bg-yellow-500' },
    { name: 'Main Course', color: 'bg-red-500' },
    { name: 'Desserts', color: 'bg-pink-500' },
    { name: 'Drinks', color: 'bg-purple-500' }
  ];

  return (
    <div className="min-h-screen p-8 relative">
      <button
        onClick={() => navigate('/rooms')}
        className="mb-8 text-gray-600 hover:text-gray-800 flex items-center gap-2"
      >
        ← Back to Rooms
      </button>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Room {id}</h2>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Order Food & Drinks
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Category</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {categories.map(({ name, color }) => (
                  <button
                    key={name}
                    className={`${color} text-white rounded-xl p-6 shadow-md hover:opacity-90 transform hover:scale-105 transition-all duration-300`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}