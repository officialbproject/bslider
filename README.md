Bslider
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
    
  With this array you can set your Bslider, just fill in the right values.
  Now, we need a piece of html to make our Bslider working:
  
    <div class="bslider" id="[your chosen id]-div">
      <div class="prev" id="prev"></div>
      <div class="next" id="next"></div>
      <div class="bullets" id="bullets"></div>
      <!-- and optional (if you need to use descriptions): -->
      <div class="text" id="text"></div>
    </div>

  Now, our Bslider works, but he starts not automatic. We can fix it so:
  
    jQuery(document).ready(function() {slideshow('your chosen id','start')})
    
  Our slideshow works now fine.
  Here is a quick summary with sample data:

    
