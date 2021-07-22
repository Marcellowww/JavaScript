//Importando as classes
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

//declarando variaveis 
const cliente1 = new Cliente("Marcelo", 11122233309);
const cliente2 =  new Cliente("Alice", 88822233309);



const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
conta1.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
conta1.transferir(valor, conta2);


console.log(conta1, conta2);