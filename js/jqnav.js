$(document).ready(function(){
	lihover();

	

});

function lihover(){
	var self = "";
	var self_top = "";
	var pos_nav_offsetTop = "";
	$(".lihover li").hover(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
		}
	);
};
/*把show();改为fadeIn();是淡入动画效果。把show();改为slideDown();是滑下动画效果。对应的是fadeOut跟slideUp*/