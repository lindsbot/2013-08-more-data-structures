// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    // if there is no head, set head to the new node and the tail to the new node
    // else set old tail's next value to newNode, set list's tail pointer to newNode
    if (list.head === null) {
      list.head = list.tail = makeNode(val);
    }
    else {
      var newestNode = makeNode(val);
      list.tail.next = newestNode;
      list.tail = newestNode;
    }
  };

  list.removeHead = function(){
    var head = list.head;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(val){

    /* 

    hey head: do you have this value?
      if yes, return true
      if no, ask: do you have a next node?
        if no: return false
        if yes: run contains on next node

    */
  
  };

  return list;
};


var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
