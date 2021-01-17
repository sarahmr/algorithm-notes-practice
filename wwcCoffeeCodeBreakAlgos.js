// https://leetcode.com/problems/lru-cache/
// least recently used cache similar concept to FIFO, but not exactly because FIFO is about ordered entered (or written) not order used (or read)

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // if you have a single line you don't need curly brackets
  if (capacity < 0) 
    throw new Error;
    
  this.store = {};
  this.capacity = capacity;
  this.count = 0;
   this.queue = new PriorityQueue
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.store[key] === undefined) {
    return -1;
  }
    this.queue.update(key)
    
  return this.store[key];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
    if (this.store.hasOwnProperty(key)){
        this.store[key] = value
        this.queue.update(key)
        return
    }
    
    if (this.count >= this.capacity) {
        // console.log("count is big")
        let toRemove = this.queue.queue[0]
        // console.log(this.queue.queue[0], key)
        
        this.queue.update(key)
        
        delete this.store[toRemove]
        
        this.store[key] = value
        // console.log(this.store)
        
    } else {
        this.store[key] = value;
        this.count += 1
        
        this.queue.insert(key)
        
    } 
}

// not a strict priority queue

let PriorityQueue = function() {
    this.queue = []
}

PriorityQueue.prototype.insert = function(key) {
    // console.log("here")
    this.queue.push(key)
}

PriorityQueue.prototype.update = function(key) {
    // find key -- if it exists
    // move key to end and shift everything after it one left
    
    let keyPosition = this.queue.indexOf(key)
    
    if (keyPosition >= 0) {
        // console.log(key, keyPosition)
    
        this.queue = [
            ...this.queue.slice(0, keyPosition),
            ...this.queue.slice(keyPosition + 1),
            key
        ]   
    } else {
        this.queue.push(key)
        this.queue.shift()
    }
    
    // console.log(this.queue)
}


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */