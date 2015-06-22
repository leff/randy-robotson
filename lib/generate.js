(function() {
  var colors = require('colors'),
      _ = require('lodash');

  module.exports = function(config) {
    console.log('Generateing ' + (''+config.count).green + ' people.');

    var generators = [],
        records = [],
        i;

    _.each(config.fields, function(field) {
      generators.push( {name: field, generator: require('../generators/'+field)} );
    });

    for(i=0; i<10; i++) {
      var record = {};
      _.each(generators, function(gen) {
        record[gen.name] = gen.generator();
      });
      records.push(record);
    }
    return records;
  };

})();
