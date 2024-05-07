function GetData() {
  return new Promise((resolve, reject) => {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
        resolve(JSON.parse(xmlHttpReq.responseText));
      } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
        reject(xmlHttpReq.status);
      }
    };
    xmlHttpReq.send(); // places the async call
  });
}
