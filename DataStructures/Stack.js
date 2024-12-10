var Stack = function () {
  this.count = 0;
  this.storage = [];

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
};

var stack = new Stack();
stack.push("haznal");
stack.push("sibghat");
stack.push(2);

console.log(stack.size());

console.log(stack.pop());

console.log(stack.size());

console.log(stack.peek());

var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8];

if (arr.indexOf(10) === -1) {
  
  console.log("it dont have")
}
else{
    console.log("array has number");
}
