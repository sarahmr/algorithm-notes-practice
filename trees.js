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