// 套件:
// - 自己開發
// - 用第三方
// - 用內建

// 這幾段等於阿帕契跟PHP 是伺服器基本的內容
const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (request, response) => {
  console.log(request.url);
  let path = request.url;

  response.setHeader("Content-Type", "text/html;charset=UTF-8");
  switch (path) {
    case "/":
      response.end("這是首頁");
      break;
    case "/member":
      let htmlContent = await fs.readFile("member.html", "UTF-8");
      response.end(htmlContent);
      break;
    default:
      response.statusCode = 404;
      response.end("Not Found");
  }
});

server.listen(3005, () => {
  console.log("網站伺服器啟動嚕 在3005");
});
