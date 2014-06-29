TYPESCRIPT = tsc

all : src/syntax-highlighting.js

src/syntax-highlighting.js : src/syntax-highlighting.ts
	$(TYPESCRIPT) src/syntax-highlighting.ts
