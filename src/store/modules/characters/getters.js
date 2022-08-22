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
