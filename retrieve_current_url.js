// Retrieve my current url parameters
function getParameter(theParameter) {
  var params = window.location.search.substr(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p=params[i].split('=');
     if (p[0] == theParameter) {
      return decodeURIComponent(p[1]);
    }
  }
  return false;
}
url_src = getParameter('utm_source');
url_mdm = getParameter('utm_medium');
url_cpn = getParameter('utm_campaign');
url_trm = getParameter('utm_term');
