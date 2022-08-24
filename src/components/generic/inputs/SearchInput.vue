<template>
    <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
            type="text"
            :modelValue="inputValue"
            :placeholder="placeholder"
            @update:modelValue="$emit('update:inputValue', $event)"/>
    </span>
</template>

<script setup>
import InputText from 'primevue/inputtext/sfc'

const props = defineProps({
    placeholder: String,
    inputValue: String
})

defineEmits(['update:inputValue'])

</script>
