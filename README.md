# shock

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

## Loose ideas

* A really small amount of things are core. (Inserting text, deleting text,
  navigating the text.)
* Syntax highlighting is a module. (Though likely the text region types that
  syntax highlighting assigns are core and a closed set.)
* Themes are modules.
* Code completion is a module. A given language hooks into the AST that has
  been parsed for it, and figures out what names are available in a given
  namespace.
* Refactoring support is a module. Refactoring actions for a given language
  come in modules.
* When the editor starts up, it does so in "bare" mode with minimal footprint.
  You can start typing immediately. It then runs through all the modules it's
  configured to load, pulls them in by Ajax, and plugs them into the rest of
  the system in dependency order. Syntax highlighting thus "comes online"
  after a small fraction of time.
* Anything the user does or a plugin does is exposed through an API function.
  All these functions are reachable from the command line. The GUI will
  sometimes intuit parameters, such as `Selection` or `Method`.
* Commands are first-class.
    * Editing and navigating the page is saved into an immutable log, which
      can be shown as a side pane.
    * How these commands are *presented* can vary. For example, the user
      can choose to group or ungroup commands for the purposes of undoing,
      redoing, or building new functions.
    * Navigational commands are also first-class but they default to being
      what the user typed: `down down home right`. The editor will keep
      track of possible better ways to summarize that navigation, such as
      "navigate to inside next `td` element". The user can effortlessly
      choose to re-interpret a set of commands like that. This can be used
      when redoing things or playing out macros.
    * Commands arbitrarily far back can be undone, provided newer changes
      haven't made that nontrivial.
    * "Replace All" isn't a dialog box, but instead an opportunity
      that's presented to the user after the second repetition of the same
      replacement. Even after the action is completed, all the replaced
      sites are highlighted, and the user can cycle between them and undo
      or approve them individually.
* There is a heavy focus on "the DWIM action". A backtick triggers the
  command line, but pressing the backtick twice picks an action that's
  most appropriate considering the user's recent actions. The editor goes
  out of its way trying to guess what this is, but prefers to do nothing
  if it's not sure.

## Collected resources

* The colors I want seem to be exactly those in the "okaida" theme at
  [prismjs](http://prismjs.com/)
* The [Ace](http://ace.c9.io/) editor seems very mature and could be
  a starting point to get something going quickly.
* The [features of Resharper](http://www.jetbrains.com/resharper/features/)
  look well worth investigating in detail. It's free to download and
  evaluate.
* The more I learn about PSI à la IntelliJ, the more I like the idea.
* [TSLint](https://github.com/palantir/tslint) is also interesting to
  keep an eye on.
* These links come from a previous effort to catalogue and understand
  extant JavaScript parsers out there:
    * [Grasp](http://graspjs.com/) ([Git repo](https://github.com/gkz/grasp.git))
    * [Esprima](http://esprima.org/) ([Git repo](https://github.com/ariya/esprima))
    * Whatever it is that [jslint](http://jslint.com/) and [jshint](http://jshint.com/) are using
    * [Narcissus](https://github.com/mozilla/narcissus/)
    * [traceur-compiler](https://github.com/google/traceur-compiler)
    * [ECMAScript 5 parser](http://es-lab.googlecode.com/svn/trunk/site/esparser/index.html)
    * Another [ECMAScript 5 parser](http://esparser.qfox.nl/)
    * [reflect.js](https://github.com/zaach/reflect.js)
    * [UglifyJS](https://github.com/mishoo/UglifyJS)
    * [JsonMLASTFormat](http://code.google.com/p/es-lab/wiki/JsonMLASTFormat)
    * [treehugger.js](https://github.com/ajaxorg/treehugger)
    * [JavaScript Shaper](http://jsshaper.org/)
    * [Zeon](https://github.com/qfox/Zeon) and [ZeParser](https://github.com/qfox/ZeParser)
    * [escodegen](https://github.com/Constellation/escodegen)
    * [Creating a JavaScript parser](http://cjihrig.com/blog/creating-a-javascript-parser/)
* [Zen
  Coding](https://mondaybynoon.com/the-art-of-zen-coding-bringing-snippets-to-a-new-level/),
  nowadays renamed [Emmet](http://emmet.io/), with
  [lots](https://code.google.com/p/zen-coding/wiki/ZenHTMLElementsEn)
  [of](https://code.google.com/p/zen-coding/wiki/ZenHTMLSelectorsEn)
  [features](https://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn).
* This post about [syntax
  highlighting](http://www.wilfred.me.uk/blog/2014/09/27/the-definitive-guide-to-syntax-highlighting/)
* [WebStorm](http://www.jetbrains.com/webstorm/)
* [safesj](https://github.com/sinelaw/sjs/)
