import React, { useEffect, useRef } from 'react';

function TypingInput({ value, onChange, disabled }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-transparent caret-blue-500"
        placeholder="Start typing..."
        autoComplete="off"
        spellCheck="false"
      />
      <div className="absolute inset-0 pointer-events-none bg-white flex items-center justify-center rounded-lg">
        {!disabled ? (
          <p className="text-gray-500">Type here... (click to focus)</p>
        ) : (
          <p className="text-gray-400">Test completed!</p>
        )}
      </div>
    </div>
  );
}

export default TypingInput;