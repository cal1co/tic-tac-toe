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

// input username! 
// $("#p1Avatar").on("change", function(){
// $("body").append($("#p1Avatar").val())
// console.log(document.getElementById("p1Avatar").files[0].name);
console.log($("#p1Avatar").val());
$("#p1Avatar").on("change", function () {
    console.log("img changed");
    $("#firstPlayerAvatar").attr("src", $("#p1Avatar").val());
    console.log($("#firstPlayerAvatar")); // img information
});





//toggle colour selector (make it popup) 
// allow preferences ie set first pos if first player 
// let cellSelector = true;

// $("#firstMove").on("click", function () {
//     console.log(cellSelector);  
//     cellSelector = !cellSelector;
//     console.log(cellSelector);  
// })







// $("#p1Avatar").on("change", function(){
//     const file = $("#p1Avatar").files
//     if (file){
//         $("#firstPlayerAvatar").src = URL.createObjectURL(file)
//     }
// });


// $("#p1Avatar").on("change", function(){
// console.log('hello')
//     if (typeof (FilerReader) != "undefined"){//typeof tells value of operand 
//         $("#firstPlayerAvatar").html("");
//         $($(this)[0].files).each(function(){
//             let uploadImg = $(this);
//                 let reader = new FileReader();
//                 reader.onload = function(ev){
//                     const img = $("<img />")
//                     img.attr("style", "width: 100px; height: 100px")
//                     img.attr("src",e.target.result);
//                     $("#firstPlayerAvatar").append(img);
//                 }
//                 reader.readAsDataURL(file[0])
//         });
//     }
// })




let p1Name = "";
let p2Name = "";


// let p1Color = "crimson"


// console.log(localStorage.getItem("p1Color"))
// console.log(localStorage.getItem("p2Color"))
// // console.log(p1Color)
// localStorage.getItem("p1Color");
// localStorage.getItem("p2Color")


