<template>
    <section class="empty-state-wrapper">
        <h3> {{text}} </h3>
        <img
        class="empty-state-image"
        src="@/assets/images/empty-state.jpg"
        :alt="t('emptyStateAlt')">
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
    text: String
})
</script>

<style lang="scss">
.empty-state-wrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    box-sizing:border-box;
    padding:20px;
    img {
        width:450px;
        height:auto;
    }

}
</style>
