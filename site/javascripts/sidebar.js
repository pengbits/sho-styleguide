import $ from 'jquery';

export default function sideBar() {

	var sideBarVisible = true;

	$('.site-sidebar-toggle').click(function(){
		if (sideBarVisible === true) {
			$('.site-sidebar').hide();
			$(this).text('+');
			sideBarVisible = false;
		} else {
			$('.site-sidebar').show();
			$(this).text('-');
			sideBarVisible = true;
		}
	})
}