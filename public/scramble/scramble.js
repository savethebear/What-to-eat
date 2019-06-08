(function () {
    const nav_bar_container = $(".navbar_container");
    if (nav_bar_container.children().length === 0) {
        // nav_bar_container.load("/nav.html", switchCurrentTab);
        nav_bar_container.append(getNavHtml());
    }

    // containers
    const resturant_list_container = $(".resturant_list_container .resturant_list");
    const randomize_container = $(".resturant_selector_container");

    // init functions
    switchCurrentTab();
    fillResturantList();
    randomizeSelectSetup();
    
    function switchCurrentTab() {
        nav_bar_container.find(".nav-item.active").removeClass("active");
        nav_bar_container.find(".nav-item .nav-link[page='scramble']").addClass("active");
    }
    function fillResturantList() {
        let resturants = ["Sun Lok Yun", "Thai Place", "Wildfire", "Vietnemese Place"];
        resturants.forEach(function(item) {
            const resturant_item = '<div class="resturant_item" name="'+item+'">' + item +'<div class="delete_item"><div class="icon"></div></div></div>';
            resturant_list_container.append(resturant_item);
        });
    }
    function randomizeSelectSetup() {
        randomize_container.find(".amount_select").unbind('change').change(function() {
            const selected_value = parseInt($(this).val());
            const result_list = randomize_container.find(".selected_choices");
            result_list.empty();
            for (let i = 0; i < selected_value; i++) {
                const result_val = i + 1;
                const result_row = `<div class="result_row" id="${result_val}"><span class="result_id">${result_val}.  </span><span class="result_value"></span></div>`;
                result_list.append(result_row);
            }
        }).change();

        randomize_container.find(".randomize_button").unbind("click").click(function(e) {
            e.stopPropagation();
            const resturant_array = [];
            resturant_list_container.find(".resturant_item").each(function() {
                resturant_array.push($(this).attr("name"));
            });
            const number_of_choices = parseInt($(this).parents(".selector").find("select.amount_select").val());
            for (let i = 0; i < number_of_choices; i++) {
                let value = Math.floor(Math.random() * resturant_array.length);
                randomize_container.find(".result_row[id='"+(i+1)+"'] .result_value").text(resturant_array[value]);
                resturant_array.splice(value, 1);
            }
        });
    }
})();