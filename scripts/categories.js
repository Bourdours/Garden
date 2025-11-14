$(document).ready(function(){

    $("#tout").addClass("choix");

    $("#jardins").click(function(){
        $(".tout").hide();
        $(".jardins").show();
        $("#tout, #forets").removeClass("choix");
        $("#jardins").addClass("choix");
    })

    $("#forets").click(function(){
        $(".tout").hide();
        $(".forets").show();
        $("#tout, #jardins").removeClass("choix");
        $("#forets").addClass("choix");
    })

    $("#tout").click(function(){
        $(".tout, .jardins, .forets").show();
        $("#tout").addClass("choix");
        $("#jardins, #forets").removeClass("choix");
    })
})

