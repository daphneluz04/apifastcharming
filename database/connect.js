const mongoose =require("mongoose");
mongoose.connect("mongodb://192.168.48.2:27017/apifastcharming");
module.exports = mongoose;