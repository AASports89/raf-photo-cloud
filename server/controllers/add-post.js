//DEPENDENCY & IMPORT//
const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            
            include: [
            {
                model: User,
                    attributes: ["id"],
            },
        ],
        order: [["createdAt", "DESC"]],
    });

        const post = postData.map((post) => post.get({ plain: true }));
            res.render("addpost", {
                loggedIn: req.session.loggedIn,
                loggedInUserData: req.session.loggedInUserData,
                post: post,
        });
        } catch (err) {
            res.status(500).json(err);
        }
});

module.exports = router;