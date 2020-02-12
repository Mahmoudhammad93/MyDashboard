/*-- Global $, alert, console --*/
$(function(){

    'use strict';

    // To add class active to nav links
	 $(document).on('click', 'li.nav-links', function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });

    // To make arrow for sidebar nav link
    $(document).ready(function (){
        $('.has-sub .link-content').append('<span class="before"></span>');
		if($('body').hasClass('sidebar-close')){
			if($('.nav-links').hasClass('active')){
				$('.nav-links').removeClass('active')
			}
		}
	});
	// To Open And Close Sidebar
	$(document).on('click', '.menu-collapse', function(){
        $('body').toggleClass('sidebar-close');
		if($('body').hasClass('sidebar-close')){
			console.log('yes')
			if($('.nav-links').hasClass('active')){
				$('.nav-links').removeClass('active')
			}
		}
		if($('body').hasClass('sidebar-close')){
			localStorage.setItem("TheMenuClose",false);
		}else{
			localStorage.setItem("TheMenuClose",true);
		}
    });

    // To make small sidebar
    $(document).on('click', '.close-sidebar p i', function(){
		$('body').toggleClass('nav-close');
		if($('body').hasClass('nav-close')){
			$(this).addClass('fa-angle-left').removeClass('fa-angle-right');
		}else{
			$(this).addClass('fa-angle-right').removeClass('fa-angle-left');
		}
		if($('body').hasClass('nav-close')){
		  localStorage.setItem("TheMenuSmall",false);
		}else{
		  localStorage.setItem("TheMenuSmall",true);
	  	}
	});

	$(document).ready(function(){
		ToMenuStatus()
		function ToMenuStatus(){
			if (localStorage.getItem("TheMenuSmall") == "true"){
				$('body').removeClass('nav-close');
			} 
			else if (localStorage.getItem("TheMenuSmall") == "false"){
				$('body').addClass('nav-close');
			}
			
			if(localStorage.getItem("TheMenuClose") == "true"){
				$('body').removeClass('sidebar-close');
			}else if(localStorage.getItem("TheMenuClose") == "false"){
				$('body').addClass('sidebar-close');
			}
		}
	});
});