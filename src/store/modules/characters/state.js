import * as getters from '@/store/modules/characters/getters'
import * as mutations from '@/store/modules/characters/mutations'
import * as actions from '@/store/modules/characters/actions'

const state = {
    // list of characters
    characters: [],
    // current character detail
    characterDetails: {},
    // limit of items per page
    limit: 0,
    // page offset (will work as pagination)
    offset: 0,
    // total number of entries available
    total: 0
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
