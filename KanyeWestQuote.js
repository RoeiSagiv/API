const fetch = require('node-fetch');
const typeClass = require('./TypeClass');
const typeEnum = require('./typeEnum');

class KanyeWestQuote extends typeClass {

    constructor()
    {
        super(typeEnum.type[1]); 
    }

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

    getResult(userFullName)
    {
        //fetch the resulted string from relevent API
        return fetch('https://api.kanye.rest').then(res => res.json()).then(json => (json.quote));
    }

    getType()
    {
        return this.typeName;
    }
}

module.exports = KanyeWestQuote;