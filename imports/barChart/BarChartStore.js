import { writable } from 'svelte/store';
// import { Resolutions } from '../api/resolutions';
// import { useTracker } from 'meteor/rdb:svelte-meteor-data';


function tam(){
    
    const { subscribe, set, update } = writable("");

    return {
        subscribe,
        set: (val) => {set(val);},

        print: (msg) => {console.log(msg)},


        getTem: async (data)=>{
            // debugger;
            if(data !== undefined){
                set(data.tam);
            }
            

    
        }
    }
}


function active(){
    
    const { subscribe, set, update } = writable("");

    return {
        subscribe,
        set: (val) => {set(val);},

        print: (msg) => {console.log(msg)},

        getActive: async (data)=>{
            if(data !== undefined){
                set(data.active);
            }
    
        }
        
    }
}

function human(){
    
    const { subscribe, set, update } = writable("");

    return {
        subscribe,
        set: (val) => {set(val);},

        print: (msg) => {console.log(msg)},

        getHuman: async (data)=>{
            if(data !== undefined){
                set(data.npt);
            }
    
        }
        
    }
}


function meterial(){
    
    const { subscribe, set, update } = writable("");

    return {
        subscribe,
        set: (val) => {set(val);},

        print: (msg) => {console.log(msg)},

        getMaterial: async (data)=>{
            
            if(data !== undefined){
                set(data.meterial);
            }
    
        }
        
    }
}

export const tamData    = tam();
export const humanData   = human();
export const activeData    = active();
export const meterialData   = meterial();
