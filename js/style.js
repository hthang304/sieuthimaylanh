function addPro(e){$.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=addPC",type:"POST",data:"p_id="+e,success:function(e){e.ok?ajaxPC():jAlert(e.mess,"ThÃ´ng bÃ¡o")}}),$(".fixed-compare").addClass("show"),$(".fixed-compare").css("bottom",0)}function removePC(e){$.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=removePC",type:"POST",data:"p_id="+e,success:function(e){e.ok?ajaxPC():($(".fixed-compare").removeClass("show"),$(".fixed-compare").removeAttr("style"))}})}function ajaxPC(){$.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=ajaxPC",type:"POST",data:"",success:function(e){$("#ajaxCompare").html(e)}})}function searchPC(e,t){$.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=searchPC",type:"POST",data:"keyword="+e,success:function(e){t.html(e)}})}function addToCart(e){$.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=addToCart",type:"POST",data:"p_id="+e,success:function(e){jAlert(e.mess,"Thông báo",function(){var e=$("#btnCart>span"),t=parseInt(e.text());num=t+1,e.text(num)})}})}function slideOne(e){var t=$("body,html").find(e).length;t>0&&$(e).slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,autoplay:!0,fade:!0,autoplaySpeed:2e3,speed:800,pauseOnHover:!1})}function send_phone(e){elmt=$("#"+e);var t=$.trim(elmt.val());return""==t?(jAlert("Vui lÃ²ng nháº­p sá»‘ Ä‘iá»‡n thoáº¡i","ThÃ´ng bÃ¡o",function(){elmt.focus()}),!1):void $.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=send_phone",type:"POST",data:"phone="+t,success:function(e){jAlert(e.mess,"ThÃ´ng bÃ¡o",function(){location.reload()})}})}function load_Statistics(){$.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=statistics",type:"POST",success:function(e){$("#stats_online").html(e.online),$("#stats_totals").html(e.totals),$("#stats_member").html(e.mem_online)}})}$(document).ready(function(){$("#s-ListCat li").on("click",function(){var e=$(this).data("id");$.ajax({async:!0,dataType:"json",url:ROOT+"load_ajax.php?do=ajaxPower",type:"POST",data:"cat_id="+e,success:function(e){e.ok&&$("#s-ListPower").parents(".slect").html(e.html)}})}),$(document).on("click",".slect .dropdown-menu li",function(){var e=$(this),t=e.data("id"),o=e.text(),a=e.parents("span.slect").find(".txt"),n=e.parents("span.slect").find("input");a.text(o),n.val(t)});var e=$("body,html").find("#wtg-parner-slide").length;e==0&&$("#wtg-parner-slide").slick({dots:!1,arrows:!1,slidesToShow:3,slidesToScroll:1,autoplay:0,autoplaySpeed:3e3,variableWidth:!0,responsive:[{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:640,settings:{slidesToShow:1}}]}),$("#chungnhan").owlCarousel({nav:!1,autoplay:!0,loop:!0,items:1,dots:!1,autoplaySpeed:1500,autoplayTimeout:1500,animateOut:"fadeOut",responsive:{1024:{items:1},992:{items:1},768:{items:3,margin:20},480:{items:2,margin:20},320:{items:1}}}),$("#banner_header_right").find(".item-second").show(),$("#banner_header_right").owlCarousel({nav:!1,autoplay:!0,loop:!0,items:1,dots:!1,autoplaySpeed:3e3,autoplayTimeout:3e3,animateOut:"fadeOut"});var t=$("body,html").find("#wtg-banner").length;t>0&&($("#wtg-banner").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,fade:!0,autoplaySpeed:5e3,speed:800,pauseOnHover:!1}),$("#wtg-banner").addClass("active")),$(".title-form-mobile").click(function(){$(".wtg-filter .vf-form").hasClass("active")?$(".wtg-filter .vf-form").removeClass("active"):$(".wtg-filter .vf-form").addClass("active")});var o=$("#wtg-content").offset().top;$(window).load(function(){var e=$(window).width(),t=e>=1024?"shows":"call";$(window).scroll(function(){var e=$(window).scrollTop();e>o?$(".hotline-popup").addClass(t):$(".hotline-popup").removeClass(t),$(".support-content").removeClass("shows")})}),$(".menu_cat .mc_title").click(function(){$(this).parents(".menu_cat").hasClass("active")?$(this).parents(".menu_cat").removeClass("active"):$(this).parents(".menu_cat").addClass("active")}),$(window).bind("click",function(e){var t=$(e.target);t.parents().hasClass("menu_cat")||$(".menu_cat").removeClass("active")})}),$(document).ready(function(){$(".mmMenu ul li").each(function(){var e=$(this).find("ul li").size();e>0&&($(this).find("a:first").wrap("<div class='m-sub'></div>"),$(this).find(".m-sub:first").append("<div class='button-submenu'></div>"))}),$(".mmMenu ul li ul").css({display:"none"}),$(".mmMenu ul li .button-submenu").click(function(){$(this).hasClass("show")?($(this).parent().parent().find("ul:first").stop().slideToggle(700),$(this).removeClass("show")):($(this).parent().parent().find("ul:first").stop().slideToggle(700),$(this).addClass("show"),$(this).parent().parent().siblings().each(function(){$(this).find(".m-sub:first").find(".button-submenu").hasClass("show")&&($(this).find("ul:first").stop().slideToggle(700),$(this).find(".m-sub:first").find(".button-submenu").removeClass("show"))}))}),$(".menu_mobile .icon_menu").click(function(e){$(".menu_mobile").hasClass("showmenu")?($(".menu_mobile").find(".divmm").removeClass("show"),$(".menu_mobile").removeClass("showmenu"),$("html").removeClass("openmenu")):($(".menu_mobile").find(".divmm").addClass("show"),$(".menu_mobile").addClass("showmenu"),$("html").addClass("openmenu"),$("body").css({}))}),$(".menu_mobile .divmm .divmmbg , .menu_mobile .divmm .mmContent .close-mmenu").click(function(e){$(this).parents(".menu_mobile").find(".divmm").removeClass("show"),setTimeout(function(){$(".menu_mobile").removeClass("showmenu"),$("html").removeClass("openmenu")},500)}),$(window).resize(function(){$(window).innerWidth()>1024&&($(".menu_mobile").find(".divmm").removeClass("show"),$(".menu_mobile").removeClass("showmenu"),$("html").removeClass("openmenu"))})}),$(function(){ajaxPC(),$(document).on("keyup",".compare-search input",function(){var e=$(this).val(),t=$(this).parent().find(".sussgest");searchPC(e,t)})}),$(document).ready(function(){$(".fixed-compare .button-popup .button-close").click(function(){$(".fixed-compare .button-popup .button-zoom").removeClass("none"),$(".fixed-compare .button-popup .button-zoom").text("Thu nhá»");var e=$(".fixed-compare").innerHeight()+$(".fixed-compare .button-popup").innerHeight()+50;$(".fixed-compare").css({bottom:"-"+e+"px"}),$(".fixed-compare").removeClass("show")}),$(document).on("click","a.compare",function(){$(".fixed-compare").hasClass("show")||$(".fixed-compare").addClass("show"),$(".fixed-compare").css({bottom:0}),$(".fixed-compare .button-popup .button-zoom").removeClass("none"),$(".fixed-compare .button-popup .button-zoom").text("Thu nhá»")}),$(".link-compare a").on("click",function(){return $(".hasprod").length>1?!0:(jAlert("So sÃ¡nh tá»‘i thiá»ƒu 2 sáº£n pháº©m","ThÃ´ng bÃ¡o"),!1)}),$(".view-map").fancybox({width:"90%",height:"90%",autoScale:!1,transitionIn:"none",transitionOut:"none",type:"iframe",padding:10}),slideOne("#wtg-style")}),$(function(){$(".wtg-filter .vf-menu-product .vf-title").on("click",function(){var e=$(this).find("a").attr("href");window.location.href=e}),load_Statistics(),WebTronGoi.goTopStart()});$(function(){$(".button-search-advandce a").on("click",function(){var divID=$(this).attr("href");if($(divID).hasClass("open")){$(divID).removeClass("open");$(divID).stop().slideUp();}else{$(divID).addClass("open");$(divID).stop().slideDown();}
return false;});if(mod!="main"){$("#primary-menu-wrapper").sticky({topSpacing:0});}});

