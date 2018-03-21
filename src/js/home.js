global.jQuery = require("jquery");

(function ($) {

    require("bootstrap-sass/assets/javascripts/bootstrap/collapse");
    require("bootstrap-sass/assets/javascripts/bootstrap/transition");


    $('body').on('click', '.mlb-bg--green', function (e) {
        let $li = $(this).closest('li'),
            $target = $li.find('.mlb-overlay');

        if ($li.hasClass('search-open')) {
            $li.removeClass('search-open');
        }
        else {
            $li.addClass('search-open');
        }

        $(document).on('mouseup', function (e) {
            let $container = $(".mlb-top--nav");
            // if the target of the click isn't the container nor a descendant of the container
            if (!$container.is(e.target) && $container.has(e.target).length === 0) {
                $container.find($li).removeClass('search-open');
            }
        });
    })


})(require('jquery'));