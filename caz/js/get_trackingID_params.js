function getAllUrlParams(url_string, param) {
  console.log(url_string)
  var url = new URL(url_string);
  var c = url.searchParams.get(param);
  console.log(c);
  return (c);
}

console.log(getAllUrlParams(window.location.href, "TrackingID"));
document.querySelectorAll('.IDProduit')[0].value = getAllUrlParams(window.location.href, "TrackingID");

console.log(window.location.href);
