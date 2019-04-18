$(function(){
    var sectionFun = (function(){
        //淡入淡出轮播图函数
        //轮播图添加背景图片
        function setImgBannerLoop(arr,obj){
                var len = obj.length;
                for(var i = 0;i < len;i ++){
                    obj.eq(i).css({
                        background:"url(images/Section5/" + arr[i] + ") no-repeat 0 0",
                    })      
                }
            }
        //添加点击button切换loop事件    
        function  bannerLoopclick(loopObj,btnObj){
            loopObj.eq(0).show().siblings().hide();
            btnObj.eq(0).css({background:'#F899B3'});
            var x = 0;
            btnObj.click(function(){
                x = $(this).index();
                fadeIn(x);
            });
            function fadeIn(x){
                loopObj.eq(x).fadeIn().siblings().fadeOut();
                btnObj.eq(x).css({background:'rgb(233, 102, 183)'})
                .siblings().css({background:'#fff'});
            }
            //图片自动播放
            function time(){
                x++;
                if(x>loopObj.length-1){
                    x = 0;
                }
                fadeIn(x);
                clearTimeout(loopTime);
                loopTime = setTimeout(time,3000);
            }
            var loopTime = setTimeout(time,3000);
        //鼠标悬停loop时清空计时器，结束loop自动切换   
            loopObj.parent().hover(
                function(){
                    if(loopTime){
                        clearTimeout(loopTime);
                    }
                },
                function(){
                    loopTime = setTimeout(time,2000);
            })
        } 
  
        //tab切换
        function sectionTab (obj){
            //鼠标经过颜色改变发起ajax
            obj.on('mouseenter','span',function(e){
               var cont = $(this).html(),
                    flag = true;
               
                    index = $(this).index();
                e.preventDefault();          
                $(this).addClass('bchange').siblings().removeClass('bchange');
                // if(flag){
                //     $.ajax({
                //         type:"get",
                //         url:'api/moni.php',
                //         data:{
                //             type:cont
                //         },
                //         dataType:'json',
                //         success:function(data){
                //             flag=false;             
                //         var str="";
                //         var srcStr="";
                //         $(".tab-name a").html('');
                //         $(".tap-price span").html('');
                //         for(var key in data){
                           
                //             for(var i in data[key]){
                                
                //                 for(var j=0;i<data[key].length;j++){
                                    
                //                 }
                //                     if(i=="img"){
                //                         $(".tab-img a img").attr("src",data[key][i]);
                //                     }else if(i=="brief"){ 
                //                         $(".tab-name a").html(data[key][i]);
                //                     }else{
                //                         $(".tap-price span").html(data[key][i]);
                //                     }
                                
                //                 console.log(data[key][i]);
                //             }       
                //         }   
                //         console.log(str)         
                //         },
                //         error:function(){
                //             console.log('连接失败');
                //         }
                //     });
                // }
            })
           
        }     
        
        //楼层导航
        function floorNavi(floor,navi){
        
            for(var i = 0;i < floor.children('.content').length; i ++){
                navi.children().eq(i).attr("index",i);
                navi.on('click','li',function(){
                    var offset = floor.children('.content').eq($(this).index()).offset().top;
                    $('html,body').scrollTop(offset);           
                })
                navi.parent().children('.retrun-top').click(function(){
                    $('html,body').scrollTop(0);
                })
            }
            $(window).scroll(function(){
                var scroll=$(window).scrollTop();
               console.log(scroll);
                for(var i = 0;i < floor.children('.content').length; i ++){
                    var offset = floor.children('.content').eq(i).offset().top;
                    if(scroll-offset>-100){
                        for(var j = 0;j < floor.children('.content').length;j++){
                            navi.children().eq(j).removeClass('floor-hover');                                           
                        }
                        navi.children().eq(i).addClass("floor-hover");
                    }
                    if(scroll>300){
                        navi.parent().removeClass('floor-change').addClass('floor-back');
                    }else if(scroll<300){                    
                        navi.parent().removeClass('floor-back').addClass('floor-change');
                    }              
                }
            })
        }
        return{
            setImgBannerLoop:setImgBannerLoop,
            bannerLoopclick:bannerLoopclick,
            sectionTab:sectionTab,
            floorNavi:floorNavi,
        }
    
    })();

    //调用淡入淡出轮播函数
    (function bannerLoop(){
        var imgstr = ["banner_1.png","banner_2.png","banner_3.png"];
        sectionFun.setImgBannerLoop(imgstr,$(".banner-loop ul.loop li"));
        sectionFun.bannerLoopclick($(".banner-loop ul.loop li"),$(".banner-loop .banner-next li"));   
    })()
    //调用tab切换函数
    sectionFun.sectionTab($('.tab-hd'));

    //楼层导航调用
    sectionFun.floorNavi($('.main'),$('.floor-box'));
});
