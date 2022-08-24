<template>
    <div class="file-wrapper">
        <input
        ref="imageUploader"
        class="uploader-input"
        type="file"
        accept="image/*"
        @change="onFileChange">
        <simple-button
        :label="t('uploadLabel')"
        @click="clickHandler"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SimpleButton from '@/components/generic/buttons/SimpleButton'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const emit = defineEmits(['upload:image'])

const imageUploader = ref('')

/** runs when a file is uploaded */
const onFileChange = (event) => {
    const files = event.target.files
    createImage(files[0])
}

/** creates a base 64 of the file uploaded */
const createImage = file => {
    const reader = new FileReader()
    reader.onload = event => {
        emit('upload:image', btoa(event.target.result))
    }
    reader.readAsBinaryString(file)
}

/** handler for the click on the button, basically
it will just force a click on the input file
*/
const clickHandler = () => {
    imageUploader.value.click()
}

</script>

<style lang="scss">
.file-wrapper {
    margin-bottom:20px;
    .uploader-input {
        display:none;
    }
}
</style>
