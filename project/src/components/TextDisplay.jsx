import React from 'react';

function TextDisplay({ text, typedText }) {
  const renderText = () => {
    const characters = text.split('');
    
    return characters.map((char, index) => {
      let className = "font-mono text-gray-400"; // Default style
      
      if (index < typedText.length) {
        // Character has been typed
        if (char === typedText[index]) {
          className = "font-mono text-gray-800"; // Correct
        } else {
          className = "font-mono text-red-500 bg-red-100"; // Incorrect
        }
      } else if (index === typedText.length) {
        className = "font-mono text-gray-800 bg-blue-100 animate-pulse"; // Current character to type
      }
      
      if (char === ' ') {
        return (
          <span key={index} className={className}>
            {'\u00A0'}
          </span>
        );
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4 min-h-[150px] leading-relaxed tracking-wide text-lg border border-gray-200">
      {renderText()}
    </div>
  );
}

export default TextDisplay;