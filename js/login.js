$(function(){
    var loginFun=(function(){
        function checkUserPwd(){
            $(".user").blur(function(){
                $(".msgall").remove();
                var user=$(this).val();
                var patt=/^\w{6,8}$/;
                //console.log(patt.test(user));
                if(patt.test(user)==false){
                    $(".msg").remove();
                    var tips="<span class='msg'>请输入6—8位数字或字母组成的用户名</span>"
                    $(this).parent().append(tips);
                }else{
                    $(".msg").remove();
                }
            })
            $(".pwd").blur(function(){
                $(".msgall").remove();
                var pwd=$(this).val();
                var patt=/^\d{6,8}$/;
                if(patt.test(pwd)==false){
                    $(".msg1").remove();
                    var tips="<span class='msg1'>请输入6-8位数字密码</span>"
                    $(this).parent().append(tips);
                }else{
                    $(".msg1").remove();
                }
            })
        }
        function existUser(){
                $(".login").click(function(e){
                    e.preventDefault();
                    if(!$(".msg").length && !$(".msg1").length){
                        $.ajax({
                            type:"post",
                            url:"api/index-api/login.php",
                            data:{
                                user:$(".user").val(),
                                pwd:$(".pwd").val()
                            },
                            dataType:"json",
                            beforeSend:function(){
                                $(".login").html("登陆中...");
                            },
                            success:function(data){
                                if(data.code==0){
                                    if($(".check").prop("checked")){
                                        var date=new Date();
                                        expireDay=30;
                                        date.setDate(date.getDate()+expireDay);
                                        document.cookie="user="+$(".user").val()+"expires="+date.toGMTString();
                                    }else{
                                        document.cookie="user="+$(".user").val();
                                    }
                                    window.location.href="index.php";
                                }else{
                                    var str="<span class='msgall'>用户名或密码错误</span>";
                                    $(".login").before(str);
                                }
                            }
                        })  
                    }  
                })
            }
      


        return {
            checkUserPwd:checkUserPwd,
            existUser:existUser
        }
    })()

loginFun.checkUserPwd();
loginFun.existUser();




})