import {
    addCharacter,
    removeCharacter,
    updateCharacter,
    getCharacterById,
    getAllCharacters
} from '@/localStorageMDW/characters'

/** fetch list of characters from the storage
@return { promise } request
*/
export const fetchMyCharacters = async (context) => {
    const res = await getAllCharacters()
    if (res) context.commit('SAVE_MY_CHARACTERS', res)
    return res
}

/** fetch a character from the local storage
@id { string, number} - id of the character
@return { promise } - request
*/
export const fetchMyCharacterById = async (context, id) => {
    const res = await getCharacterById(id)
    console.log(res)
    if (res) context.commit('SAVE_MY_CHARACTER_DETAIL', res)
    return res
}

/** add a new character to my collection of characters
@character { object } - character object
@return { promise }
*/
export const addNewCharacter = async (context, payload) => {
    try {
        const res = await addCharacter(payload.name, payload)
        if (res) await context.dispatch('fetchMyCharacters')
        return res
    } catch (err) {
        return Promise.reject(err)
    }
}
