#!/usr/local/bin/node

var inquirer = require('inquirer'),
    fs = require('fs'),
    colors = require('colors'),
    argv = require('yargs').argv,
    generate = require('./lib/generate.js');

console.log('Randy Robotson'.rainbow);

var config = require('./robotson-config');
var records = generate(config);

console.log('Generating ' + (''+config.count).green + ' records.');

if( argv.outFile ) {
  fs.open(argv.outFile, 'w', function(err, fd) {
    fs.writeSync(fd, JSON.stringify(records));
  });
} else {
  console.log(JSON.stringify(records));
}



