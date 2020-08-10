
function check(){
    var score = 0

    // Quiz1
    var right_answer_1 = document.getElementById("right_answer_1")
    var q1_opt1 = document.getElementById("q1_opt1")
    var q1_opt2 = document.getElementById("q1_opt2")
    var q1_opt3 = document.getElementById("q1_opt3")

    if(right_answer_1.checked == true){
        score = score+4
    }
    
    // Quiz2
    var right_answer_2 =   document.getElementById("right_answer_2")
    var q2_opt1 = document.getElementById("q2_opt1")
    var q2_opt2 = document.getElementById("q2_opt2")
    var q2_opt3 = document.getElementById("q2_opt3")

    if(right_answer_2.checked == true){
        score = score+4
    }

    // Quiz3
    var right_answer_3 =   document.getElementById("right_answer_3")
    var q3_opt1 = document.getElementById("q3_opt1")
    var q3_opt2 = document.getElementById("q3_opt2")
    var q3_opt3 = document.getElementById("q3_opt3")

    if(right_answer_3.checked == true){
        score = score+4
    }

    // Quiz4
    var right_answer_4 =   document.getElementById("right_answer_4")
    var q4_opt1 = document.getElementById("q4_opt1")
    var q4_opt2 = document.getElementById("q4_opt2")
    var q4_opt3 = document.getElementById("q4_opt3")

    if(right_answer_4.checked == true){
        score = score+4
    }
  
    // Quiz5
    var right_answer_5 =   document.getElementById("right_answer_5")
    var q5_opt1 = document.getElementById("q5_opt1")
    var q5_opt2 = document.getElementById("q5_opt2")
    var q5_opt3 = document.getElementById("q5_opt3")

    if(right_answer_5.checked == true){
        score = score+4
    }
    return score
}



function result(){
    var scr = check()
    var percentage = scr/20*100

    
    alert("You have availed "+scr+" scores \n Your percentage is "+percentage+"%")

}