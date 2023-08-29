const express = require("express");
require("./db/config");
const User =require("./db/users.js")
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.get('/', (req,resp)=>{
    resp.send("working")
})

app.post('/signup', async(req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)
})

app.listen(4000,()=>{
    console.log("port number 4000 started")
})