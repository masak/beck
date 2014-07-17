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

    it('should return simple syntax tree on correct HTML', () => {
        var p = new parser;
        var result = p.parse('<html></html>');
        assert.deepEqual(result, [
            {
                type: 'element',
                start: 0,
                end: 13,
                zygs: [
                    {
                        type: 'start-tag',
                        start: 0,
                        end: 6,
                        zygs: [
                            {
                                type: 'identifier',
                                start: 1,
                                end: 5
                            }
                        ]
                    },
                    {
                        type: 'content',
                        start: 6,
                        end: 6,
                        zygs: []
                    },
                    {
                        type: 'end-tag',
                        start: 6,
                        end: 13,
                        zygs: [
                            {
                                type: 'identifier',
                                start: 8,
                                end: 12,
                            }
                        ]
                    }
                ]
            }
        ]);
    });
});
