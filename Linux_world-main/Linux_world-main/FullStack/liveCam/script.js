const video = document.getElementById('video');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
                    video.play(); =[puu]
        })
} else {
    alert("Sorry, your browser does not support ");
}
