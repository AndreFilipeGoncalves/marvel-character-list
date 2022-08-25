import {
    addCharacter,
    removeCharacter,
    updateCharacter,
    getCharacterByName,
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
@name { string, number} - name of the character
@return { promise } - request
*/
export const fetchMyCharacterByName = async (context, name) => {
    const res = await getCharacterByName(name)
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

/** updates an existing character with new information
@image { string } - base64 string of the new image
@name { string } - new name for the character
@description { string } - new description for the character
*/
export const updateMyCharacter = async (context, payload) => {
    try {
        const res = await updateCharacter(payload.oldName, payload)
        if (res) await context.dispatch('fetchMyCharacters')
        await context.dispatch('fetchMyCharacterByName', payload.name)
        return res
    } catch (err) {
        return Promise.reject(err)
    }
}
