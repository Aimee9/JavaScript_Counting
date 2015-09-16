describe('numbersList', function() {
  it("will count up to a number inputted by user", function() {
    expect(numbersList(5)).to.eql([1, 2, 3, 4, 5 ]);
  });
});
