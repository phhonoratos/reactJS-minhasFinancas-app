import React from 'react'
import currencyFormatter from 'currency-formatter'

export default props => {

    const rows = props.lancamentos.map(lancamento => {
        return(
            <tr key={lancamento.id}>
                <td>{lancamento.descricao}</td>
                <td>{currencyFormatter.format(lancamento.valor, {locale: 'pt-BR'})}</td>
                <td>{lancamento.tipo}</td>
                <td>{lancamento.mes}</td>
                <td>{lancamento.status}</td>
                <td>
                    <button className="btn btn-success" 
                            title="Efetivar"
                            type="button"
                            disabled={lancamento.status !== 'PENDENTE'}
                            onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}>
                            <i className="pi pi-check p-mr-2"></i>
                    </button>
                    <button className="btn btn-warning" 
                            title="Cancelar"
                            type="button"
                            disabled={lancamento.status !== 'PENDENTE'}
                            onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}>
                            <i className="pi pi-times p-mr-2"></i>
                    </button>
                    <button type="button" 
                            title="Editar"
                            className="btn btn-primary"
                            onClick={e => props.editAction(lancamento.id)}>
                            <i className="pi pi-pencil p-mr-2"></i>
                    </button>
                    <button type="button" 
                            title="Excluir"
                            className="btn btn-danger" 
                            onClick={e => props.deleteAction(lancamento)}>
                            <i className="pi pi-trash p-mr-2"></i>
                    </button>
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Descri????o</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">M??s</th>
                    <th scope="col">Situa????o</th>
                    <th scope="col">A????es</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}