import React from 'react';
import { RefreshCw, Award } from 'lucide-react';

function ResultsScreen({
  wpm,
  accuracy,
  errors,
  correctChars,
  duration,
  onRestart,
}) {
  const getPerformanceMessage = () => {
    if (wpm > 80) return "Excellent! You're a typing master!";
    if (wpm > 60) return "Great job! Your typing speed is impressive!";
    if (wpm > 40) return "Good work! Keep practicing to improve!";
    return "Nice start! Regular practice will help you improve!";
  };

  return (
    <div className="flex flex-col items-center py-6 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Test Completed!</h2>
        <p className="text-gray-600">{getPerformanceMessage()}</p>
      </div>

      <div className="w-full max-w-md bg-blue-50 rounded-xl p-6 border border-blue-100">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold text-gray-800">Your Results</h3>
          </div>
          <span className="text-sm text-gray-500">{duration} seconds</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Speed</p>
            <p className="text-3xl font-bold text-blue-500">{wpm.toFixed(0)}</p>
            <p className="text-xs text-gray-400">words per minute</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Accuracy</p>
            <p className="text-3xl font-bold text-green-500">{accuracy.toFixed(1)}%</p>
            <p className="text-xs text-gray-400">typing precision</p>
          </div>
        </div>

        <div className="border-t border-blue-200 pt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Characters Typed:</span>
            <span>{correctChars + errors}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Correct Characters:</span>
            <span className="text-green-600">{correctChars}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Errors:</span>
            <span className="text-red-500">{errors}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
        >
          <RefreshCw size={18} />
          Try Again
        </button>
      </div>
    </div>
  );
}

export default ResultsScreen;