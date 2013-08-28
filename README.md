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
      <img class="slideshow" id="[your chosen id]" src="the/image/you/want/to/start.jpg">
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

    <!-- slideshow -->
    <!-- yes, you have see it right : -->
      <div id="messagebox"></div>
    <div class="bslider" id="slider-div">
        <img class="slideshow" id="slider" src="images/1.gif">
        <div class="prev" id="prev"></div>
        <div class="next" id="next"></div>
        <div class="bullets" id="bullets"></div>
        <div class="text" id="text"></div>
    </div>
    <script type="text/javascript">
            
        //slideshow settings
    
        var bslider = new Array();  
          bslider['slider'] = new Array();
        
          bslider['slider']['img'] = new Array();
          bslider['slider']['img'][1] = 'images/1.gif';
          bslider['slider']['img'][2] = 'images/2.gif';
          bslider['slider']['img'][3] = 'images/3.gif';
        
          bslider['slider']['txt'] = new Array();
          bslider['slider']['txt'][1] = "anwersome image by bproject";
          bslider['slider']['txt'][2] = "not so anwersome image (but still ok ;) )";
          bslider['slider']['txt'][3] = "great image!!!";
        
          bslider['slider']['speed'] = 3000;
        
          bslider['slider']['total'] = 3;
    
          jQuery(document).ready(function() {slideshow('slider','start')})
      
    </script>
    <!--slideshow -->
    
  Note: there is a messagebox. The program post here messages if something is wrong. It is a great developer tool, but not so great for your customers.
  If you leave this box, you will recieve no messages.
  
Colophon
========
 (c) bproject.cu.cc
 this program is developed with love by bproject
 http://bproject.cu.cc
 http://bslider.cu.cc
 
 sorry for my bad English, I am Belgian (and I love it :p )
