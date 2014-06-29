/// <reference path="qunit.d.ts" />

module Highlighting {
    export enum Token {
        Plain, Element, Attribute, String, Comment, Preprocessor, Error
    }

    export function parse(input: string) {
        return [Token.Plain];
    }
}

// plain
// element
// attribute
// string
// comment
// preprocessor

var plain = Highlighting.Token.Plain;

QUnit.test("plain text", function(assert) {
    var result = Highlighting.parse('this is just plain text');
    assert.deepEqual(result, [plain]);
});
