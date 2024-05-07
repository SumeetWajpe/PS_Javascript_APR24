function GetData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success"), 3000);
  });
}

// var xmlHttpReq = new XMLHttpRequest();
//   xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/postss");
//   xmlHttpReq.onreadystatechange = function () {
//     if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
//       callback(JSON.parse(xmlHttpReq.responseText), null);
//     } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
//       callback(null, `Something went wrong - ${xmlHttpReq.status} !`);
//     }
//   };
//   xmlHttpReq.send(); // places the async call
