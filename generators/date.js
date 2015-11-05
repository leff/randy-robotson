var moment = require('moment');
module.exports = function(options) {
  var dateFormat = options.format || 'YYYY-MM-DD',
      min = options.min || new moment().subtract(1, 'years'),
      max = options.max || new moment(),
      rand;

  min = min.unix();
  max = max.unix();

  rand = Math.floor(Math.random() * (max - min)) + min;

  return moment.unix(rand).format(dateFormat);
}