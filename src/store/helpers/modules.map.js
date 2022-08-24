import { readonly } from 'vue'
import { buildConstantsMapper } from '@/assets/scripts/constantsMapper'

const MODULES = readonly({
    CHARACTERS: 'characters',
    MY_CHARACTERS: 'myCharacters'
})

export const moduleMapper = buildConstantsMapper(MODULES)
