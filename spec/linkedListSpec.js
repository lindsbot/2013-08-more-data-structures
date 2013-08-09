describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("should be able to add a node to the tail", function(){
    linkedList.addToTail("apple");
    linkedList.addToTail("orange");
    linkedList.addToTail("banana");

    expect(linkedList.tail.value).toEqual("banana");
    expect(linkedList.head.next.next.value).toEqual("banana");
  });

it("should remove and return the head", function(){
    linkedList.addToTail("apple");
    linkedList.addToTail("orange");
    linkedList.addToTail("banana");

    linkedList.removeHead();

    expect(linkedList.head.value).toEqual("orange");
    expect(linkedList.head.next.value).toEqual("banana");

    linkedList.removeHead();

    expect(linkedList.removeHead().value).toEqual("banana");



  });


  // it("should be able to add a node to the tail", function(){
  //   expect(linkedList.addToTail(xxxxx).toEqual(xxxxx));
  // });

  // it("should be able to add a node to the tail", function(){
  //   expect(linkedList.addToTail(xxxxx).toEqual(xxxxx));
  // });

  // it("should be able to add a node to the tail", function(){
  //   expect(linkedList.addToTail(xxxxx).toEqual(xxxxx));
  // });


});