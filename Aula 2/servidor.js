const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    let resultado = ""
    response.render(`index`, {resultado})
})
app.post('/mol', (req, response) => {
    let x = parseFloat(req.body.Massa)
    let y = parseFloat(req.body.MassaMol)
    let resultado = (x / y)
    response.render(`index`, {resultado})
})
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})