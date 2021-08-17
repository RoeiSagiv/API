const fetch = require('node-fetch');
const typeClass = require('./TypeClass');
const typeEnum = require('./typeEnum');

//Class of the type 'kanye-quote', which inherit from TypeClass.
class KanyeWestQuote extends typeClass {

    constructor()
    {
        super(typeEnum.type[1]); 
    }

    //Function that check if the condition of this type is true.
    isConditionTrue(userFullName, userBirthYear)
    {
        if(Number(userBirthYear) > 2000 && userFullName.charAt(0) != 'A' && userFullName.charAt(0) != 'Z')
        {   
            return true;
        }
        else
        {
            return false;
        }
    }

    //Function that fetch a random quote of kanye from given API.
    getResult(userFullName)
    {
        //fetch the resulted string from relevent API
        return fetch('https://api.kanye.rest').then(res => res.json()).then(json => (json.quote)).catch(err => err.message);
    }

    //Function that return the type name.
    getType()
    {
        return this.typeName;
    }
}

module.exports = KanyeWestQuote;