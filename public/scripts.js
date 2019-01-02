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
            $(".ID").html(data[i]._id)
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

function updateDB(data) {
    
        $.ajax({
            type: "POST",
            url:"/update",
            
            data: {"id":_id},
            success: function (data) {

            },
        })
        
        console.log(data)
   
}

$(".updateM").click(function () {
    $(".modal2").show()
    $(".modal3").hide()
    $(".modal").hide()
})


function deleteDB(data) {
   
    $.ajax({
        type: "POST",
        url:"/delete",
        data:{"id":_id},
        success:function (data) {
            
        }
    })


}

$(".deleteM").click(function () {
  
    $(".modal3").show()
    $(".modal2").hide()
    $(".modal").hide()
})

