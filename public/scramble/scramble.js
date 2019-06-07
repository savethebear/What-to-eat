(function () {
    const nav_bar_container = $(".navbar_container");
    nav_bar_container.load("/nav.html", function() {
        nav_bar_container.find(".nav-item.active").removeClass("active");
        nav_bar_container.find(".nav-item .nav-link[page='scramble']").addClass("active");
    });
    
    
})();