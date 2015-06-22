(function() {
  var moment = require('moment');

  module.exports = function(options) {
    var years = Math.random() * (options.maxAge + 1 - options.minAge) + options.minAge,
        days = Math.random() * 365;

    return moment()
        .subtract(years, 'years')
        .subtract(days, 'days')
        .format('YYYY-MM-DD');
  };

})();
