var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
  this._storage.each(function(){
    


  });
};

HashTable.prototype.insert = function(key, val){
  var i = getIndexBelowMaxForKey(key, this._limit);
  console.log(i);
  var keyValue = [key, val];

  //if collision, create/push to bucket's indiv array
  if (this._storage.get(i) === undefined) {
    var collisions = [];
    collisions.push(keyValue);
    this._storage.set(i, collisions);
  }
  else{
    this._storage.set(i, keyValue);
  }
  //else, just put in bucket
  //this._storage.set(i, collisions);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
