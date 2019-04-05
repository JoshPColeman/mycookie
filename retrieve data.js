// Retrieve data from the cookie and use it on your page
var cookie = Cookies.get('cookie_utms');
if(cookie != undefined){
  cookie_choco = JSON.parse(cookie);
  cookie_src = cookie_choco["source"];
  cookie_mdm = cookie_choco["medium"];
  cookie_cpn = cookie_choco["campaign"];
  cookie_trm = cookie_choco["term"];
  // Now be creative and collect data !
}
