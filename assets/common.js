$(function () {
    // wow初始化
    new WOW().init();
    ys.phNavInit(1);
    navFixed();
});

// 导航不在顶部时加类名isfixed
function navFixed(){
    ys.isFixed(".ys_hd_pc");
}
// 一级导航经过变化
$(".mnlu_li").hover(
    function(){
        $(this).addClass("yxnav_active1").siblings().removeClass("yxnav_active1");
        $(this).parents(".mod_nav_le").siblings(".mod_nav_ri").find(".mnlu_li").removeClass("yxnav_active1");
        $(this).parents(".mod_nav_ri").siblings(".mod_nav_le").find(".mnlu_li").removeClass("yxnav_active1");
        $(this).find(".mnlu_li_pull").stop().slideDown().addClass("show");
        $(".mod_nav_other .mod_nav_other_lang").removeClass("act")
        $(".mnol_bt").stop().slideUp();
        $(".mod_nav_other_search").removeClass("act")
        $(".mnos_bt").stop().slideUp();
        // $(".mod_nav_other_search").removeClass('on');
        // $(".mc_search_xl").slideUp();
    },
    function(){
        $(this).removeClass("yxnav_active1");
        $(".mnlu_li.act").addClass("yxnav_active1");
        $(this).find(".mnlu_li_pull").stop().slideUp().removeClass("show");
    },
)
// 二级导航经过变化
$(".mlpu_li").hover(
    function(){
        $(this).addClass("yxnav_active2").siblings().removeClass("yxnav_active2");
    },
    function(){
        $(this).removeClass("yxnav_active2");
        $(".mlpu_li.act").addClass("yxnav_active2");
    },
)
// 搜索下拉
$(".mod_nav_other_search").click(function(e){
    e.stopPropagation();
    $(this).toggleClass("act")
    $(this).find(".mnos_bt").stop().slideToggle();
    $(".mod_nav_other .mod_nav_other_lang").removeClass("act")
    $(".mnol_bt").stop().slideUp();
})
$(".mnos_bt_cont").click(function(e){
    e.stopPropagation();
})
$("body").click(function(){
    $(".mod_nav_other_search").removeClass("act")
    $(".mnos_bt").stop().slideUp();
})
// 语言切换下拉
$(".mod_nav_other .mod_nav_other_lang").click(function(e){
    e.stopPropagation();
    $(this).toggleClass("act");
    $(".mnol_pop").addClass("active");
    $("html").addClass("active");
    ys.scrollbar.hide();
    $(".mod_nav_other_search").removeClass("act")
    $(".mnos_bt").stop().slideUp();
})
$(".mpct_btn").click(function(){
    $(".mod_nav_other .mod_nav_other_lang").removeClass("act")
    $(".mnol_pop").removeClass("active");
    $("html").removeClass("active");
    setTimeout(function(){
        ys.scrollbar.show();
    },500)
   
})
// 语言下拉点击区域切换语言
$(".mnol_bt_cont_country p").click(function(){
    var index = $(this).parents(".mnol_bt_cont_country li").index();
    $(this).parents(".mnol_bt_cont_country li").addClass("act").siblings().removeClass("act");
    $(".mbcl_ul_li").eq(index).stop().fadeIn().siblings().stop().hide();

})


// 底部友情链接下拉
$(".mfbr_select").click(function(e){
    e.stopPropagation();
    $(this).find(".mfbr_select_bd").stop().slideToggle();
    $(this).toggleClass("act")
})
$("body").click(function(){
    $(".mfbr_select_bd").stop().slideUp();
    $(".mfbr_select").removeClass("act")
})
// ys.mCustomScrollbarInit(".mfbr_select .mfbr_select_bd");
// 侧边返回顶部
$(".mod_side_list_back").click(function() {
    ys.goTop(500);
})
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
       $('.mod_side').addClass('act');
    } else {
        $(".mod_side").stop().removeClass('act');
    }
});

// 底部cook按钮
var firstTime = sessionStorage.getItem('firstTime');
var acceptCookieFlag = localStorage.getItem('acceptCookie');

if (firstTime || acceptCookieFlag) {
	$(".mod_cook").hide();
} else {
	$(".mod_cook").show();
	// 底部cook按钮-同意
	$(".mccr_btn .std_btn3_box").click(function(){			
		$(".mod_cook_cont").stop().fadeOut();
		localStorage.setItem('acceptCookie', 'true');
	})

	// 底部cook按钮-拒绝
	$(".mccr_btn .std_btn2_box").click(function(){
		$(".mod_cook_cont").stop().fadeOut();
		sessionStorage.setItem('firstTime', 'true');
	})
} 
			

