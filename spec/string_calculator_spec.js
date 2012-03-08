describe("StringCalculator", function() {

  it("returns 0 for empty string", function() {
    var result = StringCalculator.add('');
    expect(result).toEqual(0);
  });

});
