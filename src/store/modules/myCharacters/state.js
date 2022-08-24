import * as getters from '@/store/modules/myCharacters/getters'
import * as mutations from '@/store/modules/myCharacters/mutations'
import * as actions from '@/store/modules/myCharacters/actions'

const state = {
    // list of my characters
    myCharacters: [],
    // my character currenctly selected
    myCharacterDetails: {}
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
