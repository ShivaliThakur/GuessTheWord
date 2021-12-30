
    player1_name= localStorage.getItem("player1_name");
    player2_name= localStorage.getItem("player2_name");
    console.log(player1_name);
    console.log(player2_name);

    player1_score= 0;
    player2_score= 0;

    document.getElementById("player1_name").innerHTML=player1_name + ":";
    document.getElementById("player2_name").innerHTML=player2_name + ":";

    document.getElementById("player1_score").innerHTML= player1_score;
    document.getElementById("player2_score").innerHTML= player2_score;

    document.getElementById("player_question").innerHTML= "Question turn: " + player1_name;
    document.getElementById("player_answer").innerHTML= "Answer turn: " + player2_name;

    function send(){
        get_word= document.getElementById("input_box").value;
        document.getElementById("input_box").value= "";
        word= get_word.toLowerCase();
        console.log(word);

        CharAt1= word.charAt(1);
        console.log(CharAt1);

        length_minus_1= word.length-1;
        CharAt2= word.charAt(length_minus_1);
        console.log(CharAt2);

        length_divide_2= Math.floor(word.length/2);
        CharAt3= word.charAt(length_divide_2);
        console.log(CharAt3);

        remove_1= word.replace(CharAt1, "_ ");
        remove_2= remove_1.replace(CharAt2, "_ ");
        remove_3= remove_2.replace(CharAt3, "_ ");
        console.log(remove_3);

        get_question= "<h3 id='question'>" + remove_3 + "</h3>";
        input_box= "<br> Answer: <input type='text' id='input_answer' >";
        button= "<br> <br> <button class= 'btn btn-info'  onclick='check()'> Check </button>" ;
        row= get_question + input_box + button;
        document.getElementById("output").innerHTML= row;
       


    }

    question_turn= "player1";
    answer_turn= "player2";
     function check(){
        document.getElementById("input_box").innerHTML= " ";
         get_answer= document.getElementById("input_answer").value;
         answer= get_answer.toLowerCase();
         

         if (answer == word){
             if (answer_turn=="player1"){
            player1_score= player1_score + 1;
            document.getElementById("player1_score").innerHTML= player1_score;
             }

             else{
                 player2_score= player2_score+1;
                 document.getElementById("player2_score").innerHTML= player2_score;
             }
             document.getElementById("output").innerHTML=" ";
         }
         if (answer !== word){
             
            if (answer_turn=="player1"){
                player2_score= player2_score+1;
                document.getElementById("player2_score").innerHTML= player2_score;
            }

            else{
                player1_score= player1_score + 1;
                document.getElementById("player1_score").innerHTML= player1_score;
                
            }
            right_answer= "<label> The Right Answer Was " + word + ". </label>";
             document.getElementById("output").innerHTML= right_answer;
        }

         if (question_turn=="player1"){
             question_turn= "player2";
             document.getElementById("player_question").innerHTML= "Question Turn :" + player2_name;
         }
         else{
             question_turn= "player1";
             document.getElementById("player_question").innerHTML= "Question Turn :" + player1_name;
         }

         if(answer_turn == "player1"){
         answer_turn= "player2";
         document.getElementById("player_answer").innerHTML= "Answer Turn :" + player2_name;
         }

         else{
             answer_turn="player1";
             document.getElementById("player_answer").innerHTML= "Answer Turn :" + player1_name;
         }
        
     }


