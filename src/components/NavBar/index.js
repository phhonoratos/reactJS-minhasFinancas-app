import Item from "./Item";
import { AuthConsumer } from "../../main/provedorAutenticacao";

function NavBar(props) {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/#/home" className="navbar-brand">Minhas Finanças</a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <Item render={props.isUsuarioAutenticado} href="#/home" label="Home" />
                        <Item render={props.isUsuarioAutenticado} href="#/cadastrarUsuario" label="Usuários" />
                        <Item render={props.isUsuarioAutenticado} href="#/consultaLancamento" label="Lançamentos" />
                        <Item render={props.isUsuarioAutenticado} onClick={props.encerrarSessao} href="#/login" label="Sair" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default () => (
    <AuthConsumer>
        {(context) => (<NavBar isUsuarioAutenticado={context.isAutenticado} encerrarSessao={context.encerrarSessao} />)}
    </AuthConsumer>
)