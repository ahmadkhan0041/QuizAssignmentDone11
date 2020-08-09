function checked() {
    var score = 0;
    var right_answer_1 = document.getElementById('q1')
    var q1_answer_2 = document.getElementById('q2')
    var q1_answer_3 = document.getElementById('q3')
    var q1_answer_4 = document.getElementById('q4')
    if (right_answer_1.checked == true) {
        score++
        alert('Q1 Yeah Your Answer is Right')
    } else {
        alert('Q1 Sorry Your Answer is Wrong Please Try Again')
    }

    var right_answer_2 = document.getElementById('Q2')
    var q2_answer_2 = document.getElementById('Q1')
    var q3_answer_2 = document.getElementById('Q3')
    var q4_answer_2 = document.getElementById('Q4')
    if (right_answer_2.checked == true) {
        score++
        alert('Q2:- Yeah Your Answer is Right')
    } else {
        alert('Q2 Sorry Your Answer is Wrong Please Try Again')
    }

    var right_answer_3 = document.getElementById('qu1')
    var q5_answer_2 = document.getElementById('qu2')
    var q6_answer_2 = document.getElementById('qu3')
    var q7_answer_2 = document.getElementById('qu4')
    if (right_answer_3.checked == true) {
        score++
        alert('Q3 Yeah Your Answer is Right')
    } else {
        alert('Q3 Sorry Your Answer is Wrong Please Try Again')
    }

    var right_answer_4 = document.getElementById('qe1')
    var q5_answer_2 = document.getElementById('qe2')
    var q6_answer_2 = document.getElementById('qe3')
    var q7_answer_2 = document.getElementById('qe4')
    if (right_answer_3.checked == true) {
        score++
        alert('Q4 Yeah Your Answer is Right')
    } else {
        alert('Q4 Sorry Your Answer is Wrong Please Try Again')
    }
}