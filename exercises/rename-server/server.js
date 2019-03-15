const express = require("express")
const app = express()

app.use("/hello", require("./routes/helloRoutes"))
app.get('/', (req, res) => {
    res.send("Yolo world!");
});

app.listen(6500, () => {
    console.log("Server is running on port 6500")
})