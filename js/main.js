let xWin = [1, 1, 1] // win condition x
let yWin = [-1, -1, -1] // win condition o 

function arraysEqual(a, b) { // this tests if 2 arrays are equal
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

let p1WinPrompt = function () { // win prompts
    $(".board").append(`<h2>X WINS!</h2>`);
    playerScoreX++;
    $("#p1Score").html(`P1 Score: ${playerScoreX}`);
    keepGoing = false;
    gameInProgress = false;
}
let p2WinPrompt = function () {
    $(".board").append('<h2>O WINS!</h2>')
    playerScoreY++
    $("#p2Score").html(`P2 Score: ${playerScoreY}`)
    keepGoing = false;
    gameInProgress = false;
}

function checkForWin() { // compares arrays with win cond
    let columns1 = [];
    let columns2 = [];
    let columns3 = [];
    let diags1 = [];
    let diags2 = [];
    let wholeBoard = [];

    diags1.push(board[0][0], board[1][1], board[2][2]);
    diags2.push(board[0][2], board[1][1], board[2][0]);
    if (keepGoing) {
        for (let i = 0; i < board.length; i++) {
            columns1.push(board[i][0]);
            columns2.push(board[i][1]);
            columns3.push(board[i][2]);
            wholeBoard.push(board[i][0], board[i][1], board[i][2])

            if (arraysEqual(board[i], xWin)) { //rows 
                p1WinPrompt();
            }
            if (arraysEqual(board[i], yWin)) {
                p2WinPrompt();
            }
        }
        if (arraysEqual(columns1, xWin)) {
            p1WinPrompt();
        } else if (arraysEqual(columns1, yWin)) {
            p2WinPrompt();
        }
        if (arraysEqual(columns2, xWin)) {
            p1WinPrompt();
        } else if (arraysEqual(columns2, yWin)) {
            p2WinPrompt();
        }
        if (arraysEqual(columns3, xWin)) {
            p1WinPrompt();
        } else if (arraysEqual(columns3, yWin)) {
            p2WinPrompt();
        }
        if (arraysEqual(diags1, xWin)) {
            p1WinPrompt();
        } else if (arraysEqual(diags1, yWin)) {
            p2WinPrompt();
        }
        if (arraysEqual(diags2, xWin)) {
            p1WinPrompt();
        } else if (arraysEqual(diags2, yWin)) {
            p2WinPrompt();
        }
    }
    if (turnsWent === 9) {
        for (let i = 0; i < wholeBoard.length; i++) {
            if (!(board[i] === 0) && gameInProgress) {
                $(".board").append('<h2>TIE!</h2>')
                // gameInProgress = false;
                keepGoing = false;
            }
        }
    }
    if (!keepGoing) {
        $(".board").append("<h3>Game Over</h3>")
        $(".cell").css({
            "filter": 'blur(5px)',
        });
    }


    // !!!!!! CHECK FOR TIE !!!!!!!





}
checkForWin()



$("#resetBoard").on('click', function () { // clear board, saves relevant player info
    localStorage.setItem("scoreY", playerScoreY)
    localStorage.setItem("scoreX", playerScoreX)
    window.location.reload()
});

$("#clearBoard").on("click", function () {
    localStorage.clear("scoreX")
    localStorage.clear("scoreY")
    window.location.reload()
});

$(".p1Score").append(`<h4 id="p1Score">P1 Score: ${playerScoreX}`)
$(".p2Score").append(`<h4 id="p2Score">P2 Score: ${playerScoreY}`)

