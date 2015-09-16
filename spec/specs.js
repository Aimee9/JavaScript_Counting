describe('numbersList', function() {
  it("will count up to a number inputted by user", function() {
    expect(numbersList(5)).to.eql([1, 2, 3, 4, 5 ]);
  });
});

describe('multipleList', function() {
  it("will create a list of multiples based on user input", function() {
    expect(multipleList(10, 2)).to.equal("2 4 6 8 10 ");
  });
});
