// import "nes.css/css/nes.min.css"; // do I need? 

let xTurn = true; // defines what turn 
let cpuGo = false; //defines if the cpu has gone. This is needed because it affects the css
let keepGoing = true; // defines if there are more moves to go
let turnWent = false; //defines if a turn has been taken. This prevents multiple moves by pc
let cellSelector = true; // 
let preferenceSet = false; // 
let gameInProgress = false; // defines if the game is going (if a player has won)
let turnsWent = 0 // counts the amount of turns taken through the current game.
let input = -1 // defines input on board. x is 1, y is -1
let playerScoreX = localStorage.getItem("scoreX") || 0; // saves player score over refresh
let playerScoreY = localStorage.getItem("scoreY") || 0; // "                     " 
if (localStorage.getItem("preferenceSet") === "true") {
    input = 1
    if (localStorage.getItem("P1FirstPick") === "c1") { // I don't want to do this for every cell... there has to be a better way ... 
        board[0][0] = input
    }
    $("#" + localStorage.getItem("P1FirstPick")).html('<p id="p1">X</p>')
    xTurn = !xTurn;
    $(".cellButton").hover(
        function () {
            $(this).addClass('hovered')
            $(".hovered").html("O")
            $(".hovered").css("background-color", `${p2Color}`)
        },
        function () {
            $(".hovered").css("background-color", `white`)
            $(".hovered").html("")
            $(this).removeClass('hovered')
        }
    );
}
$("#p1").css("color", p1Color)
$("#p2").css("color", p2Color)

// $("*").css({"font-family": "none"})

