describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add values when add method is called", function(){
    set.add("2");
    set.add("chainz");
    set.add(true);
    set.add(4444);
    set.add([1,false,"true"]);
    set.add({what: "why"});

    expect(set.contains("2")).toEqual(true);

    expect(set.contains(4444)).toEqual(true);

    expect(set.contains("Waka")).toEqual(false);

    expect(set.contains(true)).toEqual(true);

    expect(set.contains(false)).toEqual(false);

  });

  // it("should return true if a value is in a set", function(){
  //   set.add("2");
  //   set.add("chainz");
  //   set.add(true);
  //   set.add(4444);
  //   set.add([1,false,"true"]);
  //   set.add({what: "why"});


  // });


  // it("should set values to false when the remove method is called on that value", function(){
  //   set.add("2");
  //   set.add("chainz");
  //   set.add(true);
  //   set.add(4444);
  //   set.add([1,false,"true"]);
  //   set.add({what: "why"});



  // });


});