strings = {
    "app_name" :{
        "fa":"چالش حدس رابط",
        "en":"Guess The Socket"
    },
    "easy" :  {
        "fa":"آسان" ,  
        "en":  "Easy"
    },
    "about_mobile":{
        "fa":"درباره ی موبایل",
        "en":"About Phones"
    },
    "medium": {
        "fa": "متوسط",
        "en": "Medium"
      },
      "pc_1": {
        "fa": "کامپیوتری 1",
        "en": "Computer i          "
      },
      "hard": {
        "fa": "سخت",
        "en": "Hard"
      },
      "pc_2": {
        "fa": "کامپیوتری 2",
        "en": "Computer ii"
      },
      "fhard": {
        "fa": "خیلی سخت",
        "en": "Really Hard"
      },
      "country_plugs": {
        "fa": "پریز کشور ها",
        "en": "Power Outlets"
      },
      "crlang":{
        "fa":"فارسی",
        "en":"English"
      },
      "change_lang":{
        "fa":"تغییر زبان",
        "en":"Change Language"
      } ,    
      "app_name_header":{
        "fa":"حدس رابط",
        "en":"Guess The Socket"
      }, 
      "death_match": {
        "fa": "بازی مرگ",       
        "en": "Death Match"
      }, 
      "deadly": {
        "fa": "مرگبار", 
        "en": "Lethal"
      }
      ,
      "level" : {
        "fa": "مرحله", 
        "en": "Level"
      },
      "suck_head": {
        "fa": "ای بابا باختی که",
        "en": "Game Over Dude"
      }, 
      "suck_head2": {
        "fa": "انگار اونقدرا که فکر میکردی آسون نبود" ,    
        "en": "Looks like it wasn't that easy"
      },
      "tryagain": {
        "fa": "تلاش مجدد",
         "en": "Try Again"
      },
      "quit": {
        "fa": "خروج",
        "en": "Quit"
      }, 
      "win_head": {
        "fa": "                بابا ترکوندی که        ",
        "en": "Woah, Unbelievable"
      } ,       
      "win_head2": {
        "fa": "                معلومه کارت درسته!        ", 
        "en": "Only a Pro could beat this       "
      },
      "homebtn": {
        "fa": "صفحه اصلی",
        "en": "Main Menu"
      }, 
      "surrender_head1": {
        "fa": "جدی میخوای تسلیم بشی ؟", 
        "en": "Surrender ? Really ?!"
      }, 
       "surrender_head2" :    {
        "fa": "فک میکردم از پسش بر بیای ",
         "en": "I thought you could make it"
       } ,    
       "continuebtn": {
        "fa": "ادامه میدم ", "en": " Continue "
       },
       "level1": {
        "fa": "مرحله 1", "en": "Level 1"
       },
       "level2": {
        "fa": "مرحله 2", "en": "Level 2"
       }, 
       "level3": {
        "fa": "مرحله 3", "en": "Level 3"
       }, 
       "level4": {
        "fa": "مرحله 4", "en": "Level 4"
       },
       "loading1": {
        "fa": "در حال بارگذاری", "en": "Loading ..."
       }, 
       "loading2": {
        "fa": "لطفا کمی صبر کنید", "en": "Be patient a little"
       }

    } 

// function _(st) {
//     if (typeof lang === 'undefined') {
//         // console.log("z is not declared");
//         // let lang = 
//       } else {
//         console.log("z is declared");
//       }
      
// }

function translatePlaceholders(text) {
    let lang = getCookie("user_lang");
    // console.log("doing tr for "+lang); 
    return text.replace(/\[(.*?)\]/g, function(match, key) {
        const translation = strings[key] && strings[key][lang];
        return translation || match;
    });
}
