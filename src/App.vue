<template>
    <div id="app-content" data-theme="light">
        <!-- menu -->
        <app-header/>
        <!-- content -->
        <router-view/>
    </div>
</template>

<script setup>
import AppHeader from '@/components/generic/header/Header'
import { initCharactersStorage } from '@/localStorageMDW/characters'

/* init my characters storage */
initCharactersStorage()

</script>

<style lang="scss">
@import 'src/styles/main.scss';
#app {
    width:100%;
    height:100%;
    overflow:hidden;
}

#app-content {
    position: relative;
    width:100%;
    height:100%;
    overflow:hidden;
    font-family: 'Open Sans', sans-serif;
}

*{
    box-sizing: border-box;
    font-family: 'Open Sans';
}

</style>
