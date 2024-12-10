class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    var node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else if (node !== null) {
      const SearchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            SearchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            SearchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return SearchTree(node);
    }
  }

  findmin() {
    var curr = this.root;

    while (curr.left !== null) {
      curr = curr.left;
    }
    return curr.data;
  }
}
