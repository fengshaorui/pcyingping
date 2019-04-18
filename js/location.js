(function(){
   var c_obj = (function(){
        function clickBlock( obj, obj2){
            obj.click(function(){
                obj2.show();
            })
        }

        return {
            clickBlock:clickBlock
        }
    })();
    // 点击新增地址出现
    c_obj.clickBlock($(".main .newly"),$(".main .locationHide-box"));
})();