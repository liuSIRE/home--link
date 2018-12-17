// $(function () {
//     $('.zhin').mouseenter(function () {
//         $(this).children('.zhin-div').show(200);
//     }).mouseleave(function () {
//         $(this).children('.zhin-div').hide(200);
//     })

// })
//input上方字体变白开始
$(function () {
    var len = document.querySelector('.search-box-con li').length;
    $('.search-box-con li').click(function () {
        $('.search-box-con li.a').removeClass('a');
        $(this).addClass('a');
    });
})
//input上方字体变白结束
//底部选项卡上方开始
$(function () {
    $('.foot-link-tab span').mouseenter(function () {
        var index=$(this).index();
        $('.footer-main ul').hide().eq(index).show();
    })
})
//选项卡上方结束
//上方input特效开始
$(function () {
    $('.search-box-con li:eq(0)').click(function () {
        $('.sanj').animate({left:10},500);
        $('.keyword-box').attr('placeholder','请输入区域，商圈或小区名开始找房')
    })
    $('.search-box-con li:eq(1)').click(function () {
        $('.sanj').animate({left:85},500);
        $('.keyword-box').attr('placeholder','请输入楼盘名称开始找房')
    })
    $('.search-box-con li:eq(2)').click(function () {
        $('.sanj').animate({left:150},500);
        $('.keyword-box').attr('placeholder','输入地铁站或地铁站可以找地铁附近的房源')
    })
    $('.search-box-con li:eq(3)').click(function () {
        $('.sanj').animate({left:210},500);
        $('.keyword-box').attr('placeholder','请输入小区名开始查找小区')
    })
    $('.search-box-con li:eq(4)').click(function () {
        $('.sanj').animate({left:270},500);
        $('.keyword-box').attr('placeholder','房产知识有疑问？来搜搜吧~')
    })
})
//上方input特效结束
//登录特效开始
$(function () {
    $('.denglu').click(function(){
        $('.dialog').show();
    })

    $('.dialog .close').click(function(){
        $('.dialog').hide();
    })

    $(window).scroll(function(e){
        e.preventDefault();
    })
})
//登录特效结束
//注册特效开始
$(function () {
    $('.zhucea').click(function(){
        $('.zhuce').show();
    })

    $('.zhuce .close').click(function(){
        $('.zhuce').hide();
    })

    $(window).scroll(function(e){
        e.preventDefault();
    })
})
// 注册特效结束
//f返回顶部开始
$(function(){
    $('.dingb').click(function () {
        $(document.documentElement).animate({scrollTop:0},1000);
    })
})
//返回顶部结束
//底部固定栏点击消失
$(function () {
    $('.footer-close').click(function () {
        $('.fix-footer').hide();
    })
})
//右侧导航栏
$(function () {
    $('.daik').mouseenter(function () {
        $('.daik-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.daik').mouseleave(function () {
        $('.daik-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.guanz').mouseenter(function () {
        $('.guanz-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.guanz').mouseleave(function () {
        $('.guanz-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.duib').mouseenter(function () {
        $('.duib-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.duib').mouseleave(function () {
        $('.duib-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.maif').mouseenter(function () {
        $('.maif-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.maif').mouseleave(function () {
        $('.maif-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.gongj').mouseenter(function () {
        $('.gongj-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.gongj').mouseleave(function () {
        $('.gongj-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.baod').mouseenter(function () {
        $('.baod-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.baod').mouseleave(function () {
        $('.baod-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.code').mouseenter(function () {
        $('.code-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.code').mouseleave(function () {
        $('.code-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.kef').mouseenter(function () {
        $('.kef-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.kef').mouseleave(function () {
        $('.kef-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.dianh').mouseenter(function () {
        $('.dianh-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.dianh').mouseleave(function () {
        $('.dianh-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.fank').mouseenter(function () {
        $('.fank-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.fank').mouseleave(function () {
        $('.fank-list').stop(true).animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
})
$(function () {
    $('.dingb').mouseenter(function () {
        $('.dingb-list').css('display','block').animate({opacity:1,right:38},100)
    })
    $('.dingb').mouseleave(function () {
        $('.dingb-list').animate({opacity:0,right:50},100,function(){
            $(this).css('display','none')
        });
    })
});
/*$('.rna-content a').mouseenter(function(){
$(this).find('[class$=list]').show().animate({opacity: 1, right: 38}, 100)
}).mouseleave(function () {
    $(this).find('[class$=list]').hide().animate({opacity: 0, right: 50}, 100)
});*/
//左侧导航栏特效结束
//底部在线客服开始
$(function(){
    $('.online-top').click(function () {
        if ($(".on-close").css('display') == 'none') {
            $('.online-bottom').show(500);
            $(".on-close").css('display', 'block');
        } else {
            $('.online-bottom').hide(500);
            $(".on-close").css('display', 'none');
            console.log('123')
            // })
        }
    });
})
//底部在线客服结束
//input下方轮播开始
$(function () {
   var index=0;
   var len=$('.center-carousel li').length;
   $('.center-carousel li:first').clone().appendTo($('.beijing'));
     setInterval(function () {
         if(index == len){
             $('.beijing').css('top','0');
             index=0;
         }
         index++;
         $('.beijing').animate({top:-index*37},500)
     },1000)
})
//input下方轮播结束
//城市列表
$(function () {
    $('.fl .fl-dw').click(function () {
        $('.zhe-city').css('display','block');
        $('.city-list').animate({width:660,height:480},300).animate({width:640,height:460},200)
    })
    $('.close-city').click(function(){
        $('.city-list').animate({width:0,height:0},500)
        $('.zhe-city').css('display','none');
    })
})
//城市列表结束
//input下拉框开始
$(function () {
    $('.keyword-box').focus(function () {
        if($(this).attr('placeholder')=="请输入区域，商圈或小区名开始找房"){
            $('.drop-list').slideDown(100);
        }else if($(this).attr('placeholder')=="请输入楼盘名称开始找房"){
            $('.drop-list1').slideDown(100);
        }else if($(this).attr('placeholder')=="输入地铁站或地铁站可以找地铁附近的房源"){
            $('.drop-list2').slideDown(100);
        }else if($(this).attr('placeholder')=="请输入小区名开始查找小区"){
            $('.drop-list3').slideDown(100);
        }else if($(this).attr('placeholder')=="房产知识有疑问？来搜搜吧~"){
            $('.drop-list4').slideDown(100);
        }

    })
    $('.keyword-box').blur(function () {
        $('.drop-list').css('display','none');
        $('.drop-list1').css('display','none');
        $('.drop-list2').css('display','none');
        $('.drop-list3').css('display','none');
        $('.drop-list4').css('display','none');
    })
})
//滚动到一定距离出现返回顶部
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop()>630){
            $('.dingb').show();
        }else{
            $('.dingb').hide();
        }
    })
})
//登录
//7天免的免登录
$(function () {
    $('.login h3 i').click(function () {
        console.log(333)
        $(this).toggleClass('active5');
    })
})
$(function () {
    $('.pass-login h3 i').click(function () {
        console.log(333)
        $(this).toggleClass('active5');
    })
})
//手机快捷登录消失密码登录出现
$(function () {
    $('.login-close').click(function () {
        $('.over-bg').hide();
    })
})
//点击登录 出现登录页面

$(function(){
    $('.menu-top .denglu').click(function () {
        console.log(111)
        $('.over-bg').show();
    })
})
//点击手机快捷登录时 账号密码登录隐藏 快捷登录出现
$(function () {
    $('.pass-login h5').click(function () {
        $('.pass-login').hide();
        $('.login').show();
    })
})
//点击账号密码登录时 登录隐藏 快捷登录出现
$(function () {
    $('.login h5').click(function () {
        $('.login').hide();
        $('.pass-login').show();
    })
})
//点击账号密码登录叉号 页面消失
$(function () {
    $('.pass-login .pass-login-close').click(function () {
        $('.over-bg').hide();
    })
})
//点击注册按钮 出现注册页面
$(function () {
    $('.zhucea').click(function () {
        $('.reg-bg').show();
    })
})
//点击去登陆
$(function () {
    $('.reg-top a').click(function () {
        $('.reg-bg').hide();
        $('.over-bg').show();
    })
})
//点击叉号 注册页面消失
$(function () {
    $('.reg-close').click(function () {
        $('.reg-bg').hide();
    })
})
//注册页面七天免登陆
$(function () {
    $('.reg .seven i').click(function () {
        $(this).toggleClass('active5')
    })
})
//表单验证 正则 手机号快捷登录
$(function () {
    var phoneBool=false;
    var yanBool=false;
    var numberBool=false;
    $('.login-write .phone').blur(function () {
        var value=$('.login-write .phone').val().trim();
        var reg=/^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(!reg.test(value)){
            $('.login h2').show();
            $(this).parent().css('border','1px solid red')
            phoneBool=false;
            return;
        }else{
            $('.login h2').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            phoneBool=true;
            return;
        }
    })
    $('.yannumber').blur(function () {
        var value=$(this).val().trim();
        var reg1 = /^[a-zA-Z0-9]{6}$/;
        if(!reg1.test(value)){
            $('.login .login-error-yan').show();
            $(this).parent().css('border','1px solid red')
            yanBool=false;
            return;
        }else{

            $('.login .login-error-yan').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            yanBool=true;
            return
        }
    })
    $('.login .number').blur(function () {
        var value=$(this).val().trim();
        var reg2=/^[0-9a-zA-Z]{6}$/;
        if(!reg2.test(value)){
            $('.login .login-error-yan').show();
            $(this).parent().css('border','1px solid red')
            numberBool=false;
            return;
        }else{
            $('.login .login-error-yan').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            numberBool=true;
            return;
        }
    })
       $('.login button').click(function (e) {
           if(numberBool&&yanBool&&phoneBool){

           }else{
               e.preventDefault();
           }
       })
})
//账号 密码登录
$(function () {
    var phoneBool=false;
    var passBool=false;
    var yanBool=false;
    $('.pass-login .pass-phone').blur(function () {
        var value=$(this).val().trim();
        var reg=/^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if(!reg.test(value)){
            $('.pass-login h2').show();
            $(this).parent().css('border','1px solid red')
            phoneBool=false;
            return;
        }else{
            $('.pass-login h2').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            phoneBool=true;
            return;
        }
    })
    $('.pass-login .login-pass').blur(function () {
        var value=$(this).val().trim();
        var reg=/^[0-9a-zA-Z]{8,12}$/;
        if(!reg.test(value)){
            $('.pass-login .pass-login-yan').show();
            $(this).parent().css('border','1px solid red')
            passBool=false;
            return;
        }else{
            $('.pass-login .pass-login-yan').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            passBool=true;
            return;
        }
    })
    $('.login-number').blur(function () {
         var value=$(this).val().trim();
         var reg=/^[a-zA-Z]{6}$/
        if(!reg.test(value)){
            $('.login-yanzheng').show();
            $(this).parent().css('border','1px solid red')
            yanBool=false;
            return;
        }else{
            $('.login-yanzheng').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            yanBool=true;
            return;
        }
    })
    $('.pass-login button').click(function (e) {
        if(yanBool&&passBool&&phoneBool){

        }else{
            e.preventDefault();
        }
    })
})
//注册页面正则
$(function () {
    var phoneBool=false;
    var passBool=false;
    var yanBool=false;
    var phoneyBool=false;
    $('.reg-phone').blur(function () {
        var value=$(this).val().trim();
        var reg=/^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
       if(!reg.test(value)){
           $('.reg h1').show();
           $(this).parent().css('border','1px solid red')
           phoneBool=false;
           return;
       }else{
           $('.reg h1').hide();
           $(this).parent().css('border','1px solid #dbdbdb')
           phoneBool=true;
           return;
       }
    })
    $('.reg-yan').blur(function () {
        var value=$(this).val().trim();
        var reg=/^[a-zA-Z0-9]{6}$/;
        if(!reg.test(value)){
            $('.reg h2').show();
            $(this).parent().css('border','1px solid red')
            passBool=false;
            return;
        }else{
            $('.reg h2').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            passBool=true;
            return;
        }
    })
    $('.reg-phone-yan').blur(function () {
        var value=$(this).val().trim();
        var reg=/^[0-9a-zA-Z]{6}$/;
        if(!reg.test(value)){
            $('.reg h3').show();
            $(this).parent().css('border','1px solid red')
            yanBool=false;
            return
        }else{
            $('.reg h3').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            yanBool=true;
            return
        }
    })
    $('.reg-pass').blur(function () {
        var value=$(this).val().trim();
        var reg=/^[0-9a-zA-Z]{8,12}$/;
        if(!reg.test(value)){
            $('.reg h4').show();
            $(this).parent().css('border','1px solid red')
            phoneyBool=false;
            return;
        }else{
            $('.reg h4').hide();
            $(this).parent().css('border','1px solid #dbdbdb')
            phoneyBool=true;
            return;
        }
    })
    $('.reg button').click(function (e) {
        if(phoneyBool&&yanBool&& passBool&&phoneBool){

        }else{
            e.preventDefault();
        }
    })

})


