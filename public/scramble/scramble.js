(function () {
    const nav_bar_container = $(".navbar_container");
    if (nav_bar_container.children().length === 0) {
        nav_bar_container.load("/nav.html", switchCurrentTab);
    } else {
        switchCurrentTab();
    }
    
    function switchCurrentTab() {
        nav_bar_container.find(".nav-item.active").removeClass("active");
        nav_bar_container.find(".nav-item .nav-link[page='scramble']").addClass("active");
    }
})();