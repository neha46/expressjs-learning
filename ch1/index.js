//install nodemon for  updating changes

import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World lets learn express js  here!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})