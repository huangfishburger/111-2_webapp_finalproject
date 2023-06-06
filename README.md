# WepAPP-2023-Final-Project

FroGather
簡介：WebGIS平台讓使用者上傳物種發現/移除紀錄，提供志工一個系統性的平台進行移除，以及交流。

# File Structure
## FRONTEND
📦src  
 ┣ 📂assets => local data  
 ┃ ┣ 📜frog.json    
 ┃ ┣ 📜pin.png  
 ┃ ┣ 📜pin_green.svg  
 ┃ ┣ 📜pin_red.svg  
 ┃ ┗ 📜scenic_spot_C_f.json  
 ┣ 📂axios => 前端向後端拿資料的interface(POST, GET, ...) 📌  
 ┃ ┣ 📜addCommentLikes.js  
 ┃ ┣ 📜createRecord.js  
 ┃ ┣ 📜createRecordComment.js 
 ┃ ┣ 📜getFrog.js   
 ┃ ┣ 📜getRecordComments.js  
 ┃ ┣ 📜getRecords.js  
 ┃ ┣ 📜getReverseGeoding.js  
 ┃ ┗ 📜index.js  
 ┣ 📂components => 定義泛用的元件，可重複使用(ex: Button, Card, ...)  
 ┃ ┣ 📂Layers  
 ┃ ┃ ┣ 📜DrawVectorLayer.js  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┣ 📜Layers.js  
 ┃ ┃ ┣ 📜MapboxLayer.js  
 ┃ ┃ ┣ 📜RecordVectorLayer.js  
 ┃ ┃ ┗ 📜VectorLayer.js  
 ┃ ┣ 📂Map  
 ┃ ┃ ┗ 📜Map.js  
 ┃ ┣ 📂Sources  
 ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┗ 📜vector.js  
 ┃ ┣ 📜ActionButton.jsx  
 ┃ ┣ 📜BankInfo.jsx  
 ┃ ┣ 📜cardstyle.css 
 ┃ ┣ 📜CommentItem.jsx 
 ┃ ┣ 📜CustomSelect.jsx 
 ┃ ┣ 📜ImageUpload.jsx 
 ┃ ┣ 📜ListItems.jsx  
 ┃ ┣ 📜LoginButton.js  
 ┃ ┣ 📜LogoutButton.js  
 ┃ ┣ 📜NFTGallery.jsx 
 ┃ ┣ 📜NFTMintButton.jsx 
 ┃ ┣ 📜OptionCard.jsx  
 ┃ ┣ 📜ProblemCard.jsx
 ┃ ┣ 📜SearchResult.jsx 
 ┃ ┣ 📜Tags.jsx  
 ┃ ┗ 📜UserImg.jsx  
 ┣ 📂containers => 定義呈現資料的元件  
 ┃ ┣ 📂Sences => 大家在不同頁面接著往下寫  
 ┃ ┃ ┣ 📂Contact  
 ┃ ┃ ┃ ┗ 📜ContactPage.jsx  
 ┃ ┃ ┣ 📂Educate  
 ┃ ┃ ┃ ┣ 📜forg1.jpg
 ┃ ┃ ┃ ┣ 📜frog.jpg
 ┃ ┃ ┃ ┣ 📜frog2.jpg
 ┃ ┃ ┃ ┣ 📜frog3.jpg
 ┃ ┃ ┃ ┣ 📜frog4.jpg
 ┃ ┃ ┃ ┣ 📜Game.jsx
 ┃ ┃ ┃ ┣ 📜Problem.jsx
 ┃ ┃ ┃ ┣ 📜Result.jsx
 ┃ ┃ ┃ ┗ 📜Search.jsx  
 ┃ ┃ ┣ 📂Foundation  
 ┃ ┃ ┃ ┗ 📜FoundationPage.jsx  
 ┃ ┃ ┣ 📂Index  
 ┃ ┃ ┃ ┗ 📜IndexPage.jsx  
 ┃ ┃ ┣ 📂Record  
 ┃ ┃ ┃ ┣ 📂css  
 ┃ ┃ ┃ ┃ ┗ 📜RecordPage.css  
 ┃ ┃ ┃ ┣ 📂Modal  
 ┃ ┃ ┃ ┃ ┣ 📜CommentModal.jsx  
 ┃ ┃ ┃ ┃ ┣ 📜index.js  
 ┃ ┃ ┃ ┃ ┗ 📜UpdateRecordModal.jsx  
 ┃ ┃ ┃ ┣ 📜Lists.jsx  
 ┃ ┃ ┃ ┣ 📜MapContainer.jsx  
 ┃ ┃ ┃ ┗ 📜RecordPage.jsx  
 ┃ ┃ ┗ 📜index.js  
 ┃ ┗ 📜Navbar.jsx  
 ┣ 📂graphql 
 ┃ ┗ 📜index.js  
 ┣ 📂hook  => Context  
 ┃ ┗ 📜MapContext.js  
 ┣ 📜App.css  
 ┣ 📜App.js  
 ┣ 📜connection.js => 連接後端  
 ┣ 📜index.css => 整個網站的CSS設定  
 ┗ 📜index.js  

## BACKEND
db link: https://www.mongodb.com/  
註冊完DB後，複製.env.default改成.env，把裡面的MONGO_URL環境變數填上自己mongodb的token  
📦src  
 ┣ 📂controllers => interface用到的functions 📌  
 ┃ ┣ 📜frog.js  
 ┃ ┣ 📜record.js  
 ┃ ┗ 📜recordComments.js  
 ┣ 📂data => local data  
 ┃ ┗ 📜index.js  
 ┣ 📂Frog_NFT => 青蛙NFT的code和圖片（deploy 到 Sepolia 測試鏈，地址 0x35E108AF62bD185793E4a05c110b36ED1C038280）    
 ┣ 📂models => 建立DB Schema 📌  
 ┃ ┣ 📜FrogDB.js  
 ┃ ┣ 📜Record.js  
 ┃ ┣ 📜RecordComments.js  
 ┃ ┗ 📜User.js  
 ┣ 📂public   
 ┃ ┗ 📂assets   
 ┣ 📂routes => 後端接前端的interface 📌  
 ┃ ┣ 📜api.js => 整合這些路徑的檔案  
 ┃ ┣ 📜comments.js  
 ┃ ┣ 📜frog.js  
 ┃ ┣ 📜index.js  
 ┃ ┗ 📜record.js => 往下擴增檔案寫路徑  
 ┣ 📜.babelrc  
 ┣ 📜db.js => Create db connection  
 ┗ 📜server.js => Create server connection  