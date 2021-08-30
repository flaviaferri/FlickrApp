const app = require("express")();
const Flickr = require("flickr-sdk");

const flickr = new Flickr("3812d5994c7f54f440119dc9377a23bb");

app.get("/api", (req, res) => {
  flickr.photos
    .search({
      text: "doggo",
    })
    .then(function (response) {
      res.end(JSON.stringify(response.body));
    })
    .catch(function (err) {
      console.error("Error", err);
    });
});

module.exports = app;
