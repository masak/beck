# beck

Refactoring web content editor (HTML5/Angular/TypeScript).

## What's the goal here?

1. A HTML/JavaScript/Angular development environment that I actually want to
   use myself.
2. An anti-IDE (blazingly fast startup), but with the best features stolen
   from IDEs: plugins, syntax highlighting, refactoring.
3. A very clean and bare environment. The feel is a canvas where the brush
   of your imagination can run free. No distractions.
4. Easy to switch between editing something, and running it.

## But is it awesome?

Yes.

## Roadmap

- [ ] Full-document textarea
    - [x] Start from the Ace editor
    - [ ] Increase the font size
    - [ ] Change the style of the gutter
    - [ ] Remove the little arrows in the gutter
- [ ] Color scheme
- [x] Horizontal 80-col marker
- [ ] Backtick button toolbar
- [x] Syntax highlighting
- [ ] Expanding trigger words
- [ ] Refactoring
    - [ ] Extract variable
    - [ ] Extract function
    - [ ] Extract `ng-repeat`
    - [ ] DWIM refactor command (double backtick?)

## Collected resources

* The colors I want seem to be exactly those in the "okaida" theme at
  [prismjs](http://prismjs.com/)
* The [Ace](http://ace.c9.io/) editor seems very mature and could be
  a starting point to get something going quickly.
