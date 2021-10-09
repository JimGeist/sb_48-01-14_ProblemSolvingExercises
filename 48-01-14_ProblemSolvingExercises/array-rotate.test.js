
describe("arrayRotate", function () {
  it("should return an array with elements shifted right", function () {
    expect(arrayRotate(["a", "b", "c"], 1)).toEqual(["c", "a", "b"]);
    expect(arrayRotate(["a", "b", "c"], 8)).toEqual(["b", "c", "a"]);
  });

});
