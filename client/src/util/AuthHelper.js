
class AuthHelper {

    constructor () {
        throw new TypeError("AuthHelper é uma classe estática e não deve ser instanciada")
    }

    static isUserLogged(){
        return !(localStorage.getItem('auth-token') === null)
    }

    static handleLinkAuth(){
        console.log("Handling link auth")
        console.log(!this.isUserLogged())
        if(!this.isUserLogged() ){
            window.alert("Você precisa estar logado para executar essa ação")
            document.location.href = "/"
        }
    }

    static setToken(token, userId) {

        localStorage.setItem('userId', userId)
        localStorage.setItem('auth-token',token);
    }

    static removeToken() {

        localStorage.removeItem('userId')
        localStorage.removeItem('auth-token')
    }

    static getToken() {


    }

    static getUserId() {

        return localStorage.getItem('userId')
    }
}

export default AuthHelper