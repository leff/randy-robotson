module.exports = function(options) {
  var total = options.list.length - 1,
      idx = Math.round( Math.random() * total );
  return options.list[idx];
};