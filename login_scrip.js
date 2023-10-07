document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene los valores del nombre de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Realiza la lógica de verificación del nombre de usuario y contraseña aquí
    // Por ejemplo, si los datos son válidos, redirige al usuario a otra página
    if (username === 'usuario' && password === 'contraseña') {
        window.location.href = 'otra_pagina.html'; // Cambia 'otra_pagina.html' al nombre de tu página de destino
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
});