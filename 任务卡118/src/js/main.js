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