//Ser autententicavel significa ter o metodo autenticar

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.eAutenticavel(autenticavel)){
             return autenticavel.autenticar(senha);
        }
        return false;
    }

    static eAutenticavel(autententicavel){
        return "autenticar" in autententicavel && autententicavel.autenticar instanceof Function;
    }
}