const contraseña_visible = document.getElementById('contraseña_visible')
const contraseña_input = document.getElementById('contraseña_input') // Corregir la tipografía
const usuario = document.getElementById('usuario')
const boton_log_in = document.getElementById('boton_log_in')


contraseña_visible.addEventListener('click', () => {
    const actualtype = contraseña_input.getAttribute('type')
    if (actualtype == 'password'){
        contraseña_input.setAttribute('type', 'text')
    } else {
        contraseña_input.setAttribute('type', 'password')
    }
})


const usuarios = [
    {
        usuario:'Karla',
        contraseña: 'Karla'
    },

    {
        usuario:'Maria',
        contraseña: 'Maria'
    }
]

boton_log_in.addEventListener('click', (event) => {
    event.preventDefault()

    const usuarioValue = usuario.value
    const contraseñaValue = contraseña_input.value

    const user = usuarios.find((user) => user.usuario == usuarioValue && user.contraseña == contraseñaValue)

    if (user) {
        alert ('registrado')
        localStorage.setItem('isLogged', true)
        window.location.href = '../pagina1.html'
    }
    else {
        usuario.value = ''
        contraseña_input.value = ''
        alert('credencial incorrecta')
    }
})


if (localStorage.getItem('isLogged')){
    const form = document.getElementById('form')
    form.innerHTML = `<button id="cierra_sesion">Logout<button>`


    const boton_logout = document.getElementById('cierra_sesion')
        boton_logout.addEventListener('click', () => {
            window.location.href = '../pagina.html'
        })
    
}
