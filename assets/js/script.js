   var wins = 0;
   var losses=0;
   var ties=0;

document.getElementById("playBtn").onclick = function() {
   var myChoiceQuestion = document.getElementById("userChoice").value;
  console.log(myChoiceQuestion);
  

   

    const choices = ["R", "P", "S"];
    var compChoice = choices[Math.floor(Math.random() * choices.length)];

    

    if (myChoiceQuestion == "R"){
        document.getElementById("rock").style.display = "block";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("p1").style.display = "none";
    }
    if (myChoiceQuestion == "S"){
        document.getElementById("scissors").style.display = "block";
        document.getElementById("rock").style.display = "none";
        document.getElementById("p1").style.display = "none";
    }

    if (myChoiceQuestion == "P"){
        document.getElementById("p1").style.display = "block";
        document.getElementById("scissors").style.display = "none";
        document.getElementById("rock").style.display = "none";
    }

    // comp choises
    if (compChoice == "R"){
        document.getElementById("comp-rock").style.display = "block";
        document.getElementById("comp-scissors").style.display = "none";
        document.getElementById("comp-p1").style.display = "none";
    }
    if (compChoice == "S"){
        document.getElementById("comp-scissors").style.display = "block";
        document.getElementById("comp-rock").style.display = "none";
        document.getElementById("comp-p1").style.display = "none";
    }

    if (compChoice == "P"){
        document.getElementById("comp-p1").style.display = "block";
        document.getElementById("comp-scissors").style.display = "none";
        document.getElementById("comp-rock").style.display = "none";
    }

    if (myChoiceQuestion == compChoice){
        ties++;
        console.log("tie");
        document.getElementById("theResult").style.color = "orange";
        document.getElementById("theResult").style.fontSize = "2rem";
        document.getElementById("theResult").innerHTML = "Tie!";
    }else if (myChoiceQuestion == "R" && compChoice == choices[1] || myChoiceQuestion == "P" && compChoice == choices[2] || myChoiceQuestion == "S" && compChoice == choices[0] ){
        losses++;
        console.log("loss");
        document.getElementById("theResult").style.color = "red";
        document.getElementById("theResult").style.fontSize = "2rem";
        document.getElementById("theResult").innerHTML = "You Lose!";
      
    }else if(myChoiceQuestion == "") {
         ties = ties;
         wins = wins;
         losses = losses;

    }            
    
    else {
        wins++;
        document.getElementById("theResult").style.color = "blue";
        document.getElementById("theResult").style.fontSize = "2rem";
        document.getElementById("theResult").innerHTML = "You Win!"
        console.log("Win");
        
    
    }
    
    
    console.log("ties: " + ties);
    console.log("wins: " + wins);
    console.log("losses:" +  losses);

    document.getElementById("thewins").style.fontSize = "2rem";
    document.getElementById("thewins").innerHTML = "Wins: " + wins;
    document.getElementById("thewins").style.margin = "5px";
    document.getElementById("theties").innerHTML = "Ties: " + ties;
    document.getElementById("theties").style.fontSize = "2rem";
    document.getElementById("theties").style.margin = "5px";
    document.getElementById("thelosses").style.margin = "5px";
    document.getElementById("thelosses").innerHTML = "Losses: " + losses;
    document.getElementById("thelosses").style.fontSize = "2rem";
   
}