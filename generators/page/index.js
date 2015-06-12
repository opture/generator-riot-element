'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.argument('element-name', {
      desc: 'Tag name of the element to generate',
      required: true
    });

    // This method adds support for a `--path` flag
    // An element generated with a --path will create a matching directory
    // structure in the `app/elements` dir.
    // ex: yo polymer:el x-foo --path foo/bar/baz will create
    // app/elements/foo/bar/baz/x-foo
    this.option('path');
  },
  init: function () {
    this.elementName = this['element-name'];
    this.args.splice(0,1);
    this.components = this.args;
    this.flags = this.options;

    if (this.elementName.indexOf('-') === -1) {
      this.emit('error', new Error(
        'Element name must contain a dash "-"\n' +
        'ex: yo riot-element my-element'
      ));
    }
  },
  page: function () {
    // Create the template element

    var el;
    var pathToEl;

     if (this.flags.path) {

        // --path foo/bar
        // el = "foo/bar/x-foo"
        el = path.join(this.flags.path, this.elementName);

        // pathToEl = "app/elements/foo/bar/x-foo"
        pathToEl = path.join('app/tags/pages', el);

      } else {

        // el = "x-foo/x-foo"
        el = path.join(this.elementName, this.elementName);

        // pathToEl = "app/elements/x-foo/x-foo"
        pathToEl = path.join('app/tags/pages', el);

      }

    this.template(path.join(__dirname, 'templates/element.html'), pathToEl + '.tag');
    this.template(path.join(__dirname, 'templates/element.css'), pathToEl + '.css');


  }
});