<script>
    import { onMount } from "svelte";
    import Chart from "chart.js";
    import { realtimeWorkerData , realtimeWorkerCount } from '../ui/store';


    let workerTime = realtimeWorkerData;
	let workerCount = realtimeWorkerCount;

    let ctx;
  	let myChart
		
    $: if (myChart){
        myChart.data.datasets[0].data = $workerCount
        myChart.data.labels = $workerTime
        myChart.update()
    }
	
    onMount(async () => {

        
        myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: $workerTime,
                datasets: [
                    {
                        label: "Current",
                        data: $workerCount,
                        fill: false,
						borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1,
                        tension: 0.1
                    }
                    // ,
                    // {
                    //     label: "Ideal",
                    //     data: [0,27,27,27,5],
                    //     fill: false,
					// 	borderColor: '#000000',
                    //     borderWidth: 2,
                    //     tension: 0.1
                    // }
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
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
