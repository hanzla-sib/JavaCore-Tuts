var PriorityQueue = function () {
  this.collection = [];

  this.showElements = function () {
    console.log(this.collection);
  };

  this.size = function () {
    return this.collection.length;
  };

  this.enqueue = function (element) {
    if (this.size() === 0) {
      this.collection.push(element);
    } else {
      var added = false;

      for (var i = 0; i < this.size(); i++) {
        if (element[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (added === false) {
        this.collection.push(element);
      }
    }
  };

  this.dequeu = function (element) {
    if (this.size() === 0) {
      return false;
    }
    var value = this.collection.shift();
    return value;
  };
};

var pQueue = new PriorityQueue();

pQueue.showElements();

pQueue.enqueue(["hanzla", 2]);
pQueue.enqueue(["sibghat", 1]);
pQueue.enqueue(["bilal", 3]);

pQueue.showElements();

console.log(pQueue.dequeu());
