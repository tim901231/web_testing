import React, { useState } from "react";
import axios from "axios";
import instance from "./api";

const Multi = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = async (e) => {
    let formData = new FormData();
    formData.append("data", selectedFile);
    const response = await instance.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
  };
  const handleSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
 
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleSelect} />
        <input type="submit" value="Upload File" />
      </form>
  
  );
};

export default Multi;