console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);
const idadeComprador = 15;
const estaAcompanhada = false;
const passagemComprada = true;


console.log("Destinos possíveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true) {

    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); //removendo item
} else{
    
    console.log("Compra negada devido o comprador ser menor de idade e não estar acompanhado");
}

console.log(listaDeDestinos);

console.log("Embarqure: \n\n");
if(idadeComprador >= 18 && passagemComprada == true) {
    console.log("Boa Viajem!!");

}else{
    console.log("Você não pode embarcar");
}

// if(idadeComprador >= 18){

//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// }else{

//     //A pessoa é menor de idade//
//     if(estaAcompanhada){

//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1,1); //removendo item
//     }else{

//         console.log("Comprador é menor de idade e não posso vender");
//     }
    
// }


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

 