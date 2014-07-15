export = Parser;

class Parser {
    parse(input : string) {
        var result = [];

        var pos = 0;
        function eof() {
            return pos >= input.length;
        }

        function make(type : string, cb : (node) => void) {
            var node = { type: type, start: pos, end: 0, zygs: [] };
            cb(node);
            node.end = pos;

            return node;
        }

        function expect(s : string) {
            // TODO: error handling
            pos += s.length;
        }

        function identifier() {
            return make('identifier', node => {
                pos += input.substring(pos).match(/\w+/)[0].length;
            });
        }

        function start_tag() {
            return make('start-tag', node => {
                expect('<');
                node.zygs.push(identifier());
                expect('>');
            });
        }
        function content() {
            // TODO: handle content
            return make('content', node => {});
        }
        function end_tag() {
            return make('end-tag', node => {
                expect('</');
                node.zygs.push(identifier());
                expect('>');
            });
        }

        function element() {
            return make('element', node => {
                node.zygs.push(start_tag());
                node.zygs.push(content());
                node.zygs.push(end_tag());
            });
        }

        while (!eof()) {
            result.push(element());
        }

        return result;
    }
}
