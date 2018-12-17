$(function () {
    //大背景中点击右侧隐藏栏显示
    $('.left-row').click(function () {
        console.log(111)
        $('.box-left2').fadeIn();
    })
    $('.box-close').click(function () {
        $('.box-left2').hide();
    })
})
//导航栏移动
$(function () {
    $('.nav-bar li ').click(function () {
        var index=$(this).index()
        console.log(index)
        $('.nav-bar li').removeClass('active')
        $('.moved').animate({left:97*index},200);
        $(this).addClass('active');
    })
})
//周边导航栏
$(function () {
    $('.thing li').click(function () {
        $('.thing li').removeClass('active3');
        $(this).addClass('active3');
    })
})
//房贷计算机隐藏栏
$(function () {
    $('.computer-ret').mouseenter(function () {
        $(this).children('.computer-subitem').show();
        console.log(111)
    }).mouseleave(function () {
        $('.computer-subitem').hide();
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
//f返回顶部开始
$(function(){
    $('.back-top').click(function () {
        $(document.documentElement).animate({scrollTop:0},1000);
    })
})
//返回顶部结束
//滚动到一定距离出现返回顶部
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop()>630){
            $('.back-top').show();
        }else{
            $('.back-top').hide();
        }
    })
})
//当滚动到一定距离 顶部固定
$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop()>628){
            $('.center-nav').addClass('active4');
        }else{
            $('.center-nav').removeClass('active4');
        }
    })
})
//当滚动到一定距离 顶部固定结束
// 百度地图API文档：http://lbsyun.baidu.com/index.php?title=jspopular/guide/getkey
// 百度地图密钥：	2GTlizLkNZzqaGQEg9VG0g7ruVjcH5c4

// 固定：生成地图（id="box"）
$(function () {


var map = new BMap.Map("near-map");

// 设置地图默认展示的位置
var point = new BMap.Point(116.342987, 40.109868);

// 设置缩放比例
map.centerAndZoom(point, 15);

// 左上角的平移和缩放按钮
map.addControl(new BMap.NavigationControl());

// 比例尺
map.addControl(new BMap.ScaleControl());

// 右下角的缩略图
map.addControl(new BMap.OverviewMapControl());

// 右上角地图类型
map.addControl(new BMap.MapTypeControl());

map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用
map.addEventListener("click", function(e){
        console.log(e);
    }
);
})
//导航栏滚动