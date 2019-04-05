// I retrieve data from my cookie (if it exists) and I create an object in JavaScript.
var pepites = new Object();
var pate_cookie = Cookies.get('cookie_utms');
// If at least one URL parameter exist AND the cookie doesn't exist
if((url_src!== false || url_mdm!==false || url_cpn!==false) && (pate_cookie == null || pate_cookie == "" )) {
  if(url_src!== false){ 
    pepites["source"] = url_src; 
  }
  if(url_mdm!==false){
    pepites["medium"] = url_mdm; 
  }
  if (url_cpn!==false) {
    pepites["campaign"] = url_cpn;
  }
  if (url_trm!==false) {
    pepites["term"] = url_cpn;
  Cookies.set('cookie_utms', pepites, { expires: 120 } );
}
// Else if we get at least URL parameter AND the cookie exist
else if((url_src!== false || url_mdm!==false || url_cpn!==false) && (pate_cookie != null || pate_cookie != "")) {
  pate_cookie_choco = JSON.parse(pate_cookie);
  if(pate_cookie_choco["source"] != undefined) {
    if(url_src!== false && pate_cookie_choco["source"].indexOf(url_src) != -1 ){
      pepites["source"] = pate_cookie_choco["source"]; 
    }
    else if(url_src!== false){
    pepites["source"] = pate_cookie_choco["source"]+"-"+url_src; 
    }
    else if ( url_src == false && pate_cookie_choco["source"] != undefined) { 
    pepites["source"] = pate_cookie_choco["source"]; 
    }
  }                   
  else if ( url_src!== false ) { 
      pepites["source"] = url_src; 
  }
  if(pate_cookie_choco["medium"] != undefined) {
    if(url_mdm!== false && pate_cookie_choco["medium"].indexOf(url_mdm) != -1 ){
      pepites["medium"] = pate_cookie_choco["medium"];
    }
    else if(url_mdm!== false ) { 
    pepites["medium"] = pate_cookie_choco["medium"]+"-"+url_mdm; 
    }
    else if(url_mdm == false){
    pepites["medium"] = pate_cookie_choco["medium"]; 
    }
  }
  else if(url_mdm!== false){
    pepites["medium"] = url_mdm; 
  }
  if(pate_cookie_choco["campaign"] != undefined) {
    if(url_cpn!== false && pate_cookie_choco["campaign"].indexOf(url_cpn) != -1 ){
      pepites["campaign"] = pate_cookie_choco["campaign"];
    }
    else if(url_cpn!== false) { 
    pepites["campaign"] = pate_cookie_choco["campaign"]+"-"+url_cpn; 
    }  
    else if(url_cpn == false){
      pepites["campaign"] = pate_cookie_choco["campaign"]; 
    } 
  }
  else if(url_trm!== false){
    pepites["term"] = url_trm; 
  }
   if(pate_cookie_choco["campaign"] != undefined) {
    if(url_trm!== false && pate_cookie_choco["term"].indexOf(url_trm) != -1 ){
      pepites["term"] = pate_cookie_choco["term"];
    }
    else if(url_trm!== false) { 
    pepites["term"] = pate_cookie_choco["term"]+"-"+url_trm; 
    }  
    else if(url_trm == false){
      pepites["term"] = pate_cookie_choco["term]; 
    } 
  }
  else if(url_trm!== false){
    pepites["term"] = url_trm; 
  }
  Cookies.set('cookie_utms', pepites, { expires: 120 } );
}