function load_power()
{
	var arr_cat = [];
	var power = $("input[name=power]").val();
	$("#boxListCat li.active").each(function(i,e){
		var cat_id = $(e).data("id");
		cat_id = parseInt(cat_id);
		arr_cat.push(cat_id);
	});
	$.ajax({
		async: !0,
		url: ROOT+'load_ajax.php?do=changePowerByCat',
		type: 'POST',
		dataType: 'json',
		data: {
			cats: arr_cat.join(),
			powers: power,
			lang: lang
		},
		success: function (data) {
			if(data.ok)
			{
				$("#boxListPower ul").remove()
				$("#boxListPower").append(data.list);
			}
		}
	});
}

$(function(){
	
	$(".mid-title.hidden .titleL").html($(".mid-title.hidden .titleL").text());
	
	load_power();
	
	$("#boxListBrand li.item-search").on("click", function(){
		var ul = $(this).parent();
		if($(this).hasClass("active"))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
		getValue($("#boxListBrand"), $('input[name=brand]'));
		if(ul.find('.btnSubmit').length==0)
		{
			ul.append('<li class="btnSubmit"><button type="submit">Xem kết quả</button></li>');
		}
		return false;
	});
	$("#boxListCat li.item-search").on("click", function(){
		var ul = $(this).parent();
		if($(this).hasClass("active"))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
		getValue($("#boxListCat"), $('input[name=cat]'));
		if(ul.find('.btnSubmit').length==0)
		{
			ul.append('<li class="btnSubmit"><button type="submit">Xem kết quả</button></li>');
		}
		
		load_power();
		
		return false;
	});
	$(document).on("click", "#boxListPower li.item-search", function(){
		var ul = $(this).parent();
		if($(this).hasClass("active"))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
		getValue($("#boxListPower"), $('input[name=power]'));
		if(ul.find('.btnSubmit').length==0)
		{
			ul.append('<li class="btnSubmit"><button type="submit">Xem kết quả</button></li>');
		}
		return false;
	});
	$("#boxListType li.item-search").on("click", function(){
		var ul = $(this).parent();
		if($(this).hasClass("active"))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
		getValue($("#boxListType"), $('input[name=type]'));
		if(ul.find('.btnSubmit').length==0)
		{
			ul.append('<li class="btnSubmit"><button type="submit">Xem kết quả</button></li>');
		}
		return false;
	});
	$("#boxListPrice li.item-search").on("click", function(){
		var ul = $(this).parent();
		if($(this).hasClass("active"))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
		getValue($("#boxListPrice"), $('input[name=price]'));
		if(ul.find('.btnSubmit').length==0)
		{
			ul.append('<li class="btnSubmit"><button type="submit">Xem kết quả</button></li>');
		}
		return false;
	});
	$("#boxListUtilities li.item-search").on("click", function(){
		var ul = $(this).parent();
		if($(this).hasClass("active"))
		{
			$(this).removeClass('active');
		}
		else
		{
			$(this).addClass('active');
		}
		getValue($("#boxListUtilities"), $('input[name=utility]'));
		if(ul.find('.btnSubmit').length==0)
		{
			ul.append('<li class="btnSubmit"><button type="submit">Xem kết quả</button></li>');
		}
		return false;
	});
	
	$(document).on("click", "li.btnSubmit button", function(){
		$("#formSearch").find("input[type=hidden]").each(function(i,e){
			if($(e).val()=="")
			{
				$(e).remove();
			}
		});
	});
	
	$("#chungnhan .owl-item").each(function(i,e){
		var a = $(e).find("a");
		a.addClass("fancybox");
	});
	$("#chungnhan .fancybox").fancybox();
	
});

