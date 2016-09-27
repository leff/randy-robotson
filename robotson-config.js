'use strict';
/**
  Example robotson config as javascript.

  It's also possible to use JSON, but you can't use moment dates.
*/
const moment = require('moment');
let minDate = new moment().subtract(2, 'months'),
    maxDate = new moment().subtract(1, 'months');

module.exports = {
  count: 10,
  fields: [
    {
      name: "date",
      generator: "date",
      min: minDate,
      max: maxDate,
      format: "MM/DD/YYYY"
    },
    {
      name: "userId",
      generator: "integer",
      min: 1000,
      max: 9999
    },
    {
      name: "userName",
      generator: "fullname"
    },
    {
      name: "userCode",
      generator: "fromList",
      list: [
        "UX11111",
        "UX22222",
        "UXP3333",
        "UXP4444"
      ]
    },
    {
      name: "gender",
      generator: "gender"
    }
  ]
}