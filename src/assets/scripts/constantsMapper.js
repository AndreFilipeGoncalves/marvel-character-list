/**********************************************************
 this mapper is used to map entries added as constants
like store modules, where we want to control the
naming of the constants
***********************************************************/

/** build a constant mapper mapper
@list { Object } - contains the constants we want to map
@return { Proxy } - which will validate the existence of the constant
*/
export const buildConstantsMapper = (list) => {
    const options = {
        get (target, key) { return getValidator(target, key) }
    }
    return new Proxy(list, options)
}

/** validates if the property exist in the list
@target { Object } - contains the list with all the entries
@key { String } - the element we are trying to get
@return { String || Error } - the string corresponding to the code, or error
*/
const getValidator = (target, key) => {
    if (Object.keys(target).includes(key)) return target[key]
    throw Error(`No element found with the name "${key}"`)
}
