<template>
    <div class="carousel-card">
        <h3>{{title}}</h3>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String
})

</script>

<style lang="scss">
.carousel-card {
    width:200px;
    height:400px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    text-align:center;
    border: 1px solid var(--black);
    border-radius: 12px;
    color: var(--black);
}
</style>