let board = [ // 2d array of board 
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

$("#pcPlay").on("click", function () { // a little long ... 
    turnWent = false
    turnsWent++
    input = -input
    // turn to function ===>
    let rows1 = board[0];
    let rows2 = board[1];
    let rows3 = board[2];
    let columns1 = [];
    let columns2 = [];
    let columns3 = [];
    let diags1 = [];
    let diags2 = [];
    diags1.push(board[0][0], board[1][1], board[2][2]);
    diags2.push(board[0][2], board[1][1], board[2][0]);
    for (let i = 0; i < board.length; i++) {
        columns1.push(board[i][0]);
        columns2.push(board[i][1]);
        columns3.push(board[i][2]);
    }
    let p1blockCond1 = [0, -1, -1];
    let p1blockCond2 = [-1, 0, -1];
    let p1blockCond3 = [-1, -1, 0];
    let p2blockCond1 = [0, 1, 1];
    let p2blockCond2 = [1, 0, 1];
    let p2blockCond3 = [1, 1, 0];

    if (xTurn) {
        $("#p1SelectedAvatar").css("border", `5px solid ${p1Color}`)
        $("#p2SelectedAvatar").css("border", `3px solid white`)
    } else if (!xTurn) {
        $("#p2SelectedAvatar").css("border", `5px solid ${p2Color}`)
        $("#p1SelectedAvatar").css("border", `3px solid white`)
    }

    // blocking conditions come after ifwin conditions !!!! 

    // blocking enemy diagonals 
    if (!turnWent) {
        if (arraysEqual(diags1, p1blockCond1)) {
            board[0][0] = input
            checkForColor("c1")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags1, p1blockCond2)) {
            board[1][1] = input
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags1, p1blockCond3)) {
            board[2][2] = input
            checkForColor("c9")
        }
    }

    if (!turnWent) {
        if (arraysEqual(diags1, p2blockCond1)) {
            board[0][0] = input
            checkForColor("c1")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags1, p2blockCond2)) {
            board[1][1] = input
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags1, p2blockCond3)) {
            board[2][2] = input
            checkForColor("c9")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags2, p1blockCond1)) {
            board[0][2] = input
            checkForColor("c3")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags2, p1blockCond2)) {
            board[1][1] = input
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags2, p1blockCond3)) {
            board[2][0] = input
            checkForColor("c7")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags2, p2blockCond1)) {
            board[0][2] = input
            checkForColor("c3")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags2, p2blockCond2)) {
            board[1][1] = input
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(diags2, p2blockCond3)) {
            board[2][0] = input
            checkForColor("c7")
        }
    }
    // blocking enemy rows!
    if (!turnWent) {
        if (arraysEqual(rows1, p1blockCond1)) {
            board[0][0] = input
            checkForColor("c1")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows1, p1blockCond2)) {
            board[0][1] = input
            checkForColor("c2")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows1, p1blockCond3)) {
            board[0][2] = input
            checkForColor("c3")

        }
    }
    if (!turnWent) {
        if (arraysEqual(rows2, p1blockCond1)) {
            board[1][0] = input
            checkForColor("c4")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows2, p1blockCond2)) {
            board[1][1] = input
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows2, p1blockCond3)) {
            board[1][2] = input
            checkForColor("c6")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows3, p1blockCond1)) {
            board[2][0] = input
            checkForColor("c7")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows3, p1blockCond2)) {
            board[2][1] = input
            checkForColor("c8")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows3, p1blockCond3)) {
            board[2][2] = input
            checkForColor("c9")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows1, p2blockCond1)) {
            board[0][0] = input
            checkForColor("c1")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows1, p2blockCond2)) {
            board[0][1] = input
            checkForColor("c2")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows1, p2blockCond3)) {
            board[0][2] = input
            checkForColor("c3")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows2, p2blockCond1)) {
            board[1][0] = input
            checkForColor("c4")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows2, p2blockCond2)) {
            board[1][1] = input
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows2, p2blockCond3)) {
            board[1][2] = input
            checkForColor("c6")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows3, p2blockCond1)) {
            board[2][0] = input
            checkForColor("c7")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows3, p2blockCond2)) {
            board[2][1] = input
            checkForColor("c8")
        }
    }
    if (!turnWent) {
        if (arraysEqual(rows3, p2blockCond3)) {
            board[2][2] = input
            checkForColor("c9")
        }
    }
    // blocking enemy columns!!
    if (!turnWent) {
        if (arraysEqual(columns1, p1blockCond1)) {
            board[0][0] = input;
            checkForColor("c1")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns1, p1blockCond2)) {
            board[1][0] = input;
            checkForColor("c4")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns1, p1blockCond3)) {
            board[2][0] = input;
            checkForColor("c7")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns2, p1blockCond1)) {
            board[0][1] = input;
            checkForColor("c2")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns2, p1blockCond2)) {
            board[1][1] = input;
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns2, p1blockCond3)) {
            board[2][1] = input;
            checkForColor("c8")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns3, p1blockCond1)) {
            board[0][2] = input;
            checkForColor("c3")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns3, p1blockCond2)) {
            board[1][2] = input;
            checkForColor("c6")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns3, p1blockCond3)) {
            board[2][2] = input;
            checkForColor("c9")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns1, p2blockCond1)) {
            board[0][0] = input;
            checkForColor("c1")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns1, p2blockCond2)) {
            board[1][0] = input;
            checkForColor("c4")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns1, p2blockCond3)) {
            board[2][0] = input;
            checkForColor("c7")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns2, p2blockCond1)) {
            board[0][1] = input;
            checkForColor("c2")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns2, p2blockCond2)) {
            board[1][1] = input;
            checkForColor("c5")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns2, p2blockCond3)) {
            board[2][1] = input;
            checkForColor("c8")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns3, p2blockCond1)) {
            board[0][2] = input;
            checkForColor("c3")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns3, p2blockCond2)) {
            board[1][2] = input;
            checkForColor("c6")
        }
    }
    if (!turnWent) {
        if (arraysEqual(columns3, p2blockCond3)) {
            board[2][2] = input;
            checkForColor("c9")
        }
    }
    if (!turnWent) {
        if (xTurn) {
            if (board[0][0] === input && board[2][2] === 0) {
                board[2][2] = input
                checkForColor("c9")
            }
        } else {
            if (board[0][0] === input && board[2][2] === 0) {
                board[2][2] = input
                checkForColor("c9")
            }
        }
    }
    if (!turnWent) {
        // if (!blocked) {
        if (board[0][0] === 0) {
            board[0][0] = input
            checkForColor("c1")
        }
        else if (board[0][2] === 0) {
            board[0][2] = input
            checkForColor("c3")
        }
        // }
    }
    if (!turnWent) {
        if (board[2][2] === 0) {
            board[2][2] = input;
            checkForColor("c9")
        }
    }
    if (!turnWent) {
        if (board[2][0] === 0) {
            board[2][0] = input;
            checkForColor("c7")
        }
    }
    if (!turnWent) {
        if (board[0][1] === 0) {
            board[0][1] = input;
            checkForColor("c2")
        }
    }
    if (!turnWent) {
        if (board[1][2] === 0) {
            board[1][2] = input;
            checkForColor("c6")
        }
    }
    if (!turnWent) {
        if (board[1][0] === 0) {
            board[1][0] = input;
            checkForColor("c4")
        }
    }
    if (!turnWent) {
        if (board[2][1] === 0) {
            board[2][1] = input;
            checkForColor("c8")
        }
    }
    xTurn = !xTurn
    if (!xTurn) {
        $(".cellButton").hover(
            function () {
                $(this).addClass('hovered')
                $(".hovered").html("O")
                $(".hovered").css("background-color", `${p2Color}`)
            },
            function () {
                $(".hovered").css("background-color", `white`)
                $(".hovered").html("")
                $(this).removeClass('hovered')
            }
        );
    } else {
        $(".cellButton").hover(
            function () {
                $(this).addClass('hovered')
                $(".hovered").css("background-color", `${p1Color}`)
                $(".hovered").html("X")
            },
            function () {
                $(".hovered").css("background-color", `white`)
                $(".hovered").html("")
                $(this).removeClass('hovered')
            }
        );
    }
    checkForWin()
}); // closing ai

