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
factorial(8);


//12)Programa una función que determine si un número es primo(aquel que solo es divisible por si
//mismoy1)ono,pe.miFuncion(7)devolverá true

const numeroPrimo=(numero=undefined)=>{
 if(numero === undefined)return console.wam("No ingresaste un número");
 if(typeof numero!=="number")return console.error(`el valor' ${numero},'ingresado No es un numero`);
 if(numero ===0)return console.error("El número no puede ser0");
 if(numero ===1)return console.error("El número no puede ser1");
 if(Math.sign(numero)===-1)return console.error('el numero no puede ser negativo')
 let divisible =false
 for(let i=2;i<numero;i++){

    if((numero %i)===0){
        divisible = true
        break;
                       
    }  
    
                   
                                  
 }
 return(divisible)
 ?console.log(`el numero' ${numero},'si es primo`)
 :console.log(`el numero' ${numero},'no es primo`)
}
numeroPrimo()
numeroPrimo("320");
numeroPrimo(true);
numeroPrimo(0);
numeroPrimo(1)
numeroPrimo(-13);
numeroPrimo(13)
numeroPrimo(200);





//13)Programa una función que determine si un número es paroimpar,pe.miFuncion(29)devolverá
//Impar"
const numeroParlmpar=(numero=undefined)=>{
if(numero === undefined)return console.warn("No ingresaste un número");
if(typeof numero!=="number")return console.error(`el valor' ${numero},'ingresado No es un numero`);
return((numero%2)===0)
?console.info(`el numero' ${numero},'es par`)
:console.info(`el numero' ${numero},'es imapar`)
}
numeroParimpar()
numeroParimpar(23)
numeroParimpar(-398)
numeroParimpar(19);




//14)Programa una función para convertir grados CelsiusaFahrenheityviceversa,pe.mifuncion(0,
    //"C)devolverá 32°F"/
    const convertirGrados=(grados=undefined,unidad=undefined)=>{
    
        if(grados === undefined)return console.warn("No ingresaste gradosaconvertir");
    
        if(typeof grados!=="number")return console.error(`el valor' ${grados},'No es un numero`);
    
        if(unidad === undefined)return console.warn("No ingresaste el tipo de gradoaconvertir");
    
        if(typeof unidad!=="string")return console.error(`el valor' ${unidad},'ingresado No es una cadena de texto`);
    
        if(unidad.length!==1/(CIF)/test(unidad))return console.warn("Valor de unidad no reconocido");
    }
convertirGrados()
convertirGrados("2");
convertirGrados(2);
convertirGrados(2,true)
convertirGrados(2,"Hola");
convertirGrados(2,"E")
convertirGrados(2,"C")




//15) Programa una función para convertir números de base binaria a decimal 
//y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal=(numero=undefined,base=undefined)=>{
    if(numero === undefined)return console.warn("No ingresaste el númeroaconvertir")
   if(typeof numero!=="number")return console.error(`el valor' ${numero},'ingresado No es un numero`);
if(base === undefined)return console.warn("No ingresaste la base a convertir");
if(typeof base!=="number")return console.error(`el valor' ${base},'ingresado No es un numero`);

if(base ===2){
 return console.info($(numero), " base", $(base)=$(parseInt(numero,base), "base 10"))

}
 else if(base === 10){
 return console.info($(numero), "base", $(base)=$((numero.toString(2))), "base2")
}
}
convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100,"2");
convertirBinarioDecimal(100,2);
convertirBinarioDecimal(1110010,2)
convertirBinarioDecimal(4,10)




/*16) Programa una función que devuelva el monto final 
después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const aplicarDescuento=(monto=undefined,descuento=0)=>{
if(monto === undefined)return console.warn("No ingresaste el monto");

if(typeof monto!=="number")return console.error(`el valor' ${monto},'ingresado No es un numero`);
if(monto ===0)return console.error("El monto no puede ser 0");
if(Math.sign(monto)===-1)return console.error("El monto no puede ser negativo");
if(typeof descuento!=="number")return console.error(`el valor' ${descuento},'ingresado No es un numero`);
if(Math.sign(descuento)===-1)return console.error("El descuento no puede ser negativo");
return console.info($(monto)-$(descuento),"% =",$(monto-((monto*descuento)/100)))
}
aplicarDescuento()
aplicarDescuentor("200")
aplicarDescuento(0);
aplicarDescuento(-1000);
aplicarDescuento(1000,"20");
aplicarDescuento(1000,-20);
aplicarDescuento(1000);
aplicarDescuento(1000,25);


/*17) Programa una función que dada una fecha válida determine cuantos años han 
pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const calcularAnios=(fecha=undefined)=>{
    if(fecha === undefined)return console.warn("No ingresaste la fecha");
    if(fecha instanceof Date)return console.error("El valor que ingresaste no es una fecha válida")



let hoyMenosFecha=new Date().getTime()-fecha.getTime(),
 aniosEnMS=1000*60*60*24*365
 aniosHumanos=Math.floor(hoyMenosFecha/aniosEnMS);

 return(Math.sign(aniosHumanos)=== -1)
 ?console.info("Faltan",$(Math.abs(aniosHumanos)),"años para el", $(fecha.getFullYear()))
:(Math.sign(aniosHumanos)===1)
  ?console.info("Han pasado",$(aniosHumanos),"años desde", $(fecha.getFullYear())
}
calcularAnios()
calcularAnios(false)
calcularAnios(new Date())
calcularAnios(new Date(1984,4, 23))
calcularAnios(new Date(1884,4, 23))