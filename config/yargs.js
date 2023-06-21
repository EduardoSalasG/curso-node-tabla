const { isBooleanObject } = require('util/types');
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        desc: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        desc: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        desc: 'Cantidad de múltiplos que se calculará'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .check( (argv, options) => {
        if ( isNaN( argv.h ) ) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .check( (argv, options) => {
        if (isBooleanObject( argv.l ) ) {
            throw 'La opcion listar debe ser true o false'
        }
        return true;
    })
    .argv

module.exports = argv;