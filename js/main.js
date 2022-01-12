function checkForWin() {
    let columns1 = [];
    let columns2 = [];
    let columns3 = [];
    let diags1 = [];
    let diags2 = [];

    diags1.push(board[0][0], board[1][1], board[2][2]);
    diags2.push(board[0][2], board[1][1], board[2][0]);
if (keepGoing){
    for (let i = 0; i < board.length; i++) {
        columns1.push(board[i][0]);
        columns2.push(board[i][1]);
        columns3.push(board[i][2]);

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
    if (!keepGoing) {
        $(".board").append("<h3>Game Over</h3>")
        $(".cell").css({
            "filter": 'blur(5px)',
        });
    } 
}
checkForWin()



$("#resetBoard").on('click', function () {
    localStorage.setItem("scoreY", playerScoreY)
    localStorage.setItem("scoreX", playerScoreX)
    window.location.reload()
});

$("#clearBoard").on("click", function () {
    localStorage.clear("scoreX")
    localStorage.clear("scoreY")
    window.location.reload()
});

$("body").append(`<h4 id="p1Score">P1 Score: ${playerScoreX}`)
$("body").append(`<h4 id="p2Score">P2 Score: ${playerScoreY}`)

