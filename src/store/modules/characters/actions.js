import * as api from '@/network/api/characters.api'

/** fetch the list of characters
@offset { number, string } - current page offset
@return { promise } - request
*/
export const fetchCharacters = async (context, offset) => {
    const res = await api.fetchCharactersList(offset)
    if (res) context.commit('SAVE_CHARACTERS_LIST', res.data.data)
    return res
}

/** fetch the detail of a character
@id { string, number } - id of the character
@return { promise } - request
*/
export const fetchCharacterById = async (context, id) => {
    const res = await api.fetchCharacterById(id)
    if (res) context.commit('SAVE_CHARACTER_DETAIL', res.data.data)
    return res
}

/** update the current page being fetched
@offset { string, number } - current offset for the page
@return { void }
*/
export const updatePage = (context, offset) => {
    context.commit('UPDATE_PAGE', offset)
}

/** clears the character details
@return { void }
*/
export const clearCharacterDetails = (context) => {
    context.commit('CLEAR_CHARACTER_DETAILS')
}
