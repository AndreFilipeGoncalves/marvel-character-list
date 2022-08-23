<template>
    <view-wrapper :title="t('initialPage')">
        <characters-list
        :characters="getCharacters"
        :totalCharacters="getTotalNumberOfCharacters"
        :pageOffset="getCurrentPageOffset"
        :itemsPerPage="getItemsPerPage"
        @card:click="navigateToDetails"
        @update:page="pageHandler"/>
    </view-wrapper>
</template>

<script setup>
import { watch } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import CharactersList from '@/components/characters/CharactersList'
import { mapActions, mapGetters } from '@/store/helpers/mappers'
import { moduleMapper } from '@/store/helpers/modules.map'
import { routesMapper } from '@/router/helpers/routes.map'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const {
    fetchCharacters,
    updatePage
} = mapActions(moduleMapper.CHARACTERS)

const {
    getCharacters,
    getTotalNumberOfCharacters,
    getCurrentPageOffset,
    getItemsPerPage
} = mapGetters(moduleMapper.CHARACTERS)

/** calls the actiion to update the selected
page by updating the offset in the store
@data { event } - the page data
@return { void }
*/
const pageHandler = (data) => {
    updatePage(data.first)
}

/** fetch the list of characters */
const fetchMarvelCharacters = async (offset) => {
    try { await fetchCharacters(offset) } catch (err) {}
}

/** first call to get the characters */
fetchMarvelCharacters(getCurrentPageOffset.value)

/** updates the character list when we update the page */
watch(getCurrentPageOffset, (newOffset) => {
    fetchMarvelCharacters(newOffset)
})

/** navigate to character details
@id { string, number } - character id
@return { void }
*/
const navigateToDetails = id => {
    router.push(routesMapper.CHARACTER_DETAILS.replace(':id', id))
}
</script>
