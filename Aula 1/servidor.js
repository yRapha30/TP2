const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    let x = 10
    let y = 20
 response.send(`soma = ${ x + y }`)
})
app.listen(8080)
