/*!
 * jQuery Simple Cookie Notice Plugin v1.2
 *  *
 * Copyright 2014, Periscopix
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

(function( $ ) {
  $.fn.simpleCookieNotice = function(options) {

    var settings = $.extend( {
		  setImpDate: 'May 25, 2012',
		  setURL : /#/,
		  fadeInTime: 3000,
		  showTime: 120500,
		  fadeOutTime: 3000,
		  cookieText: 'We set cookies by default. For more information ',
		  setCSS: {'width':'280px','padding':'10px','position': 'absolute', 'bottom': '10px', 'right': '10px', 'background': '#000', 'color': '#fff','display': 'none', 'z-index': '99'},
		  cookiePageURL: '#'
		}, options);
	
	var firstPageCheck = settings.setURL.test(document.referrer);
	var impDate = parseFloat(Date.parse(settings.setImpDate).toString().slice(0,10));
	var nowDate = new Date();
	nowDate = parseFloat(Date.parse(nowDate).toString().slice(0,10));
	var prevSession; 
	
	if($.cookie('__utma') !== null){
		var arrCookie = $.cookie('__utma').split('.');
		if(arrCookie[5] == 1 && nowDate - arrCookie[3] < 5){
			prevSession = 0;
		} else{prevSession = arrCookie[3];}
	}
	else{prevSession = 0;}
	

	if(firstPageCheck === false){
		if(impDate > prevSession){
				cookInfo();			
				}
	}
	
	function cookInfo(){
		$('body').append('<div id="cookieInfo">' + settings.cookieText + 'click <a href="' + settings.cookiePageURL + '">here</a>.</div>');
		$('#cookieInfo').css(settings.setCSS);
		$('#cookieInfo').fadeIn(settings.fadeInTime);
		$('#cookieInfo').delay(settings.showTime).fadeOut(settings.fadeOutTime);
	}
	
  };
  
})( jQuery );