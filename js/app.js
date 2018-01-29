var images = [];
var contacts = [];
var $nameInput = $("#name-input");
var $imageInput = $("#image-input");


function loadPage() {
 	$(".modal").modal();
 	  $("#form").submit(addContact);
 	$nameInput.keyup(validateContact);
  	$("#form").submit(addImage);
  }

/*funcion para cargar imagen*/
function archivo(evt) {
      var files = evt.target.files; // FileList object
       
        //Obtenemos la imagen del campo "file". 
      for (var i = 0, f; f = files[i]; i++) {         
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }
       
           var reader = new FileReader();
           
           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
                      document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
               };
           })(f);
 
           reader.readAsDataURL(f);
       }
}
             
document.getElementById('files').addEventListener('change', archivo, false);

/*Funcion fecha*/
$.datepicker.setDefaults($.datepicker.regional["es"]);
$("#datepicker").datepicker({
firstDay: 1
});

$("#datepicker").click(function () {
$("#datepicker").datepicker("setDate", "-117y");
});


/*Funcion para guardar la imagen*/
/*$(document).on('change','#upload-image',function(){
	if(this.files && this.files[0]){*/
    /* Creamos la I4magen*/
/*		var img = $('<img >');
*/    /* Asignamos el atributo source , haciendo uso del método createObjectURL*/
/*		img.attr('src', URL.createObjectURL(this.files[0]));
*/    /* Añadimos al Div*/
/*	  $('#publish-image').prepend(img);
	}
});*/



function addImage (e){
	e.preventDefault();


	var image = $imageInput.val();

	images.push(image);
	paintImagesInHtml(image);

	console.log(images, image);

	$imageInput.val(" ");
	$("myModal").modal("close");

}


/* 
function addContact(e) {
  e.preventDefault();

  // Con estas lineas toman el valor del usuario agrega los inputs y los guarda en variables
  var name = $nameInput.val();
  var phone = $phoneInput.val();
  // Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
  var contact = {
    "name": name,
    "phone": phone
  };

  // Agregamos el contacto a nuestra data para poder filtrar y eliminar posteriormente
  contacts.push(contact);
  // Esta funcion pinta en el html
  paintContactsInHtml(contact);
  
// console.log(contacts, contact);
  // limpiando valores del form

  $nameInput.val(" ");
  $phoneInput.val(" ");
  $("#modal1").modal("close");
}*/


function validateContact () {
  var $containerAddContact = $("#add-contact");

  if($(this).val().trim().length > 0) {
    $containerAddContact.removeAttr("disabled");
  } else {
    $containerAddContact.attr("disabled" , true); 
  }
}



function paintImagesInHtml(image){
var $newImage = $("<article />", {
		"class": "card-panel hoverable"
});

var $containerImages = $("<div />");

$newImage.append($containerImages);

console.log($newImage);
$("#publish-image").prepend($newImage);

}

/*Modal texto
*/
function addContact(e) {
  e.preventDefault();

  // Con estas lineas toman el valor del usuario agrega los inputs y los guarda en variables
  var name = $nameInput.val();
  // Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto
  var contact = {
    "name": name,
  };

  // Agregamos el contacto a nuestra data para poder filtrar y eliminar posteriormente
  contacts.push(contact);
  // Esta funcion pinta en el html
  paintContactsInHtml(contact);
  
// console.log(contacts, contact);
  // limpiando valores del form

  $nameInput.val(" ");
  $("#myModal2").modal("close");
}

function paintContactsInHtml (contact) {
  // crear elementos con DOM
  var $newContact = $("<article />", {
    "class": "card-panel hoverable"
  });
  var $containerContactName = $("<h4 />");
  var $deleteContactButton = $("<button type='button' />");
  var  $removeIcono = $("<i />", { 
    "class": "material-icons"
  });

  // Agregamos atributos y eventos a los elementos creados en el dom
  $deleteContactButton.addClass("btn right");
  $removeIcono.text("delete");
  $deleteContactButton.click(removeContact);

  // Asignando valores

  $deleteContactButton.append($removeIcono);
  $containerContactName.text(contact.name);
  $containerContactPhone.text(contact.phone);

  $newContact.append($containerContactName);
  $newContact.append($deleteContactButton);
  $newContact.append($containerContactPhone);
  // console.log($newContact);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#publish-contacts").prepend($newContact);
  
}

$(document).ready(loadPage);






/*function paintContactsInHtml (contact) {
  // crear elementos con DOM
  var $newContact = $("<article />", {
    "class": "card-panel hoverable"
  });
  var $containerContactName = $("<h4 />");
  var $deleteContactButton = $("<button type='button' />");
  var  $removeIcono = $("<i />", { 
    "class": "material-icons"
  });
  var $containerContactPhone = $("<p />");

  // Agregamos atributos y eventos a los elementos creados en el dom
  $deleteContactButton.addClass("btn right");
  $removeIcono.text("delete");
  $deleteContactButton.click(removeContact);

  // Asignando valores

  $deleteContactButton.append($removeIcono);
  $containerContactName.text(contact.name);
  $containerContactPhone.text(contact.phone);

  $newContact.append($containerContactName);
  $newContact.append($deleteContactButton);
  $newContact.append($containerContactPhone);
  // console.log($newContact);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#publish-contacts").prepend($newContact);
  }
  */
