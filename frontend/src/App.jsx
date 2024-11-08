import { useState } from "react";
import axios from "axios"

import React from 'react'

const App = () => {
    const [fileData, setFileData] = useState();


   const handleFileChange=(e)=>{
    console.log(e.target.files);
    setFileData(e.target.files[0]);
    console.log(fileData);

   }
  const handleSubmit=async()=>{
    const formData=new FormData();
    formData.append('file',fileData);
    let api="http://localhost:8080/upload";
    const response=await axios.post(api,formData,{
        headers:{
            'Content-Type':'multipart/form-data',
        }
    })
    console.log(response);
    alert("file Uploaded!!");
  }
    
  return (
    <>
    <center>
    <h2>Welcome To File Uploading </h2>
    Upload image : <input type="file" onChange ={handleFileChange}/> 
    <button onClick={handleSubmit}>Upload</button>
    </center>
    </>
  )
}

export default App