// ------ Fibonacci -----------------------

/*
fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

defined by the recurrence relation: F(n) = F(n - 1) + F(n - 2) with base cases F(0) = 0, F(1) = 1

*/

// given a number n, print the nth Fibonacci Number

// recursive method; time complexity exponential O(2^n)

let fibNum = (n) => {
  if (n <= 1) {
    return n
  } 
  
  return fibNum(n - 1) + fibNum(n - 2)
}

// DP method: time complexity O(n); space O(n)

let fibNum = (n) => {
  let fibSeries = []
  fibSeries.fill(0, 0, n + 1)

  fibSeries[0] = 0
  fibSeries[1] = 1

  // transition function f(n) = f(n - 1) + f(n - 2)

  for (let i = 2; i <= n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2]
  }

  return fibSeries[n]
}

// DP space optimized: time complexity O(n); space O(1)
// also iterative approach


let fibNum = (n) => {
  if (n <= 1) {
    return n
  }

  let num1 = 0
  let num2 = 1
  let num3 = 0

  for(let i = 2; i <= n; i++) {
    num3 = num1 + num2
    num1 = num2
    num2 = num3
  }

  return num3
}