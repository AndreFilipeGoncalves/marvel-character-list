import { readonly } from 'vue'
import { buildConstantsMapper } from '@/assets/scripts/constantsMapper'

const ROUTES = readonly({
    INITIAL_PAGE: '/',
    MY_CHARACTER_LIST: '/myCharacterList',
    CHARACTER_DETAILS: '/characterDetails/:location/:id'
})

export const routesMapper = buildConstantsMapper(ROUTES)
