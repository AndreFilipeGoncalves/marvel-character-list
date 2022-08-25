<template>
    <view-wrapper>
        <div class="my-characters-page">
            <!-- header section -->
            <div class="header-section">
                <h1 class="view-title">{{t('myCharacterList')}}</h1>
                <search-input v-model:inputValue="searchValue" :placeholder="t('search')"/>
            </div>

            <characters-list
            :characters="getMyCharacters.filter(ele => ele.name?.includes(searchValue))"
            @card:click="navigateToDetails"/>

        </div>
    </view-wrapper>
</template>

<script setup>
import { ref } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import CharactersList from '@/components/characters/CharactersList'
import SearchInput from '@/components/generic/inputs/SearchInput'
import { INTERNAL } from '@/assets/constants/dataLocations'
import { mapActions, mapGetters } from '@/store/helpers/mappers'
import { moduleMapper } from '@/store/helpers/modules.map'
import { routesMapper } from '@/router/helpers/routes.map'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const { fetchMyCharacters } = mapActions(moduleMapper.MY_CHARACTERS)
const { getMyCharacters } = mapGetters(moduleMapper.MY_CHARACTERS)

// value being searched
const searchValue = ref('')

fetchMyCharacters()

/** navigate to character details
@name { string } - character name
@return { void }
*/
const navigateToDetails = character => {
    let route = routesMapper.CHARACTER_DETAILS.replace(':id', character.name)
    route = route.replace(':location', INTERNAL)
    router.push(route)
}

</script>

<style lang="scss">
.my-characters-page {
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
