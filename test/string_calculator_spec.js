var jsdom = require('jsdom');
global.window = jsdom.jsdom().createWindow();
var should = require('should');

var StringCalculatorApp = require('../public/js/string_calculator');
module.exports =
  {
    "StringCalculator": {

      beforeEach: function() {
        this.StringCalculator = window.StringCalculator;
      },

      "when an empty string is passed in": {
        "returns 0": function() {
          var result = StringCalculator.add("");
          result.should.equal(0);
        }
      },

      "when a number is passed in": {
        "returns the number": function() {
          var result = StringCalculator.add("2");
          result.should.equal(2);
        }
      },

      "when string is passed in": {
        "returns NaN": function() {
          var result = StringCalculator.add("a");
          isNaN(result).should.be.true;
        }
      },

      "when '1'": {
        "returns 3": function() {
          var result = StringCalculator.add("1,2");
          result.should.equal(3);
        }
      }
    }
  }
