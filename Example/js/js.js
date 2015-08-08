(function(){
	//Set the interval to be 2 seconds
	var t = setInterval(function(){
		$(".slider ul").animate({marginLeft:-200},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({"margin-left":0});
		})
	},2000);
})();