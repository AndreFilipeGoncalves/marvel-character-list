import { readonly } from 'vue'
import { buildConstantsMapper } from '@/assets/scripts/constantsMapper'

const ROUTES = readonly({
    INITIAL_PAGE: '/',
    CHARACTER_CREATION: '/characterCreation',
    MY_CHARACTER_LIST: '/myCharacterList',
    CHARACTER_DETAILS: '/characterDetails/:id'
})

export const routesMapper = buildConstantsMapper(ROUTES)