function checkForColor(cell) { // defines what to give to a cell depending on current cell. 
    if (xTurn) {
        $("#" + cell).html('<p id="p1">X</p>').css("background-color", `${p1Color}`)
        $("#p2SelectedAvatar").css("border", `5px solid ${p2Color}`)
        $("#p1SelectedAvatar").css("border", `3px solid white`)

    }
    else {
        $("#" + cell).html('<p id="p2">O</p>').css("background-color", `${p2Color}`)
        $("#p1SelectedAvatar").css("border", `5px solid ${p1Color}`)
        $("#p2SelectedAvatar").css("border", `3px solid white`)
    }
    turnWent = true;
}

$(".cellButton").on('click', function () {
    gameInProgress = !gameInProgress;
    checkForColor()
    turnsWent++
    let currentPick = $(this).parents(".cell").attr("id")

    if (!cellSelector) {
        return;
    }
    if (xTurn) {
        $("#" + currentPick).html('<p id="p1">X</p>').css("background-color", `${p1Color}`)
        $(".cellButton").hover(
            function () {
                $(this).addClass('hovered')
                $(".hovered").html("O")
                $(".hovered").css("background-color", `${p2Color}`)
            },
            function () {
                $(".hovered").css("background-color", `white`)
                $(".hovered").html("")
                $(this).removeClass('hovered')
            }
        );
    } else {
        $("#" + currentPick).html('<p id="p2">O</p>').css("background-color", `${p2Color}`)
        $(".cellButton").hover(
            function () {
                $(this).addClass('hovered')
                $(".hovered").css("background-color", `${p1Color}`)
                $(".hovered").html("X")
            },
            function () {
                $(".hovered").css("background-color", `white`)
                $(".hovered").html("")
                $(this).removeClass('hovered')
            }
        );
    }
    input = -input
    xTurn = !xTurn;
    // is there an easier way? I was to change the board values on button click 
    if ($(this).attr("id") === "b1") {
        board[0][0] = input
    }
    if ($(this).attr("id") === "b2") {
        board[0][1] = input
    }
    if ($(this).attr("id") === "b3") {
        board[0][2] = input
    }
    if ($(this).attr("id") === "b4") {
        board[1][0] = input
    }
    if ($(this).attr("id") === "b5") {
        board[1][1] = input
    }
    if ($(this).attr("id") === "b6") {
        board[1][2] = input
    }
    if ($(this).attr("id") === "b7") {
        board[2][0] = input
    }
    if ($(this).attr("id") === "b8") {
        board[2][1] = input
    }
    if ($(this).attr("id") === "b9") {
        board[2][2] = input
    }

    checkForWin()
}) // closing cell click

