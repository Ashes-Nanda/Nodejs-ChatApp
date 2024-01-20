const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name: username},
      {headers: {"private-key": "4a1277f0-31b0-41fb-9154-32480df3cec4"}}
    )
    return res.status(r.status).json(r.data)
  } catch(e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(3031);