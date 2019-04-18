// $(function () {

    var myFun = (function () {
        $(".slideBar .right").data("state", false);
        // 点击购物车，弹出右侧内容, 再次单击，隐藏右侧内容, true(显示), false(隐藏)
        function handleShopCarClick() {
            $("li.shopCar a").click(function () {
                var right = $(".slideBar .right");
                if (right.data("state")) {
                    right.hide(300);
                    right.data("state", false);
                } else {
                    right.show(300);
                    right.data("state", true);
                }
                isShow();
                $(".slideBar .shopCar-box").css("left", 585);
            });
        }

        // 判断右侧购物车中显示的内容
        function isShow(){
            var item =  $(".slideBar .right .mid .item");
            if( item.children().length <= 0){
                item.hide();
                item.next().show();
            }else{
                item.show();
                item.next().hide();
            }
        }

        // 鼠标悬浮在图片，显示弹框
        function handleUserHover(objSrc, objTarget) {
            objSrc.hover(function () {
                objTarget.stop(true, true).fadeIn(300);
            }, function () {
                objTarget.stop(true, true).fadeOut(300);
            });

            objTarget.hover(function () {
                $(this).stop(true, true).css("display", "block");
            }, function () {
                $(this).css("display", "none");
            });
        }

        // 鼠标悬浮
        function handleMouseMove(objSrc, objTarget) {
            objSrc.hover(function () {
                objTarget.css("display", "block");
                objTarget.find("div").css("display", "block");
                objTarget.css("marginLeft", -130);
                objTarget.stop(true).animate({ marginLeft: -100 }, 300, function () {
                    objTarget.find("div").css("display", "none");
                });
            }, function () {
                objTarget.css({ "display": "none", "marginLeft": -130 });
            });
        }

        // 当折起内容大于200px时，出现返回顶部按钮
        function handleReturnTop() {
            $(window).scroll(function (ev) {
                if ($(this).scrollTop() >= 200) {
                    $(".slideBar .scan").css("bottom", "38px");
                    $(".slideBar .returnTop").css("display", "block");
                } else {
                    $(".slideBar .scan").css("bottom", "0");
                    $(".slideBar .returnTop").css("display", "none");
                }
            });
            $(".slideBar .returnTop").click(function () {
                $("body,html").animate({ scrollTop: 0 }, 1000);
            });
        }

        // 购物车中的li，鼠标悬浮时，出现删除按钮和数量按钮
        function handleLiHover() {
            $(".slideBar .right .mid .item li").hover(function () {
                $(this).find(".del").css("visibility", "visible");
                $(this).find(".reduce").css("visibility", "visible");
                $(this).find(".add").css("visibility", "visible");
            }, function () {
                $(this).find(".del").css("visibility", "hidden");
                $(this).find(".reduce").css("visibility", "hidden");
                $(this).find(".add").css("visibility", "hidden");
            });
        }

        // 点击右侧顶部的关闭按钮，关闭右侧购物车
        function closeShopCar() {
            $(".slideBar .right img.close").click(function () {
                var right = $(".slideBar .right");
                right.hide(300);
                right.data("state", false);
            });

            $(".slideBar .left .close-lunbo").click(function () {
                $(".slideBar .shopCar-box-parent").css("display", "none");
                $(".slideBar .shopCar-box").css("left", 585);
            });
        }

        // 飞入购物车特效
        function flyToShopCar(btnObj, imgObj, targetObj, param) {
            var imgFly = imgObj.clone();
            btnObj.click(function (ev) {
                var param = {
                    price: $(".main .mid .price").html(),
                    count: $(".sig-count").val(),
                    info: $(".main .mid > h1").html(),
                    imgUrl: $(".main .left .img-box img").attr("src")
                };
                var scrollTop = $(window).scrollTop();
                var offset = targetObj.offset();

                changeSlideBarCarData( param );

                imgFly.width(50);
                imgFly.height(50);
                imgFly.fly({
                    start: {
                        left: event.pageX,
                        top: event.pageY - scrollTop
                    },
                    end: {
                        left: offset.left + 10,
                        top: offset.top + 10 - scrollTop,
                        width: 0,
                        height: 0
                    },
                    onEnd: function () {
                        changeShopCarImg(imgFly, targetObj);
                        this.destroy();
                    }
                });
            });
        }

        // 点击飞入购物车按钮后，修改购物车的数据
        function changeSlideBarCarData( param ){
            var username = document.cookie;
            var arr = username.split("=");
            param.user = arr[1];
            $.post("./api/saveShop.php", param, function( data ){
                console.log( data );
            });
        }

        // 图片飞入购物车后，处理图片切换显示
        function changeShopCarImg(imgFly, targetObj) {
            var imgSrc = imgFly.attr("src");
            imgFly.width(20);
            imgFly.height(20);
            targetObj.css({
                background: "url(" + imgSrc + ") center center no-repeat",
                backgroundSize: "14px"
            });
            setTimeout(function () {
                targetObj.attr("style", "");
                if (!$(".slideBar .right").data("state")) {
                    $(".slideBar .shopCar-box-parent").css("display", "block");
                    $(".slideBar .shopCar-box").animate({ left: 0 }, 500);
                }
            }, 1500);
        }

        // 轮播图程序
        function handleLunbo() {
            var width = $(".slideBar .left .imgWrap-1 a").width() + 4,
                imgCount = $(".slideBar .left .imgWrap-1 a").length;
            $(".slideBar .left .imgWrap-1").width(width * imgCount);

            if (imgCount > 4) {
                handlePrev(width, imgCount);
                handleNext(width, imgCount);
            }
        }

        // 点击轮播的左侧按钮，向左轮播
        function handlePrev(width, imgCount) {
            $(".slideBar .btn-01-prev").click(function () {
                $(".slideBar .left .imgWrap-1").stop(true, true);
                var marginLeft = parseInt($(".slideBar .left .imgWrap-1").css("marginLeft"));
                if (marginLeft !== 0) {
                    $(".slideBar .left .imgWrap-1").animate({ marginLeft: "+=" + width });
                }
            });
        }

        // 点击轮播的右侧按钮，向右轮播
        function handleNext(width, imgCount) {
            $(".slideBar .btn-01-next").click(function () {
                $(".slideBar .left .imgWrap-1").stop(true, true);
                var marginLeft = parseInt($(".slideBar .left .imgWrap-1").css("marginLeft"));
                if (Math.abs(marginLeft) < width * (imgCount - 4)) {
                    $(".slideBar .left .imgWrap-1").animate({ marginLeft: "-=" + width });
                }
            });
        }

        // 实现全选功能
        function handleSelectAll() {
            var selectAll = $(".slideBar .right .bottom .selectAll input");
            var items = $(".slideBar .right .mid .item li input");
            selectAll.change(function () {
                items.prop("checked", this.checked);
                computedCountPrice();
            });

            // 监听单个选项，如果最后一个选项也被选中，那么全选按钮也应该被选中
            items.change(function () {
                var count = 0;
                items.each(function (index, elem) {
                    if (elem.checked) {
                        count++;
                    }
                });
                if (count === items.length) {
                    selectAll.prop("checked", true);
                } else {
                    selectAll.prop("checked", false);
                }
            });

        }

        // 实现商品数量加减功能的入口
        function handleShopCount() {
            $(".slideBar .right .mid .item").on("click", "li", function (ev) {

                var target = $(ev.target);
                if (target.hasClass("add")) {
                    computedSingleCount(target, "add");
                } else if (target.hasClass("reduce")) {
                    computedSingleCount(target, "reduce");
                } else if (target.attr("type")) {
                    computedCountPrice(target);
                }else if( target.hasClass("del") ){
                    $(this).remove();
                    computedCountPrice();
                    isShow();
                }
            });
        }

        // 加减单个商品的数量
        function computedSingleCount(target, flag) {

            // 获取到展示单个商品数量的按钮
            var countObj, count;
            if (flag === "add") {
                countObj = target.prev();
            } else {
                countObj = target.next();
            }

            // 获取当前单个商品的总数
            count = parseInt(countObj.html());
            if (flag === "add") {
                countObj.html((count + 1) + "");
            }else{
                if (count <= 1) {
                    countObj.html("1");
                } else {
                    countObj.html((count - 1) + "");
                }
            }
            computedCountPrice();
        }

        // 统计总体的数量，价格的函数
        function computedCountPrice() {
            var allInput = $(".slideBar .right .mid .item li input"),
                allMoneyObj = $(".slideBar .total-money").children("span"),
                allCountObj = $(".slideBar .total"),
                allMoney = 0,
                allCount = 0;

            if( allInput.length <= 0 ){
                $(".slideBar .right .selectAll").children("input").prop("checked", false);
            }

            allInput.each(function (index, elem) {
                if( $(elem).prop("checked") ){
                    var count = parseInt($(elem).next().next().find(".count").html());
                    var sigPrice = parseFloat($(elem).next().next().find(".img-price").children("span").html());
                    allCount += count;
                    allMoney += sigPrice * count;
                }
            });
            allMoneyObj.html( allMoney.toFixed(2) );
            allCountObj.html( allCount );
        }


        return {
            handleShopCarClick: handleShopCarClick,
            handleUserHover: handleUserHover,
            handleMouseMove: handleMouseMove,
            handleReturnTop: handleReturnTop,
            handleLiHover: handleLiHover,
            closeShopCar: closeShopCar,
            flyToShopCar: flyToShopCar,
            handleLunbo: handleLunbo,
            handleSelectAll: handleSelectAll,
            handleShopCount: handleShopCount
        };

    })();

    // 点击购物车，弹出右侧的内容
    myFun.handleShopCarClick();

    // 鼠标悬浮用户头像，显示用户信息框
    myFun.handleUserHover($(".slideBar .user").parent(), $(".slideBar .user-box"));

    // 鼠标悬浮电话图标，显示联系我们弹框
    myFun.handleUserHover($(".slideBar .contact").parent(), $(".slideBar .contact-box"));

    // 鼠标悬浮扫描图标，显示二维码弹框
    myFun.handleUserHover($(".slideBar .scan"), $(".slideBar .scan-box"));

    // 鼠标移入金额图标，显示左侧的提示
    myFun.handleMouseMove($(".slideBar .my-money").parent(), $(".slideBar .money-box"));

    // 鼠标移入毛笔图标，显示左侧提示
    myFun.handleMouseMove($(".slideBar .advice").parent(), $(".slideBar .advice-box"));

    // 鼠标移入返回顶部图标，显示左侧提示
    myFun.handleMouseMove($(".slideBar .returnTop"), $(".slideBar .returnTop-box"));

    // 当折起内容大于200px时，出现返回顶部按钮
    myFun.handleReturnTop();

    // 当鼠标悬浮至购物车中的商品项上时，出现数量加减按钮和删除按钮
    myFun.handleLiHover();

    // 关闭右侧购物车功能
    myFun.closeShopCar();

    // 轮播启动入口
    myFun.handleLunbo();

    // 全选功能入口
    myFun.handleSelectAll();

    // 实现商品数量加减功能
    myFun.handleShopCount();

    // 飞入购物车使用示例  [btn, img, target]
    myFun.flyToShopCar($(".imgWrap button"), $(".imgWrap img"), $("span.shopCar"));
// });