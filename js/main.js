// console.log('hello')
//let players choose colours 
xTurn = true;
keepGoing = true;
// winnerChosen = false;
let colors = ["red", "blue", "green", "yellow", "orange"];

let p1Color = "seagreen";
let p2Color = "crimson";

// $(".hovered").css("backgroundColor","green");    
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

$(".cellButton").on('click', function () {
    // console.log($(this).parents(".cell").attr("id"));
    let currentPick = $(this).parents(".cell").attr("id")
    // console.log(this)
    // $(this).html("X")

    if (xTurn) {
        $("#" + currentPick).html('<p id="p1">X</p>')
        // $(this).html("X")
        xTurn = false

    } else {
        $("#" + currentPick).html('<p id="p2">O</p>')
        // $(this).html("O")
        xTurn = true
    }

    if (xTurn === true) { // hover colour 
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
    } else if (xTurn === false) {
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
    };


    if (keepGoing === true) {
        if ($("#c1").children().attr("id") == $("#c2").children().attr("id") && $("#c1").children().attr("id") == $("#c3").children().attr("id")) {
            if ($("#c1").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
            // console.log(keepGoing)
        }

        if ($("#c4").children().attr("id") == $("#c5").children().attr("id") && $("#c4").children().attr("id") == $("#c6").children().attr("id")) {
            if ($("#c4").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
        }

        if ($("#c7").children().attr("id") == $("#c8").children().attr("id") && $("#c7").children().attr("id") == $("#c9").children().attr("id")) {
            if ($("#c7").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
        }

        if ($("#c1").children().attr("id") == $("#c4").children().attr("id") && $("#c4").children().attr("id") == $("#c7").children().attr("id")) {
            if ($("#c1").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
        }

        if ($("#c2").children().attr("id") == $("#c5").children().attr("id") && $("#c5").children().attr("id") == $("#c8").children().attr("id")) {
            if ($("#c2").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
        }

        if ($("#c3").children().attr("id") == $("#c6").children().attr("id") && $("#c6").children().attr("id") == $("#c9").children().attr("id")) {
            if ($("#c3").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
        }

        if ($("#c1").children().attr("id") == $("#c5").children().attr("id") && $("#c5").children().attr("id") == $("#c9").children().attr("id")) {
            if ($("#c1").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
        }

        if ($("#c3").children().attr("id") == $("#c5").children().attr("id") && $("#c5").children().attr("id") == $("#c7").children().attr("id")) {
            if ($("#c3").children().attr("id") === "p1") {
                $("body").append("X WINS!");
                playerScoreX++
                $("#p1Score").html(`P1 Score: ${playerScoreX}`)

            } else {
                $("body").append('O WINS')
                playerScoreY++
                $("#p2Score").html(`P2 Score: ${playerScoreY}`)
            }
            keepGoing = false;
        }
        // $("#p1").css({"color": p1Color})
        // $("#p2").css({"color": p2Color})
        // $(#clickedCell).text("X")
    } // closing keep going 
    else if (keepGoing === false) {
        // console.log('tie')
        $("body").append("<h3>Game Over</h3>")
    }
}) //closing game

let playerScoreX = localStorage.getItem("scoreX") || 0;
let playerScoreY = localStorage.getItem("scoreY") || 0;



$("#resetBoard").on('click', function () {
    localStorage.setItem("scoreY", playerScoreY)
    localStorage.setItem("scoreX", playerScoreX)
    window.location.reload()
})


// console.log("Player X has a score of " + localStorage.getItem("scoreX"))
// console.log("Player Y has a score of " + localStorage.getItem("scoreY"))

$("#clearBoard").on("click", function () {
    localStorage.clear("scoreX")
    localStorage.clear("scoreY")
    window.location.reload()

})

$("body").append(`<p id="p1Score">P1 Score:${playerScoreX}`)
$("body").append(`<p id="p2Score">P2 Score:${playerScoreY}`)


//TODO: 
// Customise colour for player 
// Customise image for player (let them import one)
// Customise shape of input fields 
// Try this but w a 2d array! Might be shorter !! 





