const fetch = require('node-fetch');
const typeClass = require('./TypeClass');
const typeEnum = require('./typeEnum');

class ChuckNorrisJoke extends typeClass {

    constructor()
    {
        super(typeEnum.type[0]); 
    }

    isConditionTrue(userFullName, userBirthYear)
    {
        if(Number(userBirthYear) <= 2000)
        {   
            return true;
        }
        else
        {
            return false;
        }
    }

    getResult(userFullName)
    {
        //fetch the resulted string from relevent API
        return fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(json => (json.value)); 
    }

    getType()
    {
        return this.typeName;
    }
}

module.exports = ChuckNorrisJoke;