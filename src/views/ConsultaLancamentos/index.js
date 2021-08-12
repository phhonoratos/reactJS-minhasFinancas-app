import React from 'react'
import {withRouter} from 'react-router-dom'
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import SelectMenu from '../../components/SelectMenu';
import TableLancamentos from './components/TableLancamentos';
import LancamentoService from '../../app/service/lancamentoService';
import LocalStorageService from '../../app/service/localStorageService'
import {mensagemErro} from '../../components/Toastr/toastr'

class ConsultaLancamentos extends React.Component {

    state = {
        ano: '',
        mes: '',
        tipo: '',
        descrcai: '',
        lancamentos: []
    }

    constructor() {
        super();
        this.service = new LancamentoService();
    }

    buscar = () => {
        if(!this.state.ano) {
            mensagemErro('O preenchimento do campo ANO é obrigatório')
            return false
        }
        
        const usuario = LocalStorageService.obterItem('_usuario_logado')

        const lancamentoFiltro = {
            ano: this.state.ano,
            mes: this.state.mes,
            descricao: this.state.descricao,
            tipo: this.state.tipo,
            usuario: usuario.id
        }

        this.service.consultar(lancamentoFiltro)
            .then(response => {
                this.setState({lancamentos: response.data})
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        const meses = this.service.obterListaMeses();
        const tipos = this.service.obterListaTipos();

        return(
            <Card title="Consultar Lançamento">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup htmlFor="inputAno" label="Ano: *">
                                <input type="text" 
                                   className="form-control" 
                                   id="inputAno" 
                                   value={this.state.ano}
                                   onChange={e => this.setState({ano: e.target.value})}
                                   placeholder="Digite o Ano" />
                            </FormGroup>
                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <SelectMenu id="inputMes" 
                                            className="form-control" 
                                            value={this.state.mes}
                                            onChange={e => this.setState({mes: e.target.value})}
                                            lista={meses} />
                            </FormGroup>
                            <FormGroup htmlFor="inputDescricao" label="Descrição: *">
                                <input type="text" 
                                   className="form-control" 
                                   id="inputDescricao" 
                                   value={this.state.descricao}
                                   onChange={e => this.setState({descricao: e.target.value})}
                                   placeholder="Digite a Descrição" />
                            </FormGroup>
                            <FormGroup htmlFor="inputTipo" label="Tipo: ">
                                <SelectMenu id="inputTipo" 
                                            className="form-control" 
                                            value={this.state.tipo}
                                            onChange={e => this.setState({tipo: e.target.value})}
                                            lista={tipos} />
                            </FormGroup>

                            <button type="button" className="btn btn-success" onClick={this.buscar}>Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <TableLancamentos lancamentos={this.state.lancamentos} />
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos);