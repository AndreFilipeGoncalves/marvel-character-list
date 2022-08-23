<template>
    <div
    class="character-card"
    @click="$emit('card:click', character.id)">

        <!-- image -->
        <div class="image-zoom-wrapper">
            <img
            class="character-image"
            :src="imageSrc"
            :alt="t('characterImageAlt')">
        </div>

        <!-- content -->
        <div class="character-card-content">
            <!-- name -->
            <h3 class="character-name">{{character.name}}</h3>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { PORTRAIT_UNCANNY } from '@/assets/constants/imageTypes'
import { buildCharImageSrc } from '@/assets/scripts/urlBuilders'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    character: Object
})

const emit = defineEmits(['card:click'])

// build the image src
const imageSrc = computed(() => {
    const path = props.character.thumbnail.path
    const extension = props.character.thumbnail.extension
    return buildCharImageSrc(path, extension, PORTRAIT_UNCANNY)
})

</script>

<style lang="scss">
.character-card {
    width:200px;
    height: 330px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;

    background-color: var(--black);

    color: white;
    text-align:center;

    box-sizing:border-box;
    border-radius:8px;
    padding:10px;

    box-shadow: 5px 5px 10px 0px var(--grey);

    cursor:pointer;

    .image-zoom-wrapper {
        width:168px;
        height: 252px;
        border-radius:8px;
        overflow:hidden;
        flex-shrink: 0;

        .character-image {
            width:100%;
            height:100%;
            transition: all 0.3s linear;
        }
    }

    &:hover {
        .character-image {
            transform:scale(1.1);
        }
    }
}

@media screen and (max-width: 520px) {
    .character-card {
        width:100%;
        max-width:400px;
        height: 600px;
        .image-zoom-wrapper {
            width: 300px;
            height:450px;
        }
    }
}

</style>
