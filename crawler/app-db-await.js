const axios = require("axios");
const moment = require("moment");
const fs = require("fs/promises");
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

connection.connect();

function insertPromise(insertData) {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT IGNORE INTO stock (stock_no, date, deal, amount, count) VALUES (?, ?, ?, ?, ?)",
      insertData,
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
}

async function queryData() {
  let today = moment().format("YYYYMMDD");
  let format = "json";
  let stockCode = "0050";
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
    let firstItem = res.data.data[0];
    console.log(firstItem);

    let insertData = [
      stockCode,
      firstItem[0],
      firstItem[1],
      firstItem[2],
      firstItem[8],
    ];

    let result = await insertPromise(insertData);
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    connection.end();
  }
}

queryData();
