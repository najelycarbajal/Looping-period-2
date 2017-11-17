// sketch.js
function setup() {
  createCanvas(400,400)
}

function draw() {
  background
  (color= "	#E6E6FA")
  fill(250)
  var x = 50
  var count = 0

  while (count < 8) {
       rect(x, 40, 40, 40)
       rect(x, 80, 40, 40)
       rect(x, 120, 40, 40)
       rect(x, 160, 40, 40)
       rect(x, 200, 40, 40)
       rect(x, 240, 40, 40)
       rect(x, 280, 40, 40)
       rect(x, 320, 40, 40)
       count += 1
    x += 40
  }
  
}