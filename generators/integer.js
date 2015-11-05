module.exports = function(options) {
  var min = options.min || 0,
      max = options.max || 10000;
  return Math.floor(Math.random() * (max - min)) + min;
}