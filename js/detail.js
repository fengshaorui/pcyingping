$(function () {
    var shopDetail = (function ($) {

        var imgWrap = $(".navbar .imgWrap1");
        var index = 0;
        var tiem1;


        // 最右侧的轮播
        function lunbo3() {
            var index = 0;
            var circleIndex = 0;
            var btns = $(".main .lunbo3 > ul li");
            var view = $(".main .lunbo3 .viewport");

            // 在末尾补第一项
            var node = view.find("li:first")
            view.children().append(node.clone());

            var time = setInterval(startInterval, 2000);

            $(".main .lunbo3").hover(function () {
                clearInterval(time);
            }, function () {
                time = setInterval(startInterval, 2000);
            });

            btns.click(function () {
                index = $(this).index();
                $(this).addClass("active").siblings().removeClass("active");
                view.children().animate({ marginLeft: -index * 150 }, 500);
            });

            function startInterval() {
                index++;
                circleIndex++;
                if (circleIndex > 2) {
                    circleIndex = 0;
                }
                if (index > 3) {
                    index = 1;
                    view.children().css("marginLeft", 0);
                }
                $(btns[circleIndex]).addClass("active").siblings().removeClass("active");
                view.children().animate({ marginLeft: -index * 150 }, 500);
            }

        }


        // 小轮播2
        function lunbo2() {
            var imgWrap = $(".main .imgWrap2");
            imgWrap.width(imgWrap.children().length * 70);
            var maxValue = (imgWrap.children().length - 5) * 70;

            imgWrap.children().mouseover(function () {
                $(this).addClass("active").siblings().removeClass("active");
            });


            $(".main .prev").click(function () {
                var marginLeft = parseInt(imgWrap.css("marginLeft"));

                if (marginLeft >= 0) {
                    imgWrap.stop(true, true).animate({ marginLeft: "0" }, 500);
                } else {
                    imgWrap.stop(true, true).animate({ marginLeft: "+=70" }, 500);
                }
            });

            $(".main .next").click(function () {
                var marginLeft = parseInt(imgWrap.css("marginLeft"));
                if (marginLeft <= -maxValue) {
                    imgWrap.stop(true, true).animate({ marginLeft: -maxValue }, 500);
                } else {
                    imgWrap.stop(true, true).animate({ marginLeft: "-=70" }, 500);
                }
            });
        }


        // 处理分类导航(AJAX异步请求)的函数
        function handleTypeNav() {
            $(".navbar .item-box .jsonp-box li").hover(
                function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    if ($(this).data("flag")) {
                        return;
                    } else {
                        $(this).data("flag", "1");
                        handleNavAjax($(this).index(), $(this));
                    }
                },
                function () {

                }
            );
        }

        // 分类导航部分发送AJAX请求的函数
        function handleNavAjax(index, currentObj) {
            $.post("./api/index-api/listgoods.php", { index: index }, function (data) {
                createNavHtmlModel(data, currentObj);
            }, "json");
        }

        // 动态生成nav中每一项中的内容，添加到html结构中
        function createNavHtmlModel(data, currentObj) {

            // 生成内容盒子
            var contBox = $("<div>");
            contBox.addClass("cont-box");
            contBox.addClass("clearfix");

            // 生成内容盒子的左侧区域
            var contBoxLeft = $("<div>");
            contBoxLeft.addClass("cont-box-left");

            // 生成内容盒子的右侧区域
            var contBoxRight = $("<div>");
            contBoxRight.addClass("cont-box-right");


            createContLeftModel(data, contBoxLeft);
            createContRightModel(data["imgs"], contBoxRight);

            contBox.append(contBoxLeft);
            contBox.append(contBoxRight);

            currentObj.append(contBox);

        }

        // 生成内容左侧区域的布局
        function createContLeftModel(data, contBoxLeft) {

            $.each(data, function (key, value) {
                if (key !== "imgs") {
                    var dlItem = $("<dl>");
                    dlItem.addClass("clearfix");
                    dlItem.html("<dt>" + key + "</dt>");
                    var ddObj = $("<dd>");
                    for (var i = 0; i < value.length; i++) {
                        var aObj = $("<a>");
                        aObj.attr("href", "./goodsList.html");
                        aObj.html(value[i]);
                        ddObj.append(aObj);
                    }
                    dlItem.append(ddObj);
                    contBoxLeft.append(dlItem);
                }
            });
        }

        // 生成右侧内容的布局
        function createContRightModel(data, contBoxRight) {
            var arrType = ["录音编曲", "网络主播", "手机直播", "演出音箱", "家庭KTV", "影视录音", "乐器设备", "音乐欣赏", "会议工程", "家庭影院"];
            var dlOne = $('<dl class="ad-wrap"><dt>套装分类</dt></dl>');
            var dlTwo = $('<dl class="imgWrap"><dt>品牌精选</dt></dl>');
            var ddOne = $("<dd>");
            var ddTwo = $("<dd>");
            var strOne = "";
            var strTwo = "";
            for (var i = 0; i < data.length; i++) {
                strOne += '<a href="./goodsList.html">' + arrType[i] + ' ></a>';
                strTwo += '<a href="./goodsList.html"><img src="./images/index/' + data[i] + '" alt="提示文字" width="80" height="40"/></a>';
            }
            strOne += '<a href="./goodsList.html">' + arrType[8] + ' ></a>';
            strOne += '<a href="./goodsList.html">' + arrType[9] + ' ></a>';

            ddOne.html(strOne);
            ddTwo.html(strTwo);

            dlOne.append(ddOne);
            dlTwo.append(ddTwo);

            contBoxRight.append(dlOne);
            contBoxRight.append(dlTwo);
        }


        // 导航区域右侧的小轮播图入口
        function smallLunbo() {
            handleToDownBtn();
            handleToUpBtn();
            handleAutoMove();
        }

        // 点击向上箭头时，向下滑动轮播
        function handleToUpBtn() {
            $(".navbar .to-up").click(function () {
                index--;
                if (index < 0) {
                    index = 2;
                    imgWrap.css("marginTop", -3 * 35);
                }
                imgWrap.stop(true, true).animate({ marginTop: -index * 35 }, 350);
            });
        }

        // 点击向下箭头时，向下滑动轮播
        function handleToDownBtn() {
            $(".navbar .to-down").click(function () {
                index++;
                if (index > 3) {
                    imgWrap.css("marginTop", 0);
                    index = 1;
                }
                imgWrap.stop(true, true).animate({ marginTop: -index * 35 }, 350);
            });
        }

        // 小轮播图自动轮播
        function handleAutoMove() {
            tiem1 = setInterval(doAutoMove, 2500);
            $(".navbar .navbar-right").hover(function () {
                clearInterval(tiem1);
            }, function () {
                tiem1 = setInterval(doAutoMove, 2500);
            });
        }

        // 自动轮播的处理函数
        function doAutoMove() {
            $(".navbar .to-down").trigger("click");
        }

        // 放大镜特效函数
        function scaleImg() {

            var obj = $(".main .shop-section .img-box");

            var moveDiv = $("<div>");
            var bigDiv = obj.next();
            var bigUrl;

            moveDiv.addClass("move-view");
            moveDiv.width(obj.width() / 2);
            moveDiv.height(obj.height() / 2);

            obj.hover(function (ev) {
                bigDiv.show();
                bigUrl = obj.children("img").attr("data-big");
                $(this).append(moveDiv);
            }, function () {
                bigDiv.hide();
                $(this).children("div.move-view").remove();
            });

            obj.mousemove(function (ev) {
                var offset = $(this).parent().offset();
                var left = ev.pageX - offset.left - 99.5;
                var top = ev.pageY - offset.top - 99.5;
                left = left <= 0 ? 0 : left;
                left = left >= 199 ? 199 : left;
                top = top <= 0 ? 0 : top;
                top = top >= 199 ? 199 : top;
                moveDiv.css({ left: left, top: top });
                bigDiv.css({background:'url('+ bigUrl + ') no-repeat', backgroundPositionX: -left * 2, backgroundPositionY: -top * 2 });

            });

        }

        // 搜索框实时显示搜索内容
        function handleSearch() {
            $(".search-input").data("flag", true);
            $(".search-input").keyup(function (ev) {
                ev.stopPropagation();
                if ( ev.which !== 40 && ev.which !== 38 && ev.which !== 37 && ev.which !== 39 && ev.which !== 13) {
                    var key = $(this).val();
                    var that = this;
                    $(that).next().next().html("");
                    if (key === "") {
                        $(this).next().next().hide();
                        return;
                    }
                    if ($(this).data("flag")) {
                        $(this).data("flag", false);
                        $.ajax({
                            url: "https://www.ingping.com/search/solrCheck",
                            type: "get",
                            data: { format: "json", term: key, },
                            dataType: "jsonp",
                            success: function (data) {
                                $(that).next().next().show();
                                $(that).data("flag", true);
                                $.each(data, function (index, val) {
                                    var liObj = $("<li>");
                                    liObj.html(val);
                                    $(that).next().next().append(liObj);
                                });
                                handleKeyPress( -1 );
                            }
                        });
                    }
                }
            });
        }

        // 按键选中
        function handleKeyPress( index ) {
            $(".search-input").keydown(function (ev) {
                ev.stopPropagation();
                var items = $(".brand-box-mid .item-box").children();
                if ( ev.which === 40 && items.length !== 0 ) {
                    index++;
                    if( index >= items.length ){
                        index = 0;
                    }
                    $( items[index] ).addClass("active").siblings().removeClass("active");
                    $(this).val( $( items[index] ).html() );

                }else if( ev.which === 38 && items.length !== 0){
                    index--;
                    if( index < 0 ){
                        index = items.length - 1;
                    }
                    $( items[index] ).addClass("active").siblings().removeClass("active");
                    $(this).val( $( items[index] ).html() );
                }else if( ev.which === 13 ){
                    $(".item-box").hide();
                }
            });
        }

        // 选项中的li被点击时，把内容填入搜索框中
        function itemClick(){

            $(".search-box").on("click", ".item-box li", function(){
                $(".search-input").val( $(this).html() );
                $(".item-box").hide();
            });

            $(".search-box").on("mouseover", ".item-box li", function(){
                $(this).addClass("active").siblings().removeClass("active");
            });
            
        }

        // 处理购物车下边小图的函数
        function handleSmallImg(){
            var midArr = ["detail_mid1.jpg", "detail_mid2.jpg","detail_mid3.jpg","detail_mid4.jpg","detail_mid5.jpg"];
            var bigArr = ["detail_big1.jpg", "detail_big2.jpg", "detail_big3.jpg", "detail_big4.jpg", "detail_big5.jpg"];
            $(".main .shop-section .left .imgWrap2 img").mouseover(function(){
                var index = $(this).index();
                var str = "./images/detail/";
                if( index < 5){
                    $(".main .shop-section .left .img-box img").attr("src", str + midArr[index]);
                    // $(".main .shop-section .left .img-box img").data("big", str + bigArr[index]);
                    $(".main .shop-section .left .img-box img").attr("data-big", str + bigArr[index]);
                }
            });
        }

        // 处理数量加减按钮
        function handleCount(){
            $(".up-add").click(function(){
                var val = parseInt( $(".sig-count").val() );
                val++;
                $(".sig-count").val( val );
            });

            $(".down-reduce").click(function(){
                var val = parseInt( $(".sig-count").val() );
                val--;
                if( val <= 0 ){
                    val = 1;
                }
                $(".sig-count").val( val );
            });
        }

        // 处理加入购物车的入口
        function handleAddToCar(){
            var clickObj = $(".main .shop-section .addCar");
            var imgObj = $(".main .img-box img");
            var targetObj = $("span.shopCar");
            myFun.flyToShopCar(clickObj, imgObj, targetObj );
        }

        // 判断如果用户已经登陆，则显示登陆后的信息
        function judgeLogin(){
            if( document.cookie ){
                $(".login-tip").hide();
            }else{
                $(".login-tip").show();
            }
        }

        return {
            handleTypeNav: handleTypeNav,
            smallLunbo: smallLunbo,
            lunbo2: lunbo2,
            lunbo3: lunbo3,
            scaleImg: scaleImg,
            handleSearch: handleSearch,
            handleKeyPress: handleKeyPress,
            itemClick: itemClick,
            handleSmallImg: handleSmallImg,
            handleCount: handleCount,
            handleAddToCar: handleAddToCar,
            judgeLogin: judgeLogin
        }

    })(jQuery);

    // 分类导航程序入口
    shopDetail.handleTypeNav();

    // 小轮播程序入口
    shopDetail.smallLunbo();

    // 第二个小轮播
    shopDetail.lunbo2();

    // 右侧的大轮播
    shopDetail.lunbo3();

    // 放大镜特效
    shopDetail.scaleImg();

    // 搜索框的实时搜索入口
    shopDetail.handleSearch();

    // 搜索框中的选项被点击事件
    shopDetail.itemClick();

     // 处理小图片的函数
    shopDetail.handleSmallImg();

    // 处理数量加减按钮
    shopDetail.handleCount();

    // 加入购物车
    shopDetail.handleAddToCar();

    // 判断用户是否已经登陆
    shopDetail.judgeLogin();
});