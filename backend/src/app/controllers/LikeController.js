const Dev = require("../models/Dev");

class LikeController {
  async store(req, res) {
    const { devId } = req.params;
    const { user } = req.headers;
    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);
    if (!loggedDev || !targetDev)
      return res.status(400).json({ error: "Dev not exists!" });
    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("Match!");
    }
    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();
    return res.json(loggedDev);
  }
}

module.exports = new LikeController();
