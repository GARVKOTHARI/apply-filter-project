function preload() {
}

function setup() {
    canvas = createCanvas(500 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialized")
}

function draw() {
    image(video, 0, 0, 500, 500);
}

function gotPoses(Results) {


    if(Results.length>0) {
        console.log(Results);
        console.log("nose x = " + Results[0].pose.nose.x);
        console.log("nose y = " + Results[0].pose.nose.y);
    }
    
}

function take_snapshot() {
    save('myface.png');
} 