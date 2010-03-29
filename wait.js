var wait = {};
wait.init = function(id, duration, bgcolor){
	if(document.getElementById(id)) {
		var pos = 0;
		var el = document.getElementById(id);
		el.style.visibility = 'visible';
		el.style.width = '240px';
		el.style.height = '50px';
		el.style.backgroundImage = 'url(wait_empty_dots.png)';
		bgcolor ? el.style.backgroundColor = bgcolor : '';
		window.setInterval(	function() {
			el.style.backgroundPosition = '0 ' + (
				pos-=parseInt(el.style.height)
			) + 'px';
		}, duration ? duration : 500 );
	}
}
