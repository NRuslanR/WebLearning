class Action 
{
    constructor(type, data)
    {
        if (type == null || type == undefined)
            throw 'type is null';

        this.type = type;
        this.data = data;
    }

    getType()
    {
        return this.type;
    }

    getData()
    {
        return this.data;
    }
}

export { Action };