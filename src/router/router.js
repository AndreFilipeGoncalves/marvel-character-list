import { createRouter, createWebHashHistory } from 'vue-router'

import InitialPage from '@/views/InitialPage'
import CharacterCreation from '@/views/CharacterCreation'
import CharacterDetails from '@/views/CharacterDetails'
import MyCharacterList from '@/views/MyCharacterList'

const routes = [{
    path: '/',
    name: 'InitialPage',
    component: InitialPage
}, {
    path: '/characterCreation',
    name: 'CharacterCreation',
    component: CharacterCreation
}, {
    path: '/myCharacterList',
    name: 'MyCharacterList',
    component: MyCharacterList
}, {
    path: '/CharacterDetails/:id',
    name: 'CharacterDetails',
    component: CharacterDetails
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
