//DEPENDENCY & IMPORT//
const router = require("express").Router();
const { Post } = require("../models");

//EDIT --> POST//
router.get("/:id", async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
    if (post) {
        res.render("useredit", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
            postData: post,
        });
    } else {
        res.redirect("/addpost");
    }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;