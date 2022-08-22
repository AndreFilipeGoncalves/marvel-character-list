<template>
    <view-wrapper :title="t('initialPage')">
        <CharactersList :characters="getCharacters"/>
    </view-wrapper>
</template>

<script setup>
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import CharactersList from '@/components/characters/CharactersList'
import { mapActions, mapGetters } from '@/store/helpers/mappers'
import { moduleMapper } from '@/store/helpers/modules.map'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { fetchCharacters } = mapActions(moduleMapper.CHARACTERS)
const { getCharacters } = mapGetters(moduleMapper.CHARACTERS)

/** fetch the list of characters */
const fetchMarvelCharacters = async () => {
    try {
        await fetchCharacters()
    } catch (err) {

    }
}

fetchMarvelCharacters()
</script>
