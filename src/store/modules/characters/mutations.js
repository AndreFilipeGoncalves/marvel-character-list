/** saves the character list
@payload { array } - list of characters
@return { void }
*/
export const SAVE_CHARACTERS_LIST = (state, payload) => {
    console.log(payload)
    state.count = payload.count
    state.limit = payload.limit
    state.offset = payload.offset
    state.total = payload.total
    state.characters = payload.results
}
