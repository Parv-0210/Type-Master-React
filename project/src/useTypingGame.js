import { useState, useEffect, useCallback } from 'react';
import { getRandomText } from '../utils/textSamples';
import { calculateWPM, calculateAccuracy } from '../utils/calculateStats';

export const useTypingGame = (duration) => {
  const [text, setText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [status, setStatus] = useState('ready');
  const [startTime, setStartTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);

  const resetGame = useCallback(() => {
    setText(getRandomText());
    setTypedText('');
    setStatus('ready');
    setStartTime(null);
    setTimeLeft(duration);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setCorrectChars(0);
  }, [duration]);

  const startGame = useCallback(() => {
    setText(getRandomText());
    setTypedText('');
    setStatus('playing');
    setStartTime(Date.now());
    setTimeLeft(duration);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setCorrectChars(0);
  }, [duration]);

  const handleTyping = useCallback((input) => {
    if (status !== 'playing') return;
    
    setTypedText(input);
    
    let errorCount = 0;
    let correctCount = 0;
    
    for (let i = 0; i < input.length; i++) {
      if (i >= text.length) break;
      if (input[i] === text[i]) {
        correctCount++;
      } else {
        errorCount++;
      }
    }
    
    setErrors(errorCount);
    setCorrectChars(correctCount);
    
    if (startTime) {
      const elapsedTime = (Date.now() - startTime) / 1000 / 60;
      setWpm(calculateWPM(correctCount, elapsedTime));
      setAccuracy(calculateAccuracy(correctCount, input.length));
    }
    
    if (input.length === text.length) {
      setStatus('finished');
    }
  }, [status, text, startTime]);

  useEffect(() => {
    let timer;
    
    if (status === 'playing' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setStatus('finished');
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      clearInterval(timer);
    };
  }, [status, timeLeft]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  return {
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
  };
};