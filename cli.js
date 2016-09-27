#!/usr/local/bin/node

'use strict';

const inquirer = require('inquirer'),
  fs = require('fs'),
  colors = require('colors'),
  argv = require('yargs').argv,
  generate = require('./lib/generate.js');

console.log('Randy Robotson'.rainbow);

let config_module_path = ( argv.config ) ? `${process.cwd()}/${argv.config}` : './robotson-config';
let config;
try {
  config = require(config_module_path);
} catch(e) {
  console.error('Config file not found', config_module_path, e);
  process.exit();
}


let records = generate(config);

console.log(`Generating ${config.count.toString().green} records.`);

if( argv.outFile ) {
  fs.open(argv.outFile, 'w', function(err, fd) {
    if( err ) {
      console.error('Error opening outFile', argv.outFile, err );
      process.exit();
    }
    if( argv.outputType == 'js' ) {
      var varName = (argv.varName) ? argv.varName : 'window.mock_data';
      fs.writeSync(fd, `${varName} = ${JSON.stringify(records, null, 2)};`);
    } else {
      // default json
      fs.writeSync(fd, JSON.stringify(records));
    }
  });
} else {
  console.log(records);
}
