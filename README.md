# Practica3
JavaScripts
1.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean
correctos teniendo en cuenta las siguientes condiciones:

•	HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Validacion</title>
    <link rel="stylesheet" type="text/css" href="../DocCSS/Validacion.css">

    <script type="text/javascript"src="../DocJS/Validacion.js"></script>
    <style type="text/css">
        .error {
            color: red;
            font-size: 8px;
        }
    </style>

</head>

Como primer paso tenemos datos de nuestro formulario en el cual colocamos nuestro archivo CSS y JS. 
<body>
<section>
<div class="container">
<form id="formulario01" method="POST" action="../DocPHP/validar.php" onsubmit="return validarCamposObligatorios()">

Dentro de nuestra sección tenemos la clase container, le instanciamos para llamar método formula, action; nos permitirá validar los datos una vez sean correctos todos los campos y el archivo se llama validatCamposObligatorios 
<label for="cedula">Cedula (*)</label>
        <input type="text" id="cedula" name="cedula" value="" placeholder="Ingrese el número de cedula ..." onfocus="Escribe(this)" onkeyup="ValidarCedula(this.value = validar_numero(
            this.value))">
        <span span id="c" style="display: none;">*error</span>
        <br>
 Los datos se encuentran dentro de un <label> en donde por medio de un for  colocamos a nuestro cuadro de texto cedula. <input> Type = “text” en este campo es una manera como le damos el tipo de variable que tomara nuestro campo que posteriormente será llamado en nuestro JS. 
onkeyup="ValidarCedula(this.value = validar_numero(this.value): Esta función es llamada para validar la cedula y para validar que sea campo numérico.  
<span span id="c" style="display: none;">*error</span: dentro de esta misma seccion tenemos datos de id y error en los datos al llenar. 

<label for="nombres">Nombres (*)</label>
<input type="text" id="nombres" name="nombres" value="" placeholder="Ingrese sus dos nombres ..." onfocus="Escribe(this)" onkeyup="this.value = validarLetras(this.value)"
       onchange= "this.value = duos_valores(this.value)"/>
    <br>
<label for="apellidos">Apelidos (*)</label>
<input type="text" id="apellidos" name="apellidos" value="" placeholder="Ingrese sus dos apellidos ..." onfocus="Escribe(this)" onkeyup="this.value = validarLetras(this.value)"
       onchange="this.value = duos_valores(this.value)"/>
<br>

Como observamos aquí también se repite la misma metodología, lo que cambia qui es la llamada al método como son onkeyup="this.value = validarLetras(this.value)": a diferencia del numérico este validara letras  onchange= "this.value = duos_valores(this.value)": Ahora vemos como este permetira validar de que estos nombres sean palabras de 2 nombres al igual que los apellidos.
<label for="direccion">Dirección (*)</label>
    <input type="text" id="direccion" name="direccion" value="" placeholder="Ingrese su dirección ..." onfocus="Escribe(this)"/>
     <br>
Onfocus=”Escribe(this)”: Esto permite escribir dentro de nuestro cuadro de texto 
<label for="telefono">Teléfono (*)</label>
   <input type="text" id="telefono" name="telefono" value="" placeholder="Ingrese su número telefónico..." onfocus="Escribe(this)" onkeyup="validarTelefono(this.value = validar_numero(this.value))" />
  <br>
Aquí también se valida que los datos sean numéricos. Pero el dato onkeyup="validarTelefono al tener este dato nos permite que nuestro teléfono sea válido de tal manera de que no exceda los 10 dígitos.

<label for="fecha">Fecha Nacimiento (*)</label>
<input type="text" id="ExpiryDate" name="ExpiryDate" vale="" placeholder="Ingrese su fecha de nacimiento dd/mm/yyyy..." onfocus="Escribe(this)" onkeyup="isDate(this.value = checkDate(this.value))" />
<br>
Algo que mencionar placeholder nos permite colocar una orden en nuestro campo de texto, en l cual se borrara al momento de seleccionar esta casilla. ISDATE validra nuestros datos de fecha.

