const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");
const fs = require("fs");

module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      //* İsteğin body kısmına eriş
      const body = await bodyParser(req);

      //* Eksik içerik var mı kontrol et varsa hata gönder
      if (
        !body.title ||
        !body.year ||
        !body.rating ||
        !body.genre ||
        !body.genre.length > 0
      ) {
        res.writeHead(400);
        res.end("Lütfen bütün alanları tanımlayın");
        return;
      }
      //* Kaydedilecek filme id ekle
      body.id = crypto.randomUUID();

      //* JSON dosyasında bütürün verileri al(js formatında)
      let data = fs.readFileSync("./data/movies.json", "utf-8");
      data = JSON.parse(data);

      //* Mevcut filmlerin üzerine yeni filmleri ekle
      data.movies.push(body);

      //* JSON dosyasını güncelle
      fs.writeFileSync("./data/movies.json", JSON.stringify(data));

      //* Client'a cevap gönder
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(body));
    } catch (error) {
      return res.end("Hata oluştu");
    }
  } else {
    res.end("Yanlış URL'e istek gönderdiniz");
  }
};
