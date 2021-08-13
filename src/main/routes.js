import React from 'react'
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import CadastroUsuario from '../views/CadastroUsuario'
import ConsultaLancamentos from '../views/ConsultaLancamentos/index'
import CadastrarLancamentos from '../views/CadastroLancamentos'
import Home from '../views/Home'
import Login from '../views/Login'
import AuthService from '../app/service/authService'

function RotaAutenticada({component: Component, ...props}) {
    return(
        <Route {...props} render={(componentProps) => {
            if(AuthService.isUsuarioAutenticado()) {
                return(
                    <Component {...componentProps} />
                )
            } else {
                return(
                    <Redirect to={{pathname: '/login', state: {from: componentProps.location}}} />
                )
            }
        }} />
    )
}

function Routes() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastrarUsuario" component={CadastroUsuario} />
                <RotaAutenticada path="/home" component={Home} />
                <RotaAutenticada path="/consultaLancamento" component={ConsultaLancamentos} />
                <RotaAutenticada path="/cadastrarLancamento/:id?" component={CadastrarLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;