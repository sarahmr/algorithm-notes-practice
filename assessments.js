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
