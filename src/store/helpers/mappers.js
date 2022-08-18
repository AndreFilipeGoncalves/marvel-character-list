import { computed } from 'vue'
import { useStore } from 'vuex'

/** get the state of a module
@module { String } - name of the module
@return { Array } - containing all the state of the module
*/
export const mapState = module => {
    const store = useStore()
    if (!store) return
    return Object.fromEntries(
        Object.keys(store.state[module]).map(
            key => (module !== undefined)
            ? [key, computed(() => store.state[module][key])]
            : [key, computed(() => store.state[key])]
        )
    )
}

/** get the getters of a module
@module { string } - name of the module
@return { Array } - containing all the getters of the module
*/
export const mapGetters = module => {
    const store = useStore()
    if (!store) return
    return Object.fromEntries(
        Object.keys(store.getters).map(
            getter => (module !== undefined && getter.startsWith(module))
            ? [getter.substr(module.length + 1), computed(() => store.getters[getter])]
            : [getter, computed(() => store.getters[getter])]
        )
    )
}

/** get the mutations of a module
@module { string } - name of the module
@return { Array } - containing all the mutations of the module
*/
export const mapMutations = module => {
    const store = useStore()
    if (!store) return
    return Object.fromEntries(
        Object.keys(store._mutations[module]).map(
            mutation => (module !== undefined && mutation.startsWith(module))
            ? [mutation.substr(module.length + 1), value => store.commit(mutation, value)]
            : [mutation, value => store.commit(mutation, value)]
        )
    )
}

/** get the actions of a module
@module { string } - name of the module
@return { Array } - containing all the actions of the module
*/
export const mapActions = module => {
    const store = useStore()
    if (!store) return
    return Object.fromEntries(
        Object.keys(store._actions).map(
            action => (module !== undefined && action.startsWith(module))
            ? [action.substr(module.length + 1), value => store.dispatch(action, value)]
            : [action, value => store.dispatch(action, value)]
        )
    )
}
