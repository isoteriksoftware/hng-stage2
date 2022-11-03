const app = require("express")();

app.get("/", (req, res) => {
  return res.json({
    slackUsername: "imranabdulmalik01",
    backend: true,
    age: 20,
    bio: "My name is Imran Abdulmalik, a programming enthusiast!",
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
