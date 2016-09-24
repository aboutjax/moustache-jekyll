$("#menu-link").click(function(e) {
    if( $("#sidebar").hasClass("open")) {
        $("#sidebar").removeClass("open");
        $("#menu-link").removeClass("open");
    } else {
        $("#sidebar").addClass("open");
        $("#menu-link").addClass("open");
    }
})

$("#sidebar-close-link").click(function(e) {
    if( $("#sidebar").hasClass("open")) {
        $("#sidebar").removeClass("open");
        $("#menu-link").removeClass("open");
    } else {
        $("#sidebar").addClass("open");
        $("#menu-link").addClass("open");
    }
})
