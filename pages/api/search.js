const app = require("express")();
const Flickr = require("flickr-sdk");
const flickr = new Flickr("3812d5994c7f54f440119dc9377a23bb");

app.get("/api/search", async (req, res) => {
  try {
    const response = await flickr.photos.search({
      text: req.query.search,
    });
    res.statusCode = 200;
    res.end(JSON.stringify(response.body));
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = app;
