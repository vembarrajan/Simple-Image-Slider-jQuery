# Simple-Image-Slider-jQuery

So how do we do a iamge slider?

Get a plugin I hear you cry!!!

Yes admitted you could get a plugin and there are a few good ones out there. jQuery Cycle for one which does just about anything that you want to do. 

You make an infinite slider with just 5 lines of code (and a whole jQuery library to support it). 

Pseudo HTML Code<br>
   &nbsp;&nbsp;&nbsp;&nbsp; Create a container for all the images.<br>

Pseudo CSS Code<br>
    &nbsp;&nbsp;&nbsp;&nbsp; First we put a property of overflow:hidden on the container so all the images apart from the first one are hidden.<br>
    &nbsp;&nbsp;&nbsp;&nbsp; Next we make the list wide enough to encompass all the images<br>
    &nbsp;&nbsp;&nbsp;&nbsp; Then we float all the images left so our list is just one long list of images.<br>

Pseudo Javascript Code<br>
    &nbsp;&nbsp;&nbsp;&nbsp; when page is loaded<br>
    &nbsp;&nbsp;&nbsp;&nbsp; wait 5 seconds<br>
    &nbsp;&nbsp;&nbsp;&nbsp; move the list of images left by the individual images width<br>
    &nbsp;&nbsp;&nbsp;&nbsp; remove image from list<br>
    &nbsp;&nbsp;&nbsp;&nbsp; add it to the end of the list<br>
    &nbsp;&nbsp;&nbsp;&nbsp; then start the cycle again<br>

Actual Code<br>
    &nbsp;&nbsp;&nbsp;&nbsp; var t = setInterval(function(){<br>
	  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $(".slider ul").animate({marginLeft:-200},1000,function(){<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$(this).find("li:last").after($(this).find("li:first"));<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$(this).css({"margin-left":0});<br>
	  	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;},2000);<br>
	  
Contributions

Contributions are welcome!
