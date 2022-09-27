// ------ EVENTOS DE RATON Y TECLADO -----------

const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')

// button.addEventListener('click', ()=>{
//     console.log('CLICKKK')
// })


// button.addEventListener('dblclick',()=>{
//     console.log('DOBLE CLICK')
// })


// CAMBIA DE COLOR CUANDO PASO EL RATON POR ARRIBA
// box.addEventListener('mouseenter',()=>{
//     box.classList.add('green')
// })

// VUELVE A SU COLOR NORMAL
// box.addEventListener('mouseleave',()=>{
//     box.classList.replace('green','red')
// })


// box.addEventListener('mousedown',()=>{
//     console.log('Has pulsado en la caja !!!')
// })

// box.addEventListener('mouseup',()=>{
//     console.log('Soltaste el boton del mouse de la caja')
// })


// box.addEventListener('mousemove',()=>{
//     console.log('Estas moviendo el raton en la cajaa....')
// })


input.addEventListener('keydown',()=>{
    console.log('Has pulsado una teclaaa')
})

input.addEventListener('keyup',()=>{
    console.log('Has soltado una teclaaa')
})

input.addEventListener('keypress',()=>{
    console.log('Estas  pulsando una teclaaa')
})