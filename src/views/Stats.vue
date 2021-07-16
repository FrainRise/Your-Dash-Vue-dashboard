<template>
    <h2 class="stats__title">Your Own Business Stats</h2>
    <div class="stats">
            <div 
                class="business-info" 
                v-for="(income, index) in incomeList" 
                :key="index"
                :style="{background: income.themeColor}"
            >
                <h4 class="business-stat title">{{ income.title }}</h4>
                <h2 class="business-stat amount">$ {{ income.amount }}</h2>
                <h6 class="business-stat save">Saved {{ income.savePercentage }}%</h6>
                <div class="icon-wrapper">
                    <font-awesome-icon class="stat-icon" :icon="income.iconName" />
                </div>
            </div>
    </div>
    <div class="charts-group">
        <apexcharts class="chart" type="area" :options="chartOptionsArea" :series="seriesArea"/>
        <apexcharts class="chart" type="polarArea" :options="chartOptionsPolarArea" :series="seriesPolarArea"/>
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
export default {
    components: {
        apexcharts: VueApexCharts,
    },
    data() {
        return {
            incomeList: [
                {title: 'Total Income', amount: '125,000', savePercentage: '25', themeColor: '#4976e7', iconName: 'dollar-sign'},
                {title: 'Total Expenses', amount: '25,000', savePercentage: '25', themeColor: '#7cc6fa', iconName: 'funnel-dollar'},
                {title: 'Cash on hand', amount: '50,000', savePercentage: '25', themeColor: '#9e71ce', iconName: 'hand-sparkles'},
                {title: 'Net Profit Margin', amount: '75,000', savePercentage: '75', themeColor: '#85d1b3', iconName: 'chart-line'},
            ],
        
            seriesPolarArea: [125000, 25000, 50000, 75000],
            seriesArea: [
                {name: 'Income', data: [0, 25000, 45000, 15000, 15000, 10000, 15000]}, 
                {name: 'Expenses', data: [15000, 5000, 0, 2000, 0, 3000, 0]},
                {name: 'Cash on hand', data: [10000, 15000, 5000, 5000, 2000, 3000, 5000]},
                {name: 'Net Profit Margin', data: [10000, 15000, 20000, 7500, 7500, 5000, 10000]},
            ],

            chartOptionsPolarArea: {
                chart: {
                    type: 'polarArea',
                },
                labels: ['Total Income', 'Total Expenses', 'Cash on hand', 'Net Profit Margin'],
                legend: {
                    position: 'bottom'
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                }
            },
            chartOptionsArea: {
                chart: {
                    type: 'area'
                },
                dataLabels: {
                    enable: true
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'string',
                    categories: ["March", "April", "May", "June", "Jule", "August", "September"]
                },

            }
        }
    }
}
</script>

<style scoped>
.stats {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    justify-content: space-around;
    padding: 5%;
}

.stats__title {
    padding-top: 50px;
    font-size: 35px;    
    text-transform: uppercase;
}

.business-info {
    position: relative;
    width: 45%;
    margin: 30px 0;
    padding: 2% 5%;
    border-radius: 15px;
    color: #eaf3fa;
    text-align: start;
    transition: transform .25s ease-in-out
}

.business-info:hover {
    transform: scale(1.1);
}

.stat-icon{
    transition: all .5s linear;
}

.business-info:hover:nth-child(1) .stat-icon {
    color: #85bb65;
}

.business-info:hover:nth-child(2) .stat-icon {
    color: red;
}

.business-info:hover:nth-child(3) .stat-icon {
    animation: shakeHand 1s linear infinite;
}

.business-info:hover:nth-child(4) .stat-icon {
    transform: scale(1.5);
}

.business-stat {
    margin: 15px 0;
}

.business-stat.title {
    font-size: 20px;
}

.business-stat.amount {
    font-size: 35px;
    font-weight: bold;
}

.icon-wrapper {
    position: absolute;
    font-size: 40px;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
}

.charts-group {
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
    max-width: 500px;
}

@keyframes shakeHand {
    0% { -webkit-transform: rotate(0); transform: rotate(0); }
    25% { -webkit-transform: rotate(20deg); transform: rotate(20deg);}
    50% { -webkit-transform: rotate(0); transform: rotate(0); }
    75% { -webkit-transform: rotate(-20deg); transform: rotate(-20deg);}
    100% { -webkit-transform: rotate(0); transform: rotate(0);}
}
</style>