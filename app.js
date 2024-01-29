var cuentas = [
    { nombre: "Melissa", saldo: 920, password: "Melissa123" },
    { nombre: "Gibran", saldo: 463, password: "Gibran456" },
    { nombre: "Esteban", saldo: 186, password: "Esteban789" }
];

var cuentaSeleccionada = null;

function seleccionarCuenta() {
    var indice = document.getElementById("listaCuentas").value;
    cuentaSeleccionada = cuentas[indice];
    document.getElementById("operaciones").style.display = 'block';
}

function verificarPassword() {
    var passwordIngresado = document.getElementById("password").value;
    if (passwordIngresado === cuentaSeleccionada.password) {
        document.getElementById("acciones").style.display = 'block';
        document.getElementById("mensaje").innerHTML = '';
    } else {
        document.getElementById("mensaje").innerHTML = 'Password incorrecto. Intente nuevamente.';
    }
}

function consultarSaldo() {
    document.getElementById("mensaje").innerHTML = 'Saldo actual: $' + cuentaSeleccionada.saldo;
}

function ingresarMonto() {
    var monto = prompt("Ingrese el monto a depositar:");
    monto = parseInt(monto);
    if (!isNaN(monto) && monto > 0) {
        if (cuentaSeleccionada.saldo + monto <= 990) {
            cuentaSeleccionada.saldo += monto;
            document.getElementById("mensaje").innerHTML = 'Monto ingresado: $' + monto + '. Saldo actual: $' + cuentaSeleccionada.saldo;
        } else {
            document.getElementById("mensaje").innerHTML = 'No se puede tener un saldo mayor a $990.';
        }
    } else {
        document.getElementById("mensaje").innerHTML = 'Monto inválido.';
    }
}

function retirarMonto() {
    var monto = prompt("Ingrese el monto a retirar:");
    monto = parseInt(monto);
    if (!isNaN(monto) && monto > 0) {
        if (cuentaSeleccionada.saldo - monto >= 10) {
            cuentaSeleccionada.saldo -= monto;
            document.getElementById("mensaje").innerHTML = 'Monto retirado: $' + monto + '. Saldo actual: $' + cuentaSeleccionada.saldo;
        } else {
            document.getElementById("mensaje").innerHTML = 'El saldo no puede ser menor a $10.';
        }
    } else {
        document.getElementById("mensaje").innerHTML = 'Monto inválido.';
    }
}

function seleccionarCuenta() {
    var indice = document.getElementById("listaCuentas").value;
    cuentaSeleccionada = cuentas[indice];
    
    // Restablece la visualización de los elementos y limpia los mensajes y campos
    document.getElementById("operaciones").style.display = 'none'; // Oculta el área de operaciones
    document.getElementById("acciones").style.display = 'none'; // Oculta los botones de acciones
    document.getElementById("password").value = ''; // Limpia el campo de contraseña
    document.getElementById("mensaje").innerHTML = ''; // Limpia los mensajes
    
    // Ahora muestra el área de operaciones para la nueva cuenta seleccionada
    document.getElementById("operaciones").style.display = 'block';
}

