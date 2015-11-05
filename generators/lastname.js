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
  ],
  total = names.length - 1;

module.exports = function() {
  var idx = Math.round( Math.random() * total );
  return names[idx];
};


