<template>
    <Carousel
    :value="entries"
    :numVisible="4"
    :numScroll="3"
    :responsiveOptions="responsiveOptions">
         <template #item="slotProps">
             <carousel-card :title="slotProps.data.name"/>
        </template>
    </Carousel>
</template>

<script setup>
import Carousel from 'primevue/carousel/sfc'
import CarouselCard from '@/components/generic/carousels/CarouselCard'

const props = defineProps({
    entries: Array
})

const responsiveOptions = [
	{
		breakpoint: '1024px',
		numVisible: 3,
		numScroll: 3
	},
	{
		breakpoint: '600px',
		numVisible: 2,
		numScroll: 2
	},
	{
		breakpoint: '480px',
		numVisible: 1,
		numScroll: 1
	}
]
</script>

<style lang="scss">
</style>
