var moment = require('moment');
var minDate = new moment().subtract(2, 'months'),
    maxDate = new moment().subtract(1, 'months');

module.exports = {
  "count": 100,
  "fields": [
    {
      "name": "Date",
      "generator": "date",
      "min": minDate,
      "max": maxDate,
      "format": "MM/DD/YYYY"
    },
    {
      "name": "userId",
      "generator": "integer",
      "min": 1000,
      "max": 9999
    },
    {
      "name": "userName",
      "generator": "fullname"
    },
    {
      "name": "userCode",
      "generator": "fromList",
      "list": [
        "GZ72ZZZ",
        "GZ60ZZZ",
        "GZ61ZZZ",
        "GZ63ZZZ"
      ]
    }
  ]
}