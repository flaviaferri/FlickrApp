const app = require("express")();
const Flickr = require("flickr-sdk");
const flickr = new Flickr("3812d5994c7f54f440119dc9377a23bb");

app.get("/api/daily", async (req, res) => {
  try {
    const response = await flickr.photos.search({
      // Decided to use nature as a default, because it was receiving profane photos when using getRecent photos.
      text: "nature",
      per_page: 32,
      page: Math.floor(Math.random() * (50 - 1 + 1)) + 1,
    });
    res.statusCode = 200;
    res.end(JSON.stringify(response.body));
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = app;
