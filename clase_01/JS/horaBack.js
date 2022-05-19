function showDate(){    
    let time = new Date();
    let hora= time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();

    if  (hora < 10) hora = '0';
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;

    hora = hora + ':' + minutos + ':' + segundos;
    //document.body.innerHTML = "<h1>" + hora + "</h1>";1
    console.log(hora)
}
showDate();
setInterval(showDate, 1000);