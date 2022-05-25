//*9)Programa una función que obtenga un numero aleatorio entre 501y600

const aleatorio=()=> console.info(Math.round((Math.random()*100)+500));
aleatorio;


//10)Programa una función que reciba un númeroyevalúe si es capicúaono(que se lee igual en un
//sentido que en otro),pe.miFuncion(2002)devolverá true/
const capicua=(numero=0)=>{
    if(!numero)return console.warn("No ingresaste un número");
    if(typeof numero!=="number")return console.error(`El valor" '${numero}'NO es un numero`)

    numero=numero.toString()

    let alReves=numero.split("").reverse().join("");
     return(numero === alReves)
     ?console.info(`si es copicua,Numero original'${numero},'Numero alreves'${alreves}`) 
     :console.info(`no es copicua,Numero original'${numero},'Numero alreves'${alreves}`) 
    }
    capicua()
    capicua("19")
    capicua({});
    capicua(2000);
    capicua(2002)
    capicua(18.99)
    capicua(212.212)



    //11)Programa una función que calcule el factorial de un número(El factorial de un entero
//positivon,se define como el producto de todos los números enteros positivos desde1hastan),pe.
//miFuncion(5)devolverá 120

const factorial=(numero=undefined)=>{
 if(numero === undefined)return console.warn("No ingresaste un número");
 if(typeof numero!=="number")return console.error(`el valor' ${numero},'ingresado No es un numero`);
 if(numero ===0)return console.error("El número no puede ser0");
 if(Math.sign(numero)===-1)return console.error("El número no puede ser negativo");
 let factorial=1;
 for(leti=numero;i>1;i--){
  factorial*=i
 }

return console.info(`el factorial de'${numero},'es'${factorial}`) ;
}
factorial()
factorial(5)
factorial((1,2,3))
factorial(0);
factorial(-5);
factorial(5)
factorial(8)