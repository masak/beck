TYPESCRIPT = tsc

JS_FILES = src/syntax-highlighting.js src/tests.js

all : $(JS_FILES)

src/%.js : src/%.ts
	$(TYPESCRIPT) $<
