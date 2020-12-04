// ------------ binary search ------------

// time complexity O(log2(n))

function binary_search(list, item) {
  let low = 0;
  let high = (list.length) - 1

  while (low <= high) {
    // index of middle
    mid = Math.floor((low + high) / 2)

    // value of mid
    guess = list[mid]

    if (guess === item) {
      return mid
    }
    if (guess > item) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return null
}

// recursive method:

let binarySearch = (arr, item) => {
  let low = 0
  let high = arr.length - 1

  return search(arr, item, high, low)
}

let search = (arr, item, high, low) => {
  if (high >= 1) {
    let midPoint = Math.floor((low + high) / 2)
    if (arr[midPoint] === item) {
      return midPoint
    }
    if (arr[midPoint] > item) {
      return search(arr, item, midPoint - 1, low)
    }
    if (arr[midPoint] < item) {
      return search(arr, item, high, midPoint + 1)
    }
  }
  return -1
}

// selection sort; array from smallest to largest

function findSmallest(arr) {
  let smallest = arr[0]
  let smallestIndex = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}

function selectionSort(arr) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    smallest = findSmallest(arr)
    newArr.push(smallest)
  }

  return newArr
}

// recursive array sum function

function sum(arr) {
  if (arr.length === 0){
    return 0
  }
  console.log(arr)
  return arr[0] + sum(arr.slice(1))
}

// recursive array length of list function

function findLength(arr) {
  if (arr.length < 1){
    return 0
  }
  console.log(arr)
  return 1 + findLength(arr.slice(1))
}

// recursive array find max function

let max = 0

function findMax(arr) {
  // let max = arr[0]

  if (max < arr[0]) {
    max = arr[0]
  }

  return arr.length === 0 ? max : findMax(arr.slice(1))
}

// or 

function findMax(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1]
  }

  sub_max = findMax(arr.slice(1))

  return arr[0] > sub_max ? arr[0] : sub_max
}

// -------------------- quicksort ------------------------

function quicksort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    let pivot = arr[0]
    let less = []
    let greater = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > pivot) {
        greater.push(arr[i])
      } else {
        less.push(arr[i])
      }
    }
    return quicksort(less).concat(pivot, quicksort(greater))
  }
}

// --------------- BFS example ---------------------------------

let exampleGraph = {
  "you": ["alice", "bob", "claire"],
	"bob": ["anuj", "peggy"],
	"alice": ["peggy"],
	"claire": ["thom", "jonny"],
	"anuj": [],
	"peggy": [],
	"thom": [],
	"jonny":  []
}

let search = (name) => {
  let searchQueue = []
  let searched = []
  
  for (let i = 0; i < exampleGraph[name].length; i++) {
    searchQueue.push(exampleGraph[name][i])
  }

  while (searchQueue.length > 0) {
    let person = searchQueue.shift()

    if (!searched.includes(person)) {
      if (personIsSeller(person)) {
        console.log(`${person} is a mango seller!`)
        return true
      } else {
        for (let i = 0; i < exampleGraph[person].length; i++) {
          searchQueue.push(exampleGraph[person][i])
        }
        searched.push(person)
      }
    }
  }
  return false
}

let personIsSeller = (name) => {
  return name[name.length - 1] === "m"
}

// ----------------- Dijkstra's algorithm example -----------------------------

let graph = {
  "start": {
    "a": 6,
    "b": 2
  },
  "a": {
    "fin": 1
  },
  "b": {
    "a": 3,
    "fin": 5
  },
  "fin": {}
}

let costs = {
  "a": 6,
  "b": 2,
  "fin": Number.MAX_VALUE
}

let parents = {
  "a": "start",
  "b": "start",
  "fin": null
}

let processed = []

let node = findLowestCostNode(costs)

while (node !== null) {
  let cost = costs[node]
  let neighbors = graph[node]

  for (let n in neighbors) {
    let newCost = cost + neighbors[n]
    if (costs[n] > newCost) {
      costs[n] = newCost
      parents[n] = node
    }
  }
  processed.push(node)
  node = findLowestCostNode(costs)
}

function findLowestCostNode(costs) {
  lowestCost = Number.MAX_VALUE
  lowestCostNode = null

  for (let node in costs) {
    let cost = costs[node]
    
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestCostNode = node
    }
  }
  return lowestCostNode
}