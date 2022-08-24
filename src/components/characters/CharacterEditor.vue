<template>
    <section class="character-editor">
        <div class="header-wrapper">
            <!-- title -->
            <h1 class="title"> {{t('characterEditor')}}</h1>
            <!-- close cross -->
            <span
            v-if="closeCross"
            @click="$emit('close')"
            class="close-cross">
                +
            </span>
        </div>

        <!-- top content -->
        <div class="top-side">
            <div class="top-left-side">

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

                <!-- uploader -->
                <Uploader @upload:image="image=$event"/>

            </div>

            <div class="top-right-side">
                <!-- name update -->
                <div class="box">
                    <label for="nameInput">{{t('updateName')}}</label>
                    <text-input v-model:inputValue="name" id="nameInput"/>
                </div>

                <!-- description update -->
                <div class="box">
                    <label for="descriptionInput">{{t('updateDescription')}}</label>
                    <text-input v-model:inputValue="description" id="descriptionInput"/>
                </div>

            </div>
        </div>

        <!-- bottom content -->
        <div class="bottom-side">
            <!-- save -->
            <simple-button
            :classes="['save']"
            :label="t('save')"
            @click="saveHandler"/>

            <!-- cancel -->
            <simple-button
            :classes="['cancel']"
            :label="t('cancel')"
            @click="cancelHandler"/>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import TextInput from '@/components/generic/inputs/TextInput'
import Uploader from '@/components/generic/uploader/Uploader'
import SimpleButton from '@/components/generic/buttons/SimpleButton'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    character: Object,
    closeCross: Boolean
})

defineEmits('close')

const image = ref('')

const imageToDisplay = computed(() => {
    return `data:image/jpeg;base64, ${image.value}`
})

const name = ref(props.character?.name || '')
const description = ref(props.character?.description || '')

const saveHandler = () => {}

const cancelHandler = () => {
    image.value = ''
    name.value = props.character?.name || ''
    description.value = props.character?.description || ''
}

</script>

<style lang="scss">
.character-editor {
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
    padding: 0px 30px;
    padding-bottom:20px;
    .title {
        text-align:center;
        margin-bottom:40px;
    }
    .top-side {
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap: 50px;
        flex-wrap:wrap;
        .top-left-side {
            display:flex;
            flex-direction:column;
            align-items:center;
            gap: 20px;
            .character-image {
                width:250px;
                height:auto;
            }
        }
        .top-right-side {
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:center;
            align-items:center;
            gap: 20px;
            margin-bottom:40px;
            .box {
                display:flex;
                flex-direction:column;
                gap: 10px;
            }
        }
    }
    .bottom-side {
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        gap:40px;

        box-sizing:border-box;
        padding-bottom:20px;
    }
}

.close-cross {
    position:absolute;
    top:0;
    right:20px;
    font-size:42px;
    transform:rotate(45deg);
    cursor:pointer;
}
</style>
