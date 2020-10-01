
const mongoose = require("./connect");
var RESTAURANTSCHEMA ={
    Nombre          : String, 
    Nit             : String, 
    Propietario     : String, 
    Calle           : String,
    Telefono        : Date,
    Log             : String, 
    Lat             : String, 
    Logo            : String, 
    fechaderegistro : Date, 
    fotolugar       : String
}
const RESTAURANT = mongoose.model("restaurant" , RESTAURANTSCHEMA);
module.exports =RESTAURANT;







