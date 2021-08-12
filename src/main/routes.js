import React from 'react'
import { Route, Switch, HashRouter} from 'react-router-dom'
import CadastroUsuario from '../views/CadastroUsuario'
import ConsultaLancamentos from '../views/ConsultaLancamentos/index'
import Home from '../views/Home'
import Login from '../views/Login'

function Routes() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastrarUsuario" component={CadastroUsuario} />
                <Route path="/consultaLancamento" component={ConsultaLancamentos} />
            </Switch>
        </HashRouter>
    )
}

export default Routes;