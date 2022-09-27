/*

-------- COMO ACCEDER A LOS ELEMENTOS -----------
document.getElementById('id') - Acceder a un elemento a traves de su id.

document.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS.

document.querySelectorAll('selectorCSS') - Accede a todos los elemento que coincida con el selector CSS, devuelve un nodeList.
*/



const title = document.getElementById('title')

title.textContent = 'Dom accediendo a nodos'

const paragraph = document.querySelector('.paragraph')
console.log(paragraph)