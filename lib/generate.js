var _ = require('lodash');

module.exports = function(config) {
  var generators = [],
      records = [],
      i;

  _.each(config.fields, function(field) {
    if( typeof(field) == 'object' ) {
      var genmeta = {
        name: field.name,
        options: field
      };
      if( typeof(field.generator) == 'string' ) {
        genmeta.generator = require('../generators/'+field.generator);
      } else if( typeof(field.generator) == 'function' ) {
        genmeta.generator = field.generator;
      } else {
        throw(new Error('Generator type ['+typeof(field.generator)+'] not supported for generator '+genmeta.name));
      }

      generators.push(genmeta);
    } else { // string
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
