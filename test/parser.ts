/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/node.d.ts" />

import parser = require("../src/parser");
import assert = require("assert");

describe('HTML parser', function(){
    it('should return empty on empty input', () => {
        var p = new parser;
        var result = p.parse('');
        assert.deepEqual(result, []);
    });
});
