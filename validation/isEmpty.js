const isEmpty = value => {
    return (
       value === undefined ||
       value === null ||
       (typeof value === 'object' && Object.keys(value).length === 0) ||
       (typeof value === 'string' && value.trim().length === 0)
    );
 };
 
 module.exports = isEmpty;
 
 //We create this function because the validator method isEmpty just work with strings. This function returns boolean to the object we are returning in register 