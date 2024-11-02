const fs = require("fs");
module.exports = async (req, res) => {
  // * Request base address
  const baseURL = req.url.substring(0, req.url.lastIndexOf("/"));
  // * the ID extract from the end of the URL.
  const id = req.url.split("/")[3];
  console.log(id);
  if (baseURL === "/api/movies" && id) {
    //* Get all the movies
    const data = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));
    console.log(data);
    //* Find the movie with the known ID in the array
    const isFound = data.movies.find((i) => i.id == id);
    //* If there isn't a movie with the known ID in the array
    if (!isFound) {
      res.writeHead(404);
      return res.end("ID is invalid");
    }

    //* Remove the movie with the specified ID from the array
    const filtred = data.movies.filter((item) => item.id != id);
    //* Write the new array to the JSON file
    fs.writeFileSync("./data/movies.json", JSON.stringify({ movies: filtred }));

    //* Send a response to the client
    res.writeHead(204, { "Content-Type": "application/json" });
    return res.end();
  } else {
    res.writeHead(404);
    return res.end("URL not found");
  }
};
