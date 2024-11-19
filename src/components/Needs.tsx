import { useNavigate } from 'react-router-dom';

export function Needs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-8 text-gray-600 hover:text-gray-800 flex items-center gap-2"
      >
        ← Back to Home
      </button>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Needs</h2>
      <p className="text-gray-600">Needs management coming soon...</p>
    </div>
  );
}