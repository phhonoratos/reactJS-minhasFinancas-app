import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '../../components/Card'
import FormGroup from '../../components/FormGroup'
import SelectMenu from '../../components/SelectMenu'
import LancamentoService from '../../app/service/lancamentoService'
import {mensagemErro, mensagemSucesso} from '../../components/Toastr/toastr'
import LocalStorageService from '../../app/service/localStorageService'

class CadastroLancamentos extends React.Component {

    state = {
        id: null,
        descricao: '',
        valor: '',
        mes: '',
        ano: '',
        tipo: '',
        status: '',
        usuario: null,
        atualizando: false
    }

    constructor() {
        super();
        this.service = new LancamentoService();
    }

    componentDidMount() {
        const params = this.props.match.params

        if(params.id) {
            this.service.obterPorId(params.id)
                .then(response => {
                    this.setState({...response.data, atualizando: true})
                }).catch(error => {
                    mensagemErro(error.response.data)
                })
        }
    }

    submit = () => {
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')
        const {descricao, valor, mes, ano, tipo} = this.state;
        const lancamento = {descricao, valor, mes, ano, tipo, usuario: usuarioLogado.id}

        try {
            this.service.validar(lancamento)
        } catch (erro) {
            const mensagens = erro.mensagens
            mensagens.forEach(msg => mensagemErro(msg))
            return false;
        }

        this.service.cadastrar(lancamento).then(response => {
            this.props.history.push('/consultaLancamento')
            mensagemSucesso('Lançamento cadastrado com sucesso.')
        }).catch(error => {
            mensagemErro(error.response.data)
        })
    }
    
    atualizar = () => {
        const {descricao, valor, mes, ano, tipo, status, usuario, id} = this.state;
        const lancamento = {descricao, valor, mes, ano, tipo, usuario, status, id}
    
        this.service.atualizar(lancamento).then(response => {
            this.props.history.push('/consultaLancamento')
            mensagemSucesso('Lançamento atualizado com sucesso.')
        }).catch(error => {
            mensagemErro(error.response.data)
        })
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        this.setState({[name] : value})
    }

    render() {
        const tipos = this.service.obterListaTipos();
        const meses = this.service.obterListaMeses();

        return(
            <Card title={this.state.atualizando ? 'Atualização de Laçamento' : 'Cadastro de Lançamento'}>
                <div className="row">
                    <div className="col-md-12">
                        <FormGroup id="inputDescricao" label='Descrição: *'>
                            <input id="inputDescricao" 
                                   type="text" 
                                   className="form-control" 
                                   name="descricao" 
                                   value={this.state.descricao} 
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <FormGroup id="inputAno" label="Ano: *">
                            <input id="inputAno" 
                                   type="text" 
                                   className="form-control"
                                   name="ano" 
                                   value={this.state.ano} 
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup id="inputMes" label="Mês: *">
                            <SelectMenu id="inputMes" 
                                        lista={meses} 
                                        className="form-control" 
                                        name="mes" 
                                        value={this.state.mes} 
                                        onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <FormGroup id="inputValor" label="Valor: *">
                            <input id="inputValor" 
                                   type="text" 
                                   className="form-control" 
                                   name="valor" 
                                   value={this.state.valor} 
                                   onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputTipo" label="Tipo: *">
                            <SelectMenu id="inputTipo" 
                                        lista={tipos} 
                                        className="form-control" 
                                        name="tipo" 
                                        value={this.state.tipo} 
                                        onChange={this.handleChange} />
                        </FormGroup>
                    </div>
                    <div className="col-md-4">
                        <FormGroup id="inputStatus" label="Status: ">
                            <input type="text" 
                                   className="form-control" 
                                   name="Status" 
                                   value={this.state.status} 
                                   disabled />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {this.state.atualizando ? 
                            (
                                <button className="btn btn-primary" onClick={this.atualizar}>Atualizar</button>
                            ) : (
                                <button className="btn btn-success" onClick={this.submit}>Cadastrar</button>
                            )
                        }
                        <button className="btn btn-danger" onClick={e => this.props.history.push('/consultaLancamento')}>Cancelar</button>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroLancamentos)