<template>
    <div class="button-wrapper">
        <app-button
        class="p-button-raised p-button-rounded"
        :class="classes"
        :label="label"
        @click="$emit('click')"/>
    </div>
</template>

<script setup>
import AppButton from 'primevue/button/sfc'

const props = defineProps({
    label: String,
    classes: Array
})

defineEmits(['click'])
</script>

<style lang="scss">
.button-wrapper {
    .p-button {
        min-width:220px;
        min-height:40px;
        background-color: var(--black);
        color: var(--white);
        outline:none;
        border:none;
        &:hover {
            background-color: var(--black);
        }
        &.save {
            background-color: var(--blue);
            &:hover {
                background-color: var(--blue);
            }
        }
        &.cancel {
            background-color: var(--red);
            &:hover {
                background-color: var(--red);
            }
        }
    }
}

</style>
