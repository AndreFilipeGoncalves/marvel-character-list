/** saves my character list
@payload { array } - list of my characters
@return { void }
*/
export const SAVE_MY_CHARACTERS = (state, payload) => {
    state.myCharacters = payload
}
