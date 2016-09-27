'use strict';
/*
* @TODO: Use something like https://www.npmjs.com/package/google-libphonenumber
* to format the phone numbers.
* @TODO: Allow options for country codes.
* @TODO: Support Extensions.
*/
const min = 1000000000,
      max = 9999999999;
module.exports = function(options) {
  let number = Math.floor(Math.random() * (max - min)) + min;
  return number.toString();
}