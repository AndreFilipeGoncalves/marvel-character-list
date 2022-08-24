import { createStore } from 'vuex'

/** modules */
import characters from '@/store/modules/characters/state'
import myCharacters from '@/store/modules/myCharacters/state'

/** generic */
import * as actions from '@/store/actions'
import * as mutations from '@/store/mutations'
import * as getters from '@/store/getters'

export default createStore({
    state: {},
    getters,
    mutations,
    actions,
    modules: {
        characters,
        myCharacters
    }
})
