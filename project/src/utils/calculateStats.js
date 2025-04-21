export const calculateWPM = (chars, minutes) => {
  const words = chars / 5;
  if (minutes === 0) return 0;
  return words / minutes;
};

export const calculateAccuracy = (correctChars, totalChars) => {
  if (totalChars === 0) return 100;
  return (correctChars / totalChars) * 100;
};