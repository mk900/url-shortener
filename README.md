# Project Title 專案名
 
 URL-Shortener
 短網址產生器

======================================= 
![screenshot](https://github.com/mk900/url-shortener/blob/master/screenshot-1.GIF)

![screenshot](https://github.com/mk900/url-shortener/blob/master/screenshot-2.GIF)
 
**功能**
--
1. **基本版**

   * 使用者可以在表單輸入原始網址
   * 送出表單之後，畫面會回傳格式化後的短網址，指定規格: 5 碼英數組合
   * 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址，瀏覽器就會導向原本的網站
   
2. **進階版**

   * 使用者可以按 Copy 來複製縮短後的網址
=========================================== 
--

body-parser<br>
connect-flash<br>
express<br>
express-handlebars<br>
method-override<br>
mongoose<br>
============================================= 
## 安裝流程
--
1.打開terminal並輸入git clone指令，將專案檔案下載到本機電腦。<br>
　　`git clone`<br>
  
2.進入資料夾 url-shortener-master<br>
　　`cd url-shortener-master`<br>
  
3.在 Terminal 輸入 npm install 指令，安裝 npm 套件<br>
　　`npm install`<br>

4.執行專案<br>
　　`npm run dev`<br>

5. 預設 port 為 3000，請直接打開瀏覽器，並在 URL 輸入 http://localhost:3000/ 即可瀏覽網頁

## Deployment 開發使用

套件安裝完畢後，可用專案所設定的統一指令 `npm start`，即可啟用
