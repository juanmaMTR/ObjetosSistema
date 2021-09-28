'use strict'

console.log('Cargado JS');

let fecha1=new Date()
console.log(fecha1);

let fecha2=new Date(2021,8,29)
console.log(fecha2);
const meses= ['enero', 'febrero','marzo','abril','mayo','junio','julio']
const semana=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado',]
let hoy=`Hoy es ${semana[fecha1.getDay()]} del mes ${fecha1.getMonth()+1}`
console.log(hoy);

let ms1=fecha1.getTime()
console.log('Desde los Beatles han pasado  '+ms1+ ' ms');

let dentro5Dias=ms1 +5*24*60*60*1000
//5 dias, 24h al dia, 60 min cada hora, 60seg en cada min, 1000 miliseg en cada seg

dentro5Dias=new Date(dentro5Dias)
console.log(dentro5Dias);

let nombre1='Ana'
let nombre2='Ángel'
let nombre3='Abel'
if(nombre2>nombre1){
  console.log(nombre2+' es mayor que '+nombre1);
}else {
  console.log('No');
}

let texto='En un lugar de la Mancha, de cuyo nombre no quiero...'
console.log(texto.charAt(6));
console.log(texto.indexOf('l'));
//Busco la posición de la primera 'e' después de la coma
console.log(texto.indexOf('e',texto.indexOf(',')));
console.log(texto.includes('la Mancha'));
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.substr(4,2));

//Objeto Math
console.log(Math.floor(Math.PI)); //Trunca, osea quita los decimales
//random, maximo, minimo,round,seno,coseno,sqrt(raiz),

//Number
let entrada=5
console.log(Number.isNaN(entrada));//No funciona como queremos

let entrada2='42Zapato'
console.log(isNaN(entrada2));//Asi si funciona

console.log(Number.parseInt(entrada2));
entrada='3.1415PiñaColada'
console.log(Number.parseFloat(entrada));
//number.positiveinfinity y number.negativeinfinity hay que recordarlo

//ESTRUCTURA AVANZADA DE DATOS

//Listas->elementos ordenados y con repeticiones
//Conjuntos->sin orden y sin repeticiones
//Mapas->conjunto de parejas clave-valor

//Conjunto - Set
let amigos=new Set()
amigos.add('Ana')
amigos.add('Juan')
amigos.add('Conde Draco')

console.log(amigos);
console.log(amigos.size);

for(let i=0;i<amigos.length;i++){
  console.log(amigos[i]);
}
for(let amigo of amigos){
  console.log(amigo);
}


//Mapas
let coches=new Map()
coches.set('BA-9282-ZT','Porsche')
coches.set('TO-6686-JO','Seat Ibiza')
coches.set('ABC-DEF','Tesla Turbo Volador')


//Ver el objeto simbol
