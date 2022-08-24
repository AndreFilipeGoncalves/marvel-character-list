/** add an item to the local storage */
export const addItem = (name, item) => {
    window.localStorage.setItem(name, JSON.stringify(item))
}

/** retrieve an item from the local storage */
export const getItem = (name) => {
    return JSON.parse(window.localStorage.getItem(name))
}

/** remove an item from the local storage */
export const removeItem = (name) => {
    window.localStorage.removeItem(name)
}

/** clear local storage */
export const clearStorage = () => {
    window.localStorage.clear()
}
