const mongoose = require("./connect");
var ORDENCHEMA ={
    idmenu      : String,
    idrestorant : String,
    cantidad    : Number,
    idcliente   : String,
    lat         : String, //lugardeenvio
    log         : String, //lugardeenvio
    pagototal   : Number

}
const ORDEN = mongoose.model("orden" , ORDENCHEMA);
module.exports = ORDEN;