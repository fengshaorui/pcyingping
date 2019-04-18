$(function () {
    var G_myFun = (function ($) {
        // 请求接口
        function sousuojiekou() {
            $(".head-middle-text").keyup(function () {

                var valuess = $(this).val()
                $.ajax({
                    type: "get",
                    url: "https://www.ingping.com/search/solrCheck?",
                    data: {
                        term: valuess
                    },
                    dataType: 'jsonp',
                    //    async: true, 
                    success: function (data) {
                        console.log(data);
                        var liStr = "";
                        $(".head-middle-seek ul").html("");
                        for (var i = 0; i < data.length; i++) {
                            $(".head-middle-seek").show();
                            liStr += "<li>" + data[i] + "</li>";
                        }
                        $(".head-middle-seek ul").append(liStr);
                    }
                })

            })
        };
        // 商品分类隐藏兰
        function hoverHdo(obj) {
            obj.hover(
                function () {
                    $(this).children().eq(1).show();
                },
                function () {
                    $(this).children().eq(1).hide();
                }
            );
        }
        // 商品分类隐藏栏右侧
        function hoverPll(obj) {
            obj.hover(
                function () {
                    $(this).children().eq(2).show();
                    // $(this).css({"background":"white"});
                    $(this).addClass("active");
                    if ($(this).data("flag")) {
                        return;
                    } else {
                        $(this).data("flag", true);
                        var addDiv = $(this);
                        $.ajax({
                            type: "post",
                            url: "api/index-api/listgoods.php",
                            data: { index: $(this).index() },
                            dataType: 'json',
                            success: function (data) {
                                // 生成内容的大盒子
                                // console.log(data);
                                var contentbox = $("<div>");
                                contentbox.addClass("product-list-3 clearfix");
                                addDiv.append(contentbox);
                                // 生成内容的小盒子
                                var smallbox = $("<div>");
                                smallbox.addClass("pop clearfix");
                                contentbox.append(smallbox);
                                // 生成内容左边的盒子
                                var ltbox = $("<div>");
                                ltbox.addClass("product-list-left clearfix");
                                smallbox.append(ltbox);
                                // 生成右边盒子
                                var lrbox = $("<div>");
                                lrbox.addClass("product-list-right");
                                smallbox.append(lrbox);
                                // 生成右边上部盒子
                                var lrtbox = $("<div>");
                                lrtbox.addClass("product-list-right-top");
                                lrbox.append(lrtbox);
                                // 生成右边下部盒子
                                var lrdbox = $("<div>");
                                lrdbox.addClass("product-list-right-down");
                                lrbox.append(lrdbox);

                                $.each(data, function (key, value) {
                                    if (key !== "imgs") {
                                        // 生成类
                                        var pllbox = $("<div>");
                                        pllbox.addClass("product-list-fenlei clearfix");
                                        var aObj = $("<a>");
                                        aObj.attr("href", "#");
                                        aObj.html(key);
                                        pllbox.append(aObj);
                                        ltbox.append(pllbox);
                                        // 生成类列表
                                        var plobox = $("<div>");
                                        plobox.addClass("product-list-one clearfix")
                                        for (var i = 0; i < value.length; i++) {
                                            var aObj = $("<a>");
                                            aObj.attr("href", "goodsList.html");
                                            aObj.html(value[i]);
                                            plobox.append(aObj);
                                        }
                                        ltbox.append(plobox);

                                    } else {
                                        var strText = ["录音编曲 >", "网络主播 >", "手机直播 >", "演出音响 >", "家庭KTV >", "影视录音 >", "乐器设备 >", "音乐欣赏 >"]
                                        var dlTop = $('<dl><dt>套装分类</dt></dl>');
                                        var dlDown = $('<dl><dt>品牌精选</dt></dl>');
                                        var ddTop = $("<dd>");
                                        var ddDown = $("<dd>");
                                        var strOne = "";
                                        var strTwo = "";
                                        for (var j = 0; j < data.imgs.length; j++) {
                                            strOne += '<a href="#">' + strText[j] + '</a>';
                                            strTwo += '<a href="#"><img src="images/index/' + data.imgs[j] + '" alt="提示文字"/></a>';
                                        }
                                        strOne += '<a href="#">会议工程 ></a>';
                                        strOne += '<a href="#">家庭影院 ></a>';

                                        ddTop.html(strOne);
                                        ddDown.html(strTwo);

                                        dlTop.append(ddTop);
                                        dlDown.append(ddDown);

                                        lrtbox.append(dlTop);
                                        lrdbox.append(dlDown);
                                    }

                                });
                            }
                        })
                    }
                },
                function () {
                    $(this).children().eq(2).hide();
                    $(this).removeClass("active");
                    //  $(this).css({"background":"rgba(50, 50, 50, 0.1)",});
                }
            );
        }
        // 改变小轮播上箭头颜色
        function hoverup(obj) {
            obj.hover(
                function () {
                    $(this).css({
                        "backgroundImage": "url(images/navList1/uph.png)"
                    })
                },
                function () {
                    $(this).css({
                        "backgroundImage": "url(images/navList1/upb.png)"
                    })
                }
            )
        }
        // 改变小轮播下箭头颜色
        function hoverdown(obj) {
            obj.hover(
                function () {
                    $(this).css({
                        "backgroundImage": "url(images/navList1/downh.png)"
                    })
                },
                function () {
                    $(this).css({
                        "backgroundImage": "url(images/navList1/downb.png)"
                    })
                }
            )

        }
        // 小轮播
        function banner(obj, obj1, obj2) {
            obj.children().eq(0).clone("true").appendTo(".head-down-three-L ul");
            var imgH = obj.children().eq(0).innerHeight(),
                len = obj.children().length,
                imgX = 0;
            obj2.click(function () {
                xia();
            })
            function xia() {
                imgX++;
                if (imgX == len) {
                    imgX = 1;
                    obj.css({ marginTop: 0 })
                }
                obj.stop(true, true).animate({ marginTop: -imgX * imgH });
            }
            obj1.click(function () {

                if (imgX <= 0) {
                    imgX = len - 1;
                    obj.css({ marginTop: -imgX * imgH })
                }
                imgX--;
                obj.stop(true, true).animate({ marginTop: -imgX * imgH });
            })
            // 悬浮停止
            obj.parent().hover(
                function () {
                    if (tim) {
                        clearInterval(tim);
                    }
                },
                function () {
                    tim = setInterval(xia, 2000);
                }
            )
            // 自动播放
            var tim = setInterval(xia, 2000);
        }
        // 图片懒加载
        function lazypic() {
            $("img").each(function () {
                var arrSrc = $(this).attr("src");
                $(this).data("lazySrc", arrSrc);
                $(this).attr("src", "images/navList1/lazypic.gif");
            })
            loading();
            $(window).scroll(function () {
                loading();
            })
            function loading() {
                var windowHeight = $(window).height();
                var scrollHeight = $(window).scrollTop();
                var len = $("img").length;
                for (var i = 0; i < len; i++) {
                    var offsetTop = $("img").eq(i).offset().top;
                    if (offsetTop - (windowHeight + scrollHeight) < 10) {
                        var arr = $("img").eq(i).data("lazySrc");
                        $("img").eq(i).attr("src", arr);
                    }
                }
            }
        }

        function addTheme() {
            var paga = 1;
            var winH = $(window).height();
            var rowTop = $(".row").offset().top + $(".row").innerHeight();
            var scrollTop = $(window).scrollTop();
            var Bval = $(".bodyer .time-limit-text").contents().filter(function () { return this.nodeType == 3; }).text().trim();
            Bval1 = $(".fooder .time-limit-text").contents().filter(function () { return this.nodeType == 3; }).text().trim();
            if (winH + scrollTop >= rowTop) {
                console.log(111);
                if ($(this).data("flag")) {
                    return;
                } else {
                    $(this).data("flag", true);
                    $.ajax({
                        type: "post",
                        url: 'api/navList2.php',
                        data: {
                            type: Bval,
                            type1: Bval1,
                            paga:paga
                        },
                        dataType: "json",
                        success: function (data) {
                            // console.log(data);
                            $.each(data, function (key, value) {
                                if (key == 2) {
                                    for (var i = 0; i < value.length; i++) {
                                        // 生成rowlist 盒子
                                        var rowlist = $("<div>");
                                        rowlist.addClass("rowList");
                                        $(".row01").append(rowlist);
                                        // 生成row-detrail盒子
                                        var rowdetrail = $("<div>");
                                        rowdetrail.addClass("row-detrail");
                                        rowlist.append(rowdetrail);
                                        // 生成a标签
                                        var aBiao = $("<a>");
                                        aBiao.attr("href", "#");
                                        rowdetrail.append(aBiao);
                                        // 生成row-detrail-img盒子
                                        var rowBetrailImg = $("<div>");
                                        rowBetrailImg.addClass("row-detrail-img");
                                        aBiao.append(rowBetrailImg);
                                        // 生成img标签
                                        var img1 = $("<img>");
                                        img1.attr("src", value[i].img);
                                        // console.log(value[i].img);
                                        rowBetrailImg.append(img1);
                                        // 生成mask-layer盒子
                                        var maskLayer = $("<div>");
                                        maskLayer.addClass("mask-layer")
                                        aBiao.append(maskLayer);
                                        // 生成h3标签
                                        var hBiao = $("<h3>");
                                        aBiao.append(hBiao);
                                        // 生成h3的span标签
                                        var span1 = $("<span>");
                                        span1.html(value[i].theme);
                                        hBiao.append(span1);
                                        // 生成row-desc盒子
                                        var rowDesc = $("<div>");
                                        rowDesc.addClass("row-desc");
                                        rowDesc.html(value[i].brief)
                                        aBiao.append(rowDesc);
                                        // 生成zhuanti盒子
                                        var zhuanti = $("<div>");
                                        zhuanti.addClass("zhuanti")
                                        zhuanti.html("进入专题");
                                        maskLayer.append(zhuanti);

                                    }
                                }
                            })
                        }
                    })
                }
            }
            var rowT = 0;
            $(window).scroll(function () {
                // var winH2 = $(window).height();
                // console.log(winH2);
                var rowTop2 = $(".row").offset().top + $(".row").innerHeight();
                console.log(rowT);
                var scrollTop2 = $(window).scrollTop();
                console.log(scrollTop2);
                if (scrollTop2 >= rowT + 150) {
                    rowT = scrollTop2;
                    console.log(1)
                    if ($(this).data("flag")) {
                        console.log(22)
                        $(this).data("flag", false);
                        return;                
                    } else {
                        paga++;
                        $(this).data("flag", true);
                        $.ajax({
                            type: "post",
                            url: 'api/navList2.php',
                            data: {
                                type: Bval,
                                type1: Bval1,
                                paga:paga
                            },
                            dataType: "json",
                            success: function (data) {
                                console.log(data);
                                $.each(data, function (key, value) {
                                    if (key == 2) {
                                        for (var i = 0; i < value.length; i++) {
                                            // 生成rowlist 盒子
                                            var rowlist = $("<div>");
                                            rowlist.addClass("rowList");
                                            $(".row01").append(rowlist);
                                            // 生成row-detrail盒子
                                            var rowdetrail = $("<div>");
                                            rowdetrail.addClass("row-detrail");
                                            rowlist.append(rowdetrail);
                                            // 生成a标签
                                            var aBiao = $("<a>");
                                            aBiao.attr("href", "section1.html");
                                            rowdetrail.append(aBiao);
                                            // 生成row-detrail-img盒子
                                            var rowBetrailImg = $("<div>");
                                            rowBetrailImg.addClass("row-detrail-img");
                                            aBiao.append(rowBetrailImg);
                                            // 生成img标签
                                            var img1 = $("<img>");
                                            img1.attr("src", value[i].img);
                                            // console.log(value[i].img);
                                            rowBetrailImg.append(img1);
                                            // 生成mask-layer盒子
                                            var maskLayer = $("<div>");
                                            maskLayer.addClass("mask-layer")
                                            aBiao.append(maskLayer);
                                            // 生成h3标签
                                            var hBiao = $("<h3>");
                                            aBiao.append(hBiao);
                                            // 生成h3的span标签
                                            var span1 = $("<span>");
                                            span1.html(value[i].theme);
                                            hBiao.append(span1);
                                            // 生成row-desc盒子
                                            var rowDesc = $("<div>");
                                            rowDesc.addClass("row-desc");
                                            rowDesc.html(value[i].brief)
                                            aBiao.append(rowDesc);
                                            // 生成zhuanti盒子
                                            var zhuanti = $("<div>");
                                            zhuanti.addClass("zhuanti")
                                            zhuanti.html("进入专题");
                                            maskLayer.append(zhuanti);
                                        }
                                    }else{
                                        for (var i = 0; i < value.length; i++) {
                                            // $(".fooder").append(row);
                                            // 生成rowlist 盒子
                                            var rowlist = $("<div>");
                                            rowlist.addClass("rowList");
                                            $(".row02").append(rowlist);
                                            // 生成row-detrail盒子
                                            var rowdetrail = $("<div>");
                                            rowdetrail.addClass("row-detrail");
                                            rowlist.append(rowdetrail);
                                            // 生成a标签
                                            var aBiao = $("<a>");
                                            aBiao.attr("href", "#");
                                            rowdetrail.append(aBiao);
                                            // 生成row-detrail-img盒子
                                            var rowBetrailImg = $("<div>");
                                            rowBetrailImg.addClass("row-detrail-img");
                                            aBiao.append(rowBetrailImg);
                                            // 生成img标签
                                            var img1 = $("<img>");
                                            img1.attr("src", value[i].img);
                                            // console.log(value[i].img);
                                            rowBetrailImg.append(img1);
                                            // 生成mask-layer盒子
                                            var maskLayer = $("<div>");
                                            maskLayer.addClass("mask-layer")
                                            aBiao.append(maskLayer);
                                            // 生成h3标签
                                            var hBiao = $("<h3>");
                                            aBiao.append(hBiao);
                                            // 生成h3的span标签
                                            var span1 = $("<span>");
                                            span1.html(value[i].theme);
                                            hBiao.append(span1);
                                            // 生成row-desc盒子
                                            var rowDesc = $("<div>");
                                            rowDesc.addClass("row-desc");
                                            rowDesc.html(value[i].brief)
                                            aBiao.append(rowDesc);
                                            // 生成zhuanti盒子
                                            var zhuanti = $("<div>");
                                            zhuanti.addClass("zhuanti")
                                            zhuanti.html("进入专题");
                                            maskLayer.append(zhuanti);
                                        }
                                    }
                                   
                                })
                            }
                        })
                    }
                }

            })
        }
        return {
            // 商品分类隐藏兰
            hoverHdo: hoverHdo,
            // 商品分类隐藏栏右侧
            hoverPll: hoverPll,
            // 改变小轮播上箭头颜色
            hoverup: hoverup,
            // 改变小轮播下箭头颜色
            hoverdown: hoverdown,
            // 小轮播
            banner: banner,
            // 顶部搜索栏
            sousuojiekou: sousuojiekou,
            // 图片懒加载
            lazypic: lazypic,

            addTheme: addTheme
        }

    })(jQuery);
    // 商品分类隐藏兰
    G_myFun.hoverHdo($(".head-down-one"));
    // 商品分类隐藏栏右侧
    G_myFun.hoverPll($(".product-list-li"));
    // 改变小轮播下箭头颜色
    G_myFun.hoverdown($(".head-down-three-R-down"));
    // 改变小轮播上箭头颜色
    G_myFun.hoverup($(".head-down-three-R-up"));
    // 轮播图
    G_myFun.banner($(".head-down-three-L ul"), $(".head-down-three-R-up"), $(".head-down-three-R-down"));
    // 顶部搜索栏
    G_myFun.sousuojiekou();
    // 图片懒加载
    G_myFun.lazypic();

    G_myFun.addTheme();
    if( !document.cookie ){
        $(".head-one-two").show();
        // $(".head.three").show();
        // location.href = "./login.html";
    }else{
        $(".head-one-two").hide();
        // $(".head.three").hide();
    }
});