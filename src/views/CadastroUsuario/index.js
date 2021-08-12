import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../../components/Card'
import FormGroup from '../../components/FormGroup'

import UsuarioService from '../../app/service/usuarioService'
import {mensagemErro, mensagemSucesso} from '../../components/Toastr/toastr'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    constructor() {
        super();
        this.service = new UsuarioService();
    }

    cadastrar = () => {
        const {nome, email, senha, senhaRepeticao} = this.state
        const usuario = {nome, email, senha, senhaRepeticao}

        try {
            this.service.validar(usuario)
        } catch (erro) {
            const mensagens = erro.mensagens
            mensagens.forEach(msg => mensagemErro(msg))
            return false;
        }

        this.service.cadastrar(usuario)
            .then(response => {
                mensagemSucesso('Usuário cadastrado com sucesso. Faça login para acessar o sistema.')
                this.props.history.push('/login')
            }).catch(error => {
                mensagemErro(error.response.data)
            })
    }

    cancelarCadatro = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    className="form-control"
                                    id="inputNome"
                                    name="nome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    className="form-control"
                                    id="inputSenha"
                                    name="senha"
                                    onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Repita a senha: *" htmlFor="inputRepitaSenha">
                                <input type="password"
                                    className="form-control"
                                    id="inputRepitaSenha"
                                    name="senha"
                                    onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
                            </FormGroup>

                            <button type="button" 
                                    className="btn btn-success" 
                                    onClick={this.cadastrar}>
                                    <i className="pi pi-save"></i> Cadastrar
                            </button>
                            <button type="button" 
                                    className="btn btn-danger" 
                                    onClick={this.cancelarCadatro}>
                                    <i className="pi pi-times"></i> Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuario);