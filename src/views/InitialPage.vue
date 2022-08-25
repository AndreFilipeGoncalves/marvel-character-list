<template>
    <view-wrapper>
        <div class="initial-page-wrapper">
            <!-- header section -->
            <div class="header-section">
                <h1 class="view-title">{{t('initialPage')}}</h1>
                <search-input v-model:inputValue="searchValue" :placeholder="t('search')"/>
            </div>

            <!-- characters list -->
            <characters-list
            :characters="getCharacters.filter(ele => ele.name.includes(searchValue))"
            :totalCharacters="getTotalNumberOfCharacters"
            :pageOffset="getCurrentPageOffset"
            :itemsPerPage="getItemsPerPage"
            @card:click="navigateToDetails"
            @update:page="pageHandler"/>
        </div>
    </view-wrapper>
</template>

<script setup>
import { watch, ref } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import CharactersList from '@/components/characters/CharactersList'
import SearchInput from '@/components/generic/inputs/SearchInput'
import { mapActions, mapGetters } from '@/store/helpers/mappers'
import { moduleMapper } from '@/store/helpers/modules.map'
import { routesMapper } from '@/router/helpers/routes.map'
import { EXTERNAL } from '@/assets/constants/dataLocations'
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

// value being searched
const searchValue = ref('')

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
@character { object } - character object
@return { void }
*/
const navigateToDetails = character => {
    let route = routesMapper.CHARACTER_DETAILS.replace(':id', character.id)
    route = route.replace(':location', EXTERNAL)
    router.push(route)
}

</script>

<style lang="scss">
.initial-page-wrapper {
    .header-section {
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
        margin-bottom:20px;
    }
}
</style>
