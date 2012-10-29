
;function ($) {

  "use strict"; 


 /* CLASS DEFINITION
  * ====================== */

  var _className = function ($element, options) {
    this.settings = options;
    this.$el = $element;
  }

  _className.prototype = {

      constructor: _className

  }


 /* PLUGIN DEFINITION
  * ======================= */

  $.fn._pluginName = function (options) {
    return this.each(function () {
      var 
        $el = $(this),
        options = $.extend({}, $.fn._pluginName.defaults, options);
      new _className($el, options)
    })
  }

  $.fn._pluginName.defaults = {
      
  }

  $.fn._pluginName.Constructor = _className


}(window.jQuery);
