console.log("\n Trabalhando com loops");
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);
const idadeComprador = 15;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "Rio de Janeiro"


console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log("Destiono existe: ", destinoExiste);
console.log("Pode comprar: ", podeComprar);

if(podeComprar && destinoExiste){
    console.log("Boa Viajem!");
}else{
    console.log("Voce não atende todos os requisitos de compra");
}

for(let cont = 0; cont <3; cont++){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        
    }
}
 