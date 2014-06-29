TYPESCRIPT = tsc

JS_FILES = src/highlighting.js

all : $(JS_FILES)

src/%.js : src/%.ts
	$(TYPESCRIPT) $<
