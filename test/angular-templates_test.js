'use strict';

var grunt     = require('grunt');
var fs        = require('fs');

exports.ngtemplates = {

  simple: function(test) {
    test.expect(1);

    var actual    = grunt.file.read('tmp/simple.js');
    var expected  = grunt.file.read('test/expected/simple.js');

    test.equal(expected, actual, 'should compile template as module `simple`');
    test.done();
  },

  multiple: function(test) {
    test.expect(1);

    var actual    = grunt.file.read('tmp/multiple.js');
    var expected  = grunt.file.read('test/expected/multiple.js');

    test.equal(expected, actual, 'should compile multiple templates together as `multiple`');
    test.done();
  },

  prepend: function(test) {
    test.expect(1);

    var actual    = grunt.file.read('tmp/simple_prepend.js');
    var expected  = grunt.file.read('test/expected/simple_prepend.js');

    test.equal(expected, actual, 'should prepend $templateCache ID with /prepend/simple.html"');
    test.done();
  }

};
