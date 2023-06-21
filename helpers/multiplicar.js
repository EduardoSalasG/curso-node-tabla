const fs = require('fs');
const colors = require('colors')

const crearArchivo = async ( base = 5, listar = false ) =>{

    try{

        console.log('============')
        console.log('Tabla del:', base)
        console.log('============')
    
        let salida = '';
    
        for (let i = 1; i<=10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {console.log(salida)}
    
        fs.writeFileSync(`tabla-${base}.txt`, salida)
    
        console.log(`tabla-${base}.txt creado`);
        return `tabla-${base}.txt`

    } catch (err){
        throw err;
    }

}

const crearArchivo2 = ( base = 5, listar, hasta = 10 ) => {
    return new Promise ((resolve, reject) => {
    
        let salida, consola = '';
    
        for (let i = 1; i<=hasta; i++) {
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            consola += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
        }
        if (listar) {
            console.log('============'.green)
            console.log('Tabla del:'.green, colors.blue(base))
            console.log('============'.green)    
            console.log(salida)
        }

        try{
            fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)
            resolve (`tabla-${base}.txt`)
        } catch {
            reject('No se pudo guardar el archivo');
        }
    })
}

    
module.exports = {
    crearArchivo,
    crearArchivo2
}