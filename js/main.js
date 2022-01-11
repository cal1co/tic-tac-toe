// console.log('hello')
xTurn = true;
keepGoing = true;
let cellSelector = true;

// const firstMove = function(){

// }
$("#firstMove").on("click", function () {
    // console.log(cellSelector);
    cellSelector = !cellSelector;
    // console.log(cellSelector);
    // checkToggle()
})

$(".cellButton").on('click', function () {
    // console.log(cellSelector, "click handler")
    if (!cellSelector) {
        return;
    }
    let currentPick = $(this).parents(".cell").attr("id") // the button pressed
    // console.log(xTurn)
    if (xTurn) {
        $("#" + currentPick).html('<p id="p1">X</p>')
        // xTurn = !xTurn;
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
        // xTurn = !xTurn;

    }
    xTurn = !xTurn;
    console.log("xTurn", xTurn);

    if (xTurn === true) { // hover colour 

    } // hover colour change p1
    if (xTurn === false) {

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
let board = [
    [1, 1, 0],
    [1, -1, -1],
    [0, 0, 0],
];

// const outputColumns = function () {
//     let columns1 = [];
//     let columns2 = [];
//     let columns3 = [];
//     // let allColumns = columns1 + columns2 + columns3

//     for (let j = 0; j < board.length; j++) {
//         columns1.push(board[j][0]);
//     }
//     for (let j = 0; j < board.length; j++) {
//         columns2.push(board[j][1]);
//     }
//     for (let j = 0; j < board.length; j++) {
//         columns3.push(board[j][2]);
//     }
//     console.log(allColumns)
// } 
// outputColumns()

const outputDiag = function (corner) { // corner can only be 1 or 2
    let diags = [];
    if (corner === 0) {
        diags.push(board[0][0], board[1][1], board[2][2]);
    };
    if (corner === 2) {
        diags.push(board[0][2], board[1][1], board[2][0]);
    };
    // console.log(diag)
};


function arraysEqual(a, b) {
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
// arraysEqual(board[0],board[2])


let xWin = [1, 1, 1]
let ywin = [-1, -1, -1]


function checkForWin() {
    for (let i = 0; i < board.length; i++) {
        let columns1 = [];
        let columns2 = [];
        let columns3 = [];
        // let allColumns = columns1 + columns2 + columns3
            columns1.push(board[i][0]);
            columns2.push(board[i][1]);
            columns3.push(board[i][2]);


        // if (arraysEqual(board[i],xWin)){
        // console.log("x wins")
        // }

        if (arraysEqual(board[i][0], xWin)) {
            console.log("x wins")
        }


    }
}
checkForWin()


// if output diag === 3 x, else if diag === -3 ... 
// you can input a counter for turns. once button clicked 8 times, tie