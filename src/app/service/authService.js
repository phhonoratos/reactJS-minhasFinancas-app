import React from 'react'
import LocalStorageService from './localStorageService'

class AuthService {

    static isUsuarioAutenticado() {
        const usuario = LocalStorageService.obterItem('_usuario_logado')
        return usuario && usuario.id
    }

    static removerUsuarioAutenticado() {
        LocalStorageService.removerItem('_usuario_logado')
    }

}

export default AuthService