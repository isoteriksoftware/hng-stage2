const app = require("express")();

app.get("/", (req, res) => {
  return res.json({
    slackUsername: "imranabdulmalik01",
    backend: true,
    age: 20,
    bio: "My name is Imran Abdulmalik, a programming enthusiast!",
  });
});

app.post("/", (req, res) => {
  const body = req.body;
  const x = parseInt(body.x ?? 0);
  const y = parseInt(body.y ?? 0);
  let result = 0;

  switch (body.operation_type) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
  }

  return res.json({
    slackUsername: "imranabdulmalik01",
    operation_type: body.operation_type,
    result: result,
  });
});

const port = process.env.PORT || 5000;
app.listen(port);
