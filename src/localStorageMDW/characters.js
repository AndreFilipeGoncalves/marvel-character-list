import { addItem, removeItem, getItem } from '@/localStorageMDW/helpers'

const MY_CHARACTERS = 'my_characters'

/** init the characters storage */
export const initCharactersStorage = () => {
    const characters = getItem(MY_CHARACTERS)
    if (characters) return
    addItem('my_characters', [])
}

/** add a character to the character storage */
export const addCharacter = (name, character) => {
    const characters = getCharacters()
    if (validateCharacter(name, characters)) return Promise.reject(Error(name))
    characters.push(character)
    addItem(MY_CHARACTERS, characters)
    return Promise.resolve(name)
}

/** remove character */
export const removeCharacter = (name) => {
    let characters = getCharacters()
    if (!validateCharacter(name, characters)) return Promise.reject(Error(name))
    characters = characters.filter(ele => ele.name !== name)
    addItem(MY_CHARACTERS, characters)
    return Promise.resolve(name)
}

/** update character */
export const updateCharacter = (name, character) => {
    const characters = getCharacters()
    if (!validateCharacter(name, characters)) return Promise.reject(Error(name))
    characters.push(character)
    addItem(MY_CHARACTERS, characters)
    return Promise.resolve(name)
}

/** get all characters */
export const getAllCharacters = () => {
    return getCharacters()
}

/** validates if a character exists */
const validateCharacter = (name, list) => {
    return !!list.filter(ele => ele.name === name).length
}

/** protection against manual deleting of local storage */
const getCharacters = () => {
    let characters = getItem(MY_CHARACTERS)
    if (!characters) initCharactersStorage()
    characters = getItem(MY_CHARACTERS)
    return characters
}
