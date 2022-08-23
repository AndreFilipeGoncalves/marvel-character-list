/** returns the list of characters
@return { array } - list of characters
*/
export const getCharacters = state => state.characters.map(char => {
    return {
        id: char.id,
        name: char.name,
        description: char.description,
        thumbnail: char.thumbnail
    }
})

/** returns the total of characters
@return { String, Number } - total of characters
*/
export const getTotalNumberOfCharacters = state => state.total

/** returns the amount of items per page
@return { String, Number } - amout of items per page
*/
export const getItemsPerPage = state => state.limit

/** returns the current offset
@return { String, Number } - current offset of items
*/
export const getCurrentPageOffset = state => state.offset

/** returns the detail of the current selected character
@return { object } - information about the character
*/
export const getCharacterDetails = state => state.characterDetails

/** returns the list of comics from the selected character
@return { array } - list of comics
*/
export const getComics = state => state.characterDetails.comics

/** returns the list of stories from the selected character
@return { array } - list of stores
*/
export const getStories = state => state.characterDetails.getStories

/** returns the list of events from the selected character
@return { array } - list of events
*/
export const getEvents = state => state.characterDetails.events

/** returns the list of series from the selected character
@return { array } - list of series
*/
export const getSeries = state => state.characterDetails.series
