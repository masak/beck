TYPESCRIPT = tsc --module commonjs

JS_FILES = src/parser.js test/parser.js

all : $(JS_FILES)

src/%.js : src/%.ts
	$(TYPESCRIPT) $<

test/%.js : test/%.ts
	$(TYPESCRIPT) $<

test : all
	mocha

clean :
	rm $(JS_FILES)
