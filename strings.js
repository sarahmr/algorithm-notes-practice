// ----------------------- reverse a string ----------------------------------

let str = "hello"

// solution 1:
function reverseAString(str) {
  let newStr = ''

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }

  return newStr
}

// solution 2:
function reverseString(str) {
  str = str = str.split("").reverse().join("")

  return str
}

// -----------------------------------  Making Anagrams  ---------------------------------------------------------
// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function makeAnagram(a, b) {
  // find all unique characters and count; also need to check if a letter occurs with same frequency
  let total = 0

  let aLetterFrequency = {}
  let bLetterFrequency = {}

  for (let i = 0; i < a.length; i++) {
    if (!aLetterFrequency[a[i]]) {
      aLetterFrequency[a[i]] = 1
    } else {
      aLetterFrequency[a[i]] += 1
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!bLetterFrequency[b[i]]) {
      bLetterFrequency[b[i]] = 1
    } else {
      bLetterFrequency[b[i]] += 1
    }
  }

  let letter = {}
  for (let i = 0; i < a.length; i++) {
    if (!bLetterFrequency[a[i]]) {
      total += 1
    } else {
      if (bLetterFrequency[a[i]] !== aLetterFrequency[a[i]]) {
        // this is happening too many times
        if (!letter[a[i]]) {
          letter[a[i]] = true
          total += Math.abs(bLetterFrequency[a[i]] - aLetterFrequency[a[i]])
        }
      }
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (!aLetterFrequency[b[i]]) {
      total += 1
    } 
  }

  return total
}


// alternate solution 

let char = "abcdefghijklmnopqrstuvwxyz"

let charObject = (string) => {
  let object = {}

  for (let i = 0; i < string.length; i++) {
    if (!object[string[i]]) {
        object[string[i]] = 1
    } else {
        object[string[i]] += 1
    }
  }

  return object
}

let makeAnagram = (a, b) => {
  let aObject = charObject(a)
  let bObject = charObject(b)

  let total = 0
  
  for (let i = 0; i < char.length; i++) {
    let valA = aObject[char[i]] || 0
    let valB = bObject[char[i]] || 0
    total += Math.abs(valA - valB)
  }

  return total
}

// ---------------------- count a's -------------------------------
// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen


function repeatedString(s, n) {
  // if s is "a", return n
  if (s === "a") {
      return n
  }

  // get length of s; get n; how many times does s occur in n? how many a's are in s?
  let sCount = Math.floor(n/s.length)

  // what to do about remainder?
  let remainder = n % s.length

  let aInS = 0
  let aInRemains = 0

  // number of a's in s times sCount plus number of a's in remainder section of s
  for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
          aInS += 1
      }
  }

  for (let i = 0; i < remainder; i++) {
      if (s[i] === "a") {
          aInRemains += 1
      }
  }

  return (aInS * sCount) + aInRemains
}