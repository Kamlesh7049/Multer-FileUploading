const express=require("express");
const app=express();
const multer=require('multer');
const bodyparser=require('body-parser');
const cors=require('cors');
require("dotenv").config();

const port=process.env.PORT || 3000

app.use(cors());
//Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"photos/")
       
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage});
app.post("/upload",upload.single('file'),(req,res)=>{
    res.send("Your File Successfullly Uploaded!!")

})
app.listen(port,()=>{
    console.log(`Server run on ${port}!!!`);
    
})