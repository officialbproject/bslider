//start file READY
	//if you have errors with this slider,
	//try this rule (to avoid troubles with MooTools, JQuery UI, Prototype.js...)
	//don't forget to check it in your slider setup
	//jQuery.noConflict();
	//and add a '$' here  --------|
jQuery(document).ready(function (   ) {

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

var bs = new Array();

if (window.bslider == undefined) {message('You have no Bsliders defined ! Please define at least one Bslider (array). Check the documentation for more help.','error');return;}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////loop sliders
var count = 0;	
$('div.bslider img.slideshow').each(function () {//START LOOP SLIDERS
	count++;

	//set current id
	var id = $(this).attr('id');
	
	//set clean bslider
	bs[id] = new Array();
	bs[id]['img'] = new Array();
	bs[id]['txt'] = new Array();
	bs[id]['speed'] = new Number();
	bs[id]['total'] = new Number();
	
	//check variables
	if (window.bslider[id] == undefined) {message('We have found a Bslider setup (div and img), but no bslider array with this id ("'+id+'") ! Please update your Bslider array ! If you are sure this is a misunderstanding, check if you do not use some Bslider classes.','warning');}		
	
	if (window.bslider[id]['img'] == undefined) {'You have not defined any images for this ("'+id+'") slider !','warning'}
	else {//start img defined
		for (ii = 1; ii < window.bslider[id]['img'].length; ii++) {//start loop img bsider to bs
			bs[id]['img'][ii] = new Image();
			bs[id]['img'][ii].src = window.bslider[id]['img'][ii];
		}//end loop img bslider to bs
	}//end img defined
	
	if (window.bslider[id]['txt'] == undefined) {'You have not defined any descriptions for this ("'+id+'") slider !','warning'}
	else {//start txt defined
		bs[id]['text'] = true;
		for (it = 1; it < window.bslider[id]['txt'].length; it++) {//start loop txt bslider to bs
			bs[id]['txt'][it] = window.bslider[id]['txt'][it];
		}//end loop txt bslider to bs
	}//end txt bslider to bs
	
	if (window.bslider[id]['speed'] == undefined) {'You have not defined a speed for this ("'+id+'") slider ! We will use the default speed','warning';bs[id]['speed'] = 3000;}
	else {//start speed defined
		bs[id]['speed'] = window.bslider[id]['speed'];
	}//end speed defined
	
	if (window.bslider[id]['total'] == undefined) {'You have not defined a total of images to display for this ("'+id+'") slider ! We calculate the total.','warning'; bs[id]['total'] = window.bslider[id]['img'].length;}
	else {//start total defined
		bs[id]['total'] = window.bslider[id]['total'];
	}//end total defined

	//NEXT
	$('#'+id+'-div').find('#next').on('mouseenter',function(){$('#'+id+'-div').find('#next').animate({opacity: 1},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#next').on('mouseleave',function(){$('#'+id+'-div').find('#next').animate({opacity: 0},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#next').on('click',function(){slideshow(id,'next')})
	
	//PREV
	$('#'+id+'-div').find('#prev').on('mouseenter',function(){$('#'+id+'-div').find('#prev').animate({opacity: 1},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#prev').on('mouseleave',function(){$('#'+id+'-div').find('#prev').animate({opacity: 0},1000,function(){/*complete;*/})})
	$('#'+id+'-div').find('#prev').on('click',function(){slideshow(id,'prev')})
		
	//BULLETS
	for(var i=1;i <= bs[id]['total']; i++){//start loop bullets
		$('#'+id+'-div').find('#bullets').append('<div class="bullet" id="'+i+'"></div>')		
	}//end loop bullets
	
	$('#'+id+'-div').find('#bullets').children().on('click',function(){//start bullet on click
		i = this.id
		slideshow(id,i)
		
		//remove all
		$('#'+id+'-div').find('#bullets').children().removeClass('bulletactive')
		
		//add new
		$('#'+id+'-div').find('#bullets').find('#'+i).addClass('bulletactive')
		
	})//end bullet on click
	
	//STOP
	$('#'+id).on('mouseenter',function () {//start stop on mouseenter
		slideshow(id,'stop')
	})//end stop on mouseenter
	
	//START
	$('#'+id).on('mouseout',function () {//start stop on mouseenter
		timeout=setTimeout(function() {slider(id)},bs[id]['speed']);	
	})//end stop on mouseenter
	
})//END LOOP SLIDERS
if (count === 0) {message('There are no slideshows found on this page !','error');return;}

	var step = 0;
	var timeout;
	
	//slideshow SELECTOR
	window.slideshow = function (sid,simage) {//start slideshow function
		if (simage === 'start') {slider(sid);}
		
		else if (simage === 'stop') {clearTimeout(timeout);}
		
		else if (simage === 'prev') {//start prev
			
			//stop slideshow
			clearTimeout(timeout);
			//calculate step
			if(1 < step) {step--;}
			else {step = bs[sid]['total'];}
			//execute
			$('#'+sid).attr('src',bs[sid]['img'][step].src);
			//update text
			if (bs[sid]['text'] === true) {//start activate text
				$('#'+sid+'-div').find('#text').text(bs[sid]['txt'][step])
			}//end activate text
			//update bullet
				//remove old
				var obullet = step+1;
				if (step === bs[sid]['total']) {obullet = 1;}
				$('#'+sid+'-div').find('#bullets').find('#'+obullet).removeClass('bulletactive')
				//add new
				$('#'+sid+'-div').find('#bullets').find('#'+step).addClass('bulletactive')
			//restart slideshow
			timeout=setTimeout(function() {slider(sid)},bs[sid]['speed']);	
			
		}//end prev
		
		else if (simage === 'next') {//start next
		
			//stop slideshow
			clearTimeout(timeout);
			//calculate step
			if(step < bs[sid]['total']) {step++;}
			else {step = 1;}
			//execute
			$('#'+sid).attr('src',bs[sid]['img'][step].src);
			//update text
			if (bs[sid]['text'] === true) {//start activate text
				$('#'+sid+'-div').find('#text').text(bs[sid]['txt'][step])
			}//end activate text
			//update bullet
				//remove old
				var obullet = step-1;
				if (step === 1) {obullet = bs[sid]['total'];}
				$('#'+sid+'-div').find('#bullets').find('#'+obullet).removeClass('bulletactive')
				//add new
				$('#'+sid+'-div').find('#bullets').find('#'+step).addClass('bulletactive')
			//restart slideshow
			timeout=setTimeout(function() {slider(sid)},bs[sid]['speed']);	
		
		}//end next
			
		else {//start jump to image
				clearTimeout(timeout);
				im = parseInt(simage);
				$('#'+sid).attr('src',bs[sid]['img'][im].src);
				//update text
				if (bs[sid]['text'] === true) {//start activate text
					$('#'+sid+'-div').find('#text').text(bs[sid]['txt'][im])
				}//end activate text
				step = im;
			}//end jump to image
	}//end slideshow function	
	
	window.slider = function (sid) {//start slider
		//exit when images are not supported
		if(!document.images) {message('your browser doesn\'t support the image object, the slideshow can\'t work!','error'); return;}		
		
		//update step
		if(step<bs[sid]['total']) {step++;}
		else {step = 1;}
		
		//update image
		$('#'+sid).attr('src',bs[sid]['img'][step].src);
		
		//update text
		if (bs[sid]['text'] === true) {//start activate text
			$('#'+sid+'-div').find('#text').text(bs[sid]['txt'][step])
		}//end activate text
		
		//update bullet
			//remove old
			var obullet = step-1;
			if (step === 1) {obullet = bs[sid]['total'];}
			$('#'+sid+'-div').find('#bullets').find('#'+obullet).removeClass('bulletactive')
			//add new
			$('#'+sid+'-div').find('#bullets').find('#'+step).addClass('bulletactive')
		
		//keep function alive
		timeout=setTimeout(function () {slider(sid)},bs[sid]['speed']);	
	}//end slider	

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
	
})//end document ready	