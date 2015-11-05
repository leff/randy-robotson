var _ = require('lodash');

module.exports = function(config) {
  var generators = [],
      records = [],
      i;

  _.each(config.fields, function(field) {
    if( typeof(field) == 'object' ) {
      generators.push({
        name: field.name,
        generator: require('../generators/'+field.generator),
        options: field
      });
    } else {
      generators.push({
        name: field,
        generator: require('../generators/'+field)
      });
    }
  });

  for(i=0; i<config.count; i++) {
    var record = {};
    _.each(generators, function(gen) {
      record[gen.name] = gen.generator(gen.options);
    });
    records.push(record);
  }
  return records;
};
