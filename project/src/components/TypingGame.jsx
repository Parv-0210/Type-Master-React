import React, { useState } from 'react';
import TextDisplay from './TextDisplay';
import TypingInput from './TypingInput';
import Statistics from './Statistics';
import ResultsScreen from './ResultsScreen';
import { useTypingGame } from '../hooks/useTypingGame';
import { Play, RefreshCw } from 'lucide-react';

function TypingGame() {
  const [duration, setDuration] = useState(60);
  
  const {
    text,
    typedText,
    status,
    timeLeft,
    wpm,
    accuracy,
    errors,
    correctChars,
    startGame,
    resetGame,
    handleTyping,
  } = useTypingGame(duration);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all">
      {status === 'ready' && (
        <div className="flex flex-col items-center space-y-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800">Ready to test your typing speed?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <div className="w-full sm:w-auto">
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Test Duration (seconds):
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={30}>30 seconds</option>
                <option value={60}>1 minute</option>
                <option value={120}>2 minutes</option>
                <option value={300}>5 minutes</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={startGame}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
          >
            <Play size={18} />
            Start Typing
          </button>
        </div>
      )}

      {status === 'playing' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-semibold text-gray-800">
              Time: <span className="text-blue-500">{timeLeft}s</span>
            </div>
            <button
              onClick={resetGame}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
            >
              <RefreshCw size={16} />
              <span className="text-sm">Reset</span>
            </button>
          </div>
          
          <TextDisplay text={text} typedText={typedText} />
          
          <TypingInput value={typedText} onChange={handleTyping} disabled={status !== 'playing'} />
          
          <Statistics wpm={wpm} accuracy={accuracy} errors={errors} correctChars={correctChars} />
        </div>
      )}

      {status === 'finished' && (
        <ResultsScreen
          wpm={wpm}
          accuracy={accuracy}
          errors={errors}
          correctChars={correctChars}
          duration={duration}
          onRestart={resetGame}
        />
      )}
    </div>
  );
}

export default TypingGame;