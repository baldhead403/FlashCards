let i = 0 
function nextQ(data) {
$.ajax(
    {
        type:"GET",
        url:"/flashdata",
        success: function (data) {    
            if (i <= data.length) {
                
                i++
            }
            if (i >= data.length) {

                i = 0
            }
            $(".question").html(data[i].question)
            $(".hint").html(data[i].hint)
            $(".answer").html(data[i].answer)
    },    
    })
}
$(".hint").hide()
$(".answer").hide()
    
$('#answerButton').click(function () {
    $(".flip-card-front").slideUp(-100)
        $(".flip-card-back").slideDown(300)
        $(".answer").show()
});

$('#hintButton').click(function () {
        $(".hint").show()
    
});
$('#hintButton').dblclick(function () {
    $(".hint").hide()
    
});
$("#new").click(function () {
    nextQ()
})

$(".returnB").click(function () {
    $(".modal").hide()
    $(".question").show()
    
});

$("#backButton").click(function () {
    $(".flip-card-back").slideUp(-100)
    $(".flip-card-front").slideDown(200)
    $(".question").show()
});

$("#triviaB").click(function () {
    $(".modal").show()
});
