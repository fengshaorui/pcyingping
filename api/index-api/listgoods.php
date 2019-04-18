<?php
    header("content-type:text/html;charset=utf-8");
    $goodItem1 = array(
        "声卡"=>array("专业录音声卡", "网络K歌声卡", "手机直播声卡", "游戏影音声卡", "音乐HIFI声卡", "MIDI声卡",
            "PCI声卡", "PCI-E声卡", "外置声卡", "火线声卡", "录音套装", "解码器", "音频工作站","苹果声卡",
            "扩展卡", "声卡调试", "声卡套装"),
        "调音台"=>array("USB调音台", "数字调音台", "录音调音台", "带效果调音台", "带功放调音台", "DJ调音台"),
        "控制器"=>array("录音监听控制器", "立体声监听控制器"),
        "DI盒"=>array("有源DI盒", "无源DI盒"),
        "imgs"=>array("shop-logo-1.png", "shop-logo-2.png", "shop-logo-3.png", "shop-logo-4.png", "shop-logo-5.png", "shop-logo-6.png", "shop-logo-7.png", "shop-logo-8.png")
    );
    $goodItem2 = array(
        "麦克风"=>array("电容麦克风", "动圈麦克风", "录音麦克风", "手机麦克风", "影视录音麦克风", "KTV",
            "演出麦克风", "乐器麦克风", "USB麦克风", "无线麦克风", "电子管麦克风", "采访麦克风", "会议麦克风",
            "测试麦克风", "语音麦克风"),
        "耳机"=>array("音乐耳机", "监听耳机", "手机耳机", "耳麦", "游戏耳机", "运动耳机", "头戴式耳机","耳塞",
            "入耳式耳机", "耳挂式耳机", "便携式耳机", "无线耳机", "蓝牙耳机", "2.4G耳机", "带线控耳机", "HIFI耳放"),
        "扩音器"=>array("便携式扩音器", "窗口对讲机", "无线导游系统"),
        "imgs"=>array("shop-logo-21.png", "shop-logo-22.png", "shop-logo-23.png", "shop-logo-24.png", "shop-logo-25.png", "shop-logo-26.png", "shop-logo-27.png", "shop-logo-28.png")
    );
    $goodItem3 = array(
        "功放"=>array("KTV功放", "会议功放", "AV功放", "HIFI功放", "2.0声道功放", "5.1声道功放"),
        "音箱"=>array("监听音箱", "卡包音箱", "会议音箱", "舞台音箱", "插卡音箱", "吉他", "贝司音箱", "苹果专用音箱",
            "HiFi音箱", "电脑音箱", "手机音箱", "低音炮", "蓝牙音箱", "便携式音箱", "广场舞音箱", "拉杆音箱", "多媒体音箱"),
        "家庭影院"=>array("立柱影院", "木箱影院", "电脑家庭影院", "套装家庭影院", "低音炮"),
        "imgs"=>array("shop-logo-31.png", "shop-logo-32.png", "shop-logo-33.png", "shop-logo-34.png", "shop-logo-35.png", "shop-logo-36.png", "shop-logo-37.png", "shop-logo-38.png")
    );
    $goodItem4 = array(
        "键盘"=>array("MIDI键盘", "编曲键盘", "合成器", "MIDI控制器"),
        "琴类"=>array("电钢琴", "电子琴"),
        "吉他"=>array("民谣吉他", "尤克里里", "电吉他", "古典吉他", "电箱吉他", "数字吉他", "电吉他效果器", "电箱吉他效果器",
            "吉他音箱", "校音器", "变调夹", "吉他录音套装"),
        "贝司"=>array("电贝司", "贝司效果器", "贝司音箱"),
        "鼓类"=>array("电子鼓", "架子鼓", "非洲鼓", "邦戈鼓", "箱鼓", "康佳鼓"),
        "imgs"=>array("shop-logo-41 (1).png", "shop-logo-41 (2).png", "shop-logo-41 (3).png", "shop-logo-41 (4).png", "shop-logo-41 (5).png", "shop-logo-41 (6).png", "shop-logo-41 (7).png", "shop-logo-41 (8).png")
    );
    $goodItem5 = array(
        "影视录音"=>array("录音机", "影视录音麦克风", "影视录音配件", "监听耳机", "平衡线", "HDMI线"),
        "KTV点歌机"=>array("一体式点歌机", "分体式点歌机", "桌面式点歌机", "落地式点歌机", "家庭KTV"),
        "KTV触摸屏"=>array("落地触摸屏", "桌面触摸屏", "19寸触摸屏", "22寸触摸屏", "触摸屏支架"),
        "播放器"=>array("音乐播放器", "DVD播放器"),
        "打碟机"=>array("便携式打碟机", "台式打碟机"),
        "imgs"=>array("shop-logo-51 (1).png", "shop-logo-51 (2).png", "shop-logo-51 (3).png", "shop-logo-51 (4).png", "shop-logo-51 (5).png", "shop-logo-51 (6).png", "shop-logo-51 (7).png", "shop-logo-51 (8).png")
    );
    $goodItem6 = array(
        "话放"=>array("模拟话放", "数字话放", "电子管话放", "单通道话放", "双通道话放", "带EQ话放", "带压缩话放"),
        "耳放"=>array("电子管耳放", "专业耳放", "HIFI耳放", "便携式耳放", "数字耳放", "模拟耳放", "单通道耳放", "双通道耳放", "多通道耳放"),
        "效果器"=>array("电吉他效果器", "电箱吉他效果器", "贝司效果器", "人声效果器", "演出效果器", "KTV效果器", "录音效果器", "混音器"),
        "imgs"=>array("shop-logo-61 (1).png", "shop-logo-61 (2).png", "shop-logo-61 (3).png", "shop-logo-61 (4).png", "shop-logo-61 (5).png", "shop-logo-61 (6).png", "shop-logo-61 (7).png", "shop-logo-61 (8).png")
    );
    $goodItem7 = array(
        "音响配件"=>array("音箱支架", "音响线材", "喇叭线", "HDMI线", "喇叭线香蕉头", "卡侬头/座", "转换头/座", "时序器", "工程机柜", "触摸屏支架"),
        "麦克风配件"=>array("麦克风支架", "麦克风线材", "麦克风夹子", "防风棉", "防噪网/防风屏", "防滑圈", "麦克风音头", 
            "防震架", "麦克风网头", "便携包/箱/盒", "供电器"),
        "乐器配件"=>array("吉他/贝司弦", "吉它线材", "MIDI线材", "拨片", "校音器/变调夹", "节拍器", "踏板", "鼓棒/鼓凳/琴凳", "吉他盒/包",
            "吉他背带", "效果器便携包", "卷弦器", "练习鼓垫", "指力训练器", "乐谱支架", "电子琴支架", "吉他支架"),
        "其它配件"=>array("摄像头", "补光灯", "耳机绕线器", "蓝牙设备", "电池", "耳机便携盒", "耳机线材", "耳机套/耳塞棉", "手机线材", 
            "USB数据线", "收藏品/纪念品", "手机转换器", "手机镜头", "手机支架"),
        "软件/教材"=>array("录音软件", "吉他教材"),
        "imgs"=>array("shop-logo-71 (1).png", "shop-logo-71 (2).png", "shop-logo-71 (3).png", "shop-logo-71 (4).png", "shop-logo-71 (5).png", "shop-logo-71 (6).png", "shop-logo-71 (7).png", "shop-logo-71 (8).png")
    );
    $goodListArr = array( $goodItem1, $goodItem2, $goodItem3, $goodItem4, $goodItem5, $goodItem6, $goodItem7);
    
    // 接收前台get方式提交的数据
    $index = $_POST["index"];

    echo json_encode( $goodListArr[$index] );




    
    

