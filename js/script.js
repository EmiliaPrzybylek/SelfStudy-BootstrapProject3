'use strict';

var options = {
    series: [{
        name: 'Posty',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'Tematy',
        data: [11, 32, 45, 32, 34, 52, 41]
    }, {
        name: 'Użytkownicy',
        data: [45, 25, 60, 30, 78, 40, 30]
    }],
    chart: {
        height: 250,
        foreColor: "#ccc",
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    colors: ['#00aeff40', '#0051ffb9', '#9C27B0'],
    legend: {
        show: false
    }

};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();