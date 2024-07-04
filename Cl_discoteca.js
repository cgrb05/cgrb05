export default class Cl_discoteca{
    constructor(){
        this.acPagoRumbero = 0;
        this.contRumberos = 0;
        this.contRumberaMayor21 = 0;
        this.contMasculino = 0;
        this.contFemenino = 0;
    }
    procesarRumbero (r){
        this.acPagoRumbero+=
        r.pagoPorCadaRumbero(); 
    
    {
      this.contRumberos++;
    }
    if(r.edad >= 21, r.sexo =="f"){
    this.contRumberaMayor21++;
}
}
totalGanado(){
    return this.acPagoRumbero;
}
porcRumberaMayor21(){
    return this.contRumberaMayor21/this.contRumberos * 100;
}
sexoAsisMasDiscoteca(){
if (this.contMasculino > this.contFemenino){
    return "Masculino";
}
else 
if (this.contFemenino > this.contMasculino)
    {return "Femenino";}

else 
{return "Iguales tanto de Masculino como Femenino";}
}
}
