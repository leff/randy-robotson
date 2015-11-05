module.exports = function(options) {
  var min = options.min || 0.0,
      max = options.max || 10000.0,
      num = Math.random() * (max - min) + min;
  return Math.round(num * 100) / 100;
}