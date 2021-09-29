//Stack using Linkedlist
function stack(){

  var Node = function(elm){
    this.element = elm;
    this.next = null;
  }

  var length = 0;
  var head = null;

  //Push data in the stack
  this.push = function(elm){
    var node = new Node(elm),
      current;

    current = head;
    node.next = current;
    head = node;

    length++;
  }

  //Pop the item from the stack
  this.pop = function(){
    var current = head;

    if(current){
      var elm = current.element;
      current = current.next;
      head = current;
      length--;
      return elm;
    }

    return null;
  }

  //Return the first element in the stack
  this.peek = function(){
    if(head){
      return head.element;
    }

    return null;
  }

  //Return the size of the stack
  this.size = function(){
    return length;
  }
}


var myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); //3
console.log(myStack.size()); //2
