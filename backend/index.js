const express = require('express');
const routes = require('./routes');
const postgres = require('./src/databases/db_postgres');
const redis = require('./src/databases/db_redis');
const usermodel = require('./src/models/users');

const app = express();
app.use(express.json());
app.use(routes);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('Ouvindo na porta ' + server.address().port)
})

// usermodel.sync({force: true});

postgres.authenticate().then(() =>{
    console.log('Conectado com Postgres!');
}).catch(err =>{
    console.log('error');
});
