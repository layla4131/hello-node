const axios = require("axios");
const moment = require("moment");

let stockCode = "2330";
// let today = "20211017";
let today = moment().format("YYYY-MM-DD");
let format = "json";

// "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=" + format + "&date=" + today + "&stockNo=" + stockCode
// `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=${format}&date=${today}&stockNo=${stockCode}`

async function querydata() {
  try {
    let res = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: format,
          date: today,
          stockNo: stockCode,
        },
      }
    );
    console.log(res.data);
  } catch (e) {
    console.error("發生錯誤啦", e);
  }
}

querydata();
