var image;

function upload() {
  var imgcanvas = document.getElementById("can");
  var fileinput = 
      document.getElementById("finput");
  var imgcanvas1 = 
      document.getElementById("can1");
  image = new SimpleImage(fileinput);
//uploads the user image into canvas1  
  image.drawTo(imgcanvas);
  const ctx1 = imgcanvas1.getContext("2d");
  ctx1.clearRect(0,0,imgcanvas1.width,imgcanvas1.height);
}
//making the image as grey shades and shows it on canvas2
function makegrey() {
  for(var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById("can1");
  image.drawTo(imgcanvas);
}
