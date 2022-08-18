import { fetchCharactersList } from '@/network/api/characters.api'

/** fetch the list of characters
@return { promise } - request
*/
export const fetchCharacters = async (context, payload) => {
    const res = await fetchCharactersList()
    if (res) context.commit('SAVE_CHARACTERS_LIST', res.data)
    return res
}
