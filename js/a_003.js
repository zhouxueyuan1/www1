/*
 * version 1.2
 * 倒计时插件
 */
var COUNTER_OPTIONS;
(function($){
	$.timecount = function(options){
		var defaults={
			ts:0,
			container: "",
			day_id: "",
			hour_id: "",
			second_id: "",
			minute_id: "",
			fmt:"DD天HH小时ii分ss秒",
			timeout:function(){}
		}
		for(k in options){
			if(defaults[k] != 'undifined')
			{
				defaults[k] = options[k];
			}
		}
		COUNTER_OPTIONS = defaults;
		fun_timecount();
	}
})(jQuery);
function fun_timecount()
{
	if(COUNTER_OPTIONS['ts'] < 0) COUNTER_OPTIONS['ts'] = 0;

    var days = Math.floor(COUNTER_OPTIONS['ts'] /(60 * 60*24));
	var hours = Math.floor(COUNTER_OPTIONS['ts'] /(60 * 60)%24);
    var minutes = Math.floor(COUNTER_OPTIONS['ts'] / 60) % 60;
    var seconds = COUNTER_OPTIONS['ts'] % 60;

    days=days<10?'0'+days:days;
	hours = hours < 10?'0'+hours:hours;
	minutes = minutes < 10?'0'+minutes:minutes;
	seconds = seconds < 10?'0'+seconds:seconds;

	if(COUNTER_OPTIONS['container'] != '')
	{
		var str = COUNTER_OPTIONS['fmt'].replace('HH', hours);
		str = str.replace('ii', minutes);
		str = str.replace('ss', seconds);
		document.getElementById(COUNTER_OPTIONS['container']).innerHTML = str;
	}
	if(COUNTER_OPTIONS['day_id'] != '')
	{
		document.getElementById(COUNTER_OPTIONS['day_id']).innerHTML = days;
	}
	if(COUNTER_OPTIONS['hour_id'] != '')
	{
		document.getElementById(COUNTER_OPTIONS['hour_id']).innerHTML = hours;
	}
	if(COUNTER_OPTIONS['minute_id'] != '')
	{
		document.getElementById(COUNTER_OPTIONS['minute_id']).innerHTML = minutes;
	}
	if(COUNTER_OPTIONS['second_id'] != '')
	{
		document.getElementById(COUNTER_OPTIONS['second_id']).innerHTML = seconds;
	}

	COUNTER_OPTIONS['ts']--;
	if(COUNTER_OPTIONS['ts'] >= 0)
	{
		setTimeout("fun_timecount()", 1000);
		return;
	}
	if(typeof(COUNTER_OPTIONS['timeout']) == 'function')
	{
		COUNTER_OPTIONS['timeout']();
	}
}

