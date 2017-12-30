$(function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $( "#opener" ).click(function() {
        $( "#dialog" ).dialog( "open" );
    });

    $("#sure").click(function () {
        $( "#dialog" ).dialog( "close" );
    });

    $("#preview").click(function () {
        var res = $("#preview").html();
        if(res === "预览") {
            $("#preview").html("编辑");
        }else
            $("#preview").html("预览");
        $("#opener").toggleClass("click");
        $(".btnDel").toggleClass("click");
    })
});
$(function() {
    $('.selectpicker').selectpicker({
        style: 'btn-success',
        size: 10
    });
});

var blockNum=10;
$(document).ready(function() {
    var parentDom = $('#father').find("form"), oriDom = parentDom.children(":first");
    $('#sure').click(function () {
        var clLength = parentDom.children().length;
        if (blockNum > clLength) {
            var nowDom = oriDom.clone();
            var field = $("#hourEnd").val();
            nowDom.children(":first").text(field);
            parentDom.append(nowDom);
        }
        else return false;
    });
});