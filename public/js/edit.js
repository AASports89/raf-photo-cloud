//***************************************************** EDIT POST MENU ***************************************************//
let image = "";
const submitPostHandler = async (event) => {
        event.preventDefault();
            console.log(image);
    const title = document.querySelector(".subject-input").value
    const content = document.querySelector(".content-input").value
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
    const post_id = document.querySelector(".current-post-id").innerHTML;
    if (!author_id) {
        alert("Error❗⛔ Unable to edit post, please login❗⛔");
    } else {
        if (title && content) {
            const response = await fetch("/api/post/" + post_id, {
                method: "PUT",
                body: JSON.stringify({ title, image, content, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace( "/")
                + 
                alert(`Success✅ Post edited❕✍`);
            } else {
                alert("Error❗⛔ Failed to update post❗⛔" +
                        response.status +
                        ": " +
                        response.statusText
                );
            }
            } else {
            alert("Error❗⛔ Please fill out all required fields❗⛔");
            }
        }
    };
//****************************************** IMAGE UPLOAD PROCESS ****************************************//
//CLOUDIARY WIDGET --> IMAGE UPLOAD VIA URL//
    var cloud_name = "dhqsixgmo";
    var upload_preset = "dpfyatxo";
    var widget = cloudinary.openUploadWidget({
            cloud_name: "dhqsixgmo", upload_preset: "dpfyatxo",
            stylesheet: '#cloudinary-widget .button.small_button.retry_upload {max-height:10px;} #cloudinary-widget .retry_upload_holder {margin-top:-20px; margin-left:180px;} #cloudinary-widget .file_info {display:none;}#cloudinary-widget .file_name {display:none;} #cloudinary-widget .placeholder_image {width:100px; height:60px;} #cloudinary-widget .image_cover {width:100px; height:60px;} #cloudinary-widget .image_holder {width:100px; height:60px;} #cloudinary-widget .error {float:left; font-size:9pt;} #cloudinary-widget .panel.progress .thumbnails {width:290px; height:100px;} #cloudinary-widget .panel.progress .thumbnails .thumbnail {margin:0px; padding:0px; background-color:#232323; position:relative; top:0px; left:0px; width:60px; height:60px; float:left;} #remote_url {margin-top:-45px;} #cloudinary-navbar {-moz-border-radius: 0px; -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget {max-width:422px; background:transparent; border:0px; -moz-border-radius: 0px -webkit-border-radius: 0px; border-radius: 0px;} #cloudinary-widget .drag_area {margin:5px; max-width:300px;} #cloudinary-navbar .close {display:none;} #cloudinary-overlay {background-color: transparent;} #cloudinary-navbar .source {clear: left} #cloudinary-navbar {float:left;} #cloudinary-widget {float:left;} span.or {max-height:10px; display:block; margin-top:-30px;} #cloudinary-widget .button, #cloudinary-widget .button.small_button {max-width:75px; max-height:10px; font-size:11pt; padding:13px; margin-top:-15px; margin-left:40px;} #cloudinary-widget .panel.local .drag_area .drag_content .label {font-size:14pt; margin-top:-85px; max-height:85px;} div.panel.local.active {height:140px; padding:5px; overflow-y:hidden;} #cloudinary-widget {background-color: #232323; max-height:240px; margin-left:-0px;} #cloudinary-widget .drag_area {margin-top:3px; max-height:100px; background:#2C2C2C; border: 2px dashed #168BD6;} #cloudinary-navbar .source .label {color:white;} .widget .panel.progress .thumbnails .thumbnail .image{display:none} #cloudinary-widget .image_cover { background: url(http://techdefencelabs.com/public/img/loading.gif); background-size: 98px 60px;} .drag_area img {display:none;}', inline_container: '#inline_container', sources: ['local','url']
        },
                (error, result) => {
                    if (!error && result && result.event === "success") 
       {console.log(result.info);
            image=result.info.url
            console.log(image);
       }
    });
//EVENT LISTENERS//
    document
        .querySelector(".edit-submit")
        .addEventListener("click", submitPostHandler
    );
    const deleteLinks = document.querySelectorAll(".delete-comment");
        deleteLinks.forEach((el) =>
        el.addEventListener("click", (event) => deleteCommentHandler(event))
    );