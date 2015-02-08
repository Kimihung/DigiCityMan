var map;
  require(["esri/map", "dojo/domReady!"], function(Map) { 
    map = new Map("map", {
      center: [-56.049, 38.485],
      zoom: 3,
      basemap: "streets"
    });
});
$(function(){
  for(var i=1;i<6;i++){
    var style = $("<style>@-webkit-keyframes liOpen"+i+"{"+
    "0%{"+
      "-webkit-transform: rotate(67deg) skew(44deg);"+
    "}"+
    "50%{"+
      "-webkit-transform: rotate(67deg) skew(44deg);"+
    "}"+
    "100%{"+
      "-webkit-transform: rotate("+((-30)+48.5*(i-1))+"deg) skew(44deg);"+
    "}"+
  "}"+
  "@-webkit-keyframes aOpen"+i+"{"+
    "0%{"+
      "-webkit-transform: skew(-44deg) rotate("+(-((-67)+48.5*(i-1)))+"deg);"+
    "}"+
    "50%{"+
      "-webkit-transform: skew(-44deg) rotate("+(-((-67)+48.5*(i-1)))+"deg);"+
    "}"+
    "100%{"+
      "-webkit-transform: skew(-44deg) rotate(-67deg);"+
    "}"+
  "}"+
  "@-webkit-keyframes liClose"+i+"{"+
    "0%{"+
      "-webkit-transform: rotate("+((-30)+48.5*(i-1))+"deg) skew(44deg);"+
    "}"+
    "50%{"+
      "-webkit-transform: rotate(67deg) skew(44deg);"+
    "}"+
    "100%{"+
      "-webkit-transform: rotate(67deg) skew(44deg);"+
    "}"+
  "}"+
  "@-webkit-keyframes aClose"+i+"{"+
    "0%{"+
      "-webkit-transform: skew(-44deg) rotate("+(-((-67)+48.5*(i-1)))+"deg);"+
    "}"+
    "50%{"+
      "-webkit-transform: skew(-44deg) rotate("+(-((-67)+48.5*(i-1)))+"deg);"+
    "}"+
    "100%{"+
      "-webkit-transform: skew(-44deg) rotate(-67deg);"+
    "}"+
  "}</style>")
    $('html > head').append(style);
  }
  

  $("#button").hover(
    function(){
      $("#cn-wrapper").css("-webkit-transform","scale(1)");
      $("#cn-wrapper").css("-webkit-transition","-webkit-transform .3s ease-in-out");

      for(var i = 1;i<6;i++){
        $("#cn-wrapper li:nth-child("+i+")").css("-webkit-animation","liOpen"+i+" .6s ease-out");
        $("#cn-wrapper li:nth-child("+i+") a").css("-webkit-animation","aOpen"+i+" .6s ease-out");
        $("#cn-wrapper li:nth-child("+i+")").css("webkit-transform","rotate("+((-30)+48.5*(i-1))+"deg) skew(44deg)");
        $("#cn-wrapper li:nth-child("+i+") a").css("webkit-transform","skew(-44deg) rotate(-67deg)");
      }

    },
    null)
  $("#cn-wrapper").hover(
    null,function(){
      $(this).css("-webkit-transform","scale(0)");
      $("#cn-wrapper").css("-webkit-transition","-webkit-transform .3s ease-in-out .3s");

      for(var i = 1;i<6;i++){
        $("#cn-wrapper li:nth-child("+i+")").css("-webkit-animation","liClose"+i+" .6s ease-out");
        $("#cn-wrapper li:nth-child("+i+") a").css("-webkit-animation","aClose"+i+" .6s ease-out");
      }      
    })
})