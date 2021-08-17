const typeClass = require('./TypeClass');
const typeEnum = require('./typeEnum');

//Class of the type 'name-sum', which inherit from TypeClass.
class UserNameSum extends typeClass {
    constructor()
    {
        super(typeEnum.type[2]); 
    }

    //Function that check if the condition of this type is true.
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

    //Function that convert the user's name to numbers and calculate the sum.
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

    //Function that return the type name.
    getType()
    {
        return this.typeName;
    }
}

module.exports = UserNameSum;