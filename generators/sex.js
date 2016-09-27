'use strict';

/*
 * @TODO: Support configurable strings.
 */
const sexes = ['f', 'm'];

module.exports = function() {
  let rand = Math.round(Math.random());
  return sexes[rand];
}