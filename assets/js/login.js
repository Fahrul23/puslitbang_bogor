$('document').ready(function(){

	const flashData = $('.flash-data').data('flashdata');

	
	if(flashData){
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: flashData
		});
	}
});

