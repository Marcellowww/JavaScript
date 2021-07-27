//Importando as classes
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


//declarando variaveis 
const cliente1 = new Cliente("Marcelo", 11122233309);

const conta1 = new ContaCorrente(1001, cliente1);
conta1.depositar(500);
conta1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(conta1);