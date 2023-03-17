const express = require('express')
const app = express()

// Heroku/Fly dynamically sets a port
// eslint-disable-next-line
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string when needed to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log('server started on port 5000')
})
