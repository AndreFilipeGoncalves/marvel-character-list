/** saves the character list
@payload { array } - list of characters
@return { void }
*/
export const SAVE_CHARACTERS_LIST = (state, payload) => {
    state.limit = payload.limit
    state.total = payload.total
    state.characters = payload.results
}

/** saves the character detail
@return { void }
*/
export const SAVE_CHARACTER_DETAIL = (state, payload) => {
    state.characterDetails = payload.results[0]
}

/** clears the character details
@return { void }
*/
export const CLEAR_CHARACTER_DETAILS = (state) => {
    state.characterDetails = {}
}

/** saves the new current offset
@offset { string, number } - new page offset
@return { void }
*/
export const UPDATE_PAGE = (state, offset) => {
    state.offset = offset
}
