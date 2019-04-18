$(function(){
    var indexFun=(function(){

        /**hover效果，鼠标放上去出现隐藏块，移除消失
        *hoverObj为数遍移入移除的块
        *showHideObj是隐藏显示的块
        **/
        function hoverHideShow(hoverObj,showHideObj){
            hoverObj.hover(
                function(){
                    showHideObj.show();
                },
                function(){
                    showHideObj.hide();
                })     
        }

        //轮播图给li设置背景图片封装
        function setImgLoop(arr,obj){
            var len=obj.length;
            for(var i=0;i<len;i++){
                obj.eq(i).css({
                    background:"url(images/index/"+arr[i]+") no-repeat 0 0",
                })      
            }
        }

        //小轮播上下轮播
        function arrowClick(topObj,bottomObj,loopObj,height){
            var imgindex=0;
            var len=loopObj.children().length;
            topObj.click(function(){
                imgindex--;
                if(imgindex<0){
                    var topVal=(len-1)*height;
                    loopObj.css({marginTop:-topVal});
                    imgindex=len-2;
                }
                loopObj.stop(true,true).animate({marginTop:-(height*imgindex)});
            }) 

            function bottomClick(){
                imgindex++;
                if(imgindex==len){
                    loopObj.css({marginTop:0});
                    imgindex=1;
                }
                loopObj.stop(true,true).animate({marginTop:-height*imgindex});              
            }

            bottomObj.click(bottomClick);
            var smallLoopTime=setInterval(bottomClick,2000);

            loopObj.parent().hover(
                function(){
                    console.log(1);
                    if(smallLoopTime){
                        clearInterval(smallLoopTime);
                    }
                },
                function(){
                    smallLoopTime=setInterval(bottomClick,2000);
                })
        }

        return {
            hoverHideShow:hoverHideShow,
            setImgLoop:setImgLoop,
            arrowClick:arrowClick,
        }

    })()



//调用hoverHideShow显示或者隐藏块
indexFun.hoverHideShow($(".right-one"),$(".right-one-hid"));
indexFun.hoverHideShow($(".right-four"),$(".right-four-hid"));
indexFun.hoverHideShow($(".small-icon-one"),$(".hid-icon"));

//上下轮播图实现的调用
function smallLoop(){
    //初始化       
    var imgstr = ["loop1.jpg","loop2.jpg","loop3.jpg"];
    //克隆第一个节点
    indexFun.setImgLoop(imgstr,$(".small-loop ul li"));
    var lastLoopImg=$(".small-loop ul li:first").clone(true,true);
    lastLoopImg.appendTo(".small-loop ul");

    var height=parseInt($(".small-loop ul li").css("height").split("px"));
    indexFun.arrowClick($(".arrow-top"),$(".arrow-bottom"),$(".small-loop ul"),height);
}
    
smallLoop();

})