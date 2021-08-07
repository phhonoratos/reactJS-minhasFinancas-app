import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../../components/Card'
import FormGroup from '../../components/FormGroup'

import UsuarioService from '../../app/service/usuarioService'
import LocalStorageService from '../../app/service/localStorageService'

import { mensagemErro } from '../../components/Toastr/toastr.js'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            LocalStorageService.addItem('_usuario_logado', response.data)
            this.props.history.push('/home')
        }).catch(erro => {
            mensagemErro(erro.response.data)
        })
    }

    prepararCadatro = () => {
        this.props.history.push('/cadastrarUsuario')
    }

    render() {
        return(
                <div className="row">
                    <div className="col-md-6">
                        <div className="bd-docs-section">
                            <Card title="Login">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="bs-component">
                                            <fieldset>
                                                <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                    <input type="email"
                                                        value={this.state.email} 
                                                        onChange={e => this.setState({email: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputEmail1" 
                                                        aria-describedby="emailHelp" 
                                                        placeholder="Digite o Email" />
                                                </FormGroup>
                                                <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                    <input type="password" 
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control" 
                                                        id="exampleInputPassword1" 
                                                        placeholder="Digite o Email" />
                                                </FormGroup>
                                                <button className="btn btn-success" onClick={this.entrar}>Entrar</button>
                                                <button className="btn btn-danger" onClick={this.prepararCadatro}>Cadastrar</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
        );        
    }
}

export default withRouter(Login);