<template>
    <section>
        <h2>{{title}}</h2>
        <Carousel v-if="parsedEntries && parsedEntries.length" :entries="parsedEntries"/>
        <span v-else> {{t('notAvailable')}}</span>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import Carousel from '@/components/generic/carousels/Carousel'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    title: String,
    entries: Object
})

const parsedEntries = computed(() => {
    if (!props.entries) return false
    return props.entries.items
})

</script>

<style lang="scss">
</style>
