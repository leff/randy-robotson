#!/usr/local/bin/node

(function() {
  var inquirer = require('inquirer'),
      fs = require('fs'),
      colors = require('colors'),
      generate = require('./lib/generate.js');

  console.log('Randy Robotson'.rainbow);

  var records = generate({
    count: 10,
    fields: [
      'firstname',
      'lastname',
      {
        name: 'birthday',
        maxAge: 100,
        minAge: 18
      }
    ]
  });

  console.log(records);


})();
