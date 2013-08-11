var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, val){
  var i = getIndexBelowMaxForKey(key, this._limit);
  console.log(i);
  var keyValue = [key, val];

  if (this._storage.get(i) === undefined){
    this._storage.set(i, []);    
    var collisions = this._storage.get(i);
    collisions.push(keyValue);
    this._storage.set(i, collisions);
  }
  else{
    var collisions = this._storage.get(i);
    collisions.push(keyValue);
    this._storage.set(i, collisions);
  }
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var collisions = this._storage.get(i);
  var result;
  for (var i = 0; i < collisions.length; i++) {
    if (collisions[i][0] === key) {
      result = collisions[i][1];
    }
  }
  if (!result){console.log("nope");}
  return result;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var pairs = this._storage.get(i);
  for (var i=0; i < pairs.length; i++){
    if (pairs[i][0] === key){
      pairs.splice(i, 1);
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
