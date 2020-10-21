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


// ----------------- lowest common ancestor -------------------------------------
// time complexity: O(n)

let answer = null

let recurseTree = (current, p, q) => {
    if (current === null) {
        return false
    }
    
    // returns true if mid was true on previous call
    let left = recurseTree(current.left, p, q) ? 1 : 0
    
    let right = recurseTree(current.right, p, q) ? 1 : 0
    
    // returns true when you get to the value
    let mid = current === p || current === q ? 1 : 0
    
    if (mid + left + right >= 2) {
        answer = current
    }

    return (mid + left + right > 0)
}

var lowestCommonAncestor = function(root, p, q) {
    recurseTree(root, p, q)
    return answer
};

// alternate recursive

const lowestCommonAncestor = (root, p, q) => {
	if (!root || root === p || root === q) { return root; }
	
	let left = lowestCommonAncestor(root.left, p, q);
	let right=  lowestCommonAncestor(root.right, p, q);
	
	return (left && right) ? root : (left ? left : right);
}