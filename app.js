const {crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors')

console.clear();

crearArchivo2(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado' ) )
    .catch( err => console.log( err ) )