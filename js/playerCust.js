$(window).on("load", function () {
    $("#p2Score").css("color", p2Color);
    $("#p1Score").css("color", p1Color);
})


$(".colorSelectButton").on("click", function(){
    if ($(this).attr("id") === "p1ColorButton"){
    $("#p1Color").toggle("display")
    } else {
    $("#p2Color").toggle("display")
    }


})

$(".colorButton").on("click", function () {
    if ($(this).parent().parent().attr("id") === "p1Color") {
        p1Color = ($(this).attr("id"))
        // console.log(p1Color)
        $("#p1Score").css("color", p1Color);
        $("#p1SelectedAvatar").css("backgroundColor", p1Color)
    } else {
        p2Color = ($(this).attr("id"))
        $("#p2Score").css("color", p2Color);
        $("#p2SelectedAvatar").css("backgroundColor", p2Color)
    }
    // console.log(p1Color)
    localStorage.setItem("p1Color", p1Color)
    localStorage.setItem("p2Color", p2Color)
})

let p1Color = localStorage.getItem("p1Color") || "seagreen";
let p2Color = localStorage.getItem("p2Color") || "crimson";


let p1SavedAvatar = localStorage.getItem("p1SavedAvatar")
let p2SavedAvatar = localStorage.getItem("p2SavedAvatar")

$("#p1SelectedAvatar").attr("src", p1SavedAvatar).css("backgroundColor", p1Color)
$("#p2SelectedAvatar").attr("src", p2SavedAvatar).css("backgroundColor", p2Color)


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

$(".showShyGuyP1").on("click", function () {
    $(".shyGuyP1").toggle("display")

})
$(".showShyGuyP2").on("click", function () {
    $(".shyGuyP2").toggle("display")

})

if ($("#p1SelectedAvatar").attr("src") === ""){
    $("#p1SelectedAvatar").hide()
}
if ($("#p2SelectedAvatar").attr("src") === ""){
    $("#p2SelectedAvatar").hide()
}

$(".shyGuyImg").on("click", function () {

    // let $img = $(this).clone();s
    if ($(this).parent().attr("class") === "shyGuyP1") {
        p1SelectedImg = ($(this).attr("src"))
        $("#p1SelectedAvatar").attr("src", p1SelectedImg)
        $("#p1SelectedAvatar").show()
    } else{
        p2SelectedImg = ($(this).attr("src"))

        $("#p2SelectedAvatar").attr("src", p2SelectedImg)
        $("#p2SelectedAvatar").show()
    }
    console.log(p1SelectedImg)
    localStorage.setItem("p1SavedAvatar", p1SelectedImg)
    localStorage.setItem("p2SavedAvatar", p2SelectedImg)
})




console.log($("#p1Avatar").val());
$("#p1Avatar").on("change", function () {
    console.log("img changed");
    $("#firstPlayerAvatar").attr("src", $("#p1Avatar").val());
    console.log($("#firstPlayerAvatar")); // img information
});

let p1Name = "";
let p2Name = "";

$("#firstMove").on("click", function () {
    if (!gameInProgress) { // visually show that you're out of the selector. this also only 
        cellSelector = !cellSelector;
        gameInProgress = !gameInProgress
        // console.log('not in progress')
        $(".cellButton").on("click", function () {
            let currentPick = $(this).parents(".cell").attr("id")
            // console.log(currentPick)
            localStorage.setItem("P1FirstPick", currentPick)
            localStorage.setItem("preferenceSet", true)
            // preferenceSet = true;
        })
    }
})


