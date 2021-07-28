export class Conta{
    //Classe abstrata não pode ser chamada diretamente, somente pode ser herdada
    constructor (saldoinicial, cliente, agencia){        
        if(this.constructor ==  Conta){
            //Criando um erro caso A classe conta for chamada diretamente
            throw new Error("Voce não deveria instaciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
        }

        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;


       
    }

    //acessores do tipo get e set//
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo
    }

    //metodo abstrato
    sacar(valor){
        throw new Error("O metodo Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado =  taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

    }


    depositar(valor){
        if(valor <= 0){
            return;
        }

        this._saldo += valor
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado)
    }
}