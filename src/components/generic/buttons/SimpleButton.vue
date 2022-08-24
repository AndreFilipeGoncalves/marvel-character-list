<template>
    <app-button
    class="p-button-raised p-button-rounded"
    :label="label"
    @click="$emit('click')"/>
</template>

<script setup>
import AppButton from 'primevue/button/sfc'

const props = defineProps({
    label: String
})

defineEmits(['click'])
</script>

<style lang="scss">
</style>
