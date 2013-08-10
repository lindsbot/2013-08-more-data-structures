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
  // this._storage.each(function(value, index, collection){
  //   collection[index] = {};

  // });
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
  
  // collisions array =  this._storage.get(i)
  // collisions.push(keyValue)
  // this._storage.set(i, collisions)


  //if collision, create/push to bucket's indiv array
  // if (this._storage.get(i) === undefined) {
  //   var collisions = [];
  //   collisions.push(keyValue);
  //   this._storage.set(i, collisions);
  // }
  // else{
  //   this._storage.set(i, keyValue);
  // }
  //else, just put in bucket
  //this._storage.set(i, collisions);
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

HashTable.prototype.remove = function(){
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
