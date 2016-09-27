'use strict';

/*
 * @TODO: Configurable List
 * @TODO: Weighted list, based on census data
*/

const fromList = require('./fromList');

const genders = [
  'Agender',
  'Androgyne',
  'Bigender',
  'Cisgender',
  'Genderqueer',
  'Hijra',
  'Man',
  'Pangender',
  'Queer heterosexual',
  'Third gender',
  'Third sex',
  'Trans man',
  'Trans woman',
  'Trigender',
  'Two-Spirit',
  'Woman'
];

module.exports = function(options) {
  return fromList({list: genders});
}