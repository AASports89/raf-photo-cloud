//DEPENDENCY//
    const router = require("express").Router();
//IMPORT//
    const userRoutes = require("./user-routes.js");
    const postRoutes = require("./post-routes.js");
    const commentRoutes = require("./comment-routes.js");

//API ROUTE PASS -->//
    router.use("/user", userRoutes);
    router.use("/post", postRoutes);
    router.use("/comment", commentRoutes);


    module.exports = router;