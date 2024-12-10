var LinkedList = function () {
  var head = null;
  var length = 0;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  var add = function (element) {
    if (head === null) {
      head = new Node(element);
    } else {
      var current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(element);
    }
  };

  var remove = function (element) {
    var currentNode = head;
    
  };
};
