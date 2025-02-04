const express = require("express");
const classifyRoutes = require("./routes/classify");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use( "/api", classifyRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
