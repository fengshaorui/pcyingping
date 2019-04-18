// tab切换
function plate4Tab() {
    $(".content .plate4 .plate4-16-1 li").mouseenter(function () {
        $(this).css({ background: "#fff", color: "#e6004f", textDecoration: "underline" })
            .siblings().css({ background: '', color: "", textDecoration: "none" });
        $.ajax({
            type: "get",
            url: 'api/section1.php',
            data: {
                type: $(this).html()
            },
            dataType: 'json',
            success: function (data) {
                var htmlStr = "";
                for (var i = 0; i < data.length; i++) {
                    htmlStr += "<div class=\"plate4-16-z1\">";
                    htmlStr += "<a href=\"#\">";
                    htmlStr += "<p class=\"text\">" + data[i].brief + "</p>";
                    htmlStr += "<p class=\"price\">￥<span>" + data[i].price + "</span></p>";
                    htmlStr += "<img class=\"img\" src=images/section1/" + data[i].img + ".jpg alt=\"\">";
                    htmlStr += "</a>";
                    htmlStr += "</div>";
                }
                $(".plate4-16-z").html(htmlStr);
            },
            error: function () {
                console.log('请求失败');
            }
        });
        //console.log($(".content .plate4 .plate4-16-z1 ").html())
    })
}
plate4Tab()


//右侧导航
function rightSideBar() {
    $(".rightsidebar").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 250) {
            $(".rightsidebar").show();
        } else {
            $(".rightsidebar").hide();
        }
    })
};
rightSideBar();

// 图片懒加载
function lanjia() {
    function isShow(el) {
        var winH = $(window).height();
        var scrollH = $(window).scrollTop();
        var top = el.offset().top;
        if (scrollH + winH > top) {
            return true;
        } else {
            return false;
        }
    }
    function isloaded(el) {
        if (el.data("isloaded")) {
            return true;
        } else {
            return false;
        }
    }
    $(window).on('scroll', function () {
        checkShow();
    })
    checkShow();
    function checkShow() {
        $('img').each(function () {
            var $cur = $(this);
            if (isloaded($cur)) { return; }
            if (isShow($cur)) {
                setTimeout(function () {
                    showImg($cur);
                }, 300)
            };
        });
    }
    function showImg(el) {
        el.attr('src', el.attr('data-src'));
        el.data('isloaded', true);
    }
};
lanjia();


// list列表框
function getList() {
    var listgoods = "<div class='left'></div>";
    $(".banner-list ul li.list-hid").prepend(listgoods);
    $(".banner-list ul").on("mouseover", "li", function () {
        $(".banner-list .list-hid").show();
        $.ajax({
            type: "post",
            url: "../api/index-api/listgoods.php",
            data: {
                index: $(this).index()
            },
            dataType: "json",
            success: function (data) {
                dealListData(data);
            }
        })
    })
    $(".banner-list ul").on("mouseout", function () {
        $(".banner-list .list-hid").hide();
    })
}
getList();

//处理list数据
function dealListData(data) {
    $(".banner-list ul li.list-hid .left").children().remove();
    $(".banner-list .list-hid .right .right-bottom span").remove();
    var listName = "";
    var imgStr = "";
    for (var key in data) {
        if (key == "imgs") {
            for (var i = 0; i < data[key].length; i++) {
                imgStr += "<span><img src=\"images/index/" + data[key][i] + "\"/></span>";
            }
            $(".banner-list .list-hid .right .right-bottom").append(imgStr);
        } else {
            listName = "<p>" + key + "</p><div>";
            for (var i = 0; i < data[key].length; i++) {
                listName += "<span><a href='#'>" + data[key][i] + "</a></span><span>\/\</span>";
            }
            listName += "</div>";
            $(".banner-list .list-hid .left").append(listName);
        }

    }
}

// 呼出
function topList() {
    $(".top .top-mid-down .all-list").mouseenter(function () {
        $(".banner-mid").show();
    });
    $(".banner-mid").mouseleave(function () {
        $(".banner-mid").hide();
    });
}
topList();
if( !document.cookie ){
    $(".nav-mid-left .ready").show();
    // location.href = "./login.html";
}else{
    $(".nav-mid-left .ready").hide();
}