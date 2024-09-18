const model = require("./model");

// Register
const setpeople = async (req, res) => {
  const { usrnm, pwrd, mail, playlist } = req.body;
  try {
    const userdata = new model({ usrnm, pwrd, mail, playlist });
    const data = await userdata.save();
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};

//Login
const checkpeople = async (req, res) => {
  const { usrnm, pwrd } = req.body;
  try {
    const tofind = await model.find({ usrnm, pwrd });
    // console.log(tofind);
    if (tofind.length === 0) {
      res.send("not exist");
    } else {
      res.send("exist");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

//add to playlist

const addplaylist = async (req, res) => {
  const { playlist } = req.body;

  try {
    const data = await model.updateOne(
      { usrnm: req.params.usrnm },
      { $push: { playlist } }
    );
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

//Get the data
const getplaylist = async (req, res) => {
  const { usrnm } = req.params;
  try {
    const data = await model.find({ usrnm }, { playlist: 1 });
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};
module.exports = { checkpeople, setpeople, addplaylist, getplaylist };
