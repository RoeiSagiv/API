const typeClass = require('./TypeClass');
const typeEnum = require('./typeEnum');

class UserNameSum extends typeClass {
    constructor()
    {
        super(typeEnum.type[2]); 
    }

    isConditionTrue(userFullName,userBirthYear)
    {
        if(userFullName.charAt(0) != 'Q')
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
        let sumOfLetters = 0;
        for(let char of userFullName)
        {
            if(char != " ")
            {
                sumOfLetters = sumOfLetters + (char.toLowerCase().charCodeAt(0) - 96);
            }
        }

        return sumOfLetters;
    }

    getType()
    {
        return this.typeName;
    }
}

module.exports = UserNameSum;