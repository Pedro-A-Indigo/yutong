// Safety guarantee and long battery life
$(function() {
	safeSlick()
	function safeSlick(){
		$(".prodet_safety_bt_ul").slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow:".prodet_safety .std_arrow_prev",
			nextArrow:".prodet_safety .std_arrow_next",
			responsive: [
				{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
				}
			]
		}).slickAuto()
		
		$('.prodet_safety_bt_ul').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var index = nextSlide;
			var listTop = $(".prodet_safety_bt .psst_ul_li").offset().top;
			var itemTop = $(".prodet_safety_bt .psst_ul_li").eq(index).offset().top;
			var topDist = itemTop - listTop + 4.4;
			$(".prodet_safety_bt .psst_ul_li").eq(index).addClass("act").siblings().removeClass("act");
			$(".prodet_safety_bt .psst_line").css("top",topDist+'px')
		});
	}
	safeTab()
	function safeTab(){
		$(".prodet_safety_bt .psst_ul_li").click(function(){
			var listTop = $(".prodet_safety_bt .psst_ul_li").offset().top;
			var thisTop = $(this).offset().top;
			var topDist = thisTop - listTop + 4.4;
			console.log(listTop,thisTop,topDist);
			var index = $(this).index();
			$(this).addClass("act").siblings().removeClass("act");
			$(".prodet_safety_bt_ul").slick("slickGoTo", index)
			$(".prodet_safety_bt .psst_line").css("top",topDist+'px')
		})
	}
	// DC charging system national standard
	standSlick()
	function standSlick(){
		$(".pssc_le_ul").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots:true,
			vertical:true,
			asNavFor: '.pssc_ri_ul',
			responsive: [
				{
				breakpoint: 481,
				settings: {
					infinite: true,
					dots:false,
					vertical:false,
				}
				}
			]
		}).slickAuto();
		$(".pssc_ri_ul").slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade:true,
			asNavFor: '.pssc_le_ul',
			responsive: [
				{
				breakpoint: 481,
				settings: {
					fade:false,
				}
				}
			]
		});
		
	   
		$('.pssc_le_ul').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var index = nextSlide;
			var listTop = $(".prodet_safety_stand .psst_ul_li").offset().top;
			var itemTop = $(".prodet_safety_stand .psst_ul_li").eq(index).offset().top;
			var topDist = itemTop - listTop + 4.4;
			$(".prodet_safety_stand .psst_ul_li").eq(index).addClass("act").siblings().removeClass("act");
			$(".prodet_safety_stand .psst_line").css("top",topDist+'px')
		});
		
	}
	standTab()
	function standTab(){
		$(".prodet_safety_stand .psst_ul_li").click(function(){
			var listTop = $(".prodet_safety_stand .psst_ul_li").offset().top;
			var thisTop = $(this).offset().top;
			var topDist = thisTop - listTop + 4.4;
			console.log(listTop,thisTop,topDist);
			var index = $(this).index();
			$(this).addClass("act").siblings().removeClass("act");
			$(".pssc_le_ul").slick("slickGoTo", index)
			$(".prodet_safety_stand .psst_line").css("top",topDist+'px')
		})
	}
	// Technical Advantages

	// if($(window).width() > 768){
	//     advSlick()
	// }
	var slickInitialized = false;
	function advSlick(){
		$(".prodet_adv_bt_ul").slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow:".prodet_adv .std_arrow_prev",
			nextArrow:".prodet_adv .std_arrow_next",
		}).slickAuto(); 
		slickInitialized = true;
	}
	function destroySlick() {
		$('.prodet_adv_bt_ul').slick('unslick');
		slickInitialized = false;
	}
	$(window).on('resize', function(){
		if ($(window).width() > 768) {
		  if (!slickInitialized) {
			advSlick();
		  }
		} else {
		  if (slickInitialized) {
			destroySlick();
		  }
		}
	});
	  
	if ($(window).width() > 768) {
		advSlick();
	}
	// Appearance
	// 技术点js
	appearInit() // Appearance以下几屏轮播效果
	appCover() // Appearance图片覆盖效果

	// Appearance以下几屏轮播效果
	function appearInit() {
		$(".prodet_info_li2").each(function(){
			var slickItem = $(this).find(".pilc_main_bg_ul");
			var slickPro = $(this).find(".pmlu_li")
			var slickDots = $(this).find(".pilc_main_ul_li")
			// 轮播初始化
			$(slickItem).slick({
				fade:true,
				pauseOnHover: false,
				waitForAnimate:false,
				autoplaySpeed:4000,
			});
			// 视频播完轮播
			$(this).appear(function(){
				banVideo(slickItem);
				$(slickPro).eq(0).addClass("act")
			})
			$('.pmlu_li').css('--time-shu','4s');
			// // 轮播点进度条
			// var anmtArr = [];
			// $(slickPro).each(function(index, item) {
			//     var anmt = anime({
			//         targets: item,
			//         width: "100%",
			//         easing: 'linear',
			//         duration: 3000,
			//         autoplay: false,
			//         complete: function(anim) {
			//             anim.pause();
			//             anim.seek(0);
			//             $(slickItem).slick("next");
			//         }
			//     });
			//     anmtArr[index] = anmt;
			// });
	   

		function banVideo(selector){
			var $obj = $(selector);
			var autoplay = true;
			if($(window).width() > 1200 && $obj.find("video").length > 0){
				// 初始化
				firstVideo()
				afterChange()
				videoEnd()
				videoCircleInit()
				// 检验第一屏是否有视频
				function firstVideo() {
					var $firSlide = $obj.find(".slick-slide[data-slick-index=0]");
					var $video = $firSlide.find("video");
					// autoplay自动播放
					if ($video.length > 0) {
						$obj.slick('slickPause');
						// 如果轮播只有一个循环播放
						if ($obj.get(0).slick.slideCount < 2) {
							$video.attr("loop", "loop");
						};
						if ($video.get(0).paused) {
							setTimeout(function () {
								$video.get(0).play();
							}, 100);
						}
					} else {
						$obj.slick('slickPlay');
						// anmtArr[0].play();
					}
				};
				// 切换到下一张是否有视频
				function afterChange() {
					$obj.on('afterChange', function (event, slick, index) {
					
						// 视频暂停并回到第一帧
						$obj.find("video").each(function () {
							var video = $(this).get(0);
							video.pause();
							video.currentTime = 0;
						});
						// 有视频则暂停轮播
						var $nowSlide = $(slick.$slides[index]);
						var $video = $nowSlide.find("video");
						if ($video.length > 0) {
							$obj.slick('slickPause');
							$video.get(0).play();
						} else {
							if (autoplay) {
								$obj.slick('slickPlay');
							}
							// anmtArr[index].play();
						};
						$(".ys_ban_dots_li").eq(index).addClass("active").siblings('.ys_ban_dots_li').removeClass("active");
					});
				};
				// 视频与进度条进度匹配
				function videoCircleInit(){
					$('.pmlu_li').css('--time-shu','4s');
					$obj.find("video").each(function () {
						var video = $(this).get(0);
						video.ontimeupdate = function (e) {
							var index = parseInt($(this).parents(".slick-slide").attr(
								"data-slick-index"));
							var duration = this.duration;
							var currentTime = this.currentTime;
							var progress = parseInt((currentTime / duration) * 100) / 100;
							$(slickPro).eq(index).css('--time-shu',duration + 's')
							// if (progress < 1) {
							//     if (anmtArr[index]) {
							//         anmtArr[index].seek(anmtArr[index].duration * progress);
							//     }
							// } else {
							//     if (anmtArr[index]) {
							//         anmtArr[index].seek(anmtArr[index].duration * 0.999999);
							//     }
							//     // $obj.slick("next");
							// }
						};
					});
				};

				// 视频播完切换到下一张
				function videoEnd() {
					$obj.find("video").each(function () {
						var video = $(this).get(0);
						video.onended = function () {
							if (autoplay) {
								$obj.slick("next");
								$obj.slick('slickPlay');
							}
						};
					});
				};
			}else{
				$obj.slick('play');
				// anmtArr[0].play();
				$obj.on('afterChange', function (event, slick, index) {
					// anmtArr[index].play();
					// console.log(index)
					$(".ys_ban_dots_li").eq(index).addClass("active").siblings('.ys_ban_dots_li').removeClass("active");
				});
			}
			
			$obj.on('beforeChange', function (event, slick, index,nextSlide) {
				// 视频暂停并回到第一帧
				$obj.find("video").each(function () {
					var video = $(this).get(0);
					video.pause();
					video.currentTime = 0;
				});
				// 动画暂停并回到第一帧
				// anmtArr[index].pause();
				// anmtArr[index].seek(0);
			});
			var banvideo = {
				play: function () {
					$obj.slick('slickPlay');
					autoplay = true;
				},
				pause: function () {
					autoplay = false;
					$obj.slick('slickPause');
				}
			};
			return banvideo;
		}
		// 点击轮播点跳转
		if($(window).width() > 1199){
			$(slickDots).hover(function () {
				var index = $(this).index();
				$(this).addClass("act").siblings().removeClass("act");
				$(slickPro).eq(index).addClass("act").siblings().removeClass("act");
				$(slickItem).slick("slickGoTo", index)
			})
		}else{
			$(slickDots).click(function () {
				var index = $(this).index();
				$(this).addClass("act").siblings().removeClass("act");
				$(slickPro).eq(index).addClass("act").siblings().removeClass("act");
				$(slickItem).slick("slickGoTo", index)
			})
		}
		$(slickItem).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			var index = nextSlide;
			$(slickDots).eq(index).addClass("act").siblings().removeClass("act");
			$(slickPro).eq(index).addClass("act").siblings().removeClass("act");
		});
		})
	}

	// Appearance图片覆盖效果
	function appCover(){
		// 大于480时
			$(window).scroll(function(){
				headerH = 0;
				$(".prodet_info_li").each(function(){
					headerH = 0;
					var itemTop = $(this).offset().top - headerH;
					var scroll = $(window).scrollTop();
					if(scroll > itemTop){
						$(this).addClass("isfixed")
					}else{
						$(this).removeClass("isfixed")
					}
				})
				var scroll = $(window).scrollTop();
				var itemBot1 = ($(".prodet_info").offset().top - headerH) + $(".prodet_info").height() - $(window).height();
				if(scroll > itemBot1){
					$(".prodet_info_li").addClass("isab")
				}else{
					$(".prodet_info_li").removeClass("isab")
				}
			})
			// 小于480时
			$(".prodet_info_li2").each(function(){
				var slickphItem = $(this).find(".pilc_main_ph_ul")
				var slickBtn = $(this).find(".pmpt_ul_li");
				var btnLine = $(this).find(".pmpt_line")
				// console.log(btnHeight);
				// 轮播初始化
				$(slickphItem).slick({
					slidesToShow: 1,
					slidesToScroll: 1,
				
				}).slickAuto();
				$(slickphItem).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					var index = nextSlide;
					var listTop = $(slickBtn).offset().top;
					var itemTop = $(slickBtn).eq(index).offset().top;
					var topDist = itemTop - listTop + 4.4;
					$(slickBtn).eq(index).addClass("act").siblings().removeClass("act");
					$(btnLine).css("top",topDist+'px')
				});
				$(slickBtn).click(function(){
					// var index = $(this).index();
					// var btnHeight = $(".pmpt_ul_li").height() + 5;
					// var linePos = (index * btnHeight) + 4.4;
					// console.log(index);
					// $(this).addClass("act").siblings().removeClass("act");
					// $(slickphItem).slick("slickGoTo", index)
					// $(btnLine).css("top",linePos+'px')
					var listTop = $(slickBtn).offset().top;
					var thisTop = $(this).offset().top;
					var topDist = thisTop - listTop + 4.4;
					console.log(listTop,thisTop,topDist);
					var index = $(this).index();
					$(this).addClass("act").siblings().removeClass("act");
					$(slickphItem).slick("slickGoTo", index)
					$(btnLine).css("top",linePos+'px')
				})
			})
	}
  //prodet_points
	var prodetPoints = new Swiper('.prodet_points .slide', {
		speed: 1000,
		slidesPerView: 1.5,
		spaceBetween: '2%',
		breakpoints: {
			991: {
				slidesPerView: 3,
				spaceBetween: '10%',
			},
		},
	})
});