<label for="correo">Correo electrónico (*)</label>
<input type="text" id="correo" name="correo" value="" placeholder="Ingrese su correo electrónico ..." onfocus="Escribe(this)" onkeyup="valida_Correo(this.value)"/>
Los datos que se llaman aquí son validar_correo.
<label for="contrasena">Contraseña (*)</label>
<input type="password" id="contrasena" name="contrasena" value="" placeholder="Ingrese su password ..." onfocus="Escribe(this)" onkeyup="validar_Password(this.value)"/>
<br>
Validar_passroed:  Esto permitirá llamar al método validar nuestra contraseña.

<input type="submit" id="crear" name="crear" value="Aceptar" />
          <input type="reset" id="cancelar" name="cancelar" value="Cancelar" />
Como se observa témenos datos de tipo submit y reset de esta manera permiten acceder al formularios PHP.
<spam id="p" style="display: none;">Error, campos incompletos!</spam>
Si los campos de nuestro formulario están incompletos nos mostrara un error que no nos permita acceder al formulario PHP.



•	CSS

body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}
El Primer campo nos permite dar un tipo de texto;  Arial, Helvetica y tenemos un border de  tamaño 3px y de color #f1f1f1.
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
Tomamos datos de tipo text y de tipo password ya que son los únicos permitidos para esta preactica. Como ya hemos estudiado antes cada uno de estos campos es algo básico de nuestro estudio; lo único nuevo es como podemos englobar varios campos y cambiar estilos de manera conjunta.
input[type=reset]{
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

input[type=submit] {
    width: auto;
    padding: 10px 18px;
    background-color: greenyellow;
}
Estos son los botones con dimensiones diferentes creadas a raíz de los diferentes reglas que se mandan como su color, espaciado y ubicación.




1.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean
correctos teniendo en cuenta las siguientes condiciones:

•	HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Validacion</title>
    <link rel="stylesheet" type="text/css" href="../DocCSS/Validacion.css">

    <script type="text/javascript"src="../DocJS/Validacion.js"></script>
    <style type="text/css">
        .error {
            color: red;
            font-size: 8px;
        }
    </style>

</head>

Como primer paso tenemos datos de nuestro formulario en el cual colocamos nuestro archivo CSS y JS. 




<body>
<section>
<div class="container">
<form id="formulario01" method="POST" action="../DocPHP/validar.php" onsubmit="return validarCamposObligatorios()">

Dentro de nuestra sección tenemos la clase container, le instanciamos para llamar método formula, action; nos permitirá validar los datos una vez sean correctos todos los campos y el archivo se llama validatCamposObligatorios 

<label for="cedula">Cedula (*)</label>
        <input type="text" id="cedula" name="cedula" value="" placeholder="Ingrese el número de cedula ..." onfocus="Escribe(this)" onkeyup="ValidarCedula(this.value = validar_numero(
            this.value))">
        <span span id="c" style="display: none;">*error</span>
        <br>
 Los datos se encuentran dentro de un <label> en donde por medio de un for  colocamos a nuestro cuadro de texto cedula. <input> Type = “text” en este campo es una manera como le damos el tipo de variable que tomara nuestro campo que posteriormente será llamado en nuestro JS. 
onkeyup="ValidarCedula(this.value = validar_numero(this.value): Esta función es llamada para validar la cedula y para validar que sea campo numérico.  
<span span id="c" style="display: none;">*error</span: dentro de esta misma seccion tenemos datos de id y error en los datos al llenar. 

<label for="nombres">Nombres (*)</label>
<input type="text" id="nombres" name="nombres" value="" placeholder="Ingrese sus dos nombres ..." onfocus="Escribe(this)" onkeyup="this.value = validarLetras(this.value)"
       onchange= "this.value = duos_valores(this.value)"/>
    <br>
<label for="apellidos">Apelidos (*)</label>
<input type="text" id="apellidos" name="apellidos" value="" placeholder="Ingrese sus dos apellidos ..." onfocus="Escribe(this)" onkeyup="this.value = validarLetras(this.value)"
       onchange="this.value = duos_valores(this.value)"/>
<br>

