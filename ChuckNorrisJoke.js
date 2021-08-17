const fetch = require('node-fetch');
const typeClass = require('./TypeClass');
const typeEnum = require('./typeEnum');

//Class of the type 'chuck-norris-jokes', which inherit from TypeClass.
class ChuckNorrisJoke extends typeClass {

    constructor()
    {
        super(typeEnum.type[0]); 
    }

    //Function that check if the condition of this type is true.
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

    //Function that fetch a random joke of chuck norris from given API.
    getResult(userFullName)
    {
        //fetch the resulted string from relevent API
        return fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(json => (json.value)).catch(err => err.message); 
    }

    //Function that return the type name.
    getType()
    {
        return this.typeName;
    }
}

module.exports = ChuckNorrisJoke;