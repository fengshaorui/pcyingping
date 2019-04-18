$(function () {
    var myShopCar = (function ($) {

        // tab切换功能
        function handleTabHover() {
            $(".tab-hover li").mouseover(function () {
                $(this).siblings().removeClass("active").end().addClass("active");
            });
        }

        // 实现全选功能
        function handleCheckAll() {
            $(".shop-box .shop-list .selectAllShop input").change(function () {
                $(".shop-box .shop-list .shop-item input").prop("checked", this.checked);
                $(".shop-box .shop-list .selectAllShop input").prop("checked", this.checked);
                handleAllShopCar();
            });
        }

        // 购物车功能入口函数
        function handleShopCar() {
            $(".shop-box .shop-list").on("click", ".shop-item", function (ev) {
                judgeBtn($(this), ev);
            });
        }

        // 判断点击了哪个按钮
        function judgeBtn(obj, ev) {
            var target = $(ev.target);
            if (target.is("input")) {
                itemChecked();
                handleAllShopCar();
            } else if (target.hasClass("left-reduce")) {
                shopCountAddOrReduce(target.next(), false);
                handleAllShopCar();
            } else if (target.hasClass("right-add")) {
                shopCountAddOrReduce(target.prev(), true);
                handleAllShopCar();
            } else if (target.hasClass("move-save")) {
                console.log("点击了收藏按钮");
            } else if (target.hasClass("item-del")) {
                target.parent().parent().remove();
                handleAllShopCar();
                showOrHide();
                sendAjax( target.parent().parent().data("id") );
            }
        }

        // 点击删除按钮时，发送AJAX删除数据库中对应的条目
        function sendAjax( id ){
            $.get("./api/delShopItem.php", {"id": id}, function( res ){
                console.log( res );
            });
        }

        // 删除选中的商品
        function delCheckedShop(){
            $(".shop-box .t-footer div.td3 span").click(function(){
                var inputs = $(".shop-box .shop-list .shop-item input");
                inputs.each(function(){
                    if( this.checked ){
                        $(this).parent().parent().remove();
                    }
                });
                showOrHide();
            });
        }


        // 如果没有商品时，显示空提示信息
        function showOrHide(){
            var allItems = $(".shop-box .shop-list .shop-item");
            if( allItems.length <= 0 ){
                $(".shop-box .shop-list .selectAllShop input").prop("checked", false);
                $(".shop-box .shop-list").css("display", "none");
                $(".shop-box .shop-empty").css("display", "block");
            }
        }

        // 处理全部价钱和数量的函数
        function handleAllShopCar() {
            var allInput = $(".shop-box .shop-list .shop-item input"),
                allCount = $(".shop-box .shop-list .t-footer span.shop-total"),
                allMoney = $(".shop-box .shop-list .t-footer span.money-total"),
                dazheObj = $(".shop-box .shop-list .t-footer span.dazhe"),
                realMoney = $(".shop-box .shop-list .t-footer span.real-money");
        
            var counts = 0,
                totalMoney = 0;
            allInput.each(function () {
                if (this.checked) {
                    var singleCount = $(this).parent().parent().find("div.mid-count"),
                        singleMoney = $(this).parent().parent().find(".td6 span");
                    counts += parseInt( singleCount.html() );  
                    totalMoney += parseFloat( singleMoney.html() );
                }
            });
            allCount.html( counts );
            allMoney.html( totalMoney.toFixed(2) );
            realMoney.html( ( totalMoney - parseFloat( dazheObj.html() ) ).toFixed(2) );
        }

        // 处理商品数量加减的函数
        function shopCountAddOrReduce(countObj, flag) {
            var count = parseInt(countObj.html());
            if (flag) {
                count++;
            } else {
                count--;
                if (count <= 1) {
                    count = 1;
                }
            }
            countObj.html(count);
            computedSingleShopPrice(countObj.parent().next().children("span"), countObj.parent().prev().children("span"), count);
        }

        // 处理单个商品总金额的函数
        function computedSingleShopPrice(totalObj, singleObj, count) {
            var singlePrice = parseFloat(singleObj.html());
            totalObj.html((singlePrice * count).toFixed(2));
        }

        // 处理商品选中的函数
        function itemChecked() {
            var inputs = $(".shop-box .shop-list .shop-item input");
            var count = 0;
            inputs.each(function (index, elem) {
                if ($(this).prop("checked")) {
                    count++;
                }
            });
            if (count === inputs.length) {
                $(".shop-box .shop-list .selectAllShop input").prop("checked", true);
            } else {
                $(".shop-box .shop-list .selectAllShop input").prop("checked", false);
            }
        }

        // 读取商品信息的函数
        function readShopData(){
            var cookie = document.cookie;
            var data = {
                user: cookie.split("=")[1]
            }
            $.post("./api/readShopItem.php", data, function( res ){
                if( res.flag === 0 ){
                    $(".total").html( res.list.length );
                    $(".shop-empty").hide();
                    $(".shop-list").show();
                    var str = "";
                    for( var i = 0; i < res.list.length; i++ ){
                        str += createDomObj( res.list[i] );
                    }
                    $(".shop-list .shop-item").remove();
                    $(str).insertBefore( $(".shop-list hr") );
                }else if( res.flag === 1 ){
                    $(".shop-empty").show();
                    $(".shop-list").hide();
                }
            }, "json");
        }

        // 创建购物车的每个列表
        function　createDomObj( obj ){
            var str = `<div class="shop-item tr" data-id="${obj.Id}">
                            <div class="td td1">
                                <input type="checkbox">
                            </div>
                            <div class="td td2">
                                <img src="${obj.imgUrl}" alt="提示文字s">
                            </div>
                            <div class="td td3">
                                ${obj.info}
                            </div>
                            <div class="td td4">
                                ￥<span>${obj.price}</span>
                            </div>
                            <div class="td td5">
                                <div class="left-reduce">-</div>
                                <div class="mid-count">${obj.count}</div>
                                <div class="right-add">+</div>
                            </div>
                            <div class="td td6">
                                ￥<span>${ (obj.price * obj.count).toFixed(2) }</span>
                            </div>
                            <div class="td td7">
                                <p class="move-save">移入我的收藏</p>
                                <p class="item-del">删除</p>
                            </div>
                        </div>`;
            return str;
        }

        return {
            handleTabHover: handleTabHover,
            handleCheckAll: handleCheckAll,
            handleShopCar: handleShopCar,
            delCheckedShop: delCheckedShop,
            readShopData: readShopData
        }
    })(jQuery);

    // tab切换功能
    myShopCar.handleTabHover();

    // 实现全选功能
    myShopCar.handleCheckAll();

    // 购物车功能入口函数
    myShopCar.handleShopCar();

    // 删除选中的商品
    myShopCar.delCheckedShop();

    // 读取商品信息的函数入口
    myShopCar.readShopData();

    if( !document.cookie ){
        $(".login-tip").show();
        location.href = "./login.html";
    }else{
        $(".login-tip").hide();
    }
});