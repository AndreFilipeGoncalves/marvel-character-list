import { readonly } from 'vue'
import { buildConstantsMapper } from '@/assets/scripts/constantsMapper'

const MODULES = readonly({
    CHARACTERS: 'characters'
})

export const moduleMapper = buildConstantsMapper(MODULES)
