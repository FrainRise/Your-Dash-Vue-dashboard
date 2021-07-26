<template>
    <div class="charts">
        <my-title :titleText="titleTextCharts" />
    </div>
</template>

<script>
import MyTitle from '@/components/UI/MyTitle.vue'
export default {
    components: {
        MyTitle
    },
    data() {
        return {
            titleTextCharts: 'Charts for your Future',
            testData: [
                {}
            ]
        }
    },
}
</script>

<style scoped>

</style>