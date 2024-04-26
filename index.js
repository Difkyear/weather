import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs", { weather: "123" });
});

app.post("/check", async (req, res) => {
  try {
    let body = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${req.body.latitude}&lon=${req.body.longitude}&appid=8276314d7d4cbd0fefbd69d4292a9190`
    );
    console.log(JSON.stringify(body.data.weather[0]));
    res.render("index.ejs", { weather: body.data.weather[0] });
  } catch (error) {
    console.log(error.response);
  }
});

app.post("/checkBySelect", async (req, res) => {
  console.log(
    `api.openweathermap.org/data/2.5/forecast?id=${req.body.cityId}&appid=8276314d7d4cbd0fefbd69d4292a9190`
  );
  try {
    let body = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?id=1809858&appid=8276314d7d4cbd0fefbd69d4292a9190`
    );
    console.log("123" + JSON.stringify(body.data));
    res.render("index.ejs", { weather: JSON.stringify(body.data) });
  } catch (error) {
    console.log("erro" + error);
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
