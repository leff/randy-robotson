'use strict';
/*
 * @TODO: Configurable place list
  */
const fromList = require('./fromList');
const places = [
      'Centerville',
      'Fairview',
      'Franklin',
      'Midway',
      'Fairfield',
      'Pleasant Valley',
      'Troy',
      'Liberty',
      'Union',
      'Springfield',
      'Clinton',
      'Madison',
      'Clayton',
      'Marion',
      'Salem',
      'Splott',
      'Bufflers Holt',
      'Warninglid',
      'Fingringhoe',
      'Snodland',
      'Ventongimps',
      'Grimness',
      'Bumpass',
      'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch',
      'Humptulips',
      'Humansville',
      'Cheesequake',
      'Oaxaca',
      'Worcestershire',
      'Bloemfontein',
      'Mumbai',
      'Dehli',
      'Bangalor',
      'Jaipur',
      'Komkhulu',
      'Bergsig',
      'Pretoria',
      'San José',
      'San Antonio',
      'Santa Maria',
      'Santa Rosa',
      'San Pedro',
      'San Juan',
      'San Francisco',
      'Mikhaylovka',
      'Hoseynabad',
      'Ivanovka',
      'Ojo de Agua',
      'Gradina',
      'Aleksandrovka',
      'Buenavista',
      'La Esperanza'
    ];

module.exports = function() {
  return fromList({list: places});
};


