let xTurn = true;

function changeMark(buttonId) {

    let currentMark = document.getElementById(buttonId).innerHTML;

    if (!currentMark) {
        if (xTurn) {

            document.getElementById(buttonId).innerHTML = "X";
            // TODO: Set X color
            document.getElementById(buttonId).style.color = "rgb(255, 37, 4)";
            document.getElementById(buttonId).classList.add("x-mark");
            document.getElementById(buttonId).classList.remove("o-mark");



        } else {

            document.getElementById(buttonId).innerHTML = "O";

            // TODO: Set O color
            document.getElementById(buttonId).style.color = "rgb(102, 51, 153)";
            document.getElementById(buttonId).classList.add("o-mark");
            document.getElementById(buttonId).classList.remove("x-mark");


        }

        xTurn = !xTurn;
        checkWin();
    }



}

function resetGame() {

    document.getElementById("a1").innerHTML = ""; 
    document.getElementById("b1").innerHTML = ""; 
    document.getElementById("c1").innerHTML = "";

    // TODO: Clear the remaining buttons
    
    document.getElementById("a2").innerHTML = ""; 
    document.getElementById("b2").innerHTML = ""; 
    document.getElementById("c2").innerHTML = "";
    
    document.getElementById("a3").innerHTML = ""; 
    document.getElementById("b3").innerHTML = ""; 
    document.getElementById("c3").innerHTML = "";
    
    document.getElementById("Winner").innerHTML = "";


}

function checkWin() {

    let a1 = document.getElementById("a1").innerHTML; 
    let b1 = document.getElementById("b1").innerHTML; 
    let c1 = document.getElementById("c1").innerHTML; 
    // TODO: Retrieve the marks from the remaining buttons
    
    let a2 = document.getElementById("a2").innerHTML; 
    let b2 = document.getElementById("b2").innerHTML; 
    let c2 = document.getElementById("c2").innerHTML;
    
    let a3 = document.getElementById("a3").innerHTML; 
    let b3 = document.getElementById("b3").innerHTML; 
    let c3 = document.getElementById("c3").innerHTML; 
    
    if (a1 == b1 && b1 == c1 && a1 == "X") {
        // TODO: Inform the player that X wins on the page 
        document.getElementById("Winner").innerHTML = "Player X wins the game! &#128540;"; 
        return;
    }else if(a2 == b2 && b2 == c2 && a2 == "X"){
        // TODO: Complete the logic for the remaining win possibilities
        document.getElementById("Winner").innerHTML = "Player X wins the game! &#128540;";
        return;
    }else if(a3 == b3 && b3 == c3 && a3 == "X"){
        document.getElementById("Winner").innerHTML = "Player X wins the game! &#128540;";
        return;
    }else if (a1 == a2 && a2 == a3 && a1 == "X") {
        document.getElementById("winner").innerHTML = "Player X wins the game! &#128540;";
        return;
    } else if (b1 == b2 && b2 == b3 && b1 == "X") {
        document.getElementById("winner").innerHTML = "Player X wins the game! &#128540;";
        return;
    } else if (c1 == c2 && c2 == c3 && c1 == "X") {
        document.getElementById("winner").innerHTML = "Player X wins the game! &#128540;";
        return;
    } else if (a1 == b2 && b2 == c3 && a1 == "X") {
        document.getElementById("winner").innerHTML = "Player X wins the game! &#128540;";
        return;
    } else if (c1 == b2 && b2 == a3 && c1 == "X") {
        document.getElementById("winner").innerHTML = "Player X wins the game! &#128540;";
        return;
    }

    // TODO: Inform the player that O wins on the page 
    if (a1 == b1 && b1 == c1 && a1 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    } else if (a2 == b2 && b2 == c2 && a2 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    } else if (a3 == b3 && b3 == c3 && a3 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    } else if (a1 == a2 && a2 == a3 && a1 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    } else if (b1 == b2 && b2 == b3 && b1 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    } else if (c1 == c2 && c2 == c3 && c1 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    } else if (a1 == b2 && b2 == c3 && a1 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    } else if (c1 == b2 && b2 == a3 && c1 == "O") {
        document.getElementById("winner").innerHTML = "Player O wins the game! &#128540;";
        return;
    }

    // Draw Condition

    if (a1 && b1 && c1 && a2 && b2 && c2 && a3 && b3 && c3) {
        document.getElementById("winner").innerHTML = "It's a Draw! &#128511;";
    }


    
}