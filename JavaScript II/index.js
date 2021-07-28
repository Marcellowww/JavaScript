//Importando as classes
import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente =  new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123")
const cliente =  new Cliente("Lais", 7879809765675, "456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 123);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456);

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);















// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";


// //declarando variaveis 
// const cliente1 = new Cliente("Marcelo", 11122233309);

// const contaCorrenteMarcelo = new ContaCorrente(1001, cliente1);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1)

// contaSalario.depositar(100)
// contaSalario.sacar(10)
// console.log(cliente1)