Como observamos aquí también se repite la misma metodología, lo que cambia qui es la llamada al método como son onkeyup="this.value = validarLetras(this.value)": a diferencia del numérico este validara letras  onchange= "this.value = duos_valores(this.value)": Ahora vemos como este permetira validar de que estos nombres sean palabras de 2 nombres al igual que los apellidos.
<label for="direccion">Dirección (*)</label>
    <input type="text" id="direccion" name="direccion" value="" placeholder="Ingrese su dirección ..." onfocus="Escribe(this)"/>
     <br>
Onfocus=”Escribe(this)”: Esto permite escribir dentro de nuestro cuadro de texto 
<label for="telefono">Teléfono (*)</label>
   <input type="text" id="telefono" name="telefono" value="" placeholder="Ingrese su número telefónico..." onfocus="Escribe(this)" onkeyup="validarTelefono(this.value = validar_numero(this.value))" />
  <br>
Aquí también se valida que los datos sean numéricos. Pero el dato onkeyup="validarTelefono al tener este dato nos permite que nuestro teléfono sea válido de tal manera de que no exceda los 10 dígitos.

<label for="fecha">Fecha Nacimiento (*)</label>
<input type="text" id="ExpiryDate" name="ExpiryDate" vale="" placeholder="Ingrese su fecha de nacimiento dd/mm/yyyy..." onfocus="Escribe(this)" onkeyup="isDate(this.value = checkDate(this.value))" />
<br>
Algo que mencionar placeholder nos permite colocar una orden en nuestro campo de texto, en l cual se borrara al momento de seleccionar esta casilla. ISDATE validra nuestros datos de fecha.

<label for="correo">Correo electrónico (*)</label>
<input type="text" id="correo" name="correo" value="" placeholder="Ingrese su correo electrónico ..." onfocus="Escribe(this)" onkeyup="valida_Correo(this.value)"/>
Los datos que se llaman aquí son validar_correo.
<label for="contrasena">Contraseña (*)</label>
<input type="password" id="contrasena" name="contrasena" value="" placeholder="Ingrese su password ..." onfocus="Escribe(this)" onkeyup="validar_Password(this.value)"/>
<br>
Validar_passroed:  Esto permitirá llamar al método validar nuestra contraseña.

<input type="submit" id="crear" name="crear" value="Aceptar" />
          <input type="reset" id="cancelar" name="cancelar" value="Cancelar" />
Como se observa témenos datos de tipo submit y reset de esta manera permiten acceder al formularios PHP.
<spam id="p" style="display: none;">Error, campos incompletos!</spam>
Si los campos de nuestro formulario están incompletos nos mostrara un error que no nos permita acceder al formulario PHP.







•	CSS

body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}
El Primer campo nos permite dar un tipo de texto;  Arial, Helvetica y tenemos un border de  tamaño 3px y de color #f1f1f1.
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
Tomamos datos de tipo text y de tipo password ya que son los únicos permitidos para esta preactica. Como ya hemos estudiado antes cada uno de estos campos es algo básico de nuestro estudio; lo único nuevo es como podemos englobar varios campos y cambiar estilos de manera conjunta.
input[type=reset]{
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

input[type=submit] {
    width: auto;
    padding: 10px 18px;
    background-color: greenyellow;
}
Estos son los botones con dimensiones diferentes creadas a raíz de los diferentes reglas que se mandan como su color, espaciado y ubicación.


•	Validación JS
function validarCamposObligatorios() {

    var bandera = false;

    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {
            bandera = true;
            elemento.classList.add('error');
            break;
        }
    }

    if (bandera == true) {

        alert('Exiten campos vacios');
        document.getElementById('p').classList.add('p');
        return false;

    } else {
        var fecha = validarFecha();
        var cedula = ValidarCedula();
        var correo = valida_Correo();
        // var contraseña =validarPassword();
        var telefono =validarTelefono();
        if (fecha || cedula || correo || telefono) {
            return false;
        } else {
            return true;
        }

    }
}

