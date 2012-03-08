describe("StringCalculator", function() {

  describe("when an empty string is passed in", function() {
    it("returns 0", function() {
      var result = StringCalculator.add("");
      expect(result).toEqual(0);
    });
  });

  describe("when a number is passed in", function() {
    it("returns the number", function() {
      var result = StringCalculator.add("2");
      expect(result).toEqual(2);
    });
  });

  describe("when string is passed in", function() {
    it("returns NaN", function() {
      var result = StringCalculator.add("a");
      expect(isNaN(result)).toBeTruthy;
    });
  });

  describe("when '1,2' is passed in", function() {
    it("returns 3", function() {
      var result = StringCalculator.add("1,2");
      expect(result).toEqual(3);
    });
  })
});
