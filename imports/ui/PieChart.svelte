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
            type: "pie",
            data: {
                labels: ['Talking', 'Cellphone', 'Drinking','Inactive'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [100,80,50,17],
                        backgroundColor: ['red','green','blue','gray'],
                        // borderColor: 'black',
                        // borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Pie Chart'
                }
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
