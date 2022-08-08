<script>
    import { onMount } from "svelte";
    import Chart from "chart.js";
    import Utils from "chart.js";
    import { realtimeWorkerData , realtimeWorkerCount } from '../ui/store';


    let workerTime = realtimeWorkerData;
	let workerCount = realtimeWorkerCount;

    let ctx;
  	let myChart

    const DATA_COUNT = 5;
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

		
    // $: if (myChart){
    //     myChart.data.datasets[0].data = $workerCount
    //     myChart.data.labels = $workerTime
    //     myChart.update()
    // }
	
    onMount(async () => {
        myChart = new Chart(ctx, {
            type: "bubble",
            data: {
                datasets: [{
                    label: 'Scatter Dataset',
                    data: [
                        {
                            x: 1,
                            y: 1,
                            r: 10
                        }, 
                        {
                            x: 2,
                            y: 3,
                            r: 10
                        }, 
                        {
                            x: 3,
                            y: 5,
                            r: 10
                        }, 
                        {
                            x: 4,
                            y: 7,
                            r: 10
                        }
                    ],
                    backgroundColor: ['rgb(255, 99, 132)','rgb(55, 99, 32)','rgb(15, 9, 12)','rgb(250, 19, 2)']
                }],
            },
            options: {},
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
