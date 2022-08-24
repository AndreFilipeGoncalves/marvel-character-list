<template>
    <view-wrapper>
        <uploader @upload:image="handler"/>
        <img :src="img" alt="">
        <modal>
            <character-editor/>
        </modal>
    </view-wrapper>
</template>

<script setup>
import { ref } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import Uploader from '@/components/generic/uploader/Uploader'
import Modal from '@/components/generic/modals/Modal'
import CharacterEditor from '@/components/characters/CharacterEditor'

const img = ref('')

const handler = data => {
    img.value = `data:image/jpeg;base64, ${data}`
}
</script>
