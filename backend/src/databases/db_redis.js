const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.connect(); 

async function addToRedis(request, response){
    const {id, rascunho} = request.body;
    try{
        if(id != ''){
            client.SETEX(id, 7200, rascunho);
            return response.status(201).send('Cadastrado com sucesso!');
        }else{
            response.status(400).send('O id não pode ser vazio');
        }
    }catch(error){
        console.log(error);
    }
}

const getRascunho = (request, response)=>{

    const user = request.params.id;
        /*client.get(user,(err,res) => {
            if(res != null){
                const rascunho = JSON.parse(res.toString());

                response.status(200).send(rascunho);
            }
            else{
                response.send(err);
            }
        });*/
        client.get(user).then(function (result) {
            if(result != null){
                response.status(200).json(JSON.parse(result.toString()));
            }
            else{
                response.status(200).send('null')
            }
            
        });
}

module.exports = {addToRedis, getRascunho};
