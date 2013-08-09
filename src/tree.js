var makeTree = function(val){
  var newTree = {};
  newTree.value = val;
  newTree.children = [];
  newTree.parent = null;

  var root = treeMethods.addChild(val);

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(val, parent){
  // addChild is going to create a node
  // make node a child of the parent... 
  // if parent is undefined --> make child of newTree
	var node = {};
	node.parent = parent || null;
	node.val = val;
	node.children = [];
	parent.children.push(node);

	//return node;
};

treeMethods.contains = function(){
};
