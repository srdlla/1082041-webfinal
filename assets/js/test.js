$(function () {
    let currentQuiz = null;
    let count = null;
    let score = null;
     $("#startButton").on("click",function(){
         // console.log("Hello");
         if(currentQuiz == null){
            $("#food_image").attr("src",imageURL_Array[5]);
             currentQuiz = 0;
             $("#question").text(questions[0].question);
             $("#options").empty();
             questions[0].answers.forEach(function(element, index, array){
                 $("#options").append(
                     `<input name='options' id='${count}' type='radio' value='${index}'><label for='${count}'>${element[0]}</label><br>`
                 );
                 count=count+1;
             });
             $("#startButton").attr("value","下一題");
         }else{
             $.each($(":radio"),function(i, val){
                 //console.log(i + " : " + val.checked);
                 if(i==0 && val.checked==true){
                    score = score+2;
                 }
                 if(i==1 && val.checked==true){
                    score = score+1;
                 }

                 //console.log("score: "+score);
                 if(val.checked){
                     if(isNaN(questions[currentQuiz].answers[i][1])){
                         //A,B,C,D,E
                         let finalResult = null;
                         if(score>=0&&score<4){
                            finalResult = "A";
                            $("#food_image").attr("src",imageURL_Array[0]);
                         }
                         if(score>3&&score<9){
                            finalResult = "B";
                            $("#food_image").attr("src",imageURL_Array[1]);
                         }
                         if(score>8&&score<13){
                            finalResult = "C";
                            $("#food_image").attr("src",imageURL_Array[2]);
                         }
                         if(score>12&&score<17){
                            finalResult = "D";
                            $("#food_image").attr("src",imageURL_Array[3]);
                         }
                         if(score>16&&score<=20){
                            finalResult = "E";
                            $("#food_image").attr("src",imageURL_Array[4]);
                         }
                         //let finalResult = questions[currentQuiz].answers[i][1];
                         $("#question").text(finalAnswers[finalResult][0]);
                         $("#options").empty();
                         $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                         currentQuiz = null;
                         count=null;
                         score=null;
                         $("#startButton").attr("value", "重新開始");
                     }else{
                         //go to questions[x]
                         currentQuiz = questions[currentQuiz].answers[i][1] - 1;
                         $("#question").text(questions[currentQuiz].question);
                         $("#options").empty();
                         questions[currentQuiz].answers.forEach(function (element, index, array) {
                            $("#options").append(
                                `<input name='options' id='${count}' type='radio' value='${index}'><label for='${count}'>${element[0]}</label><br>`
                            );
                            count=count+1;
                         });
                     }
                     return false;
                 }
             });
         }
     });
 });