const mongoose = require("./connect");
var MENUSSCHEMA ={
 
    Nombre          : String, 
    precio          : Number, 
    descripción     : String,
    fechaderegistro : Date, 
    fotodelproducto : String
}
const MENUS = mongoose.model("menus" , MENUSSCHEMA);
module.exports = MENUS;
