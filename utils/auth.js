//MIDDLEWARE --> REDIRECT USER --> LOGIN//
  const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect("/login");
    } else {
      next();
    }
  };
//MIDDLEWARE --> REDIRECT ADMIN --> LOGIN//
  const withAuthAdmin = (req, res, next) => {
    if (!req.session.loggedInUserData.isAdmin) {
      res.redirect("/");
    } else {
      next();
    }
  };

  module.exports = [withAuth, withAuthAdmin];
