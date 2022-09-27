/*
------ MODIFICAR ATRIBUTOS Y CLASES --------

Atributos:
element.getAttribute('atribute')
element.setAttribute('atribute', value)


Clases:
element.classList.add('class','class',...)
element.classList.remove('class','class',...)
element.classList.toggle('class',[force])
element.classList.contains('class')
element.classList.replace('oldClass','newClass')

Atributos directos:
id
value

*/


const title = document.getElementById('title')
const name = document.getElementById('name')



// console.log(name.getAttribute('type'))
// name.setAttribute('type', 'number')


title.classList.add('main-title', 'other-title')
title.classList.remove('main-title')

if(title.classList.contains('title')) console.log('Title tiene la clase title')
else console.log('Title no tiene la clase title')


title.classList.replace('title','main-title')


console.log(title.id)
console.log(title.innerHTML)



// console.log(title)