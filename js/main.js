// console.log('hello')
xTurn = true;
keepGoing = true;


if (cellSelector === false) {
    $(".cellButton").on('click', function () {
        console.log(cellSelector)
        let currentPick = $(this).parents(".cell").attr("id") // the button pressed

        if (xTurn) {
            $("#" + currentPick).html('<p id="p1">X</p>')
            // $(this).html("X")
            xTurn = false

        } else {
            $("#" + currentPick).html('<p id="p2">O</p>')
            // $(this).html("O")
            xTurn = true
        }

        if (xTurn) { // hover colour 
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
        } // hover colour change p1
        if (xTurn === false) {
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
        }; // hover colour change p2


        if (keepGoing) {
            if ($("#c1").children().attr("id") == $("#c2").children().attr("id") && $("#c1").children().attr("id") == $("#c3").children().attr("id")) {
                if ($("#c1").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
                // console.log(keepGoing)
            }

            if ($("#c4").children().attr("id") == $("#c5").children().attr("id") && $("#c4").children().attr("id") == $("#c6").children().attr("id")) {
                if ($("#c4").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
            }

            if ($("#c7").children().attr("id") == $("#c8").children().attr("id") && $("#c7").children().attr("id") == $("#c9").children().attr("id")) {
                if ($("#c7").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
            }

            if ($("#c1").children().attr("id") == $("#c4").children().attr("id") && $("#c4").children().attr("id") == $("#c7").children().attr("id")) {
                if ($("#c1").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
            }

            if ($("#c2").children().attr("id") == $("#c5").children().attr("id") && $("#c5").children().attr("id") == $("#c8").children().attr("id")) {
                if ($("#c2").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
            }

            if ($("#c3").children().attr("id") == $("#c6").children().attr("id") && $("#c6").children().attr("id") == $("#c9").children().attr("id")) {
                if ($("#c3").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
            }

            if ($("#c1").children().attr("id") == $("#c5").children().attr("id") && $("#c5").children().attr("id") == $("#c9").children().attr("id")) {
                if ($("#c1").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
            }

            if ($("#c3").children().attr("id") == $("#c5").children().attr("id") && $("#c5").children().attr("id") == $("#c7").children().attr("id")) {
                if ($("#c3").children().attr("id") === "p1") {
                    $(".board").append("<h2>X WINS!</h2>");
                    playerScoreX++
                    $("#p1Score").html(`P1 Score: ${playerScoreX}`)

                } else {
                    $(".board").append('<h2>O WINS!</h2>')
                    playerScoreY++
                    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
                }
                keepGoing = false;
            }
            // $("#p1").css({"color": p1Color})
            // $("#p2").css({"color": p2Color})
            // $(#clickedCell).text("X")
        } // closing keep going 
        if (keepGoing === false) {
            // console.log('tie')
            $(".board").append("<h3>Game Over</h3>")
            $(".cell").css({
                "filter": 'blur(5px)',
            });
        }
    }) //closing game
}

let playerScoreX = localStorage.getItem("scoreX") || 0;
let playerScoreY = localStorage.getItem("scoreY") || 0;

$("#resetBoard").on('click', function () {
    localStorage.setItem("scoreY", playerScoreY)
    localStorage.setItem("scoreX", playerScoreX)
    window.location.reload()
})

$("#clearBoard").on("click", function () {
    localStorage.clear("scoreX")
    localStorage.clear("scoreY")
    window.location.reload()
    // console.log(p1Color)
})

$("body").append(`<h4 id="p1Score">P1 Score: ${playerScoreX}`)
$("body").append(`<h4 id="p2Score">P2 Score: ${playerScoreY}`)




//TODO: 
// Customise image for player (let them import one)
// Customise shape of input fields 
// Try this but w a 2d array! Might be shorter !! 




// 2d array ?? <== put this in a separate file... Too crowded here ..
// let board = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// const outputRows = function(){
//     for (let i=0; i<board.length; i++){
//     console.log(board[i])
//     }
// }
// outputRows();


// const outputColumns = function(){
//     for (let i = 0; i < board.length; i++){
//         for (let j = 0; j < board.length; j++){
//             // board[i][j]
//         }
//     }
// }
// outputColumns();