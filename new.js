let express = require("express");
const fileS = require("fs");
let app = express();
let cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/** API path that will upload the files */
app.post("/upload", function (req, res) {
  let data = req.body;
  // console.log("data", data);
  fileS.writeFile("./Data.json", JSON.stringify(data), "utf-8", (err) => {
    console.log(err);
  });
  res.send(data);
});
app.get("/getdata", function (req, res) {
  fileS.readFile("./Data.json", "utf-8", (err, result) => {
    res.send(JSON.parse(result));
    
  });
  // res.send("Hello World")
});
// app.listen("3000", function () {
//   console.log("running on 3000...");
// });
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));
