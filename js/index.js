//$(document).ready(function(){
//    $(window).resize(function()
//    {
//    //    window.location.reload(false);
//        if (window.RT)
//            clearTimeout(window.RT);
//        window.RT = setTimeout(function()
//                              {
//            this.location.reload(false);
//        }, 200);
//    });
//});
//var a = $(window).height();
//var y = a * 2;
//var z = a * 3;
//var f = a - 65;
//var b = y - 65;
//var d = z - 65;
//
//$(window).scroll(function()
//                {
//          if ($(window).scrollTop() <  a)  
//                    {
//                        window.setTimeout(function(){
//                        $("#header").addClass("hhh");
//                        $("#header").removeClass("c1");
//                        $("#header").removeClass("c2");},0.5);
//                    };
//                });
//
//$(window).scroll(function()
//                {
//          if ($(window).scrollTop() >=  f)  
//                    {
//                        window.setTimeout(function(){
//                        $("#header").removeClass("hhh");
//                        $("#header").removeClass("c2");
//                        $("#header").addClass("c1");},0.5);
//                    };
//                });
//
//$(window).scroll(function()
//                {
//          if ($(window).scrollTop() >=  b)  
//                    {
//                        window.setTimeout(function(){
//                        $("#header").removeClass("hhh");
//                        $("#header").removeClass("c1");
//                        $("#header").addClass("c2");},0.5);
//                    };
//                });
//
//$(window).scroll(function()
//                {
//          if ($(window).scrollTop() >=  d)  
//                    {
//                        window.setTimeout(function(){
//                        $("#header").removeClass("hhh");
//                        $("#header").removeClass("c2");
//                        $("#header").addClass("c1");},0.5);
//                    };
//                });
//
//$("#aussie").click(function(event) {
//              event.preventDefault();
//               $('html, body').animate({
//            scrollTop: $("#div1").offset().top -0.000000000000000001
//        }, 400);
//    }); 
//$("#home").click(function(event) {
//              event.preventDefault();
//               $('html, body').animate({
//            scrollTop: $("#div2").offset().top -0.000000000000000001
//        }, 400);
//    }); 
//$("#about").click(function(event) {
//          event.preventDefault();
//           $('html, body').animate({
//        scrollTop: $("#div3").offset().top -0.000000000000000001
//    }, 400);
//}); 
//$("#contact").click(function(event) {
//              event.preventDefault();
//               $('html, body').animate({
//            scrollTop: $("#div4").offset().top -0.000000000000000001
//        }, 400);
//    }); 

//function ajaxcall()
//{
$(document).ready(function(){
    $.ajax({
        method:'GET',
        url:'gettime.php',
        success: function(data){
//            $("")
//            data = data.split(':');
            $('#hours').text(data);
//            $('#minutes').html(data[1]);
//            $('#seconds').html(data[2]);
        }
    });
});

//$(document).ready(function(){
//    $.get("gettime.php", function(data){
//            alert(data);
////            data = data.split(':');
////            $('#hours').html(data[0]);
////            $('#minutes').html(data[1]);
////            $('#seconds').html(data[2]);
//        });
//    });
//}