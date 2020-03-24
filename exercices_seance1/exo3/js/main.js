$("div").on('click', function() {
    let color = $(this).css("background-color") // valeur du background-color du div

    $("p").html("la couleur du DIV est : " + color)
});