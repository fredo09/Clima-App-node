/**
* Axios Configuracion para lugar
*/

const axios = require('axios');
const colors = require('colors');

//Promesa para obtener cordenadas de el lugar preguntado
let getlugarlatlng = async(direcciones) => {
  let url = encodeURI(direcciones);

  let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${url}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)

  if(resp.data.status == 'ZERO_RESULTS'){
    throw new Error(`No se pudo encontrar tu ciudad ${direcciones}`.red)
  }
    //console.log(JSON.stringify(resp.data.results, undefined, 2));
    let address = resp.data.results[0];
    let addresslocations = address.formatted_address;
    let lat = address.geometry.location.lat;
    let lng = address.geometry.location.lng;

    return {
      direccion: addresslocations,
      lat,
      lng
    }
}

module.exports = {
  getlugarlatlng
}
