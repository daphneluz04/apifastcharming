const mongoose = require("./connect");
var FACTURASSCHEMA ={
    idmenu: String,
    idorder: String,
    cantidad: Number
   
}
const FACTURAS = mongoose.model("facturas" , FACTURASSCHEMA);
module.exports = FACTURAS;

//solo get