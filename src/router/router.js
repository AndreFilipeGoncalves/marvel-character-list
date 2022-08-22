import { createRouter, createWebHashHistory } from 'vue-router'
import { routesMapper } from '@/router/helpers/routes.map'

import InitialPage from '@/views/InitialPage'
import CharacterCreation from '@/views/CharacterCreation'
import CharacterDetails from '@/views/CharacterDetails'
import MyCharacterList from '@/views/MyCharacterList'

const routes = [{
    path: routesMapper.INITIAL_PAGE,
    component: InitialPage
}, {
    path: routesMapper.CHARACTER_CREATION,
    component: CharacterCreation
}, {
    path: routesMapper.MY_CHARACTER_LIST,
    component: MyCharacterList
}, {
    path: routesMapper.CHARACTER_DETAILS,
    component: CharacterDetails
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
