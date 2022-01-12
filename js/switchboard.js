let xTurn = true;
let keepGoing = true;
let cellSelector = true;
let preferenceSet = false;
let gameInProgress = false;
let playerScoreX = localStorage.getItem("scoreX") || 0;
let playerScoreY = localStorage.getItem("scoreY") || 0;
let input = -1
let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];
if (localStorage.getItem("preferenceSet") === "true"){
    input = 1
    if (localStorage.getItem("P1FirstPick") === "c1"){ // I don't want to do this for every cell... there has to be a better way ... 
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
    
$("#p1").css("color",p1Color)
$("#p2").css("color",p2Color)



$(".cellButton").on('click', function () {
    gameInProgress = !gameInProgress;
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
        $("#" + currentPick).html('<p id="p2">O</p>').css("background-color",`${p2Color}`)
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
})
let xWin = [1, 1, 1]
let yWin = [-1, -1, -1]

function arraysEqual(a, b) {
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let p1WinPrompt = function () {
    $(".board").append("<h2>X WINS!</h2>");
    playerScoreX++;
    $("#p1Score").html(`P1 Score: ${playerScoreX}`);
    keepGoing = false;
    gameInProgress = false;
}
let p2WinPrompt = function(){
    $(".board").append('<h2>O WINS!</h2>')
    playerScoreY++
    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
    keepGoing = false;
    gameInProgress = false;
}