Es nuestra ultima orden pero lo explicaremos de entrada. document.forms[0].length; i++ esta nos permitirá colocar los datos en nuestra casilla y a la vez comprobara si este están ocupados, es decir llenados.
var elemento = document.forms[0].elements[i]; Permite leer ese dato en específico de nuestro cuadro de texto en el cual comprobara si hay algún dato.
elemento.value.trim() == ''
Con el este elemento verán como los datos vacíos; gracias a trim se validaran y mandaran un error si este esta vacío.
DOMTokenList este campo permite validar si un campo esta vacío o tiene datos, esto se logra gracias al ClassList. 
Como vemos utilizamos una bandera y si esto es igual a verdadero pues nos dará nuestros datos pasen como validados, pero si no son validos estos campos nos retornara un falso permitiendo mostrar los mensajes respectivos de los errores. Como vemos validamos la fecha, cedula, correo y teléfono en nuestros diferentes campos.
 






function validarLetras(string) {
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    return out;
}
El validar letras tenemos un filtro que solo permitira ese tipo de letras en nuestro campo nombre, apellido, etc. Como vemos llamamos un dato de tipo String,  que al estar dentro de nuestro campo IF comprobara si es un datos texto y gracias al String.charAt(i).  y no sea igual a menos 1, permitiendo no ingresar datos de este ámbito, out será la variable donde se guardara este dato y se validara.

//Validar que sea numero
function validar_numero(string) {
    var out = '';
    var filtro = '1234567890';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1){
            out += string.charAt(i)
        }

    return out;
}
 De igual manera de se tomara los datos numéricos por medio de una cadena. Y el filtro que solo permitirá ingresar esos datos.


