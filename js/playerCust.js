$(window).on("load", function () {
    $("#p2Score").css("color", p2Color);
    $("#p1Score").css("color", p1Color);
})

$("#p1Color").hide()
$("#p2Color").hide()

$(".colorSelectButton").on("click", function () {
    if ($(this).attr("id") === "p1ColorButton") {
        $("#p1Color").toggle("display")
    } else {
        $("#p2Color").toggle("display")
    }
})

$(".colorButton").on("click", function () {
    if ($(this).parent().parent().attr("id") === "p1Color") {
        p1Color = ($(this).attr("id"))
        $("#p1Score").css("color", p1Color);
        $("#p1SelectedAvatar").css("backgroundColor", p1Color)
        $('select[name="customisation1"]').css("backgroundColor", p1Color)
    } else {
        p2Color = ($(this).attr("id"))
        $("#p2Score").css("color", p2Color);
        $("#p2SelectedAvatar").css("backgroundColor", p2Color)
        $('select[name="customisation2"]').css("backgroundColor", p2Color)
    }
    localStorage.setItem("p1Color", p1Color)
    localStorage.setItem("p2Color", p2Color)
})

let p1Color = localStorage.getItem("p1Color") || "seagreen";
let p2Color = localStorage.getItem("p2Color") || "crimson";

let p1SavedAvatar = localStorage.getItem("p1SavedAvatar")
let p2SavedAvatar = localStorage.getItem("p2SavedAvatar")
$("#p1SelectedAvatar").attr("src", p1SavedAvatar).css("backgroundColor", p1Color)
$("#p2SelectedAvatar").attr("src", p2SavedAvatar).css("backgroundColor", p2Color)

$('select[name="customisation1"]').css("backgroundColor", p1Color)
$('select[name="customisation2"]').css("backgroundColor", p2Color)


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



$('select[name="customisation1"]').change(function () {
    // hides all open so no overlapping 
    $(".shyGuyP1").hide()
    $("#p1Color").hide()
    if ($(this).val() == "colorButton") {
        $("#p1Color").show()
    }
    if ($(this).val() == "avatarSelect"){
        $(".shyGuyP1").show()
    }
})
$('select[name="customisation2"]').change(function () {
    // hides all open so no overlapping 
    $(".shyGuyP2").hide()
    $("#p2Color").hide()
    if ($(this).val() == "colorButton") {
        $("#p2Color").show()
    }
    if ($(this).val() == "avatarSelect"){
        $(".shyGuyP2").show()
    }
})



// $(".showShyGuyP1").on("click", function () {
//     $(".shyGuyP1").toggle("display")

// })
// $(".showShyGuyP2").on("click", function () {
//     $(".shyGuyP2").toggle("display")

// })

if ($("#p1SelectedAvatar").attr("src") === "") {
    $("#p1SelectedAvatar").hide()
}
if ($("#p2SelectedAvatar").attr("src") === "") {
    $("#p2SelectedAvatar").hide()
}

$(".shyGuyImg").on("click", function () {

    // let $img = $(this).clone();s
    if ($(this).parent().attr("class") === "shyGuyP1") {
        p1SelectedImg = ($(this).attr("src"))
        $("#p1SelectedAvatar").attr("src", p1SelectedImg)
        $("#p1SelectedAvatar").show()
        localStorage.setItem("p1SavedAvatar", p1SelectedImg)
    } else {
        p2SelectedImg = ($(this).attr("src"))

        $("#p2SelectedAvatar").attr("src", p2SelectedImg)
        $("#p2SelectedAvatar").show()
        localStorage.setItem("p2SavedAvatar", p2SelectedImg)
    }
})

let p1Name = "";
let p2Name = "";


$(".backdrop").on("click", function(){

    $("#nes1").attr("href", "./node_modules/nes.css/css/nes.min.css");
    $("#nes2").attr("href", "https://unpkg.com/nes.css/css/nes-core.min.css");
    $("#nes3").attr("href","https://fonts.googleapis.com/css?family=Press+Start+2P")
})














// $("#firstMove").on("click", function () {
//     if (!gameInProgress) { // visually show that you're out of the selector. this also only 
//         cellSelector = !cellSelector;
//         gameInProgress = !gameInProgress
//         $(".cellButton").on("click", function () {
//             let currentPick = $(this).parents(".cell").attr("id")
//             localStorage.setItem("P1FirstPick", currentPick)
//             localStorage.setItem("preferenceSet", true)
//             // preferenceSet = true;
//         })
//     }
// })



// let p1UploadedImg = localStorage.getItem("p1UploadedImg");
// p1SelectedAvatar.src = localStorage.getItem("p1UploadedImg")
// $("#p1Avatar").on("change", function () { // file upload... WIP 
//     const [file] = p1Avatar.files
//     if (file) {
//         p1SelectedAvatar.src = URL.createObjectURL(file)
//     }

// // console.log(p1SelectedAvatar.src)

// localStorage.setItem("p1UploadedImg", p1SelectedAvatar.src)
// });

