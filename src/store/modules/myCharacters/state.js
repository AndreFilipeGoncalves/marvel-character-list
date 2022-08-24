import * as getters from '@/store/modules/myCharacters/getters'
import * as mutations from '@/store/modules/myCharacters/mutations'
import * as actions from '@/store/modules/myCharacters/actions'

const state = {
    // list of characters
    myCharacters: [],
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