//Validar Cedula
function ValidarCedula() {
    var x = document.getElementById("cedula").value
    var total = 0;
    var longitud = x.length;
    var longcheck = longitud - 1;
    if (x !== "" & longitud === 10){
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = x.charAt(i) * 2;
                if (aux >= 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(x.charAt(i));
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;

        if (x.charAt(longitud - 1) == total) {

            return false;
        } else {
            document.getElementById('cedula').classList.add('error');
            document.getElementById('c').classList.add('p');
            alert("Cedula Ecuatoriana Incorrecta")
            return true;
        }
    }
}
Ya desde ciclos anteriores vimos como se realiza esta validación de cedula de acuerdo a nuestra longitud y al último digito de nuestra cedula lo mismo se aplica en este aspecto solo que en JS lo validamos por medio de document.getElementById que nos devuelve estos datos que serán colocados en nuestro cuadro.
Primeramente, como ‘cedula’ es el campo que lo llamamos en nuestro campo en HTML pues de esta maner reconocerá que estamos llamando a ese campo en especifico. VAR es como se debe agregar cualquier valor ya sea texto, numérico. Como primera opción vemos que el dato  no sea vacía y que y que tenga como mínimo 10 caracteres.
Extraigo todos lo pares y sumo.
Extraigo los impares los múltiplos de 2 si el número es mayor a nueve como resultante, cosa que se debe cumplir de acuerdo al ultimo digito =. Conseguiremos la décima inmediata del digito extraído en el paso 6. restamos la decena inmediata - suma / si la suma nos resulta 10, el décimo digito es cero. Paso 9 Comparamos el digito resultante con el ultimo digito de la cedula si son iguales todo OK sino existe error.
Como vemos que si esto no se da; nos dará un error, siendo así como nos permitirá corregir estos errores.
 
function Escribe(elemento) {
    elemento.classList.remove('error');
    document.getElementById('p').classList.remove('p');
}
Como función esto nos permite escribir en cada uno de los campos tal como explicamos en nuestro campo elemento anterior.

function duos_valores(string) {
    var out = '';
    var array = string.split(" ");
    if (array.length == 1) {
        out += array[0];

    } else {
        out += array[0] + ' ' + array[1];

    }
    return out;
}
Para ver si se dan los dos campos en nuestros datos vemos si se cumple o no y esto lo hacemos por medio de un array ya que permitirá comprobar si existe un campo espacio en toda nuestro vector.

function valida_Correo() {
    var array = document.getElementById('correo').value.split('@');

    if (array[0].length < 3) {
            document.getElementById('correo').classList.add('error');
        alert('Correo no válido')
        return true;
    } else {
        if (!(array[1] == 'ups.edu.ec') && !(array[1] == 'est.ups.edu.ec')) {
            document.getElementById('correo').classList.add('error');
            document.getElementById('e').classList.add('p');
            alert('Extensión invalida use ups.edu.ec o est.ups.edu.ec')
            return true;
        } else {
            return false;
        }

    }
}
Una vez llamado a nuestro campo ‘correo’ tenga el campo @;  si dentro de la cadena no cumple con lo descrito mostrara que no es válido, y si no termina en 'ups.edu.ec'o 'est.ups.edu.ec' nos dará otro error de que no es válido; al ser correcto no retornara un false.
 
Nos da error al no ser correcto

function validarTelefono(){
    let regTelefono = new RegExp('^[0-9]*$');
    let valorTelefono = document.getElementById('telefono').value;
    let cantidadNumerico = valorTelefono.length;
    let testeoTelefono = regTelefono.test(valorTelefono);
    if(testeoTelefono === false){
        alert("No puede ingresar letras en el campo apellido");
        valorTelefono = valorTelefono.substring(0, valorTelefono.length - 1);
        document.getElementById('telefono').value = valorTelefono;
        return false;
    }else if(cantidadNumerico > 10) {
        alert("No puede ingresar mas de 10 numeros.");
        valorTelefono = valorTelefono.substring(0, valorTelefono.length - 1);
        document.getElementById('telefono').value = valorTelefono;
        return false;
    }else
        return true;
}
Para validar el teléfono utilizamos una variable que es igual al let que junto al RegExp le damos una dimensión de datos y solo esos  serán los únicos valores que reconocerá y si al valor numérico lo excedemos del limite nos mostrara que no hemos excedido mostrándonos un mensaje de error. 
 
function validar_Password(){
    var regexPassword = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    var x = document.getElementById('contrasena').value;
    var registro = regexPassword.test(x);
    if(registro === false ){
        document.getElementById('contrasena').value = x;
        alert("Debe ser minimo 8 caracteres; ademas debe incluir Mayusculas y Minusculas; y minimo un numero y un caracter");
        return false;
    }else
    return true;
}
 La función validar teléfono se utiliza los mismos datos que el código del teléfono el cual permite solo ingresar valores alfabéticos tanto minúsculas como mayúscula y además debe tener al menos un número y carácter de una dimensión de 8 dígitos.  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'); y los datos lo llamamos con ‘contrasena’ si es falso nos dará un error, sino de lo contrario nos retornara verdadero.
 
function isValidDate(x){
    var x = document.getElementById('ExpiryDate').value;

    if (x.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)){
        return false;
    }else{
        document.getElementById('ExpiryDate').classList.add('error');
        alert('Fecha mal ingresada, usar formato dd/mm/yyyy');
        return true;
    }
}
Como se ve la validación de la cedula también teneos campos (/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/) se observa adelantara un 0 si va del 1-9 y un uno al ir del 10-12; de igual manera pasara al mes solo que en esta ocasión este al tener mes pues se mandara un 3 y en el año se antepondrá el 19 o 20 dependiendo del dato y este ira solo hasta el más allá de este año. Si esto pasa pues nos dará un dato correcto; mientras si no es así nos mandara un error.
 
<html>
<head>
    <title>PHP Test</title>
</head>
<body>
<?php echo '<p>Usuario Correcto</p>'; ?>
</body>
</html>
 Al final cuando le demos en aceptar y se cumpla todos los datos ingresara a un  archivo PHP con este mensaje.

 
 
2. Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)

 •	HTML
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>title</title>
    <link rel="stylesheet" type="text/css" href="../DocCSS/Galery.css">


</head>
<body>
<section>

    <div id="images" >
        <h1 style="color:black">Imagenes Turisticas</h1>
        <img id="0" class="mySlides w3-animate-fading" src="">
        <img id="1" class="mySlides w3-animate-fading" src="" >
        <img id="2" class="mySlides w3-animate-fading" src="">
        <img id="3" class="mySlides w3-animate-fading" src="">
        <img id="4" class="mySlides w3-animate-fading" src="">
    </div>
    <button id="left" class="button black left" onclick="plusDivs(-1)">&#10094;</button>
    <button id="center" class="button black center" onclick="iniciar()">INICIAR</button>
    <button id="right" class="button black right" onclick="plusDivs(+1)">&#10095;</button>
