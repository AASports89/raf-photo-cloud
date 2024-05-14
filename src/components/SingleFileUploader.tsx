import React, { useState } from "react";
import Navbar from "./Navbar";

const SingleFileUploader = () => {
    
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  
    const handleUpload = async () => {

    };

  return (
    <>
      <div className="row justify-content-center" id="container-uploader">
        <Navbar />
        <h2 id='signinHeader' className="card">Share Pictures</h2>
        <label htmlFor="file" className="sr-only">
          Upload Pics:
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && <button className="btn btn-primary" onClick={handleUpload}><b>Upload</b>
      <i id="upload" className="fa-solid fa-cloud-arrow-up"></i>
      </button>}
      
    </>
  );
};

export default SingleFileUploader;