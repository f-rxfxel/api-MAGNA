const express = require('express')
const rotasPadrao = require('./rotas/index.js')
const rotasImovel = require('./rotas/imovel.js')
const app = express()

app.use(express.json())
app.use(rotasPadrao)
app.use(rotasImovel)

app.listen(3333, () => {
    console.log("MAGNA está viva!")
})