</section>
</body>
<script type="text/javascript"
        src="../DocJS/Galeria.js">
</script>
Miremos rápidamente este código y destaquemos lo más importante. 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Un <meta>elemento de ventana gráfica proporciona al navegador instrucciones sobre cómo controlar las dimensiones y la escala de la página.
La width=device-widthparte establece el ancho de la página para seguir el ancho de la pantalla del dispositivo (que variará según el dispositivo).
La initial-scale=1.0parte establece el nivel de zoom inicial cuando el navegador carga la página por primera vez.
Llamamos CSS también en este archivo y por su puesto nuestro archivo javascript dentro del script
•	Observamos que dentro de la sección y los div; están nuestras imágenes las cuales se puede sar dimensión con solo cambiar dentro del Style, pero en este caso lo dejamos en el mismo formato
•	A si mismo se observa que dentro de los div se encuentra los clases que serán llamadas al JS para que se presenten de manera correcta.
•	Los botones de inicio y las flechas se dan por medio del código &#10094 left y )">&#10095 right. A más del botón inicio.





•	CSS
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}
.mySlides {
    display:none;
    width: 100%;
    margin: 90px 0;
mySlides nos dará un marguen a nuestras fotos
#img {
    width: 50%;
    height: 50%;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
}
Podremos dar las descripciones de nuestras imágenes 
.button {
    border:none;
    display:inline-block;
    padding:8px 16px;
    vertical-align:middle;
    text-decoration:none;
    color:black;
    background-color: rgba(255, 255, 255, 0.3);
    text-align:center;
}
Los botones estarán ubicadas de acuerdo a las dimensiones 
right {
    position:absolute;
    top:1370px;
    right:10.5%;
    transform:translate(0%,-50%);
    -ms-transform:translate(0%,-50%);
}

.left {
    position:absolute;
    top:1370px;
    left:10.5%;
    transform:translate(0%,-50%);
    -ms-transform:translate(-0%,-50%);
}

.center {
    position:absolute;
    top:1350px;
    right: 45%;
}
Los botones están ubicados de acuerdo a los datos que le hemos generado 



1.	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)

•	HTML
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>title</title>
    <link rel="stylesheet" type="text/css" href="../DocCSS/Galery.css">


</head>
<body>
<section>

    <div id="images" >
        <h1 style="color:black">Imagenes Turisticas</h1>
        <img id="0" class="mySlides w3-animate-fading" src="">
        <img id="1" class="mySlides w3-animate-fading" src="" >
        <img id="2" class="mySlides w3-animate-fading" src="">
        <img id="3" class="mySlides w3-animate-fading" src="">
        <img id="4" class="mySlides w3-animate-fading" src="">
    </div>
    <button id="left" class="button black left" onclick="plusDivs(-1)">&#10094;</button>
    <button id="center" class="button black center" onclick="iniciar()">INICIAR</button>
    <button id="right" class="button black right" onclick="plusDivs(+1)">&#10095;</button>
</section>
</body>
<script type="text/javascript"
        src="../DocJS/Galeria.js">
</script>
Miremos rápidamente este código y destaquemos lo más importante. 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Un <meta>elemento de ventana gráfica proporciona al navegador instrucciones sobre cómo controlar las dimensiones y la escala de la página.
La width=device-widthparte establece el ancho de la página para seguir el ancho de la pantalla del dispositivo (que variará según el dispositivo).
La initial-scale=1.0parte establece el nivel de zoom inicial cuando el navegador carga la página por primera vez.
Llamamos CSS también en este archivo y por su puesto nuestro archivo javascript dentro del script
•	Observamos que dentro de la sección y los div; están nuestras imágenes las cuales se puede sar dimensión con solo cambiar dentro del Style, pero en este caso lo dejamos en el mismo formato
•	A si mismo se observa que dentro de los div se encuentra los clases que serán llamadas al JS para que se presenten de manera correcta.
•	Los botones de inicio y las flechas se dan por medio del código &#10094 left y )">&#10095 right. A más del botón inicio.







