(function () {
    const nav_bar_container = $(".navbar_container");
    if (nav_bar_container.children().length === 0) {
        // nav_bar_container.load("/nav.html", switchCurrentTab);
        nav_bar_container.append(getNavHtml());
    }
    switchCurrentTab();
    fillResturantList();
    
    function switchCurrentTab() {
        nav_bar_container.find(".nav-item.active").removeClass("active");
        nav_bar_container.find(".nav-item .nav-link[page='scramble']").addClass("active");
    }
    
    function fillResturantList() {
        let resturants = ["Sun Lok Yun", "Thai Place", "Wildfire", "Vietnemese Place"];
        const container = $(".resturant_list_container .resturant_list");
        resturants.forEach(function(item) {
            const resturant_item = '<div class="resturant_item">' + item +'<div class="delete_item"><div class="icon"></div></div></div>';
            container.append(resturant_item);
        });
    }
})();