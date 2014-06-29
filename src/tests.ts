/// <reference path="qunit.d.ts" />

declare var Highlighting;

// plain
// element
// attribute
// string
// comment
// preprocessor

QUnit.test("plain text", function(assert) {
    var result = Highlighting.parse('this is just plain text');
    assert.deepEqual(result, [Highlighting.Token.Plain]);
});
