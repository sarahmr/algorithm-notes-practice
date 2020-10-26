/*
Trees Notes:
  - From freeCodeCamp:
    - data is organized hierarchically
    - collection of nodes
    - nodes are connected with edges
    - each node contains a value and may or may not have child nodes
    - the first node is called the root
    - if the root has a child it is a parent node
    - the last nodes, those without child nodes, are called leaves
    - height of a tree is the longest path from root to leaf
    - the depth of a node is the length to the root
    - types of trees:
      - Binary tree:
        - each node has at most two children, left and right
*/

// binary tree

class BinaryTree {
  constructor(value) {
    this.value = value
    this.leftChild = null
    this.rightChild = null
  }

  insertLeft = (value) => {
    if (this.leftChild === null) {
      this.leftChild = new BinaryTree(value)
    } else {
      newNode = new BinaryTree(value)
      newNode.leftChild = this.leftChild
      this.leftChild = newNode
    }
  }

  insertRight = (value) => {
    if (this.rightChild === null) {
      this.rightChild = new BinaryTree(value)
    } else {
      newNode = new BinaryTree(value)
      newNode.rightChild = this.rightChild
      this.rightChild = newNode
    }
  }
}

// --------------------- find height (number of edges) recursive ------------------------
function depth(node) {
  if (node === null) {
    return 0
  }

  return 1 + Math.max(depth(node.right), depth(node.left))
}

function height(root) {
  return depth(root) - 1
}


// ----------------- lowest common ancestor (BST) -------------------------------------
// time complexity: O(n)

// recursive

var lowestCommonAncestor = function(root, p, q) {
  // value of current node or parent node
  let parentVal = root.val
  
  // value of p
  let pVal = p.val

  // value of q  
  let qVal = q.val
  
  if (pVal > parentVal && qVal > parentVal) {
      return lowestCommonAncestor(root.right, p, q)
  } else if (pVal < parentVal && qVal < parentVal) {
      return lowestCommonAncestor(root.left, p, q)
  } else {
      return root
  }
};

// iterative

var lowestCommonAncestor = function(root, p, q) {
  let pVal = p.val;
  let qVal = q.val
  
  let current = root
  
  while (current !== null) {
      let parentVal = current.val
      
      if (pVal > parentVal && qVal > parentVal) {
          current = current.right
      } else if (pVal < parentVal && qVal < parentVal) {
          current = current.left
      } else {
          return current
      }
  }
  return null
};

// ------------------------ valid BST --------------------------------------
// to be a valid BST:
// - everything to the left must be lower than the root and the node (and grandparent, etc.)
// - everything to the right must be higher than the root and the node (and grandparent, etc.)

let helper = (node, lower, upper) => {
  if (node === null) {
      return true
  }
  
  let val = node.val
  
  if (lower !== null && val <= lower) {
      return false
  }
  
  if (upper !== null && val >= upper) {
      return false
  }
  
  if (!helper(node.right, val, upper)) {
      return false
  }
  
  if (!helper(node.left, lower, val)) {
      return false
  }
  
  return true;
}

var isValidBST = function(root) {
  return helper(root, null, null)
};