class TypeClass 
{
    constructor(typeName)
    {
        this.typeName = typeName;
    }

    isConditionTrue()
    {
        throw new Error("Abstract method! please implement it in the type class.");
    }

    getResult()
    {
        //fetch the resulted string from relevent API
       // throw new Error("Abstract method! please implement it in the type class.");
    }

    getType()
    {
        throw new Error("Abstract method! please implement it in the type class.");
    }
}

module.exports = TypeClass;