const fs = require("fs");
const url = require("url");

/*
 * Eğerki clienten gelen istek:
 * "/api/movies" > adresine gelirse bütün filmleri gönder
 * "/api/movies/10" > adresine gelirse urlin sonundaki id değerine göre filmi getir
 */

module.exports = async (req, res) => {
  //* Yapılan isteğin temel adresini bulduk
  const baseURL = req.url.substring(0, req.url.lastIndexOf("/"));
  //* URL'in sonundaki id değerini bir değişkene aktar
  const id = req.url.split("/")[3];

  if (req.url === "/api/movies") {
    // 1) Durum kodunu belirle
    res.statusCode = 200;
    // 2) Headerları belirle
    res.setHeader("Content-Type", "application/json");
    // 3) json dosyasından bütün filmleri al
    const movies = fs.readFileSync("./data/movies.json", "utf-8");
    // 4) clienta cevabı gönder
    return res.end(movies);
  } else if (baseURL === "/api/movies" && id) {
    // 1) Bütün filmleri al (javascript formatında al)
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

    // 2) url'e eklenen idli filmi aldığımız film dizi içerisinde bul
    const movie = data.movies.find((movie) => movie.id === id);

    if (movie) {
      // 3) Eğerki film bulunursa clienta filmi gönder
      res.writeHead(200, { "Content-Type": "application/json " }); // statusCode ve setHeader kullanmak yerine ikisini aynı anda yapacağımız writeHead metodu kullanabiliriz

      res.end(JSON.stringify(movie));
    } else {
      // 4) Film bulunamazsa clienta hata gönder
      return res.end("Geçersiz id");
    }
  } else {
    return res.end("Yol bulunamadı");
  }
};
