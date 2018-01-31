const User = require("../models/User");
const bodyLogger = require("../middlewares/bodyLogger");

module.exports = app => {
  app.get("/api/users", bodyLogger, async (req, res, next) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/users", bodyLogger, async (req, res, next) => {
    const { username, name, surname } = req.body;
    const user = new User({
      username,
      name,
      surname
    });

    try {
      const users = await user.save();
      res.send(users);
    } catch (err) {
      next(err);
    }
  });
};
