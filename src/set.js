var makeSet = function(){
  var set = Object.create(makeSet.prototype); // fix me
  set._storage = {};
  return set;
};

makeSet.prototype = {};

makeSet.prototype.add = function(val){
  this._storage[val] = true;


};

makeSet.prototype.contains = function(val){
  var contains = false;
  if (this._storage[val]){
  	return true;
  }	
  else{
  	return false;
  }
};

makeSet.prototype.remove = function(val){
  this._storage[val] = false;
};
