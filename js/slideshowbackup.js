//start file READY
jQuery(document).ready(function () {

/*
######################################################################################
## Bslider by bproject.cu.cc                                                        ##
## version 1.0                                                                      ##
######################################################################################
## Lightweight, javascript and jquery slideshow                                     ##
## (c) bproject.cu.cc - all right reserved                                          ##
## If you have questions or suggestions, please contact me on bproject.cu.cc        ##
## free for personal use, if you want use this slideshow for professional purposes, ##
## please contact me on bproject.cu.cc                                              ##
######################################################################################
*/

//javascript slideshow BSLIDER by BPROJECT.cu.cc

////HOW IT WORKS:
//include this script on the page you want
//write the needed settings
//var img = new Array();
//img[1] = "templates/greenglow2/images/default1.gif"; //THE FIRST ARRAY VALUE MUST BE 1 (not 0 or 2 or another!!!)
//img[2] = "templates/greenglow2/images/default2.gif";
//img[3] = "templates/greenglow2/images/default3.gif";
//var id = 'slideshow';
//var speed = 3000;
//var total = 3;

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!this script needs jquery to work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////functions
var messagereport = true;
//MESSAGE
//adds a message in the messagebox
window.message = function (message,type)
{if (messagereport === true) {//start check message report
	if (!type) {type = 'info';}
	var content = '<div class="' + type + '"><b> slideshow ' + type + ':</b> ' + message + '</div>';
	$("#messagebox").prepend(content);
}//end check message report
}//end function

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////settings
var undefined;
if (window.img == null) {
	var img = new Array();
	img[2] = "http://192.168.0.185/bproject/servers/joomla/dev//templates/greenglow2/images/default2.gif";
	img[1] = "http://192.168.0.185/bproject/servers/joomla/dev//templates/greenglow2/images/default1.gif";
	img[3] = "http://192.168.0.185/bproject/servers/joomla/dev//templates/greenglow2/images/default3.gif";
	window.img = img;
	alert()
}

if (window.speed == null) {var speed = 3000; window.speed = speed; message('You have not give a speed for the slideshow !','warning');}

if (window.id == null) {message('You have not specified an id for the slideshow !','error'); return;}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////script
if('1' in window.img) {//start settings are set

	//LOAD IMAGES
	var image = new Array(); //create image array
	for (var i=1;i<window.img.length;i++) {//start loop img to image
		image[i] = new Image();
		image[i].src = window.img[i];
	}//end loop img to image
	
	
	var step = 0;
	var timeout;
	
	//slideshow SELECTOR
	window.slideshow = function (simage) {//start slideshow function
		if (simage === 'start') {slider();}
		
		else if (simage === 'stop') {clearTimeout(timeout);}
		
		else if (simage === 'prev') {//start prev
			
			//stop slideshow
			clearTimeout(timeout);
			//calculate step
			if(1 < step) {step--;}
			else {step = total;}
			//execute
			$('#'+id).attr('src',image[step].src);
			//update bullet
				//remove old
				var obullet = step+1;
				if (step === total) {obullet = 1;}
				$('#'+id+'-div').find('#bullets').find('#'+obullet).removeClass('bulletactive')
				//add new
				$('#'+id+'-div').find('#bullets').find('#'+step).addClass('bulletactive')
			//restart slideshow
			timeout=setTimeout('slider()',window.speed);	
			
		}//end prev
		
		else if (simage === 'next') {//start next
		
			//stop slideshow
			clearTimeout(timeout);
			//calculate step
			if(step < total) {step++;}
			else {step = 1;}
			//execute
			$('#'+id).attr('src',image[step].src);
			//update bullet
				//remove old
				var obullet = step-1;
				if (step === 1) {obullet = total;}
				$('#'+id+'-div').find('#bullets').find('#'+obullet).removeClass('bulletactive')
				//add new
				$('#'+id+'-div').find('#bullets').find('#'+step).addClass('bulletactive')
			//restart slideshow
			timeout=setTimeout('slider()',window.speed);	
		
		}//end next
			
		else {//start jump to image
				clearTimeout(timeout);
				im = parseInt(simage);
				$('#'+id).attr('src',image[im].src);
				step = im;
			}//end jump to image
	}//end slideshow function
	
	window.slider = function () {//start slider
		//exit when images are not supported
		if(!document.images) {message('your browser doesn\'t support the image object, the slideshow can\'t work!','error'); return;}
		
		//update step
		if(step<total) {step++;}
		else {step = 1;}
		
		//update image
		$('#'+id).attr('src',image[step].src);
		
		//update bullet
			//remove old
			var obullet = step-1;
			if (step === 1) {obullet = total;}
			$('#'+id+'-div').find('#bullets').find('#'+obullet).removeClass('bulletactive')
			//add new
			$('#'+id+'-div').find('#bullets').find('#'+step).addClass('bulletactive')
	
		//keep function alive
		timeout=setTimeout('slider()',window.speed);	
	}//end slider	

	//NEXT
	$('#'+id+'-div').find('#next').on('mouseenter',function(){$('#'+id+'-div').find('#next').animate({opacity: 1},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#next').on('mouseleave',function(){$('#'+id+'-div').find('#next').animate({opacity: 0},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#next').on('click',function(){slideshow('next')})
	
	//PREV
	$('#'+id+'-div').find('#prev').on('mouseenter',function(){$('#'+id+'-div').find('#prev').animate({opacity: 1},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#prev').on('mouseleave',function(){$('#'+id+'-div').find('#prev').animate({opacity: 0},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#prev').on('click',function(){slideshow('prev')})
		
	//BULLETS
	for(var i=1;i <= total; i++){//start loop bullets
		$('#'+id+'-div').find('#bullets').append('<div class="bullet" id="'+i+'"></div>')		
	}//end loop bullets
	
	$('#'+id+'-div').find('#bullets').children().on('click',function(){//start bullet on click
		i = this.id
		slideshow(i)
		
		//remove all
		$('#'+id+'-div').find('#bullets').children().removeClass('bulletactive')
		
		//add new
		$('#'+id+'-div').find('#bullets').find('#'+i).addClass('bulletactive')
		
		
		
	})//end bullet on click
	
	//STOP
	$('#'+id).on('mouseenter',function () {//start stop on mouseenter
		slideshow('stop')
	})//end stop on mouseenter
	
	//START
	$('#'+id).on('mouseout',function () {//start stop on mouseenter
		timeout=setTimeout('slider()',window.speed);	
	})//end stop on mouseenter
	
						//CONTROL FUNCTION: check the status of a var
						//CONTROL FUNCTION: check the status of a var
						//CONTROL FUNCTION: check the status of a var
							/*function controlbs ()	{
								$('#messagebox').append(step+'&nbsp;&nbsp;&nbsp;')
								control = setTimeout('controlbs()',1000)
							}
						controlbs()*/
						//CONTROL FUNCTION: check the status of a var
						//CONTROL FUNCTION: check the status of a var
						//CONTROL FUNCTION: check the status of a var
	
}//end settings are set
else {message('You have no images set or they have a wrong id !','error')}	
	
	
})//end document ready	
	
	
