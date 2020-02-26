import $ from 'jquery';

export class ProviderPseudoTable {

  constructor(cfg){
    this.el = $(cfg.el);
    this.toggleTrigger= $(".js-toggle-button");
    this.toggleTriggerTop = $(".pseudo-table__toggle--top")
    this.secondaryTable = $(".pseudo-table--secondary");
    this.setListeners()
  }

  setListeners() {
    this.toggleTrigger.click(this.toggleSecondaryTable.bind(this))
  }

  toggleSecondaryTable() {
    // toggle the secondary table
    this.secondaryTable.slideToggle("slow" );
    // show/hide the top toggle button.
    this.toggleTriggerTop.slideToggle("fast")
  }

}
export default ProviderPseudoTable