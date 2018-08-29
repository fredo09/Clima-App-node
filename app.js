/**
* App.js configuracion inicial
*/
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

// lugar.getlugarlatlng(argv.direcciones)
// .then(resp => {
//   console.log(resp);
// }).catch(e => {
//   console.log(e);
// })

// 19.4326077
// -99.133208
// clima.clima(,).then(temp => {
//     console.log(colors.green('Clima: ',temp));
// }).catch(err => {
//   console.log(err);
// })

let getInfo = async(direccion) =>{
  try {
    let coors = await lugar.getlugarlatlng(direccion)
    let temp = await clima.clima(coors.lat, coors.lng);
    return `El clima de la ${coors.direccion} es ${temp}`.yellow.bold;
  } catch (e) {
    return `No se pudo encontrar tu clima en ${direccion}`.bold.red;
  }
}


getInfo(argv.direcciones).then(message => {
  console.log(message);
}).catch(e =>{
  console.log(e);
})
