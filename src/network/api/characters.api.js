import httpClient from '@/network/client'

/** fetch the list of characters
@return { promise } - request
*/
export const fetchCharactersList = () => {
    return httpClient({
        method: 'GET',
        url: 'characters'
    })
}

/** fetch a single character by id
@id { string, number } - id of the character
@return { promise } - request
*/
export const fetchCharacterById = id => {
    return httpClient({
        method: 'GET',
        url: `characters/${id}`,
    })
}
