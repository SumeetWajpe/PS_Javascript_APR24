function GetData(callback) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
      callback(JSON.parse(xmlHttpReq.responseText));
    }
  };
  xmlHttpReq.send(); // places the async call
}
