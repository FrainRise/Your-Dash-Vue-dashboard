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

// Data for radar chart

export const seriesRadar = [
    {name: 'Income', data: [80, 50, 30, 40, 100, 20]}, 
    {name: 'Expenses', data: [20, 30, 40, 80, 20, 80]}, 
    {name: 'Side contracts value', data: [44, 76, 78, 13, 43, 10]}
]
export const chartOptionsRadar = {
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    title: {
      text: 'Radar Chart - Multi Series'
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['2011', '2012', '2013', '2014', '2015', '2016']
    }
}

// Data for Timeline 
export const seriesRadialbar = [44, 55, 67, 83]

export const chartOptionsRadialbar= {
    chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function () {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
}

/* ---- NOTIFICATIONLIST COMPONENT ---- */

export const notificationList = [
    {id: 1, notifTitle: 'Invitation for job', notifBody: 'Hello, Andrew! We want to invite you for an interview.'},
    {id: 2, notifTitle: 'BUDZZ IN CRUDZ', notifBody: 'Hi, buddy! How ya doing?!'},
    {id: 3, notifTitle: 'Present for FrainRise', notifBody: "You've got some bonuses for you premium account"},
    {id: 4, notifTitle: 'Another day - another lifeline', notifBody: 'Do you want to be replenished spiritually? Check out the link'}
]

/* ---- TODOLIST COMPONENT ---- */

export const todoListDefault = [
    {id: 1, name: 'Learn JavaScript Advanced Level', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', expirationDate: "21.09.2021", isDone: false},
    {id: 2, name: 'Learn Vue 3, Vuex and Vue Router', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', expirationDate: "13.11.2021", isDone: false}
]

/* ---- COLORS COMPONENT ---- */

export const colorsList = [
    {id: 1, name: 'Jet', hex: '#2A2B2E', text: '#fff'},
    {id: 2, name: 'Dark Liver', hex: '#5A5A66', text: '#fff'},
    {id: 3, name: 'Cambridge Blue', hex: '#A4C2A8', text: '#000'},
    {id: 4, name: 'Granny Smith Apple', hex: '#ACEB98', text: '#000'},
    {id: 5, name: 'Screamin Green', hex: '#87FF65', text: '#000'},
]