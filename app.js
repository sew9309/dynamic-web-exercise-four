const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('about')
  })

app.get('/about/me', (req, res) => {
    res.send('about me')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})