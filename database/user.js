const mongoose = require("./connect");
var USERSCHEMA ={
    name     : String,
    email    : String,
    password : String,
    register : Date,
    age      : Number,
    sex      : String
}
const USER = mongoose.model("user" , USERSCHEMA);
module.exports = USER;