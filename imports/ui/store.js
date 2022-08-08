import { writable } from 'svelte/store';
// import { Resolutions } from '../api/resolutions';
// import { useTracker } from 'meteor/rdb:svelte-meteor-data';


function workerTimeData(){
    
    const { subscribe, set, update } = writable("");

    return {
        subscribe,
        set: (val) => {set(val);},

        print: (msg) => {console.log(msg)},


        getWorkerTime: async (data)=>{

            let time = [];
            data.forEach(e => {
                time.push(e.hour);
            });
            console.log("time",time);
            set(time);

    
        }
    }
}


function workerCountData(){
    
    const { subscribe, set, update } = writable("");

    return {
        subscribe,
        set: (val) => {set(val);},

        print: (msg) => {console.log(msg)},

        getWorkerCount: async (data)=>{
            let count = [];
            data.forEach(e => {
                count.push(e.pp);
            });
            console.log("count",count);
            set(count);
    
        }
        
    }
}


export const realtimeWorkerData    = workerTimeData();
export const realtimeWorkerCount   = workerCountData();
