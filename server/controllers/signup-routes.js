const router = require("express").Router();

//RENDER HANDLEBARS --> HTML//
    router.get("/", async (req, res) => {
        res.render("signup", {
            loggedIn: req.session.loggedIn,
            loggedInUserData: req.session.loggedInUserData,
        });
    });

    module.exports = router;