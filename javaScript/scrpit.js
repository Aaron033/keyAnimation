//Create a paper.js path to draw a line into it:
    var path= new Path(); 
    //Give the stroke a color 
path.strokeColor= 'red'; 
var start = new Point(1, 100); 
//Move to start and draw a line from there 
path.moveTo(start); 
//Note the plus operator on Point objects 
//paperScript does that for us, and much more!

path.lineTo(start + [500, -50]); 

var myCircle = new Path.Circle(new Point(100, 70), 10); 
myCircle.fillColor = 'black'; 

var myRectangle = new Path.Rectangle(new Point(60, 300), new Size(80, 80));
myRectangle.fillColor = "pink";
