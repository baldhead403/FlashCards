function fcards() {
    

 
    $('#answerButton').click(function () {
        document.getElementById('answer').style.display="none"
        document.getElementById('flip-card-back').innerHTML= answer
    });

    $('#hintButton').click(function () {
       $("hint").show().val()

    });

    $('#qaButton').click(function () {
        $("#modal").show()
        
    });
    $("#clear").click(function () {
        document.getElementById("mquest").innerHTML = ""
        document.getElementById("mhint").innerHTML = ""
        document.getElementById("manswer").innerHTML = ""
        
    })

}











