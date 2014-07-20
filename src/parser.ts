export = Parser;

class Node {
    end: number;

    constructor(public type: string, public start: number) {
        this.type = type;
        this.start = start;
    }
}

class Term extends Node {
    zygs: Node[];

    constructor(type: string, start: number) {
        super(type, start);
        this.zygs = [];
    }
}

class Token extends Node {
}

class Parser {
    static NO_ERROR = {};

    parse(input : string) {
        var result = {
            tree: [],
            error: Parser.NO_ERROR
        };

        var error;

        var pos = 0;
        function eof() {
            return pos >= input.length;
        }

        function term(type : string, cb : (zyg) => void) : Term {
            var term = new Term(type, pos);
            cb(zyg => term.zygs.push(zyg));
            term.end = pos;

            return term;
        }

        function token(type : string, cb : () => void) : Token {
            var token = new Token(type, pos);
            cb();
            token.end = pos;

            return token;
        }

        function expect(s : string) {
            if (input.substring(pos, pos + s.length) !== s) {
                error = {
                    expected: '(' + s + ')',
                    got: eof() ? 'EOF' : input.substring(pos, pos + 1),
                    pos: pos
                };
                throw new Error;
            }
            pos += s.length;
        }

        function identifier() {
            return token('identifier', () => {
                if (eof()) {
                    error = {
                        expected: 'identifier',
                        got: 'EOF',
                        pos: pos
                    };
                    throw new Error;
                }
                pos += input.substring(pos).match(/\w+/)[0].length;
            });
        }

        function start_tag() {
            return term('start-tag', zyg => {
                expect('<');
                zyg(identifier());
                expect('>');
            });
        }
        function content() {
            // TODO: handle content
            return term('content', zyg => {});
        }
        function end_tag() {
            return term('end-tag', zyg => {
                expect('</');
                zyg(identifier());
                expect('>');
            });
        }

        function element() {
            return term('element', zyg => {
                zyg(start_tag());
                zyg(content());
                zyg(end_tag());
            });
        }

        try {
            while (!eof()) {
                result.tree.push(element());
            }
        }
        catch (e) {
            result.error = error;
        }

        return result;
    }
}
