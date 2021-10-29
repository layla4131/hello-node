const express = require("express");
let app = express(); // application

// 路由 route / router
// app.Method(Path,Handler)
// Method: GET, POST, PUT , DELETE , PATH , ...

app.get("/", (req, rea) => {
  res.send("我是首頁");
});

app.get("/member", (req, res) => {
  res.send("我是會員頁");
});

// 3001 port
app.listen(3001, () => {
  console.log("express app 啟動了喔");
});
