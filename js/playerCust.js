$(window).on("load", function () {
    $("#p2Score").css("color", p2Color);
    $("#p1Score").css("color", p1Color);
})

$(".colorButton").on("click", function () {
    if ($(this).parent().parent().attr("id") === "p1") {
        p1Color = ($(this).attr("id"))
        $("#p1Score").css("color", p1Color);
    } else {
        p2Color = ($(this).attr("id"))
        $("#p2Score").css("color", p2Color);
    }

    $("#p1").css("color", p1Color)
    $("#p2").css("color", p2Color)
    localStorage.setItem("p1Color", p1Color)
    localStorage.setItem("p2Color", p2Color)
    // console.log(localStorage.getItem("p1Color"))
    // console.log(localStorage.getItem("p2Color"))
})

let p1Color = localStorage.getItem("p1Color") || "seagreen";
let p2Color = localStorage.getItem("p2Color") || "crimson";

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

console.log($("#p1Avatar").val());
$("#p1Avatar").on("change", function () {
    console.log("img changed");
    $("#firstPlayerAvatar").attr("src", $("#p1Avatar").val());
    console.log($("#firstPlayerAvatar")); // img information
});

let p1Name = "";
let p2Name = "";