$(".mod_sideph_ul_li").click(function(){
    $(this).addClass("act").siblings().removeClass("act")
})
// 手机端语言下拉
$(".ys_phnav_language .mod_nav_other_lang").click(function(){
    $(".ys_phnav2_lang_modal").addClass("on")
})
$(".ys_phnav_menubox").click(function(){
    $(".ys_phnav2_lang_modal").removeClass("on")
})
$(".ys_phnav2_lang_back").click(function(){
    $(".ys_phnav2_lang_modal").removeClass("on")
})


var productsArr = new Array();
productsArr[0]	 = new Array("ZK6890BEVG","E9");
productsArr[1]	 = new Array("ZK6706BEV","E7S");
productsArr[2]	 = new Array("ZK6128BEVG","E12PRO");
productsArr[3]	 = new Array("ZK6907H-2","PV9");
productsArr[4]	 = new Array("ZK6907BEV","C9E");
productsArr[5]	 = new Array("ZK6138BEV","C13E PRO");
productsArr[6]	 = new Array("ZK6907H-2","PV9");
productsArr[7]	 = new Array("ZK6860D","D9");
productsArr[8]	 = new Array("ZK6138H","C13PRO");
productsArr[9]	 = new Array("ZKGLDTT5","S72");
productsArr[10]	 = new Array("ZKGDHA","S14");
productsArr[11]	 = new Array("ZK9020XJY","MC6");
productsArr[12]	 = new Array("ZK6128H","BC12");
productsArr[13]	 = new Array("ZK5180XYL","PT9");
productsArr[14]	 = new Array("ZK6907H","PC9");
productsArr[15]	 = new Array("ZK9023XLJ1","RC7");
productsArr[16]	 = new Array("ZKGDHB","S23");
productsArr[17]	 = new Array("ZK5043XJH3","AKESO5");
productsArr[18]	 = new Array("ZK6729D","RV7");
productsArr[19]	 = new Array("ZK6907H-1","RV9");


// 头部导航搜索关键词下拉--PC
// 获取输入框元素
var navInput = document.getElementById('mbcs_input_cont');
// 监听输入框的input事件
// navInput.addEventListener('input', function() {
// if (navInput.value.length > 0) {
	
	
// 	var productName = navInput.value;
// 	var newName = productName;
// 	var realProductName = '';
// 	if(productName.length>=4){
// 		for(var j=0;j<productsArr.length;j++){
// 			if(productsArr[j][0].indexOf(productName)>-1){
// 				newName = productsArr[j][1];
// 				realProductName = productsArr[j][0];
// 				break;
// 			}
// 		}
// 	}
	
// 	$.ajax({
// 		url: '/prod-api/client3/product/page.api?pageSize=8&siteId='+siteId+'&productName=*'+newName+'*',
// 		method: 'GET',
// 		headers:{'Content-Type':'application/json'},
// 		success: function (data) {
// 			if(data.code==200 && data.success){	
// 				$('.mbcs_bt_ul  .mCSB_container').html('');			
// 				if(data.result.records.length>0){
// 					for(var i=0;i<data.result.records.length;i++){
// 						let html = '<li class="pcbu_item"><a href="'+data.result.records[i].url+'" target="_blank" class="search-keywords">'+data.result.records[i].productName;				
// 						if(productName!=newName){
// 							html += '('+realProductName+')';
// 						}
// 						html += '</a></li>';
// 						let searchRow = $(html);
// 						searchRow.appendTo($('.mbcs_bt_ul .mCSB_container'));
// 					}
// 					$('.search-keywords').highlight(navInput.value);
// 				}
// 				else{
// 					$('.mbcs_bt_ul  .mCSB_container').html('<li class="pcbu_item">No se han encontrado resultados</li>');
// 				}				
// 				//ys.mCustomScrollbarInit(".mbcs_bt_ul");
// 			}
			
// 		},
// 		error: function (xhr, textStatus, errorThrown) {
// 			console.log(errorThrown);
// 		}
// 	})
//     $(this).parents(".mnos_bt_cont_search").find(".mbcs_bt").stop().slideDown();
// } else {
//     $(this).parents(".mnos_bt_cont_search").find(".mbcs_bt").stop().slideUp();
// }
// });
// 头部导航搜索关键词下拉--PH
// 获取输入框元素
var navInput1 = document.getElementById('ys_phs_form_ph');
// 监听输入框的input事件
// navInput1.addEventListener('input', function() {
// if (navInput1.value.length > 0) {
// 	$.ajax({
// 		url: '/prod-api/client3/product/page.api?pageSize=8&siteId='+siteId+'&productName=*'+navInput1.value+'*',
// 		method: 'GET',
// 		headers:{'Content-Type':'application/json'},
// 		success: function (data) {
// 			if(data.code==200 && data.success){	
// 				$('.ys_phs_bt_ul  .mCSB_container').html('');			
// 				if(data.result.records.length>0){
// 					for(var i=0;i<data.result.records.length;i++){
// 						let html = '<li class="pcbu_item"><a href="'+data.result.records[i].url+'" target="_blank" class="search-keywords">'+data.result.records[i].productName+'</a></li>';					
// 						let searchRow = $(html);
// 						searchRow.appendTo($('.ys_phs_bt_ul .mCSB_container'));
// 					}
// 					$('.search-keywords').highlight(navInput1.value);
// 				}
// 				else{
// 					$('.ys_phs_bt_ul  .mCSB_container').html('<li class="pcbu_item">No se han encontrado resultados</li>');
// 				}
// 				//ys.mCustomScrollbarInit(".ys_phs_bt_ul");
// 			}
			
