var firstname = require('./firstname'),
    lastname = require('./lastname');

/*
  Fullname Generator

  Make a full name out of firstname and lastname generators.

  options [object] {
    prefixes: [array of strings], ex. ['Mr.', 'Ms.', 'Dr.']
  }
*/
module.exports = function(options) {
  var prefix = '';
  if( options && options.prefixes ) {
    var idx = Math.round( Math.random() * (options.prefixes.length - 1) );
    prefix = options.prefixes[idx];
    prefix += (prefix.length) ? ' ' : '';
  }
  return prefix + firstname() + ' ' + lastname();
}