function getValue(el, input)
{
	var data = [];
	el.find('.active').each(function(i,e){
		var id = $(e).data('id');
		data.push(id);
	});
	input.val(data.join('_'));
}

$(function(){
	APP.autoLoad();
});

var APP =
{
	popupWebsite: function()
	{
		$.ajax({
			url: ROOT+'load_ajax.php?do=popupWebsite',
			type: 'POST',
			dataType: 'json',
			data: {
				lang: lang
			},
			success: function (data) {
				if(data){
					APP.openPopup(data);
				}
			}
		});
	},
	openPopup: function(data){
		$.fancybox.open({
			content  : data,
			autoSize : false,
			width    : "auto",
			height : "auto",
			padding: 0,
			autoScale: true,
			transitionIn: "elastic",
		});
	},
	clickBanner: function(id){
		$.ajax({
			url: ROOT+'load_ajax.php?do=clickBanner',
			type: 'POST',
			dataType: 'json',
			data: {
				id: id,
				lang: lang
			},
			success: function (data) {
				console.log("updated");
			}
		});
	},
	clearFilter: function(){
		var _sort = APP.getParameterByName('sort');
		var href = location.protocol + '//' + location.host + location.pathname;
		href = href.replace(".html/", ".html");		
		$(".clearfilter").attr("href", href);
		if(_sort)
		{
			$(".clearfilter").removeClass("hide");
		}
	},
	getParameterByName: function(name, url){
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	},
	autoLoad: function()
	{
		APP.popupWebsite();
		APP.clearFilter();
	}
}

var iconStatusPro = function(elm){
	$(elm).find('.status-left').each(function(){
		if($(elm).find('.i-label').length) {
			$(elm).find('.i-label').append($(this));
		}
	});
}

$(function(){
	$('*[data-product]').each(function(){
		iconStatusPro(this);
	});
});