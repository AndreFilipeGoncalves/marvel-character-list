<template>
    <view-wrapper>
        <character-editor/>
    </view-wrapper>
</template>

<script setup>
import { ref } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import Modal from '@/components/generic/modals/Modal'
import CharacterEditor from '@/components/characters/CharacterEditor'

const img = ref('')

const handler = data => {
    img.value = `data:image/jpeg;base64, ${data}`
}
</script>
