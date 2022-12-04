var mongoose = require('mongoose');
require("./mekansema");
var dbURI = "mongodb+srv://Gulnar:20022002@mekanbul.6ow3svl.mongodb.net/mekanbul?retryWrites=true&w=majority";
mongoose.connect (dbURI);
function kapat(msg, callback){
  mongoose.connection.close(function () {
    console.log(msg);
    callback();
  });
}
process.on("SIGINT", function(){
    kapat("uygulama kapatıldı!",function(){
        process.exit(0);
    });
});
mongoose.connection.on("connected",function(){
    console.log(dbURI +" adresindeki veritbanına bağlandı");
});
mongoose.connection.on("error",function(){
    console.log(dbURI +" bağlantı hatasıdır");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI +" bağlantı kesildi");


});
