sound = "";
Status = "";
object = [];
person = "";

function preload()
{
    
}

function setup()
{
    
    canvas = createCanvas(640 ,420);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status - detecting objects ";  
}

function modelLoaded()
{
    console.log("model is loaded");
    Status = true;
}

function gotResults(error , results)
{
if (error)
{
    console.log(error);
}
console.log(results);

}



function draw()
{    
    sound.play();

    image(video,0,0,640,420);
    
    if(Status != "")
    {
        r= random(255);
        g=  random(255);
        b= random(255);
        objectDetector.detect(video, gotResults);
      for(i = 0 ; i < object.length ; i++)
      {
        document.getElementById("status").innerHTML = "Status - Object Detected ";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are - " + object.length;
        fill(r,g,b);
        persent = floor(object[i].confidence * 100 );
        text(object[i].label + " " + persent + "% " , object[i].x+15,objects[i].y+15 );
        nofill();
        stroke(r,g,b);
        rect(object[i].x , object[i].y , object[i].width , object[i].height);
        person = object[i].label;
        
        if (person = "person")
       {
        sound.stop(5);
        document.getElementById("number_of_objects").innerHTML = "Baby Detected";

       } 

        else
        {
        document.getElementById("number_of_objects").innerHTML = "Baby Not Detected";
        sound.play();
        }
      }
      }
    }
