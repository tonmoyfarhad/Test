<script>
	import chartjs from 'chart.js';
	import { onMount } from 'svelte';
	import { realtimeWorkerData , realtimeWorkerCount } from '../ui/store';

	let workerTime = realtimeWorkerData;
	let workerCount = realtimeWorkerCount;

    let chartData;

	let chartValues = [20, 10, 5, 2, 20, 30, 45,66];
	let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug'];

	// realtimeWorkerData.subscribe(value => {
	// 	chartValues = value;
	// });
	
	// realtimeWorkerCount.subscribe(value => {
	// 	chartLabels = value;
	// });
	

	
	let ctx;
	let chartCanvas;

	onMount(async (promise) => {
		ctx = chartCanvas.getContext('2d');
		var chart = new chartjs(ctx, {
			type: 'line',
			data: {
				labels: chartLabels,
				datasets: [{
					label: 'Revenue',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data: chartValues
				}]
			}
		});

	});

</script>

<canvas bind:this={chartCanvas} id="myChart"></canvas>
