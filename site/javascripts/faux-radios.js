import $ from 'jquery';

class FauxRadios {
	constructor(cfg){
		this.el = $(cfg.el)
		this.el.on('click','.input--faux-radio', this.toggle.bind(this))
		this.icon_paths = {
			'checked' : 'super-radio-checked_36x36.svg',
			'unchecked' : 'super-radio_36x36.svg'
		};
	}
	
	toggle(e){
		e.preventDefault();
		
		let el    	= $(e.currentTarget);
		let value 	= el.data('lunch-choice');
		let icon  	= el.find('.input__icon');
		let src 		= icon.attr('src');
		let checked	= src.indexOf(this.icon_paths.checked) > -1;
		let state;
		
		if(checked){
			state = src.replace(this.icon_paths.checked, '') + this.icon_paths.unchecked;
		}else{
			state = src.replace(this.icon_paths.unchecked, '') + this.icon_paths.checked;
		}
		
		icon.attr('src', state);
	}
}

export default FauxRadios;