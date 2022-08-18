import { createStore } from 'vuex'

/** generic */
import * as actions from '@/store/actions'
import * as mutations from '@/store/mutations'
import * as getters from '@/store/getters'

export default createStore({
    state: {},
    getters,
    mutations,
    actions,
    modules: {}
})
