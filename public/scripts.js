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
        $(".flip-card-back").slideDown(200)
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
$(".updateM").click(function () {
    updateDB()
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
function updateDB() {
    let changeQ = $(".mquest").val()
    let changeH = $(".mhint").val()
    let changeA = $(".manswer").val()

    $.ajax({
        type: "PUT",
        url: '/flashdata/update/'+ $(this).data('mquest') + $(this).data('mhint') + $(this).data('manswer'),
        data: {flashdata_question: changeQ, flashdata_hint: changeH, flashdata_answer: changeA}
    }).done(function (res) {
        console.log(res);
        window.location.replace('http://localhost:8080');
        
    })
}