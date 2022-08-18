import * as api from '@/network/api/characters.api'

/** fetch the list of characters
@return { promise } - request
*/
export const fetchCharacters = async (context, payload) => {
    const res = await api.fetchCharactersList()
    if (res) context.commit('SAVE_CHARACTERS_LIST', res.data)
    return res
}

/** fetch the detail of a character
@id { string, number } - id of the character
@return { promise } - request
*/
export const fetchCharacterById = async(context, id) => {
    const res = await api.fetchCharacterById(id)
    if (res) context.commit('SAVE_CHARACTER_DETAIL', res.data)
    return res
}
