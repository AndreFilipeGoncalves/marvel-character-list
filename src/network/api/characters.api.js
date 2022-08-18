import httpClient from '@/network/client'

/** fetch the list of characters */
export const fetchCharactersList = () => {
    return httpClient({
        method: 'GET',
        url: 'characters?apikey='
    })
}
