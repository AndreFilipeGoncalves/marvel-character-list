<template>
    <div class="characters-wrapper">
        <!-- characters list -->
        <div class="characters-list">
            <character-card
            v-for="character in characters"
            :character="character"
            :key="character.id"/>
        </div>
        <!-- paginator -->
    </div>
</template>

<script setup>
import CharacterCard from '@/components/characters/CharacterCard'
import Paginator from 'primevue/paginator/sfc'

const props = defineProps({
    characters: Array
})

console.log('chars', props.characters)

</script>

<style lang="scss">
.characters-wrapper {

}
</style>
