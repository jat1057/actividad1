let matriz = new Array(3);

for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(3);
}
//document.write("matriz original: <br>");
console.log("matriz original: ");
console.log(matriz)
matriz[0][0]=1;
matriz[0][1]=2;
matriz[0][2]=3;

matriz[1][0]=4;
matriz[1][1]=5;
matriz[1][2]=6;

matriz[2][0]=7;
matriz[2][1]=8;
matriz[2][2]=9;

let i;
for (i = 0; i < matriz.length; i++)
{
    for (let j = 0; j < matriz[i].length; j++)
    {

    //document.write(matriz[i][j] + " ");
    
    }
//document.write("<br>")

}

document.write("<br><br>")

let salida1 = new Array(3);

for (let k = 0; k < salida1.length; k++) {
    salida1[k] = new Array(3);
}
//document.write("salida 1: <br>");
console.log("salida 1: ");
console.log(salida1)
salida1[0][0]=9;
salida1[0][1]=8;
salida1[0][2]=7;

salida1[1][0]=6;
salida1[1][1]=5;
salida1[1][2]=4;

salida1[2][0]=3;
salida1[2][1]=2;
salida1[2][2]=1;

let k;
for (k = 0; k < salida1.length; k++)
{
    for (let l = 0; l < salida1[k].length; l++)
    {

    //document.write(salida1[k][l] + " ");
    
    }
//document.write("<br>")

}

document.write("<br><br>");

let salida2 = new Array(3);

for (let m = 0; m < salida2.length; m++) {
    salida2[m] = new Array(3);
}
//document.write("salida 2: <br>");
console.log("salida 2: ");
console.log(salida2)
salida2[0][0]=1;
salida2[0][1]=4;
salida2[0][2]=7;

salida2[1][0]=2;
salida2[1][1]=5;
salida2[1][2]=8;

salida2[2][0]=3;
salida2[2][1]=6;
salida2[2][2]=9;

let m;
for (m = 0; m < salida2.length; m++)
{
    for (let n = 0; n < salida2[m].length; n++)
    {

    //document.write(salida2[m][n] + " ");
    
    }
document.write("<br>")

}

document.write("<br><br>");

let salida3 = new Array(3);

for (let a = 0; a < salida3.length; a++) {
    salida3[a] = new Array(3);
}
//document.write("salida 3: <br>");
console.log("salida 3: ");
console.log(salida3)
salida3[0][0]=9;
salida3[0][1]=6;
salida3[0][2]=3;

salida3[1][0]=8;
salida3[1][1]=5;
salida3[1][2]=2;

salida3[2][0]=7;
salida3[2][1]=4;
salida3[2][2]=1;

let a;
for (a = 0; a < salida3.length; a++)
{
    for (let b = 0; b < salida3[a].length; b++)
    {

    //document.write(salida2[a][b] + " ");
    
    }
//document.write("<br>")

}