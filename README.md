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

## Loose ideas

* A really small amount of things are core. (Inserting text, deleting text,
  navigating the text.)
* Syntax highlighting is a module. (Though likely the text region types that
  syntax highlighting assigns are core and a closed set.)
* Themes are modules.
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

## Collected resources

* The colors I want seem to be exactly those in the "okaida" theme at
  [prismjs](http://prismjs.com/)
* The [Ace](http://ace.c9.io/) editor seems very mature and could be
  a starting point to get something going quickly.
