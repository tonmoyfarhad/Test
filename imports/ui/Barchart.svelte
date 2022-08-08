<script>
    import { onMount } from "svelte";
    import Chart from "chart.js";
    import { realtimeWorkerData , realtimeWorkerCount } from '../ui/store';
    import {tamData, humanData, activeData, meterialData} from '../barChart/BarChartStore';


    let tam = tamData;
	let human = humanData;
    let active = activeData;
    let meterial = meterialData;

    let ctx;
  	let myChart

    const footer = (tooltipItems) => {
        let sum = 0;

        tooltipItems.forEach(function(tooltipItem) {
            sum += tooltipItem.parsed.y;
        });
        return 'Sum: ' + sum;
    };
		
    $: if (myChart){
        // myChart.data.datasets[0].data = $tam
        // myChart.data.datasets[1].data = $human
        // myChart.data.datasets[2].data = $active
        // myChart.data.datasets[3].data = $meterial
         // myChart.data.labels = $workerTime
        myChart.update()
    }
	
    onMount(async () => {

        myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["FLOOR-1","FLOOR-2","FLOOR-3","FLOOR-4"],
            datasets: [
                {
                    label: "TAM",
                    type: "bar",
                    data: [60, 60, 60, 60],
                    backgroundColor:"#62AFDA",
                    stack: 1,
                    categoryPercentage: 0.2,
                    barPercentage: 0.9
                },
                {
                    label: "SAM",
                    type: "bar",
                    data: [50, 50, 50, 50],
                    backgroundColor:"rgba(255, 99, 132, 0.2)",
                    // categoryPercentage: 0.2,
                    // barPercentage: 0.6,
                    barThickness: 21,
                    // stack: 1
                },
                
                {
                    label: "Active",
                    type: "bar",
                    backgroundColor:"#34D399",
                    data: [10, 22, 15, 7],
                    // categoryPercentage: 0.7,
                    // barPercentage: 0.6,
                    barThickness: 29,
                    // stack: 2
                },
                {
                    label: "NPT",
                    backgroundColor:"#ff3300",
                    data: [15, 18, 10, 15],
                    barThickness: 29,
                    // stack: 2,
                },
                
                
            ],
        },
        options: {
            tooltips: {
                    callbacks: {
                        label: function(tooltipItem, data) {
                            console.log("!!!!!!!!!!!!!!!!!!",tooltipItem, data);
                            var label = data.datasets[tooltipItem.datasetIndex].label || '';

                            if (label) {
                                label += ': ';
                            }
                            label += Math.round(tooltipItem.yLabel * 100) / 100;
                            return label;
                        }
                    }
                },
                
            scales: {
                // x:{
                //     stacked: true,
                //     display: true
                // },
                // y:{
                //     beginAtZero: true,
                //     stacked: true,
                // }
                
                yAxes: [{
                    beginAtZero: true
                }],
                xAxes: [{
                    position: "bottom",
                    stacked: true,
                    display: true,
                    gridLines: {
                        display: false
                    }
                }]
            }
        },
        
        });
    });
</script>

<div class="canvas">
    <canvas class="canvas" id="myChart" width="1900" height="800" bind:this={ctx} />
</div>

<style>
    .canvas{
        overflow-y: hidden;
        max-width: 2000px;
        max-height: 1700px;
    }
</style>
