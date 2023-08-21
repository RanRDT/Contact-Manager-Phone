const user = require("../Models/userModels");

exports.creatuser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json({ message: "creat susscfuly", newUser });
  } catch (err) {
    res.status(500).json({ message: "faild user creation", err });
  }
};

exports.addToLastCall = async (req, res) => {
  try {
    console.log(req.body.userName);
    const User = await user.findOne({ userName: req.body.userName });
    if (!User) {
      return res.status(404).json({ message: "User not found" });
    }
    const choosnContact = User.contact[req.body.idContact];
    const addFoundContact = await user.findOneAndUpdate(
      { userName: req.body.userName },
      {
        $push: {
          lastCall: {
            $each: [choosnContact],
            $position: 0,
          },
        },
      }
    );
    const newLastcall = addFoundContact.lastCall;
    res.status(200).json({
      message: "add to last calls susscfuly",
      newLastcall: newLastcall,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "faild to add to last call", error: err.message });
  }
};

exports.getLastCall = async (req, res) => {
  try {
    const founduser = await user.findOne({ userName: req.headers.username });
    if (!founduser) {
      return res.status(404).json({ message: "User not found" });
    }
    const last15Call = founduser.lastCall.slice(-15);
    console.log(last15Call);
    res.status(200).json(last15Call);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.deleteLastCall = async (req, res) => {
  try {
    console.log(req.query);
    const query = { userName: req.query.username };
    const update = { $pull: { lastCall: { name: req.query.lastCallName } } };
    const options = { new: true };
    const findUser = await user.findOneAndUpdate(query, update, options);
    console.log(findUser);
    res.status(200).json(findUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
