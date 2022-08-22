<template>
    <div class="view-wrapper">
        <!-- page title -->
        <h1 class="view-title">{{title}}</h1>

        <!-- content slot -->
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
})
</script>

<style lang="scss">
.view-wrapper {
    width:100%;
    height:calc(100% - 82px);
    display:flex;
    flex-direction:column;
    overflow:auto;
    overflow-x:hidden;

    box-sizing:border-box;
    padding:20px 40px;

    @include scrollbar()

    .view-title {
        margin-bottom:40px;
    }
}
</style>
