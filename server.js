const express = require('express');
const app = express();
const schemas = require('./schemas');
const types = require('./typeEnum');
const service = require('./service');
const middleware = require('./middleware');
const bodyParser = require("body-parser");
//let dbModule = require('./db');
//dbModule.connectToDb();

app.use(express.json());
app.use(bodyParser.json());

/*app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
*/

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/surprise',middleware(schemas.object1, 'query'), (req, res) => {
    
    const { userFullName, userBirthYear } = req.query;
    if(userFullName && userBirthYear)
    {
        service.getResponse(userFullName, userBirthYear).then(function(data) {
            res.send(data);
        });
        
    }
    else
    {
        res.json(req.query);
    }

    
});


app.get('/api/stats', (req, res) => {
    res.send(service.getStats());
});

/*app.post('/test', middleware(schemas.object1), (req, res) => {
    console.log('/update');
    res.json(req.body);
})
*/



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));