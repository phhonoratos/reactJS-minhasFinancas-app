import React from 'react'

import Card from '../../components/Card'
import FormGroup from '../../components/FormGroup'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    render() {
        return(
            <div className="container">
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputNome">
                                    <input type="text"
                                           className="form-control"
                                           id="inputNome"
                                           name="nome"
                                           onChange={e => this.setState({nome: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email"
                                           className="form-control"
                                           id="inputEmail"
                                           name="email"
                                           onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input type="password"
                                           className="form-control"
                                           id="inputSenha"
                                           name="senha"
                                           onChange={e => this.setState({senha: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Repita a senha: *" htmlFor="inputRepitaSenha">
                                    <input type="password"
                                           className="form-control"
                                           id="inputRepitaSenha"
                                           name="senha"
                                           onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                                </FormGroup>

                                <button type="button" className="btn btn-success" onClick={this.cadastrar}>Cadastrar</button>
                                <button type="button" className="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default CadastroUsuario;