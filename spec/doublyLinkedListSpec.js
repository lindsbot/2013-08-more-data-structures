describe("doublyLinkedList", function(){
  var doublyLinkedList;
  beforeEach(function(){
  	doublyLinkedList = new makeDoublyLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(doublyLinkedList)).toContain("head");
    expect(Object.keys(doublyLinkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(doublyLinkedList.addToTail).toEqual(jasmine.any(Function));
    expect(doublyLinkedList.removeHead).toEqual(jasmine.any(Function));
    expect(doublyLinkedList.contains).toEqual(jasmine.any(Function));
  });

  it("the addToTail and contains functions should work", function(){

    doublyLinkedList.addToTail("3");
    doublyLinkedList.addToTail("Chainz");
    doublyLinkedList.addToTail(true);

    expect(doublyLinkedList.contains("3")).toEqual(true);
    expect(doublyLinkedList.contains("BOOM")).toEqual(false);



  })


});