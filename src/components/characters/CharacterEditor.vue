<template>
    <section class="character-editor">
        <h1 class="title"> {{t('characterEditor')}}</h1>
        <div class="top-side">
            <div class="top-left-side">

                <!-- uploader -->
                <Uploader @upload:image="image=$event"/>

                <!-- image preview -->
                <img
                v-if="image"
                class="character-image"
                :src="imageToDisplay"
                :alt="t('characterImageAlt')"/>

                <!-- image placeholder -->
                <img
                v-else
                class="character-image"
                src="@/assets/images/image-placeholder.png"
                alt="">
            </div>

            <div class="top-right-side">
                <!-- name update -->
                <div class="box">
                    <label for="nameInput">{{t('updateName')}}</label>
                    <text-input id="nameInput"/>
                </div>

                <!-- description update -->
                <div class="box">
                    <label for="descriptionInput">{{t('updateDescription')}}</label>
                    <text-input id="descriptionInput"/>
                </div>

            </div>
        </div>

        <div class="bottom-side"></div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import TextInput from '@/components/generic/inputs/TextInput'
import Uploader from '@/components/generic/uploader/Uploader'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const image = ref('')
const imageToDisplay = computed(() => {
    return `data:image/jpeg;base64, ${image.value}`
})

</script>

<style lang="scss">
.character-editor {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;

    box-sizing:border-box;
    padding: 0px 30px;
    .title {
        text-align:center;
        margin-bottom:40px;
    }
    .top-side {
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        .top-left-side {
            display:flex;
            flex-direction:column;
            align-items:center;
            .character-image {
                width:250px;
                height:auto;
            }
        }
        .top-right-side {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            gap: 20px;
            .box {
                display:flex;
                flex-direction:column;
                gap: 10px;
            }
        }
    }
    .bottom-side {

    }
}
</style>
