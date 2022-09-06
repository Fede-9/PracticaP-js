// Local storage: guarda cadenas de texto, clave --> valor
// set: guarda
// get: obtener


// guardamos
const nombre = 'Federico'
localStorage.setItem('nombreUsuario', nombre)

// obtenemos
const nombreLocalstorage = localStorage.getItem('nombreUsuario')
console.log(nombreLocalstorage)


// eliminar

// localStorage.removeItem('nombreUsuario')