(function($) {

    $(document).ready(function() {


    }); //doc ready end--------------------------------    



    // set equal height of collums 
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(function() {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }

    // dropdown 
    function upDown(object, target) {
        $(target).hide();
        $(object).click(function() {
            if ($(target).is(':visible')) $(target).slideUp('fast');
            else $(target).slideDown('fast');
        }).css('cursor', 'pointer');
    }

    Drupal.behaviors.temizaciya_formy = {

        attach: function(context, settings) {

        }

    }

}(jQuery));