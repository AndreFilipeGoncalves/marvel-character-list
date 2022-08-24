<template>
    <section class="characters-wrapper">
        <!-- characters list -->
        <div class="characters-list" v-if="characters.length">
            <character-card
            v-for="character in characters"
            :character="character"
            :key="character.id"
            @card:click="$emit('card:click', $event)"/>
        </div>

        <!-- empty state -->
        <empty-state v-else :text="t('emptyStateText')"/>

        <!-- paginator -->
        <paginator
        v-if="characters.length && totalCharacters"
        :first="pageOffset"
        :rows="itemsPerPage"
        :totalRecords="totalCharacters"
        @page="$emit('update:page', $event)"/>
    </section>
</template>

<script setup>
import CharacterCard from '@/components/characters/CharacterCard'
import Paginator from 'primevue/paginator/sfc'
import EmptyState from '@/components/generic/emptyStates/EmptyState'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    characters: Array,
    totalCharacters: [String, Number],
    pageOffset: [String, Number],
    itemsPerPage: [String, Number]
})

const emit = defineEmits(['update:page', 'card:click'])

</script>

<style lang="scss">
.characters-wrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    .characters-list {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;

        gap: 20px;
        margin-bottom:30px;
    }
}
</style>
