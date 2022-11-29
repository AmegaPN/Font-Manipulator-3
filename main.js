function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 160);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose' , gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Amega', 50, 400);
}
