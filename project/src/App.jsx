import React from 'react';
import TypingGame from './components/TypingGame';
import { Keyboard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 sm:p-8">
      <header className="mb-8 flex items-center gap-2">
        <Keyboard className="h-8 w-8 text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">TypeMaster</h1>
      </header>
      
      <main className="w-full max-w-3xl mx-auto">
        <TypingGame />
      </main>
      
      <footer className="mt-8 text-sm text-gray-500">
        TypeMaster © {new Date().getFullYear()} - Improve your typing speed
      </footer>
    </div>
  );
}

export default App;