import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//bodyParser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//Serving Static Files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`Express Server Started on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server Started on ${PORT}`);
});
