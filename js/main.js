var map;
  require(["esri/map", "dojo/domReady!"], function(Map) { 
    map = new Map("map", {
      center: [-560.049, 38.485],
      zoom: 5,
      basemap: "streets"
    });
});
$(function () {
    for (var i = 1; i < 5; i++) {
        var sectorStyle = $("<style>@-webkit-keyframes liOpen" + i + "{" +
        "0%{" +
        "-webkit-transform: rotate(0deg) skew(45deg);" +
        "}" +
        "50%{" +
        "-webkit-transform: rotate(0deg) skew(45deg);" +
        "}" +
        "100%{" +
        "-webkit-transform: rotate(" + ((-45) * i) + "deg) skew(45deg);" +
        "}" +
        "}" +
        "@-webkit-keyframes aOpen" + i + "{" +
        "0%{" +
        "-webkit-transform: skew(-45deg) rotate(0deg);" +
        "}" +
        "50%{" +
        "-webkit-transform: skew(-45deg) rotate(0deg);" +
        "}" +
        "100%{" +
        "-webkit-transform: skew(-45deg) rotate(" + (45 * i - 112.5 - 45 * (i - 1)) + "deg);" +
        "}" +
        "}" +
        "@-webkit-keyframes liClose" + i + "{" +
        "0%{" +
        "-webkit-transform: rotate(" + ((-45) * i) + "deg) skew(45deg);" +
        "}" +
        "50%{" +
        "-webkit-transform: rotate(0deg) skew(45deg);" +
        "}" +
        "100%{" +
        "-webkit-transform: rotate(0deg) skew(45deg);" +
        "}" +
        "}" +
        "@-webkit-keyframes aClose" + i + "{" +
        "0%{" +
        "-webkit-transform: skew(-45deg) rotate(" + (45 * i - 112.5 - 45 * (i - 1)) + "deg);" +
        "}" +
        "50%{" +
        "-webkit-transform: skew(-45deg) rotate(0deg);" +
        "}" +
        "100%{" +
        "-webkit-transform: skew(-45deg) rotate(0deg);" +
        "}" +
        "}</style>")
        $('html > head').append(sectorStyle);
    }
    var fontStyle = $("<style>@-webkit-keyframes switchOn {" +
    "from {" +
    "color: #BBB;" +
    "text-shadow: 0 0 10px #fff," +
    "0 0 20px  #fff," +
    "0 0 30px  #fff," +
    "0 0 40px  #228DFF," +
    "0 0 70px  #228DFF," +
    "0 0 80px  #228DFF," +
    "0 0 100px #228DFF," +
    "0 0 150px #228DFF;" +
    "}" +
    "to {" +
    "color: #FFF;" +
    "text-shadow: 0 0 5px #fff," +
    "0 0 10px #fff," +
    "0 0 15px #fff," +
    "0 0 20px #228DFF," +
    "0 0 35px #228DFF," +
    "0 0 40px #228DFF," +
    "0 0 50px #228DFF," +
    "0 0 75px #228DFF;" +
    "}" +
    "}" +
    "@-webkit-keyframes switchOff {" +
    "from {" +
    "color: #FFF;" +
    "text-shadow: 0 0 5px #fff," +
    "0 0 10px #fff," +
    "0 0 15px #fff," +
    "0 0 20px #228DFF," +
    "0 0 35px #228DFF," +
    "0 0 40px #228DFF," +
    "0 0 50px #228DFF," +
    "0 0 75px #228DFF;" +
    "}" +
    "to {" +
    "color: #BBB;" +
    "text-shadow: 0 0 10px #fff," +
    "0 0 20px  #fff," +
    "0 0 30px  #fff," +
    "0 0 40px  #228DFF," +
    "0 0 70px  #228DFF," +
    "0 0 80px  #228DFF," +
    "0 0 100px #228DFF," +
    "0 0 150px #228DFF;" +
    "}" +

    "}</style>");

    $('html > head').append(fontStyle);

    $("#slide").css("top",$("#map").height() / 2 - 40);

    var bSwitch = false; //开关的状态
    $("#switch").click(
        function () {
            var $switch_i = $("#switch i");

            if (!bSwitch) {
                $switch_i.css("-webkit-animation", "switchOn 0.6s ease-in-out alternate");
                $switch_i.css("color", "#FFF");
                $switch_i.css("text-shadow", "0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #228DFF,0 0 35px #228DFF,0 0 40px #228DFF,0 0 50px #228DFF,0 0 75px #228DFF");
                $("#clock").css("-webkit-animation", "switchOn 0.6s ease-in-out alternate");
                $("#clock").css("color", "#FFF");
                $("#clock").css("text-shadow", "0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #228DFF,0 0 35px #228DFF,0 0 40px #228DFF,0 0 50px #228DFF,0 0 75px #228DFF");
                setTimeout(function(){
                    $("#sideBarBottomCover_leftShadow").css("box-shadow","0px -5px 5px #222");
                    $("#sideBarBottomCover_rightShadow").css("box-shadow","0px -5px 5px #222");
                    $("#sideBarBottomCover_circleShadow").css("box-shadow","0px -5px 5px #222 inset");
                },50);
                
                $("#sideBarBottomCover").css("-webkit-transform", "translate(0px,300px)");
                $("#cn-wrapper").css("-webkit-transform", "scale(1)");
                $("#cn-wrapper").css("-webkit-transition", "-webkit-transform .3s ease-in-out");
                for (var i = 1; i < 5; i++) {
                    $("#cn-wrapper li:nth-child(" + i + ")").css("-webkit-animation", "liOpen" + i + " .6s ease-out");
                    $("#cn-wrapper li:nth-child(" + i + ") a").css("-webkit-animation", "aOpen" + i + " .6s ease-out");
                    $("#cn-wrapper li:nth-child(" + i + ")").css("-webkit-transform", "rotate(" + ((-45) * i) + "deg) skew(45deg)");
                    $("#cn-wrapper li:nth-child(" + i + ") a").css("-webkit-transform", "skew(-45deg) rotate(" + (45 * i - 112.5 - 45 * (i - 1)) + "deg) ");
                }
                bSwitch = true;
            } else {
                $switch_i.css("-webkit-animation", "switchOff 0.6s ease-in-out alternate");
                $switch_i.css("color", "#666");
                $switch_i.css("text-shadow", "-1px 0 #333,0 -1px #333,1px 0 #fff,0 1px #fff");
                $("#clock").css("-webkit-animation", "switchOff 0.6s ease-in-out alternate");
                $("#clock").css("color", "#666");
                $("#clock").css("text-shadow", "none");
                $("#switch").css("-webkit-transform", "rotate(0deg)");
                setTimeout(function () {
                    $("#sideBarBottomCover_leftShadow").css("box-shadow","none");
                    $("#sideBarBottomCover_rightShadow").css("box-shadow","none");
                    $("#sideBarBottomCover_circleShadow").css("box-shadow","none");
                }, 590);
                $("#sideBarBottomCover").css("-webkit-transform", "translate(0px,0px)");
                $("#cn-wrapper").css("-webkit-transform", "scale(0)");
                $("#cn-wrapper").css("-webkit-transition", "-webkit-transform .3s ease-in-out .3s");
                for (var i = 1; i < 5; i++) {
                    $("#cn-wrapper li:nth-child(" + i + ")").css("-webkit-animation", "liClose" + i + " .6s ease-out");
                    $("#cn-wrapper li:nth-child(" + i + ") a").css("-webkit-animation", "aClose" + i + " .6s ease-out");
                    $("#cn-wrapper li:nth-child(" + i + ")").css("-webkit-transform", "-webkit-transform: rotate(0deg) skew(45deg)");
                    $("#cn-wrapper li:nth-child(" + i + ") a").css("-webkit-transform", "-webkit-transform: skew(-45deg) rotate(0deg)");
                }
                bSwitch = false;
            }
        }
    )

    $("#cn-wrapper li a i").hover(function () {
            var $li_clicked = $(this).parent().parent();
            var index = $li_clicked.index();
            $("#switch").css("-webkit-transform", "rotate(" + (-112.5 - index * 45) + "deg)");
            var $this = $(this);
            $this.css("-webkit-animation", "switchOn 0.6s ease-in-out alternate");
            $this.css("color", "#FFF");
            $this.css("text-shadow", "0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #228DFF,0 0 35px #228DFF,0 0 40px #228DFF,0 0 50px #228DFF,0 0 75px #228DFF");
        },
        function () {
            var $this = $(this);
            $this.css("-webkit-animation", "switchOff 0.2s ease-in-out alternate");
            $this.css("color", "#BBB");
            $this.css("text-shadow", "0px -5px 5px #000");
        }
    );

    $("#slideArrow").hover(function(){
        $(this).css("border-right-color","#FFF");
    },function(){
        $(this).css("border-right-color","#DDD");
    });

    var bSlided = false;
    $("#slideArrow").click(function(){
        if (!bSlided) {
            // $("#sideBar").css("-webkit-transform","translateX(-300px)");
            // setTimeout(function(){
            //     $("#slideArrow").css("-webkit-transform","rotate(180deg)");
            // },500);
            // bSlided = true;
            $("#sideBar").animate({
                left: "-300px"
            },600,function(){
                $("#slideArrow").css("-webkit-transform","rotate(180deg)");
                bSlided = true;
            });
        } else {
            // $("#sideBar").css("-webkit-transform","translateX(0px)");
            // setTimeout(function(){
            //     $("#slideArrow").css("-webkit-transform","rotate(0deg)");
            // },500);
            // bSlided = false;
            $("#sideBar").animate({
                left: "0px"
            },600,function(){
                $("#slideArrow").css("-webkit-transform","rotate(0deg)");
                bSlided = false;
            });
        }

    });
})