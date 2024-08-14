import express, { response } from "express";

const app = express()

app.get('/cadastro/:nome/:sobrenome/:idade', async (req, res) => {
    const params = req.params

    const message = "<h1>Cadastro com Sucesso</h1>" +
        "<strong>Nome: " + params.nome + "</strong><br>" +
        "<strong>SobreNome: " + params.sobrenome + "</strong><br>" +
        "<strong>Idade: " + params.idade + "</strong><br>"

    return res.send(message
    )
})

app.listen(8081, () => {
    console.log("Servidor Ativo")
})