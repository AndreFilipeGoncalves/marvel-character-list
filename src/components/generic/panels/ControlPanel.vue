<template>
    <section class="control-panel">
        <!-- content -->
        <div class="control-panel-buttons">
            <!-- edit -->
            <simple-button
            :label="t('edit')"
            @click="$emit('edit', panelId)"/>
            <!-- add to my collection -->
            <simple-button
            v-if="!internalCharacter"
            :label="t('addToCollection')"
            @click="$emit('add', panelId)"/>
        </div>
    </section>
</template>

<script setup>
import SimpleButton from '@/components/generic/buttons/SimpleButton'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    panelId: [String, Number],
    internalCharacter: Boolean
})

defineEmits(['edit', 'add'])

</script>

<style lang="scss">
.control-panel {
    width:100%;
    display:flex;
    flex-direction:column;
    .control-panel-buttons {
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        gap: 20px;

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
        }
    }
}

@media screen and (max-width: 465px) {
    .control-panel {
        .control-panel-buttons {
            flex-direction:column;
            gap:10px;
            .p-button {
                width:100%;
                height:40px;
            }
        }
    }
}

</style>
