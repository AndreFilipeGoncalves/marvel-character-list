<template>
    <view-wrapper>
        <h1> character details - {{id}} </h1>
    </view-wrapper>
</template>

<script setup>
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
