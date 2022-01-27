
//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
document.getElementById("btn_close").addEventListener("click", close_menu);


//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var btn_close = document.getElementById("btn_close");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

    function close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }



//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});



// -----------------------------

$(document).ready(function() {
    $(window).scroll(function(){
            if(document.body.scrollTop > 300)
                    $('#fixmenu').fadeIn( "slow", function() { });
            else    
                    $('#fixmenu').fadeOut( "slow", function() { });
    });

    $('a#srolltotop').click(function(){
            $('html, body').animate({scrollTop:0}, 100);
            return false;
    });
});