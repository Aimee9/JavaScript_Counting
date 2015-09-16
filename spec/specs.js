describe('multipleList', function() {
  it("will create a list of multiples based on user input", function() {
    expect(multipleList(10, 2)).to.equal("2 4 6 8 10 ");
  });
});
