<template>
    <div class="character-card">
        <!-- image -->
        <img
        class="character-image"
        :src="`${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}`"
        :alt="t('characterImageAlt')">
        <!-- content -->
        <div class="character-card-content">
            <!-- name -->
            <span>{{character.name}}</span>
            <!-- description -->
            <span>{{character.description}}</span>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    character: Object
})

</script>

<style lang="scss">

.character-card {
}

</style>
