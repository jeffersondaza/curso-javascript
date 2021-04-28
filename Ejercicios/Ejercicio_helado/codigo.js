"use strict";

const definirCompra = (n)=>{
    let din = prompt(`Dinero de ${n}`);
    if(din>= 0.6 && din <1) return (`${n} compreate un helado de agua`);
    if(din>= 1 && din <1.6) return (`${n} compreate un helado de crema`);
    if(din>= 1.6 && din <1.7) return (`${n} compreate un helado de heladix`);
    if(din>= 1.7 && din <1.8) return (`${n} compreate un helado de helavich`);
    if(din>= 1.8 && din <2.9) return (`${n} compreate un helado de helardo`);
    if(din>= 2.9) return (`${n} compreate un helado de confites o pote de 1/4kg`);
    else return(`${n}, no te alcanza para una verga. Sorry`)
};

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));
