export = Parser;

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

        function term(type : string, cb : (addZyg) => void) {
            var node = { type: type, start: pos, end: 0, zygs: [] };
            cb(zyg => node.zygs.push(zyg));
            node.end = pos;

            return node;
        }

        function token(type : string, cb : () => void) {
            var node = { type: type, start: pos, end: 0 };
            cb();
            node.end = pos;

            return node;
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
            return term('start-tag', addZyg => {
                expect('<');
                addZyg(identifier());
                expect('>');
            });
        }
        function content() {
            // TODO: handle content
            return term('content', addZyg => {});
        }
        function end_tag() {
            return term('end-tag', addZyg => {
                expect('</');
                addZyg(identifier());
                expect('>');
            });
        }

        function element() {
            return term('element', addZyg => {
                addZyg(start_tag());
                addZyg(content());
                addZyg(end_tag());
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
