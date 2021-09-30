# even loop 作業

---

## 題目：

### 程式 1： 請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？

### 提示： 手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    readData(idx);
  }
}

readData(0);
console.log("after");
```

---

## 回答：

一、 1 至 500 後會印出 after。
二、程式先呼叫 readData，接著進入迴圈，idx 會從 1 印至 100 後，將數字 100 代入 if 內，再將 100 帶回 for 繼續加數字至 200，上述流程循環至數字 500，最後印出 after。

---

## 題目：

### 程式 2：請問以下執行結果為何？ after 會在什麼數字後印出？ 為什麼？

### 提示：手動自己畫畫看整段程式的執行過程，call stack 的變化為何？

```
function readData(idx) {
  for (let i = 0; i < 100; i++) {
    idx++;
    console.log(idx);
  }
  if (idx < 500) {
    setTimeout(function () {
      readData(idx);
    }, 0);
  }
}

readData(0);
console.log("after");
```

---

## 回答：

一、1 至 100 後先印出 after，再接著 101 至 500。
二、程式首先進行 for 迴圈印出 1 至 100，if 內遇到的 setTimeout 屬於 Web APIs 所以會外包處理，接著往下執行。
Web APIs 會將執行完畢的結果放至 Tesk Queue，列印完 after 後，等 stack 處理完畢 Tesk Queue 會再帶回 stack 內，依序執行相同流程直到印出 500。
