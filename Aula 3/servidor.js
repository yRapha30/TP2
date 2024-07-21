const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    n1 = ''
    n2 = ''
    resultado = ''
    res.render("index")
})
app.post('/soma', (req, res) => {
    n1= parseFloat(req.body.n1x)
    n2 = parseFloat(req.body.n2y)
     resultado = n1 + n2
     res.render("index",{resultado})
})
app.post('/sub', (req, res) => {
    n1= parseFloat(req.body.n1x)
    n2 = parseFloat(req.body.n2y)
     resultado = n1 - n2
     res.render("index",{resultado})
})
app.post('/div', (req, res) => {
    n1= parseFloat(req.body.n1x)
    n2 = parseFloat(req.body.n2y)
     resultado = n1 / n2
     res.render("index",{resultado})
})
app.post('/mult', (req, res) => {
    n1= parseFloat(req.body.n1x)
    n2 = parseFloat(req.body.n2y)
     resultado = n1 * n2
     res.render("index",{resultado})
})
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})