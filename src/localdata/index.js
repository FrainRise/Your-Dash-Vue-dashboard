/* ---- STATS COMPONENT ---- */

// Income List data
export const  incomeList = [
    {title: 'Total Income', amount: '125,000', savePercentage: '25', themeColor: 'linear-gradient(315deg, rgb(145, 169, 229), rgb(84, 125, 229) 78%)', iconName: 'dollar-sign'},
    {title: 'Total Expenses', amount: '25,000', savePercentage: '25', themeColor: 'linear-gradient(315deg, rgb(182, 220, 247), rgb(70, 175, 249) 78%)', iconName: 'funnel-dollar'},
    {title: 'Cash on hand', amount: '50,000', savePercentage: '25', themeColor: 'linear-gradient(315deg, rgb(206, 164, 251), rgb(158, 113, 206) 78%)', iconName: 'hand-sparkles'},
    {title: 'Net Profit Margin', amount: '75,000', savePercentage: '75', themeColor: 'linear-gradient(315deg, rgb(180, 255, 225), rgb(133, 209, 179) 78%)', iconName: 'chart-line'},
];

// Data for simple Area

export const chartOptionsArea = {
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
    }

}

export const seriesArea = [
    {name: 'Income', data: [0, 25000, 45000, 15000, 15000, 10000, 15000]}, 
    {name: 'Expenses', data: [15000, 5000, 0, 2000, 0, 3000, 0]},
    {name: 'Cash on hand', data: [10000, 15000, 5000, 5000, 2000, 3000, 5000]},
    {name: 'Net Profit Margin', data: [10000, 15000, 20000, 7500, 7500, 5000, 10000]},
];

// Data for Polar Area
export const seriesPolarArea = [125000, 25000, 50000, 75000];

export const chartOptionsPolarArea = {
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
}

/* ---- CHARTS COMPONENT ---- */


// Data for Basic Column Bar
export const seriesColumnChart = [
    {name: 'Income', data: [0, 25000, 45000, 15000, 15000, 10000, 15000]},
    {name: 'Expenses', data: [15000, 5000, 0, 2000, 0, 3000, 0]},
    {name: 'Net Profit Margin', data: [10000, 15000, 20000, 7500, 7500, 5000, 10000]}
]

export const columnChartOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    fill: {
        opacity: 1
    }
}

// Data for Stacked Bar
export const seriesStackedBar = [
    {name: 'Web apps', data: [44, 55, 41, 67, 22, 43]}, 
    {name: 'React Native apps', data: [13, 23, 20, 8, 13, 27]}, 
    {name: 'Swift apps', data: [11, 17, 15, 15, 21, 14]}, 
    {name: 'Android apps', data: [21, 7, 25, 13, 22, 8]}
]

export const chartOptionsStackedBar = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10
      },
    },
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        '01/05/2011 GMT', '01/06/2011 GMT'
      ],
    },
    legend: {
      position: 'bottom'
    },
    fill: {
      opacity: 1
    }
}

// Data for Pie Chart
export const seriesPieBar = [125000, 25000, 50000, 75000];

export const chartOptionsPieBar = {
    chart: {
        type: 'pie',
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
}

// Data for Donut Chart
export const seriesDonutBar = [125000, 25000, 50000, 75000];

export const chartOptionsDonutBar = {
    chart: {
        type: 'donut',
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
}