/*__________________________ Preloader __________________________*/

var documentReady = $(document).ready();

function myEnter(){

	if(documentReady) {

		$(".preloader").hide();

		$(".dveri_left").delay(8000).css({
			"transform": "translateX(-50vw)"
		});

		$(".dveri_right").delay(8000).css({
			"transform": "translateX(50vw)"
		});

		$("body").css({
			"overflowY": "auto"
		})
	}

}

myEnter();

/*__________________________ Other scripts __________________________*/

$(document).ready(function(){

	// _____________________________ Other _____________________________

})