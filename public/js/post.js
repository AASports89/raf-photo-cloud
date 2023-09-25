//***************************************************** POST MENU ***************************************************//
const submitCommentHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector(".comment-input").value;
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
    const post_id = document.querySelector(".current-post-id").innerHTML;
    const image = "";
        if (!author_id) {
            alert("Error❗⛔ Unable to post, please login❗⛔");
        } else {
        if (comment) {
            const response = await fetch("/api/comment/", {
                method: "POST",
                body: JSON.stringify({ comment, image, author_id, post_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/post/" + post_id + "#comment-section");
                + 
                alert(`Success✅ New comment added❕✍`);
                document.location.reload();
            } else {
                alert(
                    "Error❗⛔ Failed to comment❗⛔" +
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
//DELETE COMMENT//
    const deleteCommentHandler = async (event) => {
        event.preventDefault();
        const deleteCommentId = event.target.getAttribute("data-id");
        const currentPostId = document.querySelector(".current-post-id").innerHTML;
        console.log(2);
        if (deleteCommentId) {
            const response = await fetch("/api/comment/" + deleteCommentId, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/post/" + currentPostId + "#comment-section") 
                                        +
                    alert("Warning❗⛔ Comment deleted❗❌");
                document.location.reload();
            } else {
                alert(
                    "Error❗⛔ Failed to delete comment❗⛔" +
                        response.status +
                        ": " +
                        response.statusText
                );
            }
        }
    };
//EVENT LISTENERS//
    document
        .querySelector(".comment-submit")
        .addEventListener("click", submitCommentHandler);

    const deleteLinks = document.querySelectorAll(".delete-comment");
    deleteLinks.forEach((el) =>
        el.addEventListener("click", (event) => deleteCommentHandler(event))
    );