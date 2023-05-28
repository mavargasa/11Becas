function calcularPrecio() {
    var curso = document.getElementById('curso').value;
    var beca = document.getElementById('beca').value;

    var precioMensual = calcularPrecioMensual(curso, beca);
    var precioTotal = calcularPrecioTotal(curso);
    var precioTotalDescuento = calcularPrecioTotalConDescuento(curso, beca);

    document.getElementById('precio-mensual').textContent = '$' + precioMensual + ' MXN';
    document.getElementById('precio-total-descuento').textContent = '$' + precioTotalDescuento + ' MXN';
    document.getElementById('precio-total').textContent = '$' + precioTotal + ' MXN';

    document.getElementById('resultado').classList.remove('pantallaOcualta');
}

function calcularPrecioMensual(curso, beca) {
    var precioMensual = 0;
    var descuento = 0;

    if (curso === 'course') {
        precioMensual = 4999;
    } else if (curso === 'carrera') {
        precioMensual = 3999;
    } else if (curso === 'master') {
        precioMensual = 2999;
    }

    if (beca === 'facebook') {
        descuento = 0.2;
    } else if (beca === 'google') {
        descuento = 0.15;
    } else if (beca === 'jesua') {
        descuento = 0.5;
    }

    var precioConDescuento = precioMensual * (1 - descuento);
    return precioConDescuento.toFixed(2);
}

function calcularPrecioTotal(curso) {
    var duracion = 0;

    if (curso === 'course') {
        duracion = 2;
    } else if (curso === 'carrera') {
        duracion = 6;
    } else if (curso === 'master') {
        duracion = 12;
    }

    var precioTotal = calcularPrecioMensual(curso, 'sin-beca') * duracion;
    return precioTotal.toFixed(2);
}

function calcularPrecioTotalConDescuento(curso, beca) {
    var duracion = 0;

    if (curso === 'course') {
        duracion = 2;
    } else if (curso === 'carrera') {
        duracion = 6;
    } else if (curso === 'master') {
        duracion = 12;
    }

    var precioTotalConDescuento = calcularPrecioMensual(curso, beca) * duracion;
    return precioTotalConDescuento.toFixed(2);
}