(function($){
	$.timecountlist = function(options){
		var defaults={
			ts:0,
			container: "",
			day_id: "",
			hour_id: "",
			second_id: "",
			minute_id: "",
			fmt:"DD天HH小时ii分ss秒",
			timeout:function(){}
		}
		for(k in options){
			if(defaults[k] != 'undifined')
			{
				defaults[k] = options[k];
			}
		}
		COUNTER_OPTIONS = defaults;
		goods_thread_showtime(COUNTER_OPTIONS);
	}
})(jQuery);

    function goods_thread_showtime(OPTIONS) {
        //var ts=OPTIONS['ts'];
        
        var days = Math.floor(OPTIONS['ts'] /(60 * 60*24));
	    var hours = Math.floor(OPTIONS['ts'] /(60 * 60)%24);
        var minutes = Math.floor(OPTIONS['ts'] / 60) % 60;
        var seconds = OPTIONS['ts'] % 60;
        
        days=days<10?'0'+days:days;
	    hours = hours+(days*24) < 10?'0'+(hours+(days*24)):hours+(days*24);
	    minutes = minutes < 10?'0'+minutes:minutes;
	    seconds = seconds < 10?'0'+seconds:seconds;

	    if(OPTIONS['container'] != '')
	    {
		    var str = OPTIONS['fmt'].replace('HH', hours);
		    str = str.replace('ii', minutes);
		    str = str.replace('ss', seconds);
		    document.getElementById(OPTIONS['container']).innerHTML = str;
	    }
	    if(OPTIONS['day_id'] != '')
	    {
	        
		    document.getElementById(OPTIONS['day_id']).innerHTML = days;
	    }
	    if(OPTIONS['hour_id'] != '')
	    {
		    document.getElementById(OPTIONS['hour_id']).innerHTML = hours;
	    }
	    if(OPTIONS['minute_id'] != '')
	    {
		    document.getElementById(OPTIONS['minute_id']).innerHTML = minutes;
	    }
	    if(OPTIONS['second_id'] != '')
	    {
		    document.getElementById(OPTIONS['second_id']).innerHTML = seconds;
	    }

	    OPTIONS['ts']--;
	    if(OPTIONS['ts'] >= 0)
	    {
	        var temp=OPTIONS;
		    setTimeout(function() {goods_thread_showtime(temp);  }, 1000);
		    return;
	    }
	    if(typeof(OPTIONS['timeout']) == 'function')
	    {
		    OPTIONS['timeout']();
	    }
    }
    
    
    
    (function($){
	$.timecountlistbyday = function(options){
		var defaults={
			ts:0,
			container: "",
			day_id: "",
			hour_id: "",
			second_id: "",
			minute_id: "",
			fmt:"DD天HH小时ii分ss秒",
			timeout:function(){}
		}
		for(k in options){
			if(defaults[k] != 'undifined')
			{
				defaults[k] = options[k];
			}
		}
		COUNTER_OPTIONS = defaults;
		goods_thread_showtimebyday(COUNTER_OPTIONS);
	}
})(jQuery);

    function goods_thread_showtimebyday(OPTIONS) {
        
        var days = Math.floor(OPTIONS['ts'] /(60 * 60*24));
	    var hours = Math.floor(OPTIONS['ts'] /(60 * 60)%24);
        var minutes = Math.floor(OPTIONS['ts'] / 60) % 60;
        var seconds = OPTIONS['ts'] % 60;
        
        days=days<10?'0'+days:days;
        hours=hours<10?'0'+hours:hours;
	    //hours = hours+(days*24) < 10?'0'+(hours+(days*24)):hours+(days*24);
	    minutes = minutes < 10?'0'+minutes:minutes;
	    seconds = seconds < 10?'0'+seconds:seconds;

	    if(OPTIONS['container'] != '')
	    {
		    var str = OPTIONS['fmt'].replace('HH', hours);
		    str = str.replace('ii', minutes);
		    str = str.replace('ss', seconds);
		    document.getElementById(OPTIONS['container']).innerHTML = str;
	    }
	    if(OPTIONS['day_id'] != '')
	    {
	        
		    document.getElementById(OPTIONS['day_id']).innerHTML = days;
	    }
	    if(OPTIONS['hour_id'] != '')
	    {
		    document.getElementById(OPTIONS['hour_id']).innerHTML = hours;
	    }
	    if(OPTIONS['minute_id'] != '')
	    {
		    document.getElementById(OPTIONS['minute_id']).innerHTML = minutes;
	    }
	    if(OPTIONS['second_id'] != '')
	    {
		    document.getElementById(OPTIONS['second_id']).innerHTML = seconds;
	    }

	    OPTIONS['ts']--;
	    if(OPTIONS['ts'] >= 0)
	    {
	        var temp=OPTIONS;
		    setTimeout(function() {goods_thread_showtimebyday(temp);  }, 1000);
		    return;
	    }
	    if(typeof(OPTIONS['timeout']) == 'function')
	    {
		    OPTIONS['timeout']();
	    }
    }

