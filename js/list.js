//头部input下拉框
$(function () {
    $('.top-search-suo').focus(function () {
        $('.input-down').css('display','block')
        console.log('123')
    }).blur(function () {
        $('.input-down').css('display','none');
    })
});
$(function () {
    $('.list-head span').click(function () {
        $('.list-head span').removeClass('active1')
        $(this).addClass('active1');
        console.log(111)
    })
})
$(function () {
    $('.page a').click(function () {
        $('.page a').removeClass('active2')
        $(this).addClass('active2');
        console.log(111)
    })
})
//底部选项卡
$(function () {
    $('.foot-link-tab span').mouseenter(function () {
        var index=$(this).index();
        $('.footer-main ul').hide().eq(index).show();
    })
})
//在线客服
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
//右侧导航栏开始
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
//滚动到一定距离出现返回顶部
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop()>796){
            $('.dingb').show();
        }else{
            $('.dingb').hide();
        }
    })
})
//点击返回顶部
$(function(){
    $('.dingb').click(function () {
        $(document.documentElement).animate({scrollTop:0},1000);
    })
})
