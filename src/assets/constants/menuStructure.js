import { readonly } from 'vue'
import { routesMapper } from '@/router/helpers/routes.map'
import i18n from '@/assets/setups/i18n'

const { t } = i18n.global

export const menuStructure = readonly([
    {
        label: t('myCharacterList'),
        to: routesMapper.MY_CHARACTER_LIST
    },
    {
        label: t('characterCreation'),
        to: routesMapper.CHARACTER_CREATION
    }
])
