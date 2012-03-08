var jsdom = require('jsdom');
global.window = jsdom.jsdom().createWindow();
var should = require('should');

var StringCalculatorApp = require('../public/js/string_calculator');

describe("StringCalculator", function() {

  beforeEach(function() {
    this.StringCalculator = window.StringCalculator;
  });

  describe("when an empty string is passed in", function() {
    it("returns 0", function() {
      var result = StringCalculator.add("");
      result.should.equal(0);
    });
  });

  describe("when a number is passed in", function() {
    it("returns the number", function() {
      var result = StringCalculator.add("2");
      result.should.equal(2);
    });
  });

  describe("when string is passed in", function() {
    it("returns NaN", function() {
      var result = StringCalculator.add("a");
      isNaN(result).should.be.true;
    });
  });

  describe("when '1,2' is passed in", function() {
    it("returns 3", function() {
      var result = StringCalculator.add("1,2");
      result.should.equal(3);
    });
  })
});
