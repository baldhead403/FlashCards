
   function display() {
       $(".hint").hide()
        $(".answer").hide()
       
       $.ajax(
           {
               type:"GET",
               url:"/flashdata",
               success: function (data) {
                   disQuestion(data)
                },
                error:function(error)    
                {
                    console.log(error)
                },  
            }
             )
        } 
    display()
    
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
       let i = Math.floor(Math.random())
    //    $(".question").html(data[i].question)
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

    let i = 0
    function disQuestion(data) {
        if (i <= data.length) {
            
            i++
        }
            $(".question").html(data[i].question)
            $(".hint").html(data[i].hint)
            $(".answer").html(data[i].answer)
        if (i >= data.length) {
            i = 0
        }
    }
