
// SLIDER
(function( $ ){
	var methods = {
		init : function( options ) {
			return this.each(function(){
				var $this = $(this),
					settings = $this.data('scroller');
				if ( ! settings ) {
					$(this).data('scroller', {
						target : $this,
						currentLocation : 1,
						previousLocation : 1,
						numDivs : 1,
						step : 1,
						animationDuration : 1000,
						itemWidth : 0,
						itemHeight : 0,
						animationType: "linear"
					});
					if ( options ) { 
						$.extend( 
							$(this).data('scroller'), 
							options 
						);
					}
				}
				 $(this).scroller('createEnviorment');
			   });
		},
		createEnviorment: function() {
			var $this = $(this);
			var data = $this.data('scroller');
			var newProprieties = {
				navNext			 : $this.find('div.slider-next a'),
				navBack 		 : $this.find('div.slider-prev a'),
				navBulletList 	 : $this.find('div.slider-nav ul'),
				numDivs			 : $this.find('div.slider-items div.slider-item').size(),
				itemWidth		 : $this.find('div.slider-items div.slider-item:first').width(),
				itemHeight		 : $this.find('div.slider-items div.slider-item::first').height(),
				sliderHolder	 : $this.find('div.slider-items'),
				animating		 : false
			};
			newProprieties.pageNumber = (data.step>1?
												((newProprieties.numDivs/data.step > parseInt(newProprieties.numDivs/data.step))?
													(parseInt(newProprieties.numDivs/data.step)+1):
													parseInt(newProprieties.numDivs/data.step)):
												newProprieties.numDivs);
			newProprieties.sliderHolder.width(newProprieties.numDivs*newProprieties.itemWidth);
			$.extend( data, newProprieties);
			$this.scroller('bindButtons');
			$this.scroller('checkButtons');
		},
		moveNext:function() {
			var $this = $(this);
			var data = $this.data('scroller');
			if(data.currentLocation < data.numDivs/data.step  && !data.animating)
			{
				data.previousLocation = data.currentLocation;
				data.currentLocation++;
				$this.scroller('moveToPage',data.currentLocation);
			}
			return this;
		},
		moveBack:function() {
			var $this = $(this);
			var data = $this.data('scroller');
			if(data.currentLocation > 1 && !data.animating)
			{
				data.previousLocation = data.currentLocation;
				data.currentLocation--;
				$this.scroller('moveToPage',data.currentLocation);
			}
			return this;
		},
		moveToPage:function(pageNumber) {
			var $this = $(this);
			var data = $this.data('scroller');
			if( data.previousLocation != data.currentLocation)
			{	
					//Calculate this first to avoid animation delays
					var leftMargin = (pageNumber-1)* data.itemWidth * data.step;
					leftMargin = "-"+leftMargin;
					data.animating = true;
					$this.scroller('checkButtons');
					data.sliderHolder.animate({ "marginLeft": leftMargin }, data.animationDuration, data.animationType, function(){
							$this.scroller('checkButtons');
							data.animating = false;
						});
			}else {
				$this.scroller('checkButtons');
			}
		},
		bindButtons: function(){
			var $this = $(this);
			var data = $this.data('scroller');
			if(data.navBulletList.length > 0) {
				data.navBulletList.children().each(function(){
					
					$(this).click( function(e) {
						if(!data.animating) {
							data.previousLocation = data.currentLocation;
							data.currentLocation = $(this).index()+1;
							$this.scroller('moveToPage',data.currentLocation);
						}
						e.preventDefault();
					});
				});
			}
			data.navNext.click(function(e) { 
					e.preventDefault();
					$this.scroller('moveNext');
			});
			data.navBack.click(function(e) { 
					e.preventDefault();
					$this.scroller('moveBack');
			});
		},
		checkButtons: function() {
			var $this = $(this);
			var data = $this.data('scroller');
			if(data.navBulletList.length > 0 ){
				data.navBulletList.find('a.active').removeClass('active');
				data.navBulletList.find('li:nth-child('+(data.currentLocation)+')').children('a').addClass('active');
				
			}
			if(data.numDivs == data.currentLocation){
				data.navNext.hide();
			} else {
				data.navNext.show();
			}
			if(1 == data.currentLocation){
				data.navBack.hide();
			} else {
				data.navBack.show();
			}
		}
	  };

	  $.fn.scroller = function( method ) {
		// Method calling logic
		if ( methods[method] ) {
		  return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
		  return methods.init.apply( this, arguments );
		} else {
		  $.error( 'Method ' +  method + ' does not exist on jQuery.scroller' );
		}    
	  };
})( jQuery );

$(document).ready(function(){
	// SLIDER
	var slider = $('div.slider');
	slider.scroller({
		animationType: "easeInOutExpo"
	});
});
