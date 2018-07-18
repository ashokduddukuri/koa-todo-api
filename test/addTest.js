const add = require("../services/add");
var assert = require('assert');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function () {
    // And then we describe our testcases.
    it('returns 1+1=2', function (done) {
        assert.equal(add(1, 1), 2);
        // Invoke done when the test is complete.
        done();
    });
});