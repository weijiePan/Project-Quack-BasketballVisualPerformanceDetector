import express from "express";
import multer from "multer";
import bodyParser from "body-parser"
const app = express();
const port = process.env.port|3000;
const upload = multer({dest:"upload/"});

app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`);
})
app.use(express.urlencoded({extended:true}));
app.get("", (req,res)=>{
    res.send("hi");
})

app.post("/video/upload", upload.single("name"), (req,res)=>{
    console.log(req.body);
    res.send(req.body);
})