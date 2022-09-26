$(document).ready(function () {
    // alert("Hello");
var commentCounter=$(".comment-box");
var counterLength =commentCounter.length
$(".notification-no").text(counterLength);

// mark all as read
$("#mark-all").on("click", function(){
    $("div#comment-row").css("background-color", "#fff");
    $("div#comment-row").removeClass("comment-box");
    $(".notification-no").text($(".comment-box").length);
    
});


// read each
console.log(counterLength);
for (var i=0; i<counterLength; i++){
    console.log("hello" + i);
        var box=$("div#comment-row");
    $(box[i]).on("click", function(){
        $(this).css("background-color", "#fff");
        $(this).removeClass("comment-box");
        $(".notification-no").text($(".comment-box").length);
    });
}

});