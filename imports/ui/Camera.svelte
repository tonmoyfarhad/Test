

<script>

    let camera_button = document.querySelector("#start-camera");
    // let video = document.querySelector("#video");
    let start_button = document.querySelector("#start-record");
    let stop_button = document.querySelector("#stop-record");
    // let download_link = document.querySelector("#download-video");

    let camera_stream = null;
    let media_recorder = null;
    let blobs_recorded = [];

    async function click() {
        let video = document.querySelector("#video");
        camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        video.srcObject = camera_stream;
        console.log(camera_stream);
    };

    function startRecord() {
        // set MIME type of recording as video/webm
        media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });

        // event : new recorded video blob available 
        media_recorder.addEventListener('dataavailable', function(e) {
            blobs_recorded.push(e.data);
        });

        // event : recording stopped & all blobs sent
        media_recorder.addEventListener('stop', function() {
            // create local object URL from the recorded video blobs
            let download_link = document.querySelector("#download-video");
            let videoFile = new Blob(blobs_recorded, { type: 'video/webm' });
            let video_local = URL.createObjectURL(new Blob(blobs_recorded, { type: 'video/webm' }));
            download_link.href = video_local;
            console.log(videoFile)
        });

        // start recording with each recorded blob having 1 second video
        media_recorder.start(1000);
    };

    function stop() {
        media_recorder.stop(); 
        let file = new File(blobs_recorded, "test", { lastModified: new Date().getTime(), type: 'video/mp4' });
        console.log(file);
    };

</script>


<button id="start-camera" on:click={()=>click()}>Start Camera</button>
<video id="video" width="320" height="240" autoplay></video>
<button id="start-record" on:click={()=>startRecord()}>Start Recording</button>
<button id="stop-record" on:click={()=>stop()}>Stop Recording</button>
<a id="download-video" download="test.webm">Download Video</a>