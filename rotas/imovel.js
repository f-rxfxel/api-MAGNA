const { imovelRepositorio } = require('../repositorios/imovel')
const repositorio = imovelRepositorio()

const Router = require('express').Router()

Router.get('/imoveis', (req, res) => {
    try {
        const imoveis = repositorio.getAll()
        res.send(imoveis)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)

        res.status(dadosDoErro.status).send(dadosDoErro.msg)
    }
})

Router.get('/imoveis/:id', (req, res) => {
    try {
        const { id } = req.params

        const imovel = repositorio.get(id)

        res.send(imovel)
    } catch (err) {
        const dadosDoErro = JSON.parse(err.message)

        res.status(dadosDoErro.status).send(dadosDoErro.msg)
    }
})

Router.post("/imoveis", (req, res) => {
    try {
        const dados = req.body

        const imovelCriado = repositorio.create(dados)

        res.send(imovelCriado)
    } catch (err) {
        res.status(400).send(err.message)
    }
})

Router.delete("/imoveis/:id", (req, res) => {
    try {
        const { id } = req.params

        repositorio.destroy(id)

        res.status(204).send()
    } catch (err) {
        res.status(400).send(err.message)
    }
})

module.exports = Router