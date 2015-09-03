//Javascript para enviar la solicitud ajax al server
$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault(); //Elimino el evento por default del boton submit del form

		console.log('Hola Mundo');

		data = $(this).serializeArray(); //serializo todo el formulario para poder enviar
		// data.push({name: 'frm', value: 'contacto'});

		$.ajax({
			url: 'contacto.php',
			type: 'post',
			datatype: 'json',
			data: data,
		})
		.done(function(data) { //Cuando el request retorna true
			if (data) {
				console.log('correcto ' + data);
				$('.respuesta').addClass('alert alert-success');
				$('.respuesta').html("<p>Los datos fueron enviados</p>");

			}else{
				console.log('Incorrecto ' + data);
				$('.respuesta').addClass('alert alert-danger');
				$('.respuesta').html("<p>Error al enviar el mensaje</p>");
			}
		});
	});
});