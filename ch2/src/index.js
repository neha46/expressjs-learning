//setup babel  with express js

import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Anisha come and learn express ');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
