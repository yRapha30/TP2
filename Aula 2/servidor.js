const express = require ('express')
const app = express()
app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
const PORT = 8080

app.get("/", (requisicao, resposta) => {
  resposta.send('')
})
app.get("/index", (requisicao, resposta) => {
  resposta.render('calculadora')
})
  app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))