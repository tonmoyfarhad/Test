<script>
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';
  import { Resolutions, TAMvsSYSTEMloss } from '../api/resolutions';
  import { realtimeWorkerData ,realtimeWorkerCount } from '../ui/store'

  import Chart from '../ui/chart.svelte';
  import LineChart from './LineChart.svelte';
  import BarChart from '../ui/Barchart.svelte';
  import PieChart from '../ui/PieChart.svelte';
  import ScatterChart from './ScatterChart.svelte';
  import Camera from '../ui/Camera.svelte';
  import {tamData, humanData, activeData, meterialData} from '../barChart/BarChartStore';

  let workerData = realtimeWorkerData;
  let workerCount = realtimeWorkerCount;

  // $: resolutions = useTracker(() => Resolutions.find({}).fetch());

  let tmp;
  const unsubscribe = useTracker(() => Resolutions.find({}).fetch()).subscribe(value => {

    tmp = value;
    console.log('Resolutions',tmp)
    workerData.getWorkerTime(tmp);
    workerCount.getWorkerCount(tmp);
  });

  let TAMvsSystemLoss;
  const unsubscribeTAMvsSYSTEMloss = useTracker(() => TAMvsSYSTEMloss.find({}).fetch()).subscribe(value => {

    TAMvsSystemLoss = value;
    console.log("TAMvsSYSloss",TAMvsSystemLoss);
    tamData.getTem(TAMvsSystemLoss[TAMvsSystemLoss.length-1]);
    humanData.getHuman(TAMvsSystemLoss[TAMvsSystemLoss.length-1]);
    activeData.getActive(TAMvsSystemLoss[TAMvsSystemLoss.length-1]);
    // meterialData.getMaterial(TAMvsSystemLoss[TAMvsSystemLoss.length-1]);
  })

  let file;

  // function myFunc(){

  //   let formData = new FormData();
  //   formData.append("file",file);

  //   console.log(file[0]);
  // }
  
  
</script>



<div>
  <h1>Realtime Chart</h1>
  <!-- <NewChart/> -->

  <!-- <form on:submit|preventDefault={myFunc}>
    <label for="myfile">Select a file:</label>
    <input type="file" id="myfile" bind:files={file}>
    <input type="submit" />
  </form> -->
  
  <!-- <Camera/> -->

  <div class="main">
    <LineChart/>
    <BarChart/>
    <PieChart/>
  </div>
  <!-- <ScatterChart/> -->
  
</div>

<style>
  .main{
    display: flex;
    justify-content: space-around;
  }
</style>
  