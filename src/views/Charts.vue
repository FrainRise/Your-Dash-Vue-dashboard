<template>
    <div class="charts">
        <my-title :titleText="titleTextCharts" />
        <div class="charts__wrapper">
            <div class="chart">
                <apexcharts type="bar" height="350"  :options="columnChartOptions" :series="seriesColumnChart" />
                <p class="chart-title">Basic Column Bar</p>
            </div>
            <div class="chart">
                <apexcharts type="bar" height="350"  :options="chartOptionsStackedBar" :series="seriesStackedBar" />
                <p class="chart-title">Stacked Column Bar</p>
            </div>
        </div>
        <div class="charts__wrapper">
            <div class="chart">
                <apexcharts type="pie" height="350"  :options="chartOptionsPieBar" :series="seriesPieBar" />
                <p class="chart-title">Simple Pie Bar</p>
            </div>
            <div class="chart">
                <apexcharts type="donut" height="350"  :options="chartOptionsDonutBar" :series="seriesDonutBar" />
                <p class="chart-title">Simple Donut Bar</p>
            </div>
        </div>
        <div class="charts__wrapper">
            <div class="chart">
                <apexcharts type="radar" height="350"  :options="chartOptionsRadar" :series="seriesRadar" />
                <p class="chart-title">Radar - Multiple Series</p>
            </div>
            <div class="chart">
                <apexcharts type="radialBar" height="350"  :options="chartOptionsRadialbar" :series="seriesRadialbar" />
                <p class="chart-title">Multiple Radialbars</p>
            </div>
        </div>
    </div>
</template>

<script>
import MyTitle from '@/components/UI/MyTitle.vue'
import VueApexCharts from 'vue3-apexcharts'
import { 
    seriesColumnChart, 
    columnChartOptions,
    seriesStackedBar,
    chartOptionsStackedBar,
    seriesPieBar,
    chartOptionsPieBar,
    seriesDonutBar,
    chartOptionsDonutBar,
    seriesRadar,
    chartOptionsRadar,
    seriesRadialbar,
    chartOptionsRadialbar
} from '@/localdata/index.js'

export default {
    components: {
        MyTitle,
        apexcharts: VueApexCharts
    },
    data() {
        return {
            titleTextCharts: 'Charts for your Future',
            seriesColumnChart: seriesColumnChart,
            columnChartOptions: columnChartOptions,
            seriesStackedBar: seriesStackedBar,
            chartOptionsStackedBar: chartOptionsStackedBar,
            seriesPieBar: seriesPieBar,
            chartOptionsPieBar: chartOptionsPieBar,
            seriesDonutBar: seriesDonutBar,
            chartOptionsDonutBar: chartOptionsDonutBar,
            seriesRadar: seriesRadar,
            chartOptionsRadar: chartOptionsRadar,
            seriesRadialbar: seriesRadialbar,
            chartOptionsRadialbar: chartOptionsRadialbar
        }
    },
}
</script>

<style scoped>
.charts__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 85%;
    background: #fff;
    margin: 25px auto;
    padding: 5%;
    border-radius: 25px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);
}
.chart {
    width: 50%;
    text-align: center;
}

.chart-title {
    font-size: 22px;
    font-weight: bold;
}

@media (max-width: 940px) {
    .charts__wrapper {
        flex-direction: column;
    }

    .chart {
        margin: 25px 0;
    }
}
</style>