import React from 'react';

function Statistics({ wpm, accuracy, errors, correctChars }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
      <StatCard
        title="WPM"
        value={wpm.toFixed(0)}
        description="Words per minute"
        highlight
      />
      <StatCard
        title="Accuracy"
        value={`${accuracy.toFixed(1)}%`}
        description="Typing precision"
      />
      <StatCard
        title="Errors"
        value={errors.toString()}
        description="Mistyped characters"
      />
      <StatCard
        title="Correct"
        value={correctChars.toString()}
        description="Characters typed correctly"
      />
    </div>
  );
}

function StatCard({ title, value, description, highlight }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className={`text-2xl font-bold ${highlight ? 'text-blue-500' : 'text-gray-800'}`}>
        {value}
      </p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  );
}

export default Statistics;