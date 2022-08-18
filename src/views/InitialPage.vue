<template>
    <!-- Feature characters -->
    <h1>initial page </h1>
</template>

<script setup>
import { mapActions } from '@/store/helpers/mappers'
import { moduleMapper } from '@/store/helpers/modules.map'

const { fetchCharacters } = mapActions(moduleMapper.CHARACTERS)

fetchCharacters()
</script>
