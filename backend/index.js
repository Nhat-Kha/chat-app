const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json())
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            {headers: {"private-key": "cc8d783e-db8b-4cdc-8a38-688ae596d1a1"}}
        );
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(500).json({ error: "Internal Server Error" });
        // return res.status(e.response.status).json(e.response.data)
    }
});


app.listen(3001);

