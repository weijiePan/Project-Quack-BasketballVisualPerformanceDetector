import express from "express";

const app = express();
const port = process.env.port||3000;

app.get("/", (req,res)=>{
    res.send("index");
})
app.listen(port, ()=>{
    console.log("listening on http://localhost:" + port);    
});


