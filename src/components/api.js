
var languageParts = window.location.hostname.split('.');
//var parts = languageCode.split('.');
const Subdomain = languageParts[1];
//console.log("language :", Subdomain);
//var languageCode;
switch(Subdomain) {
        case 'hindi':
       var  LanguageCode = 'hi';
        break;
        case 'marathi':
         LanguageCode = 'mr';
        break;
        case 'gujrati':
         LanguageCode = 'gu';
        break;
        case 'tamil':
             LanguageCode = 'te';
        break;
        case 'malayalam':
              LanguageCode = 'ml';
        break;
        case 'kannada':
               LanguageCode = 'kn';
        break;
        case 'telugu':
               LanguageCode = 'tu';
        break;
        case 'english':
                 LanguageCode = 'en';
        break;
        default:
              LanguageCode = 'hi';
  }
//console.log('language code from switch ::' + LanguageCode);
const Globals = {
    language_based_api : 'http://ws.webdunia.com/json/page?lang='+LanguageCode+'&url=' ,
    Desktop_language_based_api :'https://cors-anywhere.herokuapp.com/http://api.webdunia.com/api/v3/get-menu-by-id?lang='+LanguageCode+'&menuType=NavigationMenu&menuId=1',
    Desktop_header_based_api :'http://api.webdunia.com/api/v3/get-menu-by-Id?lang=hi&&menuType=NavigationMenu&menuId=1',
    // api : 'http://ws.webdunia.com/json/page?lang=hi&url=',
    apifunction : function(languageCode){
        var apiUrl= 'http://ws.webdunia.com/json/page?lang='+languageCode+'&url=';
        return apiUrl;
    }
};

export default Globals ;