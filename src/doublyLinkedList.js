//Creating a doubly linked list in pseudoclassical style 

var makeDoublyLinkedList = function(){
  this.head = null;
  this.tail = null;
};

makeDoublyLinkedList.prototype.makeNode = function(val){
  var node = {};
  node.value = val;
  node.next = null;
  node.prev = null;
  //node.contains = function(val){
  //	return this.value === val || this.next && this.next.contains(val);
  //};
  return node;
};


makeDoublyLinkedList.prototype.removeHead = function(){
	this.head = this.head.next || null;
};

makeDoublyLinkedList.prototype.addToTail = function(val){
  var newNode = this.makeNode(val);
  this.head = this.head || newNode;
  newNode.prev = this.tail || null;
  this.tail && (this.tail.next = newNode);
  this.tail = newNode;   

};

makeDoublyLinkedList.prototype.contains = function(val){

};