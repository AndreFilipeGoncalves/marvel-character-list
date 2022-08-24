<template>
    <div
    class="feedback-toast"
    :class="[type.toLowerCase()]">
        <h4>{{message}}</h4>
        <span>{{ content }}</span>
    </div>
</template>

<script setup>

import { ERROR, SUCCESS } from '@/assets/constants/feedbackTypes'

const props = defineProps({
    message: String,
    content: String,
    type: {
        validator (value) {
            return [ERROR, SUCCESS].includes(value)
        }
    }
})

const emit = defineEmits(['close'])

setTimeout(() => {
    emit('close')
}, 3000)

</script>

<style lang="scss">
.feedback-toast {
    width:350px;
    height:100px;
    position:fixed;
    top:50px;
    left: calc(50% - 175px);

    display:flex;
    flex-direction:column;
    justify-content:flex-start;

    box-sizing:border-box;
    border-radius:20px;
    padding: 5px;
    padding-top:0px;

    color: var(--white);
    &.error {
        background-color: var(--red);
    }
    &.success {
        background-color: var(--blue);
    }
}
</style>
