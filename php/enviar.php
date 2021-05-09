<?php

// if(isset($_POST['submit'])){

    $nombre = ($_POST['nombre']);
	$correo = ($_POST['correo']);
	$cuerpo = ($_POST['mensaje']);
	
	$subject = "Enviado desde portafolio";
	$para = "miguel_p1194@hotmail.com";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$de = $correo;
	$mensaje = "Alguien ha enviado un formulario.";
	$mensaje .= "\n";
	$mensaje .= "Aquí están los datos: ";
	$mensaje .= "\n\n";
	$mensaje .= "Nombre: ".$nombre."\n";
	$mensaje .= "Correo: ".$correo."\n";
	$mensaje .= "Comentarios: ".$cuerpo."\n\n";
	$mensaje .= "----------------------\n";
	$mensaje .= "Guarde este correo para futuras revisiones.";
	
	if(mail($para, $subject,$mensaje,"From: $de", $headers)){
		// header("Location: contacto_confirm.html");
        echo "alert('En breve me pondre en contacto contigo, gracias!')";
		exit();
	}
	
	// fin

else {

	echo "No se ha enviado ningún form";

}

?>