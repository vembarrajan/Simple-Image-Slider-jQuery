# Simple-Image-Slider-jQuery

So how do we do a iamge slider?

Get a plugin I hear you cry!!!

Yes admitted you could get a plugin and there are a few good ones out there. jQuery Cycle for one which does just about anything that you want to do. 

You make an infinite slider with just 5 lines of code (and a whole jQuery library to support it). 

Pseudo HTML Code<br>
    Create a container for all the images.<br>

Pseudo CSS Code<br>
    First we put a property of overflow:hidden on the container so all the images apart from the first one are hidden.<br>
    Next we make the list wide enough to encompass all the images<br>
    Then we float all the images left so our list is just one long list of images.<br>

Pseudo Javascript Code<br>
    when page is loaded<br>
    wait 5 seconds<br>
    move the list of images left by the individual images width<br>
    remove image from list<br>
    add it to the end of the list<br>
    then start the cycle again<br>

Actual Code<br>
    var t = setInterval(function(){<br>
	  	$(".slider ul").animate({marginLeft:-200},1000,function(){<br>
			$(this).find("li:last").after($(this).find("li:first"));<br>
			$(this).css({"margin-left":0});<br>
	  	})<br>
	  },2000);<br>
	  
Contributions

Contributions are welcome!
