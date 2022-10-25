var express = require('express');
var router = express.Router();
const anaSayfa= function(req, res, next){
    res.render('anasayfa',
    {
    baslik: "Anasayfa",
    "sayfaBaslik":{
        "siteAd":"Mekanbul",
        "slogan":"Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
        {
            "ad":"Starbucks",
            "puan":"4",
            "adres":"SDÜ AVM",
            "imkanlar":["Kahve", "Pasta"],
            "mesafe":"1km"
        },
        {
            "ad":"Bilgisayar Müh",
            "puan":"3",
            "adres":"SDÜ Batı Kampüsü",
            "imkanlar":["Mühendis Gençler","Sinan hoca"],
            "mesafe":"1km"
        }
        
    ]
    });
}


const mekanBilgisi=function(req, res){
    res.render('mekanbilgisi',
      {
        "baslik":"Mekan Bilgisi",
        "mekanBaslik":"Starbucks",
        "mekanDetay": {
          "ad": "Starbucks",
          "adres": "SDÜ AVM",
          "puan": "4",
          "imkanlar": ["Kahve", "Pasta"],
          "koordinatlar": {
            "enlem": "37.7",
            "boylam": "30.5"
          },
          "saatler": [
            {
              "gunler":"Pazartesi-Cuma",
              "acilis": "9:00",
              "kapanis": "23:00",
              "kapali": false
            },
            {
              "gunler":"Cumartesi-Pazar",
              "acilis": "10:00",
              "kapanis": "22:00",
               "kapali": false
            },
         ],
          "yorumlar": [
            {
              "yorumYapan": "Gulnar Aliyeva",
              "yorumMetni": "Kahveler güzel",
              "tarih": "20 Ekim 2022",
              "puan": "4"
            },
            {
              "yorumYapan": "Gulnar Aliyeva",
              "puan": "3",
              "tarih": "20 Ekim 2022",
              "yorumMetni": "İyi"
            }

         ]

       }
      });
}
const yorumEkle= function(req, res){
    res.render('yorumekle',{"title":"Yorum Sayfası"});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
}