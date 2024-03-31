import React, { useState } from "react";

// let image = "";
// const cloudinary = require('cloudinary');

export default function SingleFileUploader() {
    
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

 

    // cloudinary.v2.config
    // ({
    //     cloud_name: 'dhqsixgmo',
    //     upload_preset: "dpfyatxo",
    //     api_key: '352941214251788',
    //     api_secret: 'Id60xIQQKv8fu4v1IPDhfXg2lRE',
    //     secure: true,
    // });

  
    const handleUpload = async () => {
      
    //     cloudinary.openUploadWidget({
    //     cloud_name: "dhqsixgmo", upload_preset: "dpfyatxo",
    //     stylesheet: '#cloudinary-widget .button.small_button.retry_upload {max-height:10px;} #cloudinary-widget .retry_upload_holder {margin-top:-20px; margin-left:180px;} #cloudinary-widget .file_info {display:none;}#cloudinary-widget .file_name {display:none;} #cloudinary-widget .placeholder_image {width:100px; height:60px;} #cloudinary-widget .image_cover {width:100px; height:60px;} #cloudinary-widget .image_holder {width:100px; height:60px;} #cloudinary-widget .error {float:left; font-size:9pt;} #cloudinary-widget .panel.progress .thumbnails {width:290px; height:100px;} #cloudinary-widget .panel.progress .thumbnails .thumbnail {margin:0px; padding:0px; background-color:#232323; position:relative; top:0px; left:0px; width:60px; height:60px; float:left;} #remote_url {margin-top:-45px;} #cloudinary-navbar {-moz-border-radius: 0px; -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget {max-width:422px; background:transparent; border:0px; -moz-border-radius: 0px -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget .drag_area {margin:5px; max-width:300px;} #cloudinary-navbar .close {display:none;} #cloudinary-overlay {background-color: transparent;} #cloudinary-navbar .source {clear: left} #cloudinary-navbar {float:left;} #cloudinary-widget {float:left;} span.or {max-height:10px; display:block; margin-top:-30px;} #cloudinary-widget .button, #cloudinary-widget .button.small_button {max-width:75px; max-height:10px; font-size:11pt; padding:13px; margin-top:-15px; margin-left:40px;} #cloudinary-widget .panel.local .drag_area .drag_content .label {font-size:14pt; margin-top:-85px; max-height:85px;} div.panel.local.active {height:140px; padding:5px; overflow-y:hidden;} #cloudinary-widget {background-color: #232323; max-height:240px; margin-left:-0px;} #cloudinary-widget .drag_area {margin-top:3px; max-height:100px; background:#2C2C2C; border: 2px dashed #168BD6;} #cloudinary-navbar .source .label {color:white;} .widget .panel.progress .thumbnails .thumbnail .image{display:none} #cloudinary-widget .image_cover { background: url(http://techdefencelabs.com/public/img/loading.gif); background-size: 98px 60px;} .drag_area img {display:none;}', inline_container: '#file', sources: ['local','url']
    // },
    //         (error: any, result: { event: string; info: { url: any; }; }) => {
    //             if (!error && result && result.event === "success") 
    //         {console.log(result.info);
    //             image=result.info.url
    //             console.log(image);
    //     }
    // });
    };

  return (
    <>
      <div className="container-fluid" id="container-uploader">
        
        <h1 id="upload-title">
            Share Your Pics!
        </h1>
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