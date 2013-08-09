// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    // if there is no head, set head to the new node and the tail to the new node
    // else set old tail's next value to newNode, set list's tail pointer to newNode
    if (list.head === null) {
      list.head = makeNode(val);
      list.head.next = null;
      list.tail = list.head;
    }
    else {
      var newestNode = makeNode(val);
      list.tail.next = newestNode;
      list.tail = newestNode;
    }
  };

  list.removeHead = function(){
  };

  list.contains = function(){
  };

  return list;
};


var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
