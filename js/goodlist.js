$(function(){
    var goodlistFun = (function(){
        //加载更多logo
        function addMore(x,y){
            var flag = true;
            //点击发起ajax请求更多内容
            x.click(function(){                
                $('.sb-logo ul').removeClass('sb-logo-ul2').addClass('sb-logo-ul');
                $('.s-brand').addClass('s-brand-1');
                x.hide(); 
                y.show(); 
                if(flag){
                    flag = false;
                    $.ajax({
                        type:"post",
                        url: "../api/goodlogo.php",
                        data:{
                            type:'声卡'
                        },
                        dataType:'json',
                        success:function(data){                        
                           addCont(data)
                        }
                    })
                }
            });
            //点击收起
            y.click(function(){
                $('.sb-logo ul').removeClass('sb-logo-ul').addClass('sb-logo-ul2');
                $('.s-brand').removeClass('s-brand-1');
                x.show(); 
                y.hide();
            })
            //添加内容
            function addCont(obj){
                var len = obj.length;                
                for(var i = 0;i < len;i ++){
                    var dLi = $("<li>"),
                        dA = $('<a>');
                    dA.append('<img src="../images/goodlist/' + obj[i]['images'] + '"class=".sb-img">' + obj[i]['logo']);
                    dLi.append(dA);
                    $('.sb-logo ul').append(dLi);
                }
            }
        }
        //价格筛选
        function priceButton(obj1){
            obj1.mousedown(function(e){
                e.preventDefault();
                obj1.addClass('button-shadow');
            })
            obj1.mouseup(function(e){
                e.preventDefault();
                obj1.removeClass('button-shadow');
            })
        }
        //更多筛选条件
        function moreSelect(obj1,obj2){
            obj1.hover(function(){
                obj1.parent().addClass('s-more-top2');
            },function(){
                obj1.parent().removeClass('s-more-top2');
            })
            obj1.click(function(){
                $('.s-wrap-flow').show();
                obj1.hide().siblings().show().parent().addClass('s-more-top');
            
            })
            obj2.click(function(){
                $('.s-wrap-flow').hide();
                obj2.hide().siblings().show().parent().removeClass('s-more-top');
                
            })
        }
        //达人推荐loop
        function sectionLoop(obj1,obj2){
            //创建节点并添加
            obj1.children('li').eq(0).clone(true,true).appendTo(obj1);
            var len=obj1.children().length,
                liw=obj1.children().eq(0).outerWidth(),
                lix=0,
                btx=0;
            //loop动画
            obj2.children().eq(0).addClass('s-control');
            function move(){
                lix++;               
                btx++;
                if( btx == len - 1){
                    btx = 0;
                }
                if( lix == len){
                    lix=1;
                    obj1.css({marginLeft:0});
                }
                obj1.stop(true,true).animate({
                    marginLeft:-liw*lix
                },1000)             
                obj2.children().eq(btx).addClass('s-control').siblings().removeClass('s-control');
            }
            //绑定点击事件
            obj2.on('click','a',function(e){
                e.stopPropagation();
                e.preventDefault();
                var lix=$(this).index();
                $(this).addClass('s-control').siblings().removeClass('s-control');               
                obj1.stop(true,true).animate({
                    marginLeft:-lix*liw
                },1000) 
            })
            //loop自动滚动计时器
            function time(){                
                move();
                clearTimeout(loopTime);
                loopTime = setTimeout(time,3000);
            }
            var loopTime = setTimeout(time,3000);
            //鼠标悬停清空计时器，结束自动切换
            obj1.parent().hover(
                function(){
                    if(loopTime){
                        clearTimeout(loopTime);
                    }
                },
                function(){
                    loopTime = setTimeout(time,3000);
            })
        }
        //goods-list商品列表
        //商品ajax加载
        function goodlist(x,y,z){
            var flag = true,
                scroll = $(window).scrollTop(),
                offect = x.offset().top + x.height(),
                height = $(window).height();
                console.log(height + scroll);
                console.log(offect);
            y.on('mouseover','li',function(){
                $(this).addClass('gl-num-cur').siblings().removeClass('gl-num-cur');
                var index = $(this).index();
                $(this).parent().next().children().eq(index).show().siblings().hide();
            
            })
            if(height + scroll >= offect){
                console.log(2)
                
                    $.ajax({
                        type:'post',
                        url: "../api/goodlist.php",
                        data:{
                            group:'1'
                        },
                        dataType:'json',
                        success:function(data){
                            console.log(1)
                            console.log(typeof data);
                        },
                        error:function(xhr,status,error){
                            console.log(xhr,status,error)
                        }
                    })
                
            }

        }
        return{
            addmore:addMore,
            priceButton:priceButton,
            moreSelect:moreSelect,
            sectionLoop:sectionLoop,
            goodlist:goodlist
        }
    })()
    goodlistFun.addmore($('.sb-ext'),$('.sb-ext2'));
    goodlistFun.priceButton($('.s-price a'));
    goodlistFun.moreSelect($('.s-open'),$('.s-close'));
    goodlistFun.sectionLoop($('.s-loop-box ul'),$('.s-loop-box .s-loop-button'));
    goodlistFun.goodlist($('.gl-item'),$('.gl-options'),$('.thumbs ul'))
})
