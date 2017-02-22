import $ from 'jquery';

class SelectNavigation {
  constructor(cfg) {
    this.selectNav = $(cfg.el);
    this.setHandlers();
  }

  setHandlers() {
    this.selectNav.on('change', (event) => {
      this.selectNav.find( "option:selected" ).each(function() {
          let label = $(this).data("label");
          let context = $(this).data("context");
          if (label && context) {
            $.event.trigger({
              type: 'selectNavigation',
              context: context.toLowerCase(),
              label: label.toLowerCase()
            });
          }

          if(this.value) window.location = this.value;
      });
    }); return;
  }
}

export default SelectNavigation;
