//Activador de jQuery

$(document).ready(function(){
    // Función Abrir- Cerrar del menú mobile
    console.log("inicio");
    
    $('#abrir').click(function(e){
        console.log("click");
        $('#abrir').hide();
        $('#cerrar').show();


        $('#menu-responsive'). animate(
            {
                right: 0
            },
            700, 
            'easeOutExpo'
        );
        e.preventDefault();
    });

    $('#cerrar, nav#menu-responsive a').click(function(e){ 
        $('#abrir').show();
        $('#cerrar').hide();
        console.log("cerrando");

        $('#menu-responsive'). animate(
            {
                right: -290
            },
            700,
            'easeOutExpo'
        );
        e.preventDefault();
    });
});