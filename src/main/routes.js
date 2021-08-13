import React from 'react'
import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import CadastroUsuario from '../views/CadastroUsuario'
import ConsultaLancamentos from '../views/ConsultaLancamentos/index'
import CadastrarLancamentos from '../views/CadastroLancamentos'
import Home from '../views/Home'
import Login from '../views/Login'
import { AuthConsumer } from './provedorAutenticacao'

function RotaAutenticada({component: Component, isUsuarioAutenticado, ...props}) {
    return(
        <Route {...props} render={(componentProps) => {
            if(isUsuarioAutenticado) {
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

function Routes(props) {
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastrarUsuario" component={CadastroUsuario} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consultaLancamento" component={ConsultaLancamentos} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/cadastrarLancamento/:id?" component={CadastrarLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default () => (
    <AuthConsumer>
        {(context) => (<Routes isUsuarioAutenticado={context.isAutenticado} />)}
    </AuthConsumer>
)