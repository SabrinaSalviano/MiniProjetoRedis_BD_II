const Users = require('../models/users');

module.exports = {
    async create(resquest,response){
        const {nome, email}= resquest.body;

        await Users.create({
            nome, 
            email
        });

        return response.status(201).send('Cadastrado com sucesso!');
    },

    async getUsers(resquest,response){
        await Users.findAll().then((users => {
            return response.json(users);
        }));
    },

    async update(resquest,response){
        const {nome, email} = resquest.body;
        
        await Users.update(
            { 
                nome, 
                email
            },
            {
                where: {id: resquest.params.id}
            }
        );

        return response.status(201).send('Alterado com sucesso!');
    },

    async delete(resquest,response){
        await Users.destroy({where:{'id': resquest.params.id}});

        return response.status(201).send('Deletado com sucesso!');
    }
}
