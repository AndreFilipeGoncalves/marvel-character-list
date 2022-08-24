/** saves my character list
@payload { array } - list of my characters
@return { void }
*/
export const SAVE_MY_CHARACTERS = (state, payload) => {
    state.myCharacters = payload
}

/** saves my character detail
@payload { Object } - character object
@return { void }
*/
export const SAVE_MY_CHARACTER_DETAIL = (state, payload) => {
    state.myCharacterDetails = payload
}
