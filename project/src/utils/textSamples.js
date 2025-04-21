const easyTexts = [
  "The quick brown fox jumps over the lazy dog. This sentence contains all the letters in the English alphabet.",
  "Learning to type quickly and accurately is an essential skill in today's digital world. Practice makes perfect.",
  "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
  "The best way to predict the future is to invent it. Technology is constantly evolving and changing our lives.",
  "Good communication is as stimulating as black coffee, and just as hard to sleep after. Keep conversations meaningful."
];

const mediumTexts = [
  "The advantage of a bad memory is that one enjoys several times the same good things for the first time. Memory is a fascinating thing to study and understand.",
  "The difference between the almost right word and the right word is the difference between the lightning bug and the lightning. Choose your words carefully.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. Never give up on your dreams and aspirations.",
  "In three words I can sum up everything I've learned about life: it goes on. We must adapt to changes and keep moving forward with optimism.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. Resilience is key to achieving greatness in life."
];

const hardTexts = [
  "The consciousness of good intentions disdains ambiguity. I shall not, however, multiply professions on this head. My motives must remain in the depository of my own breast.",
  "Yesterday is but today's memory, and tomorrow is today's dream. Therefore, do not lament the past too much, nor place excessive hope in an uncertain future.",
  "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when adults are afraid of the light. Courage is essential for growth and understanding.",
  "It is not in the stars to hold our destiny but in ourselves. We are responsible for our own fate and must take action to shape our lives according to our vision.",
  "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith in our abilities and potential."
];

export const getRandomText = () => {
  const difficultyLevel = Math.floor(Math.random() * 3);
  let textCollection;
  
  switch (difficultyLevel) {
    case 0:
      textCollection = easyTexts;
      break;
    case 1:
      textCollection = mediumTexts;
      break;
    case 2:
      textCollection = hardTexts;
      break;
    default:
      textCollection = easyTexts;
  }
  
  const randomIndex = Math.floor(Math.random() * textCollection.length);
  return textCollection[randomIndex];
};