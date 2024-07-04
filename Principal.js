/*/
* Una discoteca desea llevar el control de sus ganancias. Para esto conoce de cada rumbero: su cédula, nombre, edad y sexo. 
* Cada entrada tiene un costo dependiendo del sexo, si es chico vale 25$ y si es chica cuesta en 25% del valor del chico. 
* Por Noche, la discoteca desea saber: a) Pago que realiza cada rumbero b) Total Ganado, c) Porcentaje de rumberas mayores a 21 años, 
* d) Cual sexo asistió más a la discoteca.
* La discoteca suministra la siguiente información demostrativa, para 4 rumberos:
* (cedula, nombre, edad, sexo) 
* (134, Luis, 23, M)
* (154, Ana, 22, F) 
* (324, José, 18, M) 
* (286, Carmen, 19, F), 
* según lo cual la salida requerida presenta el siguiente formato:
* Pago que realiza Luis 25$
* Pago que realiza Ana 6.25$
* Pago que realiza José 25$
* Pago que realiza Carmen 6.25$
* Total Ganado 62$
* Porcentaje de rumberas mayores a 21 años: 50% 
/*/

import Cl_rumbero from "./Cl_rumbero.js";
import Cl_discoteca from "./Cl_discoteca.js";

let rumbero1=new Cl_rumbero(134,"Luis",23,"m");
let rumbero2=new Cl_rumbero(154,"Ana",22,"f");
let rumbero3=new Cl_rumbero(324,"Jose",18,"m");
let rumbero4=new Cl_rumbero(286,"Carmen",19,"f");

let discoteca = new Cl_discoteca();
discoteca.procesarRumbero(rumbero1);
discoteca.procesarRumbero(rumbero2);
discoteca.procesarRumbero(rumbero3);
discoteca.procesarRumbero(rumbero4);

let salida = document.getElementById("Salida");

salida.innerHTML+="Luis pago:" +rumbero1.pagoPorCadaRumbero()+"$ <br>";
salida.innerHTML+="Ana pago:" +rumbero2.pagoPorCadaRumbero()+"$ <br>";
salida.innerHTML+="Jose pago:" +rumbero3.pagoPorCadaRumbero()+"$ <br>";
salida.innerHTML+="Carmen pago:" +rumbero4.pagoPorCadaRumbero()+"$ <br><br>";
salida.innerHTML+="Total de Ganancia:" +discoteca.totalGanado()+"$ <br>";
salida.innerHTML+="Porcentaje de rumberas mayores de 21 años:" +discoteca.porcRumberaMayor21()+"% <br>";
salida.innerHTML+="El sexo que asistio mas a la discoteca fue:" +discoteca.sexoAsisMasDiscoteca();


