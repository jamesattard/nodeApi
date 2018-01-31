const mongoose = require("mongoose");
const User = mongoose.model("users");
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
      let users = await user.save();
      res.send(users);
    } catch (err) {
      next(err);
    }
  });
};
