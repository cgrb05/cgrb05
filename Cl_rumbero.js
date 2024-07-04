export default class Cl_rumbero{
    constructor(c,n,e,s){
        this.cedula = c;
        this.nombre = n;
        this.edad = e;
        this.sexo = s;
    }
    set cedula (c){
        this._cedula = c;
    }
    get cedula (){
        return this._cedula;
    }
    set nombre (n){
        this._nombre = n;
    }
    get nombre (){
        return this._nombre;
    }
    set edad (e){
        this._edad = e;
    }
    get edad (){
        return this._edad;
    }
    set sexo (s){
        this._sexo = s;
    }
    get sexo (){
        return this._sexo;
    } 
pagoPorCadaRumbero(){
    if (this.sexo == "m")
        {return 25;}
    else
       {return 6.25;}
}
}

