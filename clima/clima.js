/**
 * Configuracion del clima
 */
 const axios = require('axios');

//Promesa para obtener infomacion del clima
 let clima = async (lat, lng) =>{
    let tiempo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=860a414fe629a269578f40726d3ff9c2`)
    return  tiempo.data.main.temp

 }

 module.exports = {
   clima
 }
