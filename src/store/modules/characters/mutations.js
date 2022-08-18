/** saves the character list
@payload { array } - list of characters
@return { void }
*/
export const SAVE_CHARACTERS_LIST = (state, payload) => {
    state.characters = payload
}
