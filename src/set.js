var makeSet = function(){
  var set = Object.create(makeSet.prototype); 
  set._storage = {};
  return set;
};

makeSet.prototype = {};

makeSet.prototype.add = function(val){
  this._storage[val] = true;
};

makeSet.prototype.contains = function(val){
  return !!this._storage[val];
};

makeSet.prototype.remove = function(val){
  this._storage[val] = false;
};
