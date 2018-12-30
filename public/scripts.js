$(".question").show()
$(".hint").hide()
$(".answer").hide()
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

$("#backButton").click(function () {
    $(".flip-card-back").slideUp(-100)
    $(".flip-card-front").slideDown(200)
    $(".question").show()
});

$(".returnB").click(function () {
    $(".modal").hide()
    $(".question").show()
    
});



$("#triviaB").click(function () {
    $(".modal").show()
});

function updateDB() {
    
    $(".updateMe").click(function (id) {
        let id= req.body._id
        console.log(id)
        $.ajax({
            url:"/triviaflash",
            type: "PUT",
            
            data: {"id":_id},
            success: function (data) {
                $(".question").val(data[i].question)
                $(".hint").val(data[i].hint)
                $(".answer").val(data[i].answer)
            }
        })
    })
}
$(".updateM").click(function () {
    $(".modal2").show()
    $(".modal3").hide()
    $(".modal").hide()
})

$(".updateMe").click(function () {
    $(".question").show()
    updateDB()
    $(".modal2").hide()
    $(".modal3").hide()
    $(".modal").hide()
})
function deleteDB() {
   $(".deleteMe").click(function () {
    $(".modal3").hide()
    $(".modal2").hide()
    $(".modal").hide()
    $(".question").show()

    $.ajax({
        url:"/triviaflash",
        type: "DELETE",
        success:function (data) {
            $(".question").html("")
            $(".hint").html("")
            $(".answer").html("")
        }
    })

}) 
}

$(".deleteM").click(function () {
    deleteDB()
    $(".modal3").show()
    $(".modal2").hide()
    $(".modal").hide()
})