// 		},
// 		error: function (xhr, textStatus, errorThrown) {
// 			console.log(errorThrown);
// 		}
// 	})
//     $(this).parents(".ys_ph_search").find(".ys_phs_bt").stop().slideDown();
// } else {
//     $(this).parents(".ys_ph_search").find(".ys_phs_bt").stop().slideUp();
// }
// });
// ys.mCustomScrollbarInit(".mbcs_bt_ul");
// ys.mCustomScrollbarInit(".ys_phs_bt_ul");
// 表单验证
function injectChk(oField) {
    re = /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
    if (re.test(oField)) {
        return false;
    } else {
        return true;
    }
}
checkForm = {
    isEmpty: function (name, field, formId) {
        if ($('#' + formId).find('input[name="' + name + '"],textarea[name="' + name + '"]').val().length == 0 || injectChk($('#' + formId).find('input[name="' + name + '"],textarea[name="' + name + '"]').val()) == false) {
            $('#' + formId).find('input[name="' + name + '"],textarea[name="' + name + '"]').parents(".porc_list_li").addClass('empty');
            $(".required_parga").addClass("empty")
            return true;
        } else {
            $('#' + formId).find('input[name="' + name + '"],textarea[name="' + name + '"]').parents(".porc_list_li").removeClass('empty');
            $(".required_parga").removeClass("empty")
            return false;
        }
    },
    notEmail: function (name, field, formId) {
        if (!/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test($('#' + formId).find('input[name="' + name + '"]').val())) {
            layerHandel = layer.alert(
                field + "Formato incorrecto", {
                    'title': "Mensaje",
                    'btn': ["OK"]
                },
                function () {
                    layer.close(layerHandel);
                    $('input[name="' + name + '"]').focus();
                }
            );
            return true;
        } else {
            return false;
        }
    }
};
function submitForm(formId) {
    if (checkForm.isEmpty("name", "Name", formId)) {
        return false;
    }
    if (checkForm.isEmpty("email", "Email", formId)) {
        return false;
    }
    if (checkForm.isEmpty("demand", "Demands", formId)) {
        return false;
    }
    if(checkForm.notEmail("email","	Email ",formId)){
        return false;
    }
    if (!$('.porc_list_agree').hasClass('act')) {
        $('.porc_list_agree').parents(".porc_list_required").addClass("empty")
        return false;
    }else{
        $('.porc_list_agree').parents(".porc_list_required").removeClass("empty")
    }
}
// 语言弹窗滚动条
// ys.mCustomScrollbarInit(".mpcb_ul");
// if($(window).width() > 1199){
//     ys.mCustomScrollbarInit(".mpcb_cont");
// }
$(".mlpt_le_ul_li").hover(
    function(){
        var index = $(this).attr("data-num");
        $('.mlpt_ri_ul_li[data-num='+index+']').stop().fadeIn().siblings().stop().hide();
        $('.mlpt_ri_ul_li[data-num='+index+']').addClass("active").siblings().removeClass("active");
        $('.mlpi_ul_li[data-num='+index+']').stop().fadeIn().siblings().stop().hide();
        $('.mlpi_ul_li[data-num='+index+']').addClass("active").siblings().removeClass("active");
        $(this).addClass("yxnav_active2").siblings().removeClass("yxnav_active2")
    }
)
$(".mrul_cont li").hover(
    function(){
        $(this).addClass("yxnav_active3").siblings().removeClass("yxnav_active3")
    },
    function(){
        $(".mrul_cont li").removeClass("yxnav_active3")
        $(".mrul_cont li.act").addClass("yxnav_active3")
    },
)
// 2023.11.1导航鼠标经过反白-start
$(".ys_hd_pc").hover(
    function(){
        $(".ys_hd_pc").addClass("isfixeds")
    },
    function(){
        $(".ys_hd_pc").removeClass("isfixeds")
    }
)
// 2023.11.1导航鼠标经过反白-end
// ys.mCustomScrollbarInit(".mccl_parga ");