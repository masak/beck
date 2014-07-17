export = Parser;

class Parser {
    parse(input : string) {
        var result = [];

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
            // TODO: error handling
            pos += s.length;
        }

        function identifier() {
            return token('identifier', () => {
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

        while (!eof()) {
            result.push(element());
        }

        return result;
    }
}
