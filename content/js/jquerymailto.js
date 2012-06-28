jQuery.fn.mailto = function() {
	return this.each(function(){
		var mail = $(this).html().replace(/\s*\(.+\)\s*/, "@");
		$(this).before('<a class="email" target="_blank" href="mailto:' + 'email' + '@' + 'jenfu.co.uk?subject=Let\'s%20work%20together!" rel="nofollow" title="Email ' + 'me!' + '">' + mail + '</a>').remove();
	});
};

jQuery.fn.mailto2 = function() {
	return this.each(function(){
		var mail = $(this).html().replace(/\s*\(.+\)\s*/, "@");
		$(this).before('<a class="email" target="_blank" href="mailto:' + 'email' + '@' + 'jenfu.co.uk?subject=Please%20send%20me%20a%20detailed%20CV" rel="nofollow" title="Ask away!' + '">' + mail + '</a>').remove();
	});
};