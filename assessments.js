// ------------------ word counter -------------------
function howMany(sentence) {
  let total = 0
  
  let endings = ".,?!"
  let notAllowed = "1234567890()[]{}@#$%^&*+=\/<>`|"
  
  let word = true
  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i])
    if(notAllowed.includes(sentence[i])){
      word = false
      console.log("not")
      continue
    } else if (endings.includes(sentence[i]) && sentence[i + 1] !== " " && i !== sentence.length - 1) {
      console.log("not end")
      word = false
      continue
    }
    
    if (sentence[i] === " " && sentence[i + 1] !== " " && i !== 0) {
      console.log("white", word)
      if (word === true) {
        total += 1
      } else if (i !== sentence.length - 1) {
        word = true
      }
    } 
  }
  
  if (word === true && sentence[sentence.length - 1] !== " ") {
    total += 1
  }

  return total
}

// ----------------- 2D array, find max size of square -------------------

let testSquare = (matrix, index1, index2, size) => {
  // check if this section of matrix is a square of this size
  console.log(index1, index2, size)
  if (index1 + size < matrix.length && index2 + size < matrix.length) {
    for (let i = index1; i < index1 + size; i++) {
      for (let j = index2; j < index2 + size; j++) {
        if (matrix[i][j] === 0) {
          return false
        }
      }
    }
  } else {
    return false
  }
  return true
}

function largestArea(samples) {
  // for each cell ask if this cell is the top left corner of a square
  let max = 0
  
  // always check if it's a square if ones are next to each other
  for (let i = 0; i < samples.length; i++) {
    for (let j = 0; j < samples[i].length; j++) {
      for (let k = 1; k < samples[i].length; k++) {
        if (testSquare(samples, i, j, k)) {
          if (k > max) {
            console.log("here")
            max = k
          }
        } else {
          break
        }
      }
    }
  }  
  return max
}
 
// ------------------------- scatter palindromes -------------------------------------

let allUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
          if (str[i] === str[j]) {
              return false
          }
      }
  }
  
  return true    
}

let totalFunction = (str) => {
  let substrings = {}
  for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
          let subs = str.slice(i, j).split("").sort().join("")
          if (!substrings[subs]) {
              substrings[subs] = 1
          } else {
              substrings[subs] += 1
          }
      }
  }
  
  let subsArr = []
  let total = 0
  // will be a palindrome if contains the same letters and same frequency
  for (let subs in substrings) {
      if (subs.length === 1) {
          total += substrings[subs]
      } else {
          subsArr.push(subs)
      }  
  }

  for (let i = 0; i < subsArr.length; i++) {
      if (subsArr[i].length === 2 && allUnique(subsArr[i])) {
          continue
      } else if (subsArr[i].length === 2 && !allUnique(subsArr[i])) {
         // console.log(subsArr[i])
          total += substrings[subsArr[i]]
          continue
      }
      // if string.length divisible by 2 each letter has to be divisible by 2;
      // if string.length is odd, only one letter can be singular
      let substring = {}
      for (let j = 0; j < subsArr[i].length; j++) {
          if (!substring[subsArr[i][j]]) {
              substring[subsArr[i][j]] = 1
          } else {
              substring[subsArr[i][j]] += 1
          } 
      }

      for (let letter in substring) {
          let singular = 0
          if (subsArr[i].length % 2 === 0) {
              if (!substring[letter] % 2 === 0) {
                  continue
              } else {
                  total += substrings[subsArr[i]]
                  continue
              }
          } else {
              if (substring[letter] === 1 && singular === 0) {
                  singular = 1
              } else if (substring[letter] === 1 && singular === 1) {
                  continue
              } else {
                  total += substrings[subsArr[i]]
                  continue
              }
          }
      }
  }
  // console.log(total)
  return total
}

function scatterPalindrome(strToEvaluate) {
  // same letters, same frequency in substrings
  let answer = []
  for (let i = 0; i < strToEvaluate.length; i++) {
      answer.push(totalFunction(strToEvaluate[i]))
  }
  console.log(answer)
  return answer
}

// ------------------------- dam design ---------------------------------------------

function maxHeight(wallPositions, wallHeights) {
  // wall positions between 1 and n
  // wall heights vary; mud heights can only be one away from surrounding heights
  // want mud to go up more than go down
  // return max mud heights
  let max = 0

  for (let i = 0; i < wallPositions.length; i++) {
    if (wallPositions[i] + 1 !== wallPositions[i + 1] && wallPositions[i + 1]) {
      // gap here
      let gapSize = Math.abs(wallPositions[i] - wallPositions[i + 1])
      let prev = wallHeights[i]
      let next = wallHeights[i + 1]

      let mudHeight = 0

        // if gap size is greater than the difference in wall height
      if (gapSize > Math.abs(prev - next) && Math.abs(prev - next) !== 0) {
        mudHeight = Math.ceil(Math.abs(prev - next) / 2 ) + (gapSize - (Math.abs(prev - next)))
      } else if (Math.abs(prev - next) === 0) {
        // if walls are same height on either side
        mudHeight = Math.ceil(gapSize / 2) + prev
      } else if (gapSize === Math.abs(prev - next)) {
        // if gap size and wall height difference are the same
        mudHeight = Math.ceil(Math.abs(prev - next) / 2 ) + prev
      } else {
        // if gap size is less than difference in wall height; i.e. [1, 3] [3, 6] -- can't build mud wall
        mudHeight = 0
      }

      if (mudHeight > max) {
        max = mudHeight
      }
    } 
  }
  return max
}