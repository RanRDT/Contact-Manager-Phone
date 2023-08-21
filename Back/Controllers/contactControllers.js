const user = require("../Models/userModels");

exports.addContact = async (req, res) => {
  try {
    console.log(req.body);
    console.log(typeof req.body.contact);
    const founduser = await user.findOneAndUpdate(
      { userName: req.body.userName },
      {
        $push: {
          contact: {
            $each: [req.body.contact],
            $position: 0,
          },
        },
      }
    );
    res.status(200).json({ message: "creat susscfuly" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getContacts = async (req, res) => {
  try {
    const founduser = await user.findOne({ userName: req.headers.username });
    res.status(200).json(founduser.contact);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.deleteContact = async (req, res) => {
  try {
    console.log(req.query);
    const query = { userName: req.query.username };
    const update = { $pull: { contact: { name: req.query.contactName } } };
    const options = { new: true }; 
    const findUser = await user.findOneAndUpdate(query, update, options);
    res.status(200).json(findUser);
  } catch (err) {
    res.status(500).json(err.message); 
  }
};

