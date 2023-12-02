document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenemos los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Validamos las credenciales (reemplaza con tus propias validaciones)
    if (username === 'persona' && password === '12345') {
        if (role === 'user') {
            // Redireccionamos al usuario común a iFly.html
            window.location.href = '/iFly.html';
        } else if (role === 'admin') {
            // Redireccionamos al administrador a iLearn.html
            window.location.href = '/iLearn.html';
        }
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
