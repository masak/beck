/// <reference path="qunit.d.ts" />

module Highlighting {
    export enum Token {
        Plain, Element, Attribute, String, Comment, Preprocessor, Error
    }

    export function parse(input: string): Token[] {
        return [Token.Plain];
    }
}

// element
// attribute
// string
// comment
// preprocessor

var plain = Highlighting.Token.Plain;
var element = Highlighting.Token.Element;

QUnit.test("plain text", function(assert) {
    var result = Highlighting.parse('this is just plain text');
    assert.deepEqual(result, [plain]);
});

QUnit.test("element", function(assert) {
    var result = Highlighting.parse('<head>');
    assert.deepEqual(result, [plain, element, plain]);
});
