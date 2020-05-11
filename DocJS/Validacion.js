/*function validarCamposObligatorios()
{
    var bandera = true

    for(var i = 0; i < document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value == '' && elemento.type == 'text'){
            if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br>La cedula esta vacia'
            }
            elemento.style.border = '1px red solid'
            elemento.className = 'error'
            bandera = false
        }
    }

    if(!bandera){
        alert('Error: revisar los comentarios')
    }
    return bandera
}*/

//Validar que sea letra

function validarLetras(string) {
    var out = '';
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    return out;
}

//Validar que sea numero
function validar_numero(string) {
    var out = '';
    var filtro = '1234567890';

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);

    return out;
}

//Validar Cedula
function ValidarCedula() {
    var x = document.getElementById("cedula").value
    var total = 0;
    var longitud = x.length;
    var longcheck = longitud - 1;
    if (longitud == 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = x.charAt(i) * 2;
                if (aux >= 10) aux -= 9;
                total += aux;
            } else {
                total += parseInt(x.charAt(i));
            }
        }
        total = total % 10 != 0 ? 10 - total % 10 : 0;

        if (x.charAt(longitud - 1) == total) {

            return false;
        } else {
            document.getElementById('cedula').classList.add('error');
            document.getElementById('c').classList.add('p');
            alert("Su cedula no corresponde a Ecuador")
            return true;
        }
    } else {
        return false;
    }
}

function Escribe(elemento) {
    elemento.classList.remove('error');
    document.getElementById('p').classList.remove('p');
}


function duos_valores(string) {
    var out = '';
    var array = string.split(' ');
    if (array.length == 1) {
        out += array[0];
    } else {
        out += array[0] + ' ' + array[1];
    }
    return out;
}



function valida_Correo() {
    var array = document.getElementById('mail').value.split('@');

    if (array[0].length < 3) {
            document.getElementById('mail').classList.add('error');
        alert('Correo no válido')
        return true;
    } else {
        if (!(array[1] == 'ups.edu.ec') && !(array[1] == 'est.ups.edu.ec')) {
            document.getElementById('mail').classList.add('error');
            document.getElementById('e').classList.add('p');
            alert('Exte' +
                'nsión invalida use ups.edu.ec o est.ups.edu.ec')
            return true;
        } else {
            return false;
        }

    }
}
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

function validar_Password(x){
    var regexPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    if(regexPassword.test(x)){
        return true;
    }else
        alert("No cumple con los requisitos para una contraseña");
    return false
}

function validarFecha() {
    var array = document.getElementById('fec').value.split('/');
    var fecha = new Date(array[2], array[1], array[0]);
    if (array.length == 3 && fecha
        && array[0] == fecha.getDate()
        && array[1] == fecha.getMonth()
        && array[2] == fecha.getFullYear()) {
        return false;
    } else {
        document.getElementById('fec').classList.add('error');
        document.getElementById('f').classList.add('p');
        alert('Fecha mal ingresada, usar formato dd/mm/yyyy');
        return true;
    }
}

function isValidDate(x){
    var x = document.getElementById('fec').value;

    if (x.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)){
        return false;
    }else{
        document.getElementById('fec').classList.add('error');
        alert('Fecha mal ingresada, usar formato dd/mm/yyyy');
        return true;
    }
}

function validar_clave(contrasenna)
{
    if(contrasenna.length >= 8)
    {
        var mayuscula = false;
        var minuscula = false;
        var numero = false;
        var caracter_raro = false;

        for(var i = 0;i<contrasenna.length;i++)
        {
            if(contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90)
            {
                mayuscula = true;
            }
            else if(contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122)
            {
                minuscula = true;
            }
            else if(contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57)
            {
                numero = true;
            }
            else
            {
                caracter_raro = true;
            }
        }
        if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
        {
            return true;
        }
    }
    return false;
}

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

        alert('Llenar todos los campos');
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


function isDate(ExpiryDate) {
    var objDate,  // date object initialized from the ExpiryDate string
        mSeconds, // ExpiryDate in milliseconds
        day,      // day
        month,    // month
        year;     // year
    // date length should be 10 characters (no more no less)
    if (ExpiryDate.length !== 10) {
        return false;
    }
    // third and sixth character should be '/'
    if (ExpiryDate.substring(2, 3) !== '/' || ExpiryDate.substring(5, 6) !== '/') {
        return false;
    }
    // extract month, day and year from the ExpiryDate (expected format is mm/dd/yyyy)
    // subtraction will cast variables to integer implicitly (needed
    // for !== comparing)
    month = ExpiryDate.substring(0, 2) - 1; // because months in JS start from 0
    day = ExpiryDate.substring(3, 5) - 0;
    year = ExpiryDate.substring(6, 10) - 0;
    // test year range
    if (year < 1000 || year > 3000) {
        return false;
    }
    // convert ExpiryDate to milliseconds
    mSeconds = (new Date(year, month, day)).getTime();
    // initialize Date() object from calculated milliseconds
    objDate = new Date();
    objDate.setTime(mSeconds);
    // compare input date and parts from Date() object
    // if difference exists then date isn't valid
    if (objDate.getFullYear() !== year ||
        objDate.getMonth() !== month ||
        objDate.getDate() !== day) {
        return false;
    }
    // otherwise return true
    return true;
}

function checkDate(){
    // define date string to test
    var ExpiryDate = document.getElementById('ExpiryDate').value;
    // check date and print message
    if (isDate(ExpiryDate)) {
        alert('OK');
    }
    else {
        alert('Invalid date format!');
    }

}
$(function() {

    $('#test').click(function () {
        checkDate();
    });
})