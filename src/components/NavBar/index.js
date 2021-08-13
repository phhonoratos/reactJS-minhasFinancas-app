import Item from "./Item";
import AuthService from "../../app/service/authService";

const deslogar = () => {
    AuthService.removerUsuarioAutenticado()
}

const usuarioAutenticado = () => {
    return AuthService.isUsuarioAutenticado()
}

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/#/home" className="navbar-brand">Minhas Finanças</a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <Item render={usuarioAutenticado()} href="#/home" label="Home" />
                        <Item render={usuarioAutenticado()} href="#/cadastrarUsuario" label="Usuários" />
                        <Item render={usuarioAutenticado()} href="#/consultaLancamento" label="Lançamentos" />
                        <Item render={usuarioAutenticado()} onClick={deslogar} href="#/login" label="Sair" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;