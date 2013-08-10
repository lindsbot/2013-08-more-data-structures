var makeTree = function(val){
  var newTree = {};
  newTree.value = val;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(val){
	var node = {};
	node.value = val;
	node.children = [];
    this.children.push(node);
};

treeMethods.contains = function(val){
  if (this.value === val){
    return true;
  } 
  else {
  	if (this.children.length === 0){
  		return false
  	}
  	else {
  		var contains = false;
  		for (var i = 0; i < this.children.length; i++) {
  			contains = contains || treeMethods.contains.call(this.children[i], val);
  		}
  		return contains;
  	}
  }
};
