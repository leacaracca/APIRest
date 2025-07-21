export const isStringEmpty = (str) => {
    
    return str === null || str === undefined || (typeof str === 'string' && str.trim() === '')

}

export const isNumberEmpty = (num) =>{

    return  num ===  null || num === undefined || typeof num !== 'number'

}