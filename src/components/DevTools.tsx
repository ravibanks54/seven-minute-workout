import React from 'react';
import { Trash2 } from 'lucide-react';

export const DevTools: React.FC = () => {
  const clearStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  // Only render in development mode
  if (import.meta.env.DEV) {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          onClick={clearStorage}
          className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg 
            hover:bg-red-600 transition-colors shadow-lg"
          title="Clear Local Storage (Development Only)"
        >
          <Trash2 size={16} />
          <span>Clear Storage</span>
        </button>
      </div>
    );
  }

  return null;
};