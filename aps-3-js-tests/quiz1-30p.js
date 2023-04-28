/* 
 https://en.wikipedia.org/wiki/Magic_8_Ball

 1- Create a Magic 8 Ball program that returns a random answer from a list of 3 possible answers: "Positive", "Negative", or "Neutral".
 2- If your answer was positive choose a random answer form positive array, if your answer was neutral choose an answer from neutral answers and if it was negative choose one answer from negative array.
 3- If it was positive print: affirmative answer: " the answer ", If it was neutral print: non-committal answer: " the answer ", If it was negative print: negative answer: " the answer ",
*/


const positiveAnswers = [
  "It is certain",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Absolutely",
  "Absolutely yes",
];

const negativeAnswers = [
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "No",
  "Better not tell you now",
  "Reply hazy, try again",
  "Cannot predict now",
  "Signs point to no",
  "Absolutely not",
  "Absolutely no",
];

const neutralAnswers = [
  "Ask again later",
  "Cannot predict now",
  "Reply hazy, try again",
  "Better not tell you now",
  "Concentrate and ask again",
  "Outlook uncertain",
  "Signs point to maybe",
  "Indications say yes",
  "Indications say no",
  "The stars are not aligned",
  "It's unclear, try again",
  "I'm not sure, ask again",
  "I need more information",
  "I'm unable to answer that",
];


// Your code goes below this line

const handler = (...arr) => {
  const randomIndex = (array) => Math.floor(Math.random() * array.length)
  const flag = randomIndex(arr)
  const outerArray = arr[randomIndex(arr)]

  if (flag === 0) {
    return `affirmative answer: ${outerArray[randomIndex(outerArray)]}`
  } else if (flag === 1) {
    return `negative answer: ${outerArray[randomIndex(outerArray)]}`
  } else {
    return `non-committal answer:  ${outerArray[randomIndex(outerArray)]}`
  }
}

console.log(handler(positiveAnswers, negativeAnswers, negativeAnswers))

// Your code goes above this line