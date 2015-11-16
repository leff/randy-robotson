var fromList = require('./fromList');
var names = [
    'Adamson',
    'Branson',
    'Caveman',
    'Donnovan',
    'Edmonds',
    'Fredricks',
    'Gravitar',
    'Harris',
    'Ivar',
    'Johnson',
    'Kramer',
    'Lawson',
    'Marvins',
    'Nowak',
    'Oliver',
    'Patak',
    'Quinn',
    'Rojo',
    'Sandoval',
    'Tailor',
    'Underwood',
    'Virtanen',
    'Webb',
    'Xu',
    'Yamada',
    'Zappa'
  ];

module.exports = function() {
  return fromList({list: names});
};