•	CSS
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}
.mySlides {
    display:none;
    width: 100%;
    margin: 90px 0;
mySlides nos dará un marguen a nuestras fotos
#img {
    width: 50%;
    height: 50%;
    overflow: hidden;
    margin-right: auto;
    margin-left: auto;
}
Podremos dar las descripciones de nuestras imágenes 
.button {
    border:none;
    display:inline-block;
    padding:8px 16px;
    vertical-align:middle;
    text-decoration:none;
    color:black;
    background-color: rgba(255, 255, 255, 0.3);
    text-align:center;
}
Los botones estarán ubicadas de acuerdo a las dimensiones 
right {
    position:absolute;
    top:1370px;
    right:10.5%;
    transform:translate(0%,-50%);
    -ms-transform:translate(0%,-50%);
}

.left {
    position:absolute;
    top:1370px;
    left:10.5%;
    transform:translate(0%,-50%);
    -ms-transform:translate(-0%,-50%);
}

.center {
    position:absolute;
    top:1350px;
    right: 45%;
}
Los botones están ubicados de acuerdo a los datos que le hemos generado 
•	JS
function iniciar() {
    slideIndex = 1;
    showDivs(1);
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var val;
    for(i = 0; i < 5; i++)
        array.splice(Math.floor(Math.random() * array.length), 0);
    array.splice(Math.floor(Math.random() * array.length), 0);
    shuffle(array);

    for(i = 0; i < 5; i++)

    document.getElementById(i).src = "../images/"+ array[i] +".jpg";
}

slideIndex y ShowDivs van de la manera para que genere y acttive los datos. El Array permitira recorer el vector de imágenes. El siguiente for  solo correrá 5 imágenes. Como Math.floor tendrá datos aleatorios dentro del rango de datos que con la ayuda de math.random esto se genera de manera correcta. Y para leer los datos tendremos otro for  y dentro de ellos nuestra cadena de imágenes de un solo formato, en este caso .jpg y por su puesto dentro de la carpeta de nuestras imágenes que al estar numeradas por números estos se correrán en el array.

unction showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n == x.length)
        document.getElementById('right').disabled = true;
    else
        document.getElementById('right').disabled = false;

    if (n == 1)
        document.getElementById('left').disabled = true;
    else
        document.getElementById('left').disabled = false

    for (i = 0; i < x.length; i++)
        x[i].style.display = "none";

    x[slideIndex-1].style.display = "block";
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
La función actual témenos los elementos que según los botones llegaran al máximo de imágenes y nos devolverá un falso. De igual manera para el lado izquierdo. El block se bloqueara hasta cierto rango y no permitira ir mas allá.

 

3.	Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado. Las operaciones que podrá hacer la calculadora son:: suma, resta, multiplicación y división. Además, se podrá limpiar la memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones aritméticas

<body onload="init();">
<table class="calculadora">
    <tr>
        <td colspan="4"><span id="resultado"></span></td>
    </tr>
    <tr>
        <td><button id="siete">7</button></td>
        <td><button id="ocho">8</button></td>
        <td><button id="nueve">9</button></td>
        <td><button id="division">/</button></td>
    </tr>
    <tr>
        <td><button id="cuatro">4</button></td>
        <td><button id="cinco">5</button></td>
        <td><button id="seis">6</button></td>
        <td><button id="multiplicacion">*</button></td>
    </tr>
    <tr>
        <td><button id="uno">1</button></td>
        <td><button id="dos">2</button></td>
        <td><button id="tres">3</button></td>
        <td><button id="resta">-</button></td>
    </tr>
    <tr>
        <td><button id="igual">=</button></td>
        <td><button id="reset">C</button></td>
        <td><button id="cero">0</button></td>
        <td><button id="suma">+</button></td>
    </tr>
</table>
Los botones se generan por medio de los <td> y le damos nombres a estos datos.
asigna el evento onload a lo que se devuelve desde la función init cuando se ejecuta. initse ejecutará inmediatamente (como ahora , no cuando la ventana se haya cargado) y se asignará el resultado window.onload. Es poco probable que alguna vez quieras esto, pero lo siguiente sería válido. Como se observa también tenesmos datos JS y CSS.  Cada botón esta colocado un nombre dentro de un id.


