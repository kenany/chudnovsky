var chudnovsky = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(chudnovsky));
});

test('estimates pi', function(t) {
  t.plan(1);
  t.equal(chudnovsky(1), 3.1415926535897936);
});