bslider
=======

Lightweight javascript and jquery slideshow with easy site integration ! - by bproject.cu.cc

How to use
==========

Here is a quick explanation how to setup Bslider:

  First, we need a few files:
  
    bslider/js/jquery-1.10.2.min.js
    bslider/js/slideshow.js
    path/to/your/images + a description

  Bslider works with an assosiative array, see the structure below:
    
    var bslider = new Array();
    bslider['your id'] = new Array();
    bslider['your id']['img'] = new Array();
    bslider['your id']['img'][follow number] = "path to your image.jpg";
    bslider['your id']['txt'] = new Array();
    bslider['your id']['txt'][follow number] = "description for image with the same follow number";
    bslider['your id']['speed'] = int of speed in ms;
    bslider['your id']['total'] = int total images to show (must not be the realy total of images);


    
