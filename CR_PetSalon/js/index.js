$(function(){
    'use strinct';

    var arrayImges = ["img/catdog.jpg", "img/perrito.jpg"];

    var x=0;

    $("#back").on("click",function(){
        x--;

        if(x<0)
            x=arrayImges.length-1;

        $("#imgRotate").hide().attr("src",arrayImges[x] ).fadeIn();

    });


    $("#next").on("click",function(){
        x++;

        if(x>arrayImges.length-1)
            x=0;

        $("#imgRotate").hide().attr("src",arrayImges[x] ).fadeIn();

    });


});