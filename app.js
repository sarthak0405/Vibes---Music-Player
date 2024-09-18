// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// // const collection = require("./mongoNode");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Connect to MongoDB via mongoose and create a database while connecting
// mongoose
//   .connect("mongodb://localhost:27017/signup")
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Failed to connect to MongoDB:", error);
//   });

// // Create a schema
// const newschema = mongoose.Schema({
//   usrnm: { type: String, required: true },
//   pwrd: { type: String, required: true },
//   mail: { type: String, required: true },

// });

// // Create a model
// const Collection = mongoose.model("Collection", newschema);

// // Define routes
// app.post("/", async (req, res) => {
//   const { usrnm, pwrd, mail } = req.body;

//   try {
//     const result = await Collection.create({ usrnm, pwrd, mail });
//     console.log("Data inserted successfully:", result);
//     res.status(201).send("Data inserted successfully");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.post("/login", async (req, res) => {
//   const { usrnm, pwrd } = req.body;

//   try {
//     // Check if user with given username and password exists
//     const user = await Collection.findOne({ usrnm: usrnm, pwrd: pwrd });

//     if (user) {
//       res.json("exists");
//     } else {
//       res.json("does not exist");
//     }
//   } catch (error) {
//     console.error("Error checking username and password:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
// const PORT = 8000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./route");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/vibess")
  .then("Connected")
  .catch((err) => console.log(err));

app.use("/", routes);
app.listen(8000, () => {
  console.log("working on 8000");
});
