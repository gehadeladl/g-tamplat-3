$(document).ready(function(){
	
	$(window).scroll(function(){
		
		var scrol = $(window).scrollTop();
		
		if(scrol > 1000){
			
			$(".scroll1").fadeIn()
			
		}else{
			
			$(".scroll1").fadeOut()
		}
		if(scrol >= 900){
			
			$(".fix").slideDown()
			
		}else{
			
			$(".fix").slideUp()
		}
	});
	
//############################################
	$(".scroll1").on("click" , function(){
		
		$("body , html").animate({
			
			scrollTop : 0
		},1000)
	});
	
//############################################
    var winH = $(window).height(),
	
	    navH = $(".nav1").innerHeight();
		
	$(".slider1").height(winH - navH)
	
	$(window).on("resize" , function(){
		var winH = $(window).height(),
		
	    navH = $(".nav1").innerHeight();
		
	$(".slider1").height(winH - navH)
	});
//###########################################

    $(".section .sh3 p:first").css("display","block");
	
    $(".section .sh3 h3").on("click" , function(){
		
		$(this).next("p").slideToggle(250);
		
		$(".section .sh3 p").not($(this).next("p")).slideUp(250)
		
	});
	
//############################################
   $(".con2:first").css("display","block");
   
   $(".port3 .lis1 ul li").on("click" , function(){
	   
	   var myId = $(this).attr("id");
	   
	   $(this).addClass("activ1").siblings().removeClass("activ1")
	   
	   $(".port3 .con2").hide();
	   
	   $("#" + myId + "-content").fadeIn(2000);
   });
//############################################## 
})