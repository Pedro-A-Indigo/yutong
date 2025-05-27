Product = {};
/**
 * 产品浏览次数
 */
Product.viewCount = function(url, productId ) {
	url+='/client3/product/statHit.api?productId='+productId;
    url+="&ajaxdate="+new Date();
   // url+="&jsoncallback=?";
	//alert(url);
	jQuery.getJSON(url, 
        function(data){ 
		  try{
          jQuery("#views").text(data.hits);
          }catch(e){}
     });//end of jQuery.getJSON
}//end of function

/*****************************/
Cms = {};
/**
 * 浏览次数
 */
Cms.viewCount = function(url, contentId ) {
  
	url+='/client3/content/contentCount.api?contentId='+contentId
    url+="&ajaxdate="+new Date().getTime();
    //url+="&jsoncallback=?";
	//alert(url);
	jQuery.getJSON(url, 
        function(data){ 
		 // alert(data);
		 // alert(data.hits);
		  try{
          jQuery("#views").text(data.hits);
          }catch(e){}
     });//end of jQuery.getJSON
}//end of function

 
Cms.likeCount = function(url, contentId,readFlag ) {
	url+='/client3/content/contentLikeCount.api?readFlag='+readFlag+'&contentId='+contentId
    url+="&ajaxdate="+new Date().getTime();
 //   url+="&jsoncallback=?"; 
	 $.ajax({ 
        url: url, 
        dataType: 'text',
        timeout: 15000, //超时时间设置，单位毫秒
        success: function (data) {
            //alert(data);
			data = data.replace('(','');
			data = data.replace(')','');
			data = JSON.parse(data);
			try{
				if(readFlag=='write'){
				  //errorMsg('已赞');	
				  $('#likeHref'+contentId).addClass('active');
				  $('#likeHref'+contentId).removeAttr('onclick');
				  $('#likeHref'+contentId).html('<span class="iconfont icon-good"></span><em id="likeCount">'+data.likeCounts+'</em>');
				}
				else{
				  jQuery("#likeCount").text(data.likeCounts);
				  //$("#likeCount").parent().addClass('active');
				}
			}catch(e){}
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
             //alert('error'+textStatus);
        }
    });
}//end of function


Cms.downloadCount = function(url, contentId,readFlag ) {
	url+='/content/contentDownloadCount.api?readFlag='+readFlag+'&contentId='+contentId
    url+="&ajaxdate="+new Date().getTime();
    url+="&jsoncallback=?"; 
	 $.ajax({ 
        url: url, 
        dataType: 'text',
        timeout: 15000, //超时时间设置，单位毫秒
        success: function (data) {
			data = data.replace('(','');
			data = data.replace(')','');
			data = JSON.parse(data);
			try{
				if(readFlag=='write'){
				  //errorMsg('已赞');	 
				  $('#downloadHref'+contentId).removeAttr('onclick');
				  $('#downloadHref'+contentId).html(''+data.downloadCount+'');
				}
				else{
				  jQuery("#downloadCount"+contentId).text(data.downloadCount);
				}
			}catch(e){}
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //alert('error'+textStatus);
        }
    });
}//end of function

