noesX=0;
noesY=0;


function preload(){

}

function setup(){
canvas=createCanvas(333,333);
canvas.center();

video=createCapture(VIDEO);
//Ends here
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);

}


function modelloaded(){
    console.log("modelloaded");
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noesX=results[0].pose.nose.x;
        noesY=results[0].pose.nose.y;
    }
}


function draw(){
image(video,0,0,333,333);
}

function take_snapshot(){
    save("jokerimage.jpg");
}