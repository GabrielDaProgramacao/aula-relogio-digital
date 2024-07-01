const horas = document.getElementById('horas') /* variavel de contagem vinculada a hora */
const minutos = document.getElementById('minutos') /* variavel de contagem vinculada ao minuto */
const segundos = document.getElementById('segundos') /* variavel de contagem vinculada aos segundos */ 

const relogio = setInterval(function time(){

 let dateToday = new Date();
 let hr = dateToday.getHours();
 let min = dateToday.getMinutes();
 let sec = dateToday.getSeconds();

 if(hr < 10) hr = '0' + hr; /* caso a hora seja menor que 10 vai adicionar um zero na frente da hr*/
 if(hr < 10) min = '0' + hr; /* caso a hora seja menor que 10 vai adicionar um zero na frente da hr*/
 if(hr < 10) sec = '0' + hr; /* caso a hora seja menor que 10 vai adicionar um zero na frente da hr*/

 horas.textContent = hr; /* substituir o conteudo de "horas por "hr" */
 minutos.textContent = min; /* substituir o conteudo de "minutos por "min" */
 segundos.textContent = sec; /* substituir o conteudo de "segundos por "sec" */

})
