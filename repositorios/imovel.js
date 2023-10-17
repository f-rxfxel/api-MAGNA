let imoveis = [
    {
        id: 1,
        bairro: "Faisqueira",
        tipo: "Apartamento em condomínio fechado",
        aluguel: 818.20,
        venda: 185000.00,
        condominio: 185000.00,
        especificacoes: {
            quartos: 2,
            banheiros: 1,
            suites: 0,
            metros: 47,
            vaga_garagem: 1
        },
        informacoes_adicionais: {
            piscina: true,
            area_gourmet: true,
            playground: true,
            espaco_pet: true,
            academia: true,
            sauna: false,
            varanda: true,
            seguranca_24h: true,
            portaria: true,
            churrasqueira: true,
            jardim: true,
            quadra_esportiva: false,
            ar_condicionado: false
        }
    }
]
let ultimo_id = 1

const validacao = require("../validacoes/imovel")

const imovelRepositorio = () => {
    return {
        getAll: () => {
            if (imoveis.length == 0) {
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Nenhum imóvel encontrado."
                }))
            } else {
                return imoveis
            }
        },

        get: (id) => {
            const imoveisFiltrados = imoveis.filter(prod => prod.id == id)

            if (imoveisFiltrados.length == 0) {
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: "Nenhum imóvel encontrado."
                }))
            } else {
                return imoveisFiltrados[0]
            }
        },
        create: (dados) => {
            if (validacao(dados)) {
                dados.id = ++ultimo_id

                imoveis.push(dados)

                return dados
            } else {
                throw new Error("Dados inválidos para cadastrar.")
            }
        },
        destroy: (id) => {
            const imoveis_filtrados = imoveis.filter(prod => prod.id == id)

            if (imoveis_filtrados.length == 0) {
                throw new Error("Imovel inexistente")
            }

            imoveis = imoveis.filter(prod => prod.id != id)

            return true
        }
    }
}

module.exports = {
    imovelRepositorio
};