describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree("our tree");
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.

  it("should add a child to a parent", function(){
    tree.addChild("Sam");
    tree.addChild("Jane");
    tree.addChild("Leroy");

    expect(tree.contains("Harold")).toEqual(false);
    expect(tree.contains("Sam")).toEqual(true);
  });

  it("should add a child to a parent", function(){
    tree.addChild("Sam");
    tree.addChild("Jane");
    tree.addChild("Leroy");

  expect(tree.contains("Harold")).toEqual(false);
  expect(tree.contains("Sam")).toEqual(true);
  });




}); 