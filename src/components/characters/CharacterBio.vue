<template>
    <section class="character-bio">
        <!-- name -->
        <h2> {{character.name}} </h2>

        <!-- bio section -->
        <div class="character-information">
            <!-- photo -->
            <img
            class="character-bio-image"
            :src="imageSrc"
            :alt="t('characterImageAlt')">

            <div class="extra-info">
                <!-- description -->
                <span class="character-bio-description">
                    {{character.description || t('placeholderDescription')}}
                </span>

                <!-- slot for extra info that can be placed here -->
                <slot></slot>
            </div>

        </div>

    </section>
</template>

<script setup>
import { computed } from 'vue'
import { FULL_SIZE } from '@/assets/constants/imageTypes'
import { buildCharImageSrc } from '@/assets/scripts/urlBuilders'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    character: Object
})

// build image src
const imageSrc = computed(() => {
    if (props.character.localImage) { return `data:image/jpeg;base64, ${props.character.localImage}` }
    if (!props.character.thumbnail) return
    const path = props.character.thumbnail.path
    const extension = props.character.thumbnail.extension
    return buildCharImageSrc(path, extension, FULL_SIZE)
})
</script>

<style lang="scss">
.character-bio {
    .character-information {
        display:flex;
        flex-direction:row;
        gap:50px;
        flex-wrap:wrap;
        .character-bio-image {
            width:800px;
            height:800px;
        }
        .extra-info {
            height:800px;
            display:flex;
            flex-direction:column;
            flex: 1 1;
            .character-bio-description {
                margin-bottom:40px;
                text-overflow: ellipsis;
                word-wrap:break-word;
            }
        }
    }
}

@media screen and (max-width: 1650px) {
    .character-bio {
        .character-information {
            .character-bio-image {
                width:400px;
                height:400px;
            }
            .extra-info {
                height:auto;
            }
        }
    }
}

@media screen and (max-width: 465px) {
    .character-bio {
        .character-information {
            .extra-info {
                max-width:unset;
            }
            .character-bio-image {
                width: 100%;
                height: auto;
            }
        }
    }
}

</style>
