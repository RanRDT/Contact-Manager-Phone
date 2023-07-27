const user = require("../Models/userModels");

exports.addContact = async (req, res) => {
  try {
    const founduser = await user.findOneAndUpdate({userName: req.body.userName },{$push:{contact: req.body.contact}});
    console.log(founduser.contact);
    res.status(200).json({ message: "creat susscfuly" });
  } catch (err) {
    res.status(500).json({ message: "faild add contact", err });
  }
};

exports.getContacts = async (req, res) => {
    try {
      const founduser = await user.findOne({userName: req.headers.username });
      res.status(200).json(founduser.contact);
    } catch (err) {
      res.status(500).json(err );
    }
  };

