// reverse a string

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