'use strict';
module.exports = function(options) {
  let p1 = Math.floor(Math.random() * (999 - 100)) + 100,
      p2 = Math.floor(Math.random() * (99 - 10)) + 10,
      p3 = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  return `${p1}-${p2}-${p3}`;
}