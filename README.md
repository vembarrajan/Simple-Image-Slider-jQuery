# Simple-Image-Slider-jQuery

So how do we do a iamge slider?

Get a plugin I hear you cry!!!

Yes admitted you could get a plugin and there are a few good ones out there. jQuery Cycle for one which does just about anything that you want to do. 

You make an infinite slider with just 5 lines of code (and a whole jQuery library to support it). 

Pseudo HTML Code
    Create a container for all the images.

Pseudo CSS Code
    First we put a property of overflow:hidden on the container so all the images apart from the first one are hidden.
    Next we make the list wide enough to encompass all the images
    Then we float all the images left so our list is just one long list of images.

Pseudo Javascript Code
    when page is loaded
    wait 5 seconds
    move the list of images left by the individual images width
    remove image from list
    add it to the end of the list
    then start the cycle again

Actual Code
    var t = setInterval(function(){
	  	$(".slider ul").animate({marginLeft:-200},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({"margin-left":0});
	  	})
	  },2000);
	  
Contributions

Contributions are welcome!
