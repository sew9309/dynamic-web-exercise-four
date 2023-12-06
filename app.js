const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))

const indexRoute = require('./routes/index')
const aboutRoute = require('./routes/about')
// const aboutMeRoute = require('./routes/about/me')


app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})