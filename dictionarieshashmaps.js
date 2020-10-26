// ------------------ two strings ----------------------------------
// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps 


// my solution
function twoStrings(s1, s2) {
  let s1CharMap = {};

  for (let i = 0; i < s1.length; i++) {
      if (!s1CharMap[s1[i]]) {
          s1CharMap[s1[i]] = 1
      } else {
          s1CharMap[s1[i]] += 1
      }
  }

  for (let i = 0; i < s2.length; i++) {
      if (s1CharMap[s2[i]]) {
          return "YES"
      }
  }

  return "NO"
}

// ----------------------------- Ransom Note ---------------------------------

// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps


function checkMagazine(magazine, note) {
  let answer = "Yes"

  if (magazine.length < note.length) {
      answer = "No"
  }

  let magWords = {}

  for (let i = 0; i < magazine.length; i++) {
      if (!magWords[magazine[i]]) {
          magWords[magazine[i]] = 1
      } else {
          magWords[magazine[i]] += 1
      }
  }

  let noteWords = {}
  for (let i = 0; i < note.length; i++) {
      if (!noteWords[note[i]]) {
          noteWords[note[i]] = 1
      } else {
          noteWords[note[i]] += 1
      }
  }

  // check if magazine contains all of notes at same frequency
  for (let i = 0; i < note.length; i++) {
      if (magWords[note[i]] < noteWords[note[i]]) {
          answer = "No"
      } else if (!magWords[note[i]]) {
          answer = "No"
      }
  }
  console.log(answer)
  return answer
}

// ----------------- Sherlock and Anagrams ----------------------
// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function sherlockAndAnagrams(s) {
  let substrings = {}
  let total = 0

  for (let i = 0; i < s.length; i++) {
      for (let j = i+ 1; j <= s.length; j++) {
          let subs = s.slice(i, j).split('').sort().join('')
          if (!substrings[subs]) {
              substrings[subs] = 1
          } else {
              substrings[subs] += 1
          }
      }
  }

  for (let substring in substrings) {
      for (let i = substrings[substring] - 1; i > 0; i--) {
          total += i
      }
  }

  return total
}

// ------------------------- count triplets ---------------------
// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps


function countTriplets(arr, r) {
  // brute force
  // let answer = 0

  // for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //         for (let k = j + 1; k < arr.length; k++) {
  //             if (arr[i] * r === arr[j] && arr[j] * r === arr[k]) {
  //                 answer += 1
  //             }
  //         }
  //     }
  // }

  let answer = 0
  let nums = {}
  let numPairs = {}

  for (let i = arr.length - 1; i >= 0; i-- ) {
      if (numPairs[arr[i] * r]) {
          answer += numPairs[arr[i] * r]
      }
      if (nums[arr[i] * r]) {
          numPairs[arr[i]] = (numPairs[arr[i]] ? numPairs[arr[i]] : 0) + nums[arr[i] * r]
          
      }
      if (!nums[arr[i]]) {
          nums[arr[i]] = 1
      } else {
          nums[arr[i]] += 1
      }
  }

  console.log(answer)

  return answer
}