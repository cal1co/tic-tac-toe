xTurn = true;
keepGoing = true;
cellSelector = true;
let input = -1

let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

$(".cellButton").on('click', function () {
    let currentPick = $(this).parents(".cell").attr("id")
    if (xTurn){
        
    } else {
        
    }

    if (!cellSelector) {
        return;
    }
    if (xTurn) {
        $("#" + currentPick).html('<p id="p1">X</p>')
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
        $("#" + currentPick).html('<p id="p2">O</p>')
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