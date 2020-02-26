import $ from 'jquery';

class CastDetailsGrid {
  
  constructor(cfg) {
    this.dropdown = cfg.el;
    this.trigger = $('.js-dropdown-menu');
    this.headings = document.getElementsByClassName("cast-details__heading");
    this.dropdownListItems = document.getElementsByClassName("dropdown-menu__item");
    this.gridItemCopyList = document.getElementsByClassName('js-grid-item__copy--shortened');
    this.titles = document.getElementsByClassName('grid-item__title');

    this.initialize();
    this.setListeners();
  }

  initialize() {
    //set ids on section headings for anchor tags
    const headings = this.headings
    for(let heading of headings) {
      let hyphenatedId= this.hyphenate(heading.innerHTML)
      heading.id = hyphenatedId
    }
    this.shortenCopies();
    this.formatTitleCta();
  }

  setListeners() {
    //scroll to sections on anchor click
    const listItems = this.dropdownListItems
    for(let item of listItems){
      let hyphenatedId = this.hyphenate(item.innerHTML)
      $(item).click(function(){
        $('html, body').animate({
          scrollTop: $(`#${hyphenatedId}`).offset().top
      }, 1000);
      })
    }

    this.trigger.click(this.toggleDropdown)
  }

  toggleDropdown() {
    $('.dropdown-menu__item-list').slideToggle()
    $('.dropdown-menu').toggleClass('dropdownMenuOpen')
  }

  hyphenate(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
  }

  shortenCopies() {
    for(let copyItem of this.gridItemCopyList) {
      let copy = copyItem.innerHTML;
      const maxLength = 225;
      if(copy.length > maxLength) {
        let trimmedCopy = copy.substr(0, maxLength)
        trimmedCopy = trimmedCopy.substr(0, Math.min(trimmedCopy.length, trimmedCopy.lastIndexOf(" ")));
        trimmedCopy += "...";
        copyItem.innerHTML = trimmedCopy;
      }
    }
  }

  formatTitleCta () {
    for(let el of this.titles) {
      let splitTitles= el.innerHTML.split(" ");
      let firstWords = splitTitles.slice(0, splitTitles.length-1);
      let lastWord = ` <span class="grid-item__title--last-word">${splitTitles[splitTitles.length-1]}<span class="grid-item__title--cta"></span></span>`;
      el.innerHTML = firstWords.join(" ").concat(lastWord); 
    }
  }
}

export default CastDetailsGrid