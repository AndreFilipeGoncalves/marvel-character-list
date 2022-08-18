import * as getters from '@/store/modules/characters/getters'
import * as mutations from '@/store/modules/characters/mutations'
import * as actions from '@/store/modules/characters/actions'

const state = {
    characters: []
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
