const validar = (dados) => {
    let valido = true

    if(!dados.bairro){
        valido = false
    }

    if(!dados.tipo){
        valido = false
    }

    if(!dados.aluguel == 0 && !dados.venda == 0){
        valido = false
    }

    return valido
}

module.exports = validar