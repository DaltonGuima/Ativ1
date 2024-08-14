import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dbAtiv', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!')
}).catch(erro => {
    console.log('Falha ao se conectar ' + erro)
})

const Clientes = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
})

Clientes.sync({ force: true })

Clientes.create(
    {
        nome: 'Gabriel Magalhães de Oliveira',
        endereco: 'Uma rua ae men',
        bairro: 'oof',
        cep: '00000-000',
        telefone: '(00) 0000-0000',
        celular: '(00) 90000-0000'
    },
    {
        nome: 'Dalton Guimarães',
        endereco: 'Na casa do Carilio',
        bairro: 'Bagulhos',
        cep: '00000-000',
        telefone: '(00) 0000-0000',
        celular: '(00) 90000-0000'
    },
    {
        nome: 'Master Chief',
        endereco: 'Universo',
        bairro: 'Halo',
        cep: '00000-000',
        telefone: '(00) 0000-0000',
        celular: '(00) 90000-0000'
    },
)