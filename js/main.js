function innitSlide(e, s) {
    e.slick( {
        slidesToShow:1, slidesToScroll:1, autoplay:s, autoplaySpeed:3e3, speed:1500, swipeToSlide:!1, pauseOnHover:!0, arrows:!1, dots:!0, responsive:[ {
            breakpoint:1024, settings: {
                draggable: !0
			}
		}
        ]
	}
    )
}

function ajaxSatus(e, s) {
    var t="cat_id="+e+"&status_id="+s+"&lang="+lang,
    i=$("#status"+s+"-"+e);
    $.ajax( {
        async:!0, dataType:"json", url:ROOT+"load_ajax.php?do=ajaxSatus", type:"POST", data:t, success:function(s) {
            var t=$("#ext_status_"+e);
            t.html(s.html), slidePro(t.find(".slider_prod")), i.parents(".wtg-product").find("li").removeAttr("class"), i.addClass("active")
		}
	}
    )
}

function slidePro(e) {
    e.slick( {
        slidesToShow:4, slidesToScroll:1, autoplay:!1, infinite:!1, autoplaySpeed:5e3, speed:800, swipeToSlide:!0, pauseOnHover:!0, responsive:[ {
            breakpoint:992, settings: {
                slidesToShow: 3
			}
		}
        , {
            breakpoint:768, settings: {
                slidesToShow: 2
			}
		}
        , {
            breakpoint:480, settings: {
                slidesToShow: 1
			}
		}
        ]
	}
    )
}

$(document).ready(function() {
	
	$("#box-gallery a").fancybox();
	
    innitSlide($("#banner_nivo"), !0), $("#banner_nivo").find("ul.slick-dots").append($(".btnClick")), $(".btnClick").on("click", function() {
        c=$("#banner_nivo"), $(this).hasClass("autoplay")?($(this).removeClass("autoplay"), $(this).addClass("pause"), c.slick("slickPlay")): ($(this).addClass("autoplay"), $(this).removeClass("pause"), c.slick("slickPause"))
	}
    );
    var s=$("body,html").find(".slider-accessories").length;
	s>0&&$(".slider-accessories").slick( {
        slidesToShow:5, slidesToScroll:1, autoplay:!0, autoplaySpeed:5e3, speed:800, swipeToSlide:!0, pauseOnHover:!0, responsive:[ {
			breakpoint:1024, settings: {
				slidesToShow: 4, autoplay: !1
			}
		}
        , {
			breakpoint:992, settings: {
				slidesToShow: 3, autoplay: !1
			}
		}
        , {
			breakpoint:768, settings: {
				slidesToShow: 2, autoplay: !1
			}
		}
        , {
			breakpoint:480, settings: {
				slidesToShow: 2, autoplay: !1
			}
		},
		, {
			breakpoint:320, settings: {
				slidesToShow: 1, autoplay: !1
			}
		}
        ]
	}
    ), $(".slider_prod_viewed").slick( {
        slidesToShow:3, slidesToScroll:1, autoplay:!0, autoplaySpeed:4e3, speed:800, swipeToSlide:!0, pauseOnHover:!0, responsive:[ {
            breakpoint:992, settings: {
                slidesToShow: 3
			}
		}
        , {
            breakpoint:768, settings: {
                slidesToShow: 2
			}
		}
        , {
            breakpoint:480, settings: {
                slidesToShow: 1
			}
		}
        ]
	}
    )
}

),
wtGProduct= {
    load_slide_product:function(e) {
        $("#"+e+" .slider_prod").slick( {
            slidesToShow:4, slidesToScroll:1, autoplay:!1, autoplaySpeed:5e3, speed:800, infinite:!1, swipeToSlide:!0, pauseOnHover:!0, responsive:[ {
                breakpoint:992, settings: {
                    slidesToShow: 3
				}
			}
            , {
                breakpoint:768, settings: {
                    slidesToShow: 2
				}
			}
            , {
                breakpoint:480, settings: {
                    slidesToShow: 1
				}
			}
            ]
		}
        )
	}
    ,
    load_product_by_catid:function(e, s) {
        var t="cat_id="+e+"&status="+s+"&lang="+lang;
        $.ajax( {
            beforeSend:function() {
                $("#ext_status_"+e).append("<div class='loading'></div>")
			}
            , url:ROOT+"modules/main/ajax/ajax.php?do=show_tab_status", method:"POST", type:"POST", dataType:"json", data:t, context:document.body
		}
        ).done(function(s) {
            setTimeout(function() {
                jQuery("#ext_status_"+e).html(s.content), s.ok&&wtGProduct.load_slide_product("ext_status_"+e)
			}
            , 0)
		}
        )
	}
    ,
    init:function() {
        $(".title-link ul li a").click(function(e) {
            if($(this).hasClass("current"))return!1;
            $(".title-link ul li a").removeClass("current"), $(this).addClass("current");
            var s=$(this).data("catid"), t=$(this).data("status");
            return $.ajax( {
                beforeSend:function() {
                    $("#ext_status_"+s).append("<div class='loading'></div>")
				}
                , url:ROOT+"modules/main/ajax/ajax.php?do=show_tab_status", method:"POST", type:"POST", dataType:"json", data: {
                    cat_id: s, status: t, lang: lang
				}
                , context:document.body
			}
            ).done(function(e) {
                setTimeout(function() {
                    jQuery("#ext_status_"+s).html(e.content), e.ok&&wtGProduct.load_slide_product("ext_status_"+s)
				}
                , 100)
			}
            ), !1
		}
        )
	}
}

/*
	,
	jQuery(window).ready(function() {}
	
	),
	$(function() {
    slidePro($(".slider_prod")), $(".wtg-product").each(function(e, s) {
	0==$(s).find(".div_result .item").length&&$(s).find(".title-link").remove()
    }
    ), $("#box-gallery a").fancybox()
	}
	
	);
*/



$(function(){
	if(lang=='en') {
		$("#boxNews").remove();
	}
	$(".wtg-product").each(function(){
		if(! $(this).find('.owl').length) {
			$(this).find('.item').each(function(i,e){
				if(i>3) $(e).addClass('reshide');
			});
		}
	});
	
	// box-ban-chay
	$('#box-ban-chay').each(function(){
		$(this).removeClass('hide');
		$(this).find('.item').css('width', '100%');
		$(this).find('.owl').owlCarousel({
			nav: true,
			navText: [
				'<i class="fa fa-angle-left"></i>',
				'<i class="fa fa-angle-right"></i>',
			],
			loop: false,
			dots: false,
			autoplay: false,
			autoplaySpeed: 3000,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			margin: 0,
			responsive: {
				0 : {
					items: 1,
				},
				320 : {
					items: 2,
				},
				768 : {
					items: 3,
				},
				1024 : {
					items: 4,
				},
				1200 : {
					items: 4,
				},
				1400 : {
					items: 5,
				}
			}
		});
	});
});