•	CSS
ody { background-color: #0D465C  ; }

.calculadora{
    display:block;
    margin:0 auto;
    padding:20px;
    background-color:#2980b9;
    width:450px;
    height:500px;
    border-radius: 25px;
}
.calculadora td button{
    display:block;
    width:90px;
    height: 70px;
    font-size: 25px;
    background-color: antiquewhite;
}

#resultado{
    display:block;
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
    width:400px;
    height: 100px;
    line-height: 100px;
    background-color:#fff;
    border-radius: 25px;
}
con los CSS estos datos como calculadora generamos un margen, su tamaño y las dimensiones donde se grafiquen
Con la calculadora tb button modificaremos a tamaño que todos los botones tengan la misma dimensión y esten dentro de .calculadora
#resultado veremos como la calculadora obtiene un campo donde se ubicarn las respuestas de los resultado de las operaciones matemáticas


1.	Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado. Las operaciones que podrá hacer la calculadora son:: suma, resta, multiplicación y división. Además, se podrá limpiar la memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones aritméticas

<body onload="init();">
<table class="calculadora">
    <tr>
        <td colspan="4"><span id="resultado"></span></td>
    </tr>
    <tr>
        <td><button id="siete">7</button></td>
        <td><button id="ocho">8</button></td>
        <td><button id="nueve">9</button></td>
        <td><button id="division">/</button></td>
    </tr>
    <tr>
        <td><button id="cuatro">4</button></td>
        <td><button id="cinco">5</button></td>
        <td><button id="seis">6</button></td>
        <td><button id="multiplicacion">*</button></td>
    </tr>
    <tr>
        <td><button id="uno">1</button></td>
        <td><button id="dos">2</button></td>
        <td><button id="tres">3</button></td>
        <td><button id="resta">-</button></td>
    </tr>
    <tr>
        <td><button id="igual">=</button></td>
        <td><button id="reset">C</button></td>
        <td><button id="cero">0</button></td>
        <td><button id="suma">+</button></td>
    </tr>
</table>
Los botones se generan por medio de los <td> y le damos nombres a estos datos.
asigna el evento onload a lo que se devuelve desde la función init cuando se ejecuta. initse ejecutará inmediatamente (como ahora , no cuando la ventana se haya cargado) y se asignará el resultado window.onload. Es poco probable que alguna vez quieras esto, pero lo siguiente sería válido. Como se observa también tenesmos datos JS y CSS.  Cada botón esta colocado un nombre dentro de un id.




•	CSS
ody { background-color: #0D465C  ; }

.calculadora{
    display:block;
    margin:0 auto;
    padding:20px;
    background-color:#2980b9;
    width:450px;
    height:500px;
    border-radius: 25px;
}
.calculadora td button{
    display:block;
    width:90px;
    height: 70px;
    font-size: 25px;
    background-color: antiquewhite;
}

#resultado{
    display:block;
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
    width:400px;
    height: 100px;
    line-height: 100px;
    background-color:#fff;
    border-radius: 25px;
}
con los CSS estos datos como calculadora generamos un margen, su tamaño y las dimensiones donde se grafiquen
Con la calculadora tb button modificaremos a tamaño que todos los botones tengan la misma dimensión y esten dentro de .calculadora
#resultado veremos como la calculadora obtiene un campo donde se ubicarn las respuestas de los resultado de las operaciones matemáticas.






•	JS
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}
Como se observa generamos variables de tipo var operación; el cual nos ayudara a resolver nuestros ejercicios matemáticos.
En la variables ya inicializadas y los var inicializamos los datos y de acuerdo a los números y ubicaciones se ubicara en cada botón.
//Eventos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
 Com el metodo Onclick que es el método para llamar a cada botón se ira colocando los números y los valores que tomara estos.
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}
•	Limpiar: se limpiará los datos para poder ingresar nuevos valores.
•	Resetear: iniciara los datos.
•	Dentro del Switch por medio del parseFloat podemos sumar, restar,…gracias a que los valores se guardan en la variable operación.
 


