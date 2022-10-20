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
            "imkanlar":["Kahve","Pasta"],
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
    {"baslik":"Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"4",
        "adres":"SDÜ AVM",
        "saatler":[
            {
            "gunler":"Pazartesi-Cuma",
            "acilis":"9:00-23:00",
            "kapali":"false"
            },
            {
                "gunler":"Cumartesi-Pazar",
                "acilis":"8:00-22:00",
                "kapali":"false"
            },
        ],
                "imkanlar":["Kahve","Pasta"],
                "kordinatlar":{
                    "enlem":"37.7",
                    "boylam":"30.5"
                },
                "yorumlar":[
                  {
                    "yprumYapan":"Gulnar Aliyeva",
                    "yorumMetni":"Kahveler güzel",
                    "tarih":"20 Ekim",
                    "puan":"4"
                  }
                ]

    }
    })
}
const yorumEkle= function(req, res){
    res.render('yorumekle',{"title":"Yorum Sayfası"});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
}