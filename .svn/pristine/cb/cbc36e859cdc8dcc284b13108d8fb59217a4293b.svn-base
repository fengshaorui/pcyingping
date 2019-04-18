$(function(){
    var registFun=(function(){
        //================bug
        function slideBlock(e){
            var flag=false;
            $(".slide-block").data("flag", true);
            $(".block").on("mousedown",function(e){
                flag=true;
                var offsetL=$(".block").offset().left;
                console.log( offsetL );
                $(".block").on('mousemove',function(e){  
                    var tag = $(".slide-block").data("flag");
                    if(flag && tag ){
                        var x=e.pageX-offsetL-20;
                        if(x>0&&x<285){
                            $(".block").css({left:x});
                            $(".hid-block").css({width:x});
                        }
                        
                        if(x>=278){
                            $(".bottom span").html("验证成功").css({marginLeft:-28});
                            $(".slide-block").data("flag",false);
                            $(".block").css({left:280});
                            $(".hid-block").css({width:280});
                        }else{
                            $(".bottom span").html("请按住滑块，拖动到最右边").css({marginLeft:-84});
                        }
                    }                                          
                })
                $(document).mouseup(function(e){
                   flag=false;  
                   var blocktemp=$(".block").css("left"); 
                   var blockLeft=parseInt(blocktemp.split("px")[0]);
                   if(blockLeft<278){
                        $(".block").stop(true, false).animate({left:0});
                        $(".hid-block").stop(true, false).animate({width:0});
                        $(".bottom span").html("请按住滑块，拖动到最右边").css({marginLeft:-84});
                   }        
                })
            })              
        }
        

        function checkUser(){
            $(".user").blur(function(){
                $(".user").next().remove();
                var patt=/[a-zA-Z0-9]{6,8}/;
                var userVal=$(".user").val();
                if(!patt.test(userVal)){
                    var htmlStr="<span class='usertips'>请输入6-8位字母数字组成的用户名</span>";
                    $(".user").parent().append(htmlStr);
                }
            })
            $(".pwd").blur(function(){
                $(".pwd").next().remove();
                var patt=/[0-9]{6,8}/;
                var pwdVal=$(".pwd").val();
                if(!patt.test(pwdVal)){
                    var htmlStr="<span class='pwdtips'>请输入6-8位数字组成密码</span>";
                    $(".pwd").parent().append(htmlStr);
                }
            })
        }  

        function clickReg(){
            $("span.regist").click(function(){
                if(!$(".usertips").length && !$(".pwdtips").length && $(".slide-block").data("flag")==false){
                    console.log(11);
                    $.ajax({
                        type:"post",
                        url:"../api/index-api/regist.php",
                        data:{
                            user:$(".user").val(),
                            pwd:$(".pwd").val()
                        },
                        datatype:"json",
                        success:function(data){
                            var data=JSON.parse(data);
                            if(data.code==1){
                                window.location.href="../login.html";
                            }else{
                                var htmlStr="<span class='btntips'>操作失败,请重试</span>";
                                $(".regist").after(htmlStr);
                            }
                        }
                    })
                }
            })
        }



        return {
            slideBlock:slideBlock,
            checkUser:checkUser,
            clickReg:clickReg
        }
    })()

    registFun.slideBlock();
    registFun.checkUser();
    registFun.clickReg();

})