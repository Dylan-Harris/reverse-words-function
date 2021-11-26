let words = ["Hello", "Goodbye", "Tommorow"]
let days = ["Monday", "Tuesday", "Wednesday", "Thursday"]
const reverseWords = (words) => {
  let splitWords = []
  for (word of words) {
    let splitWord = word.split("")
    splitWord.reverse()
    let joinWord = splitWord.join("")
    splitWords.push(joinWord)
  }
  return splitWords.reverse()
}

reverseWords(days)
