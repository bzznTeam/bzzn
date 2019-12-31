$(function(){
	var WinW = $(window).width();
	var WinH = $(window).height();
	var HeaderTop = $('.header_top').height();
	var NavW = $('.warpper').width();
	// 导航宽高位置
	$('nav.bz_nav').css({'width':NavW,'height':WinH-HeaderTop,'margin-left':-NavW/2,'top':HeaderTop})
	$('nav.bz_nav ul li').height((WinH-HeaderTop)/3);


	$(window).resize(function(){
		WinW = $(window).width();
		WinH = $(window).height();
		HeaderTop = $('.header_top').height();
		NavW = $('.warpper').width();
		// 导航宽高位置
		$('nav.bz_nav').css({'width':NavW,'height':WinH-HeaderTop,'margin-left':-NavW/2,'top':HeaderTop})
		$('nav.bz_nav ul li').height((WinH-HeaderTop)/3);
		if (WinW > 980) {
			$('.header .header_top .bz_menu').removeClass('active');

		}else{
			$('.header .nav_left .bz_menu').removeClass('active');

		}
		if ($('.bz_menu').hasClass('active')) {

		}else{
			$('.bz_nav').removeClass('active');
		}
	})


	// pc导航
	$('.header .nav_left .bz_menu').click(function(){
		if ($(this).hasClass("active")) {
			$(this).removeClass('active');
			$('.bz_nav').removeClass('active');
		}else{
			$(this).addClass('active');
			$('.bz_nav').addClass('active');
		}
	})
	$('.bz_nav ul li').hover(function(){
		var Index = $(this).index();
		$(this).removeClass("out");
		$(this).siblings().addClass('out');
		// $(".bz_nav ol li").eq(Index).addClass('show');
		// $(".bz_nav ol li").eq(Index).siblings().removeClass('show');
	},function(){
		$(this).siblings().removeClass('out');
		// $(".bz_nav ol li").removeClass('show')
	})
	// 手机导航
	$('.header .header_top .bz_menu').click(function(){
		if ($(this).hasClass("active")) {
			$(this).removeClass('active');
			$('.bz_nav').removeClass('active');
		}else{
			$(this).addClass('active');
			$('.bz_nav').addClass('active');
		}
	})
	// 返回顶部
	$('.nav_slider .top').click(function(){
		$('body,html').stop(true,false).animate({'scrollTop':0},500);
	})

    // 需要引用页面入场动画时
	var browser={
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}

	if (browser.versions.trident) {
		$("body,html").addClass('on');
      alert("请升级浏览器！");
  }
})


/*通过缩放处理手机页面大小调整*/
function initzoom(){
	var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var zoom;
	if (clientWidth < 380) {
			zoom = clientWidth / 300;
		}
	if (clientWidth < 480  && clientWidth > 380) {
		zoom = clientWidth / 310;
	}
	if (clientWidth < 640  && clientWidth > 480) {
		zoom = clientWidth / 380;
	}
	if (clientWidth < 850 && clientWidth > 640) {
		zoom = clientWidth / 480;
	}
	if (clientWidth < 1200 && clientWidth > 850) {
		zoom = clientWidth / 600;
	}


	window.zoom = zoom / 2;
	document.write('<style id="htmlzoom">html{font-size:' + (zoom * 50) + 'px;}</style>');
	window.addEventListener('resize', function() {
		clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
		// zoom = clientWidth / 320;
		if (clientWidth < 380) {
			zoom = clientWidth / 300;
		}
		if (clientWidth < 480  && clientWidth > 380) {
			zoom = clientWidth / 310;
		}
		if (clientWidth < 640  && clientWidth > 480) {
			zoom = clientWidth / 380;
		}
		if (clientWidth < 850 && clientWidth > 640) {
			zoom = clientWidth / 480;
		}
		if (clientWidth < 1200 && clientWidth > 850) {
			zoom = clientWidth / 600;
		}

		// if (clientWidth < 1024) {
		// 	zoom = clientWidth / 512;
		// }
		window.zoom = zoom / 2;
		document.getElementById('htmlzoom').innerHTML = 'html{font-size:' + (zoom * 50) + 'px;}';
	});
}
initzoom();


//引用方法

 // $.MsgBox.Alert("标题", "内容！",function(){ callback });   //alert提示框
 // $.MsgBox.Confirm("标题", "内容！",function(){ callback });  //confirm提示框


//弹出 确认/提示 信息框
$.MsgBox = {
    Alert: function (title, msg, callback) {
      GenerateHtml("alert", title, msg);
      btnOk(callback); //alert只是弹出消息，因此没必要用到回调函数callback
      btnNo();
    },
    Confirm: function (title, msg, callback) {
      GenerateHtml("confirm", title, msg);
      btnOk(callback);
      btnNo();
    }
  }
//确定按钮事件
function btnOk(callback) {
    $("#mb_btn_ok").click(function () {
      
      if (typeof (callback) == 'function') {
        callback();
        $(".mb-box,.overlay").remove();
      }else{
        $(".mb-box,.overlay").remove();
      }
    });
  }
 
//取消按钮事件
function btnNo() {
    $("#mb_btn_no,#mb_close").click(function () {
      $(".mb-box,.overlay").remove();
    });
}
//生成Html
var GenerateHtml = function (type, title, msg) {
    var _html = "";
    if (type == "alert") {
    	 _html += '<div class="mb-box alert">';
    }else{
    	_html += '<div class="mb-box confirm">';
    }
    _html += '<div class="hd"><a href="javascript:;" id="mb_close" class="close fr"></a>' + title + '</div><div class="bd">';
    _html += '<p class="msg">' + msg + '</p><p class="btn-box">';

    // if (type == "alert") {
    // 	_html += '<a href="javascript:;"  id="mb_btn_ok" class="btn ok">确认</a>';
    // }
    if (type == "confirm") {
    	// _html += ' <a href="javascript:;" id="mb_btn_no" class="btn canc">取消</a>';
      _html += '<a href="javascript:;"  id="mb_btn_ok" class="btn ok">确认</a>';
    }   
    _html += '</p></div></div>';
    _html += '<div class="overlay"></div>';
    
    $("body").append(_html); //_html添加到body
}
