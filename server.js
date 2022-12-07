import express from "express"
import fs from "fs"

const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

let musics = []

fs.readFile("json/music.json", "utf8", function (err, data) {
    err ? console.log(err) : musics = JSON.parse(data)
})

app.get("/musics", function (req, res) {
    res.json(musics)
})

app.get("/musics/:id", function (req, res) {
    const id = req.params.id
    const music = musics.find(music => music.id == id)
    res.json(music)
})

app.get("/", function (req, res) {
    res.sendFile("./index.html", { root: "." })
})

app.get("/main", function (req, res) {
    res.sendFile("./js/main.js", { root: "." })
})

app.get("/music", function (req, res) {
    res.sendFile("./js/music.js", { root: "." })
})

app.get("/display", function (req, res) {
    res.sendFile("./js/display.js", { root: "." })
})

app.get("/ajax", function (req, res) {
    res.sendFile("./js/ajax.js", { root: "." })
})

app.get("/style", function (req, res) {
    res.sendFile("./css/styles.css", { root: "." })
})

app.use((function (req, res) {
    res.sendStatus(404)
}))

app.listen(port, function () {
    console.log(`Server up and running at localhost:${port}`)
})