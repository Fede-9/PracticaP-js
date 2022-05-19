/* for(inicialización; condición; actualización) {
    ...
    }
    La "inicialización" es la zona en la que se establece los valores iniciales de las variables que
    controlan la repetición y es ejecutada una única vez.
    La "condición" es el único elemento que decide si continua o se detiene la repetición. (se
    calcula en cada iteración)
    La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables
    que controlan la repetición. (Se ejecuta en cada iteración) */

var mensaje = " Hola, estoy dentro de un bucle";

for(var i = 0; i < 5; i++) {
    console.log(mensaje);
}	

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(let i=0; i<dias.length; i++) {
    console.log(dias[i]);
}