const http = require("http");
const getRequest = require("./methods/get");
const postRequest = require("./methods/post");
const deleteRequest = require("./methods/delete");

// 1) Server oluştur
const server = http.createServer((req, res) => {
  console.log("😀 istek geldi", req.method);
  /*
    ! Not:
    * Frontend e gönderilecek olan bütün cevaplara eklenilecek ve
    * `CORS` hatasını engelleyecek headerı tanımlayalım.
  */
  res.setHeader("Access-Control-Allow-Origin", "*");

  //* İstek atılan method türüne göre clienta cevap verecek fonksiyonu belirledik
  //* Fonksiyonları kod kalabalığı olmaması için module yapısı ile ayrı dosyalarda oluşturup import edip kullandık
  switch (req.method) {
    /*
      ! Not:
      * Front-end den bir post/put/patch/delete isteği atıldığı zaman tarayıcı öncelikle serverı 
      * bu istek tiplerini kabul ettiğini kontrol etmek amacıyla options metodu ile istek atar
      * Eğer options isteği gelince cevap göndermezsek diğer isteği hiç atmıyor.option gelince 
      * doğru header ile cevap verirsek optionsın ardından asıl isteği gönderiyor
    */
    case "OPTIONS":
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,PUT,PATCH,OPTIONS"
      );
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.end();
      break;
    case "GET":
      getRequest(req, res);
      break;
    case "POST":
      postRequest(req, res);
      break;
    case "DELETE":
      deleteRequest(req, res);
      break;
    default:
      //* cevabın durum kodunu belirleyelim.Hatalı bir istek olmasına rağmen 200 dönderir.Bunu düzeltelim.
      res.statusCode = 404;
      //* gönderilecek cevabın tipini belirleyelim çünkü xml,text,json olabilir.Bunu belirleyelim.
      res.setHeader("Content-Type", "application/json");
      //* cevabın içeriğini tanımladık
      res.write(
        JSON.stringify({
          message: "İstek yapılan adres tanımsız.",
        })
      );
      //* cliente cevabı gönder
      res.end();
  }
});

// 2) Belirli porta gelen istekleri dinle
const port = 5005;

server.listen(port, () => {
  console.log(`Server ${port}'a gelen istekleri dinlemeye başladı`);
});
