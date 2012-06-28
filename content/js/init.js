$(document).ready(function(){
	// SLIDER
	$('.slider').flexslider();

	// Inside slider
	$('.more').click(function(){
        $(this).parent('.top').stop().animate({'top' : '-800', 'left' : '0'}, 800);
        $(this).parent().next('.bottom').stop().animate({'top' : '0', 'left' : '0'}, 800);
	});
	$('.less').click(function(){
	$(this).parent().prev('.top').stop().animate({'top' : '0', 'left' : '0'}, 800);
	$(this).parent('.bottom').stop().animate({'top' : '800', 'left' : '0'}, 800);
	});	


	// Drop-down menu
	$('a.sm1').click(function() {
		$('a.sm1').addClass("active");
		$('a.sm2').removeClass("active");	
		$('a.sm3').removeClass("active");		
	});

	$('a.sm2').click(function() {
		$("a.sm2").addClass("active");
		$("a.sm1").removeClass("active");	
		$("a.sm3").removeClass("active");		
	});

	$('a.sm3').click(function() {
		$("a.sm3").addClass("active");
		$("a.sm1").removeClass("active");	
		$("a.sm2").removeClass("active");		
	});	 

	$(".verticalmenu ul.submenu").hide(); 
	$(".verticalmenu ul.menusub").hide(); 
	$(".verticalmenu ul.menusub.open").show();
	$(".verticalmenu ul.submenu.open").show();
	// On sélectionne tous les items de liste portant la classe "toggleSubMenu"
	// et on remplace l'élément span qu'ils contiennent par un lien :
	$(".verticalmenu li.togglesubmenu span.entry").each( function () {
	$(this).replaceWith('<a href="" title="Display drop-down menu">' + $(this).text()) ;
	}); 
	$(".verticalmenu li.togglefirstmenu span.entry").each( function () {
	$(this).replaceWith('<a href="" title="Display drop-down menu">' + $(this).text()) ;
	}); 
	// On modifie l'évènement "click" sur les liens dans les items de liste
	// qui portent la classe "toggleSubMenu" :
	$(".verticalmenu li.togglesubmenu > a").click( function () {
		// Si le sous-menu était déjà ouvert, on le referme :
	if ($(this).next("ul.submenu:visible").length != 0) {
		$(this).next("ul.submenu").slideUp("normal");
		}
	// Si le sous-menu est caché, on ferme les autres et on l'affiche :
	else {
		$(".verticalmenu ul.submenu").slideUp("normal");
		$(".verticalmenu li.togglesubmenu > a").css('font-weight',  'normal');
		$(".verticalmenu li.togglesubmenu > a").css('color',  '#636363');
		$(this).next("ul.submenu").slideDown("normal");
		$(this).css('font-weight',  'bold');
		$(this).css('color',  '#000')	
		}
	// On empêche le navigateur de suivre le lien :
	return false;
	}); 
	$(".verticalmenu li.togglefirstmenu > a").click( function () {
		// Si le sous-menu était déjà ouvert, on le referme :
	if ($(this).next("ul.menusub:visible").length != 0) {
		$(this).next("ul.menusub").slideUp("normal");
		}
	// Si le sous-menu est caché, on ferme les autres et on l'affiche :
	else {
		$(".verticalmenu ul.menusub").slideUp("normal");
		$(this).next("ul.menusub").slideDown("normal");		
		}
	// On empêche le navigateur de suivre le lien :
	return false;
	});

	//Pulsating logo

	//Custom overflow
	$(function()
	{
	$('.customscroll').each(
		function()
		{
			$(this).jScrollPane(
				{
					showArrows: $(this).is('.arrow'),
					verticalDragMinHeight: 21,
					verticalDragMaxHeight: 21,
					horizontalDragMinWidth: 21,
					horizontalDragMaxWidth: 21,
					verticalGutter:20,
					showArrows:true
				}
			);
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind(
				'resize',
				function()
				{
					if ($.browser.msie) {
						// IE fires multiple resize events while you are dragging the browser window which
						// causes it to crash if you try to update the scrollpane on every one. So we need
						// to throttle it to fire a maximum of once every 50 milliseconds...
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					} else {
						api.reinitialise();
					}
				}
			);
		}
	)

});

	if ($('a.email').length > 0){
	$.getScript('jquerymailto.js',function(){ 
		$('a.email').mailto();
	});
	}
	$('a.email').mailto();
	$('a.cvmail').mailto2();

});    
