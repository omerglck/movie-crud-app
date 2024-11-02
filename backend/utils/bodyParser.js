module.exports = bodyParser = (request) => {
  return new Promise((resolve, reject) => {
    try {
      //* Fonksiyonun göndereceği cevabı tanımlayalım
      let body = "";

      //* frontendden bodynin her parçası geldiğinde onu al ve yukarıda tanımladığımız body değişkenine ekle
      //* veriler backende giderken toplu olarak gitmez parça parça gider ve biz bu parçaları birleştirmek için bu
      //* metodu kullandık dataları izle ve fonksiyonu çalıştır değişkene ekle chunk dediğimiz yapı da zaten yığın anlamına
      //* gelir
      request.on("data", (chunk) => {
        body += chunk;
      });
      //* Yüklenme bittiğinde json verisini js verisine çevir
      request.on("end", () => {
        //* fonksiyonun çağrıldığı yere body kısmını return et
        resolve(JSON.parse(body));
      });
    } catch (err) {
      //* hata oluşursa hatayı dönder
      reject(err);
    }
